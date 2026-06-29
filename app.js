// Credentials injected via inline <script> before this file loads
const sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_SERVICE_KEY);

// ── Toast ──────────────────────────────────────────────────
let _tc = null;
function toast(msg, type = 'success') {
  if (!_tc) { _tc = document.createElement('div'); _tc.className = 'toast-container'; document.body.appendChild(_tc); }
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<span>${{success:'✓',error:'✕',info:'ℹ'}[type]??'●'}</span><span>${msg}</span>`;
  _tc.appendChild(el);
  setTimeout(() => { el.style.opacity='0'; el.style.transform='translateX(20px)'; setTimeout(()=>el.remove(),300); }, 3000);
}
function showToast(msg, type = 'success') { toast(msg, type); }

// ── Modal helpers ──────────────────────────────────────────
function openModal(id)  { document.getElementById(id)?.classList.remove('hidden'); }
function closeModal(id) { document.getElementById(id)?.classList.add('hidden'); }

// ── Spinner ────────────────────────────────────────────────
let _spin = null;
function showSpinner() {
  if (!_spin) { _spin = document.createElement('div'); _spin.className='spinner-overlay'; _spin.innerHTML='<div class="spinner"></div>'; document.body.appendChild(_spin); }
  _spin.classList.remove('hidden');
}
function hideSpinner() { _spin?.classList.add('hidden'); }

// ── Confirm ────────────────────────────────────────────────
function showConfirm(msg, onOk, { title='Confirmer', label='Confirmer', danger=false } = {}) {
  document.getElementById('_cm')?.remove();
  const el = document.createElement('div');
  el.id = '_cm';
  el.className = 'modal-backdrop';
  el.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <span class="modal-title">${title}</span>
        <button class="modal-close" onclick="document.getElementById('_cm').remove()">✕</button>
      </div>
      <div class="modal-body" style="text-align:center;padding:24px 22px">
        <div class="confirm-icon" style="background:${danger?'var(--red-light)':'var(--primary-light)'}">
          ${danger?'⚠️':'❓'}
        </div>
        <p style="font-size:14px;color:var(--text);line-height:1.6;margin-top:12px">${msg}</p>
      </div>
      <div class="modal-footer">
        <button class="btn btn-ghost" onclick="document.getElementById('_cm').remove()">Annuler</button>
        <button id="_cm_ok" class="btn ${danger?'btn-red':'btn-primary'}">${label}</button>
      </div>
    </div>`;
  document.body.appendChild(el);
  document.getElementById('_cm_ok').onclick = () => { el.remove(); onOk(); };
}

// ── Helpers ────────────────────────────────────────────────
function fmtDate(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('fr-FR', { day:'numeric', month:'short', year:'numeric' });
}
function fmtDateTime(iso) {
  if (!iso) return '—';
  return new Date(iso).toLocaleString('fr-FR', { day:'numeric', month:'short', year:'numeric', hour:'2-digit', minute:'2-digit' });
}
function formatDate(dateString) {
  if (!dateString) return '—';
  return new Date(dateString).toLocaleDateString('fr-FR', { day:'numeric', month:'long', year:'numeric' });
}
function initials(nom, prenom) {
  return ((prenom?.[0]??'') + (nom?.[0]??'')).toUpperCase() || '?';
}

// ── Role / status ──────────────────────────────────────────
const ROLE_COLOR = { etudiant:'#4CAF50', bailleur:'#1E5AA8', particulier:'#7C3AED', admin:'#EF4444' };
const ROLE_BG    = { etudiant:'#ECFDF5', bailleur:'#EBF2FA', particulier:'#F5F3FF', admin:'#FEF2F2' };
const ROLE_LABEL = { etudiant:'Étudiant', bailleur:'Bailleur', particulier:'Particulier', admin:'Admin' };
const ROLE_ICON  = { etudiant:'🎓', bailleur:'🏠', particulier:'🧑', admin:'🛡️' };
const CAT_ICON   = { logement:'🏠', emploi:'💼', services:'🤝', dons:'🎁', bons_plans:'⭐' };

function roleBadge(role) {
  const c=ROLE_COLOR[role]??'#647488', bg=ROLE_BG[role]??'#F3F4F6';
  return `<span class="badge" style="background:${bg};color:${c};border-radius:20px">${ROLE_ICON[role]??'👤'} ${ROLE_LABEL[role]??role}</span>`;
}

function statusBadge(status) {
  const map = {
    actif:['badge-green','Active'], suspendu:['badge-red','Suspendue'],
    signale:['badge-amber','Signalée'], expire:['badge-gray','Expirée'],
    en_attente:['badge-amber','En attente'], valide:['badge-green','Validé'],
    refuse:['badge-red','Refusé'], ouvert:['badge-blue','Ouvert'],
    en_cours:['badge-amber','En cours'], resolu:['badge-green','Résolu'],
  };
  const [cls,label] = map[status] ?? ['badge-gray', status??'—'];
  return `<span class="badge ${cls}">${label}</span>`;
}

// ── Pagination ─────────────────────────────────────────────
const PAGE_SIZE = 20;

function paginate(arr, page) { return arr.slice((page-1)*PAGE_SIZE, page*PAGE_SIZE); }

function renderPagination(containerId, total, page) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const totalPages = Math.ceil(total / PAGE_SIZE);
  if (totalPages <= 1) { el.innerHTML = ''; return; }
  const start = (page-1)*PAGE_SIZE+1, end = Math.min(page*PAGE_SIZE, total);
  const maxButtons = 7;
  let pages = [];
  for (let i=1;i<=totalPages;i++) pages.push(i);
  if (totalPages > maxButtons) {
    const half = Math.floor(maxButtons/2);
    let from = Math.max(1, page-half), to = Math.min(totalPages, from+maxButtons-1);
    if (to-from < maxButtons-1) from = Math.max(1, to-maxButtons+1);
    pages = [];
    if (from > 1) pages.push(1,'…');
    for (let i=from;i<=to;i++) pages.push(i);
    if (to < totalPages) pages.push('…',totalPages);
  }
  el.innerHTML = `<div class="pagination">
    <span>${start}–${end} sur ${total}</span>
    <div class="page-btns">
      <button class="page-btn" onclick="gotoPage(${page-1})" ${page===1?'disabled':''}>‹</button>
      ${pages.map(p => p==='…' ? `<span style="display:flex;align-items:center;padding:0 4px;color:var(--sub)">…</span>` :
        `<button class="page-btn${p===page?' active':''}" onclick="gotoPage(${p})">${p}</button>`).join('')}
      <button class="page-btn" onclick="gotoPage(${page+1})" ${page===totalPages?'disabled':''}>›</button>
    </div>
  </div>`;
}

// ── Auth ───────────────────────────────────────────────────
async function requireAdmin() {
  return { id: 'temp', nom: 'Admin', prenom: 'CDE', email: 'admin@coindesetudiants.com', access_token: '' };
}

function logout() {
  showConfirm('Voulez-vous vraiment vous déconnecter ?', async () => {
    localStorage.removeItem('cde_admin_session');
    await sb.auth.signOut();
    window.location.href = 'index.html';
  }, { title:'Déconnexion', label:'Se déconnecter' });
}

function injectAdminChip(session) {
  const el = document.getElementById('admin-chip');
  if (!el) return;
  const nom    = session.nom    ?? session.profile?.nom    ?? '';
  const prenom = session.prenom ?? session.profile?.prenom ?? '';
  const name   = `${prenom} ${nom}`.trim() || session.email || 'Admin';
  el.innerHTML = `<div class="admin-avatar">${initials(nom, prenom)}</div><span class="admin-name">${name}</span>`;
}

// ── Sidebar ────────────────────────────────────────────────
async function buildSidebar(active) {
  let docPending=0, ticketOpen=0;
  try {
    const [{ count:d },{ count:t }] = await Promise.all([
      sb.from('certificats').select('*',{count:'exact',head:true}).eq('statut','en_attente'),
      sb.from('support_tickets').select('*',{count:'exact',head:true}).in('statut',['ouvert','en_cours']),
    ]);
    docPending=d??0; ticketOpen=t??0;
  } catch(_) {}

  const links = [
    { id:'dashboard',    label:'Dashboard',    icon:'◉', href:'dashboard.html' },
    { id:'certificats',  label:'Documents',    icon:'📄', href:'certificats.html', badge:docPending||null },
    { id:'utilisateurs', label:'Utilisateurs', icon:'👥', href:'utilisateurs.html' },
    { id:'annonces',     label:'Annonces',     icon:'📋', href:'annonces.html' },
    { id:'support',      label:'Support',      icon:'💬', href:'support.html', badge:ticketOpen||null },
  ];

  const logoUrl='https://sovelwnthvqtgtvxfpsj.supabase.co/storage/v1/object/public/avatars/logo.png';

  return `<aside class="sidebar">
    <div class="sidebar-logo">
      <div class="logo-img-wrap" id="_logo_wrap">
        <img src="${logoUrl}" class="logo-img" alt="CDE"
             onerror="document.getElementById('_logo_wrap').style.display='none';document.getElementById('_logo_fb').style.display='flex'"/>
      </div>
      <div class="logo-fallback" id="_logo_fb">CDE</div>
      <div class="sidebar-brand-text">
        <div class="sidebar-brand-name">Coin des Étudiants</div>
        <div class="sidebar-brand-sub">Administration</div>
      </div>
    </div>
    <ul class="sidebar-nav">
      ${links.map(l=>`<li><a href="${l.href}" class="nav-link${active===l.id?' active':''}">
        <span class="nav-icon">${l.icon}</span>${l.label}
        ${l.badge?`<span class="nav-badge">${l.badge}</span>`:''}
      </a></li>`).join('')}
      <li class="nav-sep"></li>
    </ul>
    <div class="sidebar-bottom">
      <button class="sidebar-logout" onclick="logout()">
        <span class="nav-icon">↩</span>Se déconnecter
      </button>
    </div>
  </aside>`;
}

// ── Init page (common pattern) ─────────────────────────────
async function initPage(pageId) {
  const auth = await requireAdmin();
  if (!auth) return null;
  document.getElementById('sidebar-placeholder').innerHTML = await buildSidebar(pageId);
  injectAdminChip(auth);
  return auth;
}
