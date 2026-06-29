/* ──────────────────────────────────────────────
   CDE Admin Panel — Shared Components & Utilities
─────────────────────────────────────────────── */

/* ══════════════════════════════════════════════
   SVG ICONS (inline)
══════════════════════════════════════════════ */
const ICONS = {
  dashboard:      `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="1" width="6" height="6" rx="1.5"/><rect x="9" y="1" width="6" height="6" rx="1.5"/><rect x="1" y="9" width="6" height="6" rx="1.5"/><rect x="9" y="9" width="6" height="6" rx="1.5"/></svg>`,
  users:          `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="6" cy="5" r="3"/><path d="M1 14c0-3.3 2.2-5 5-5s5 1.7 5 5"/><circle cx="12.5" cy="5.5" r="2"/><path d="M15 14c0-2.2-1-3.5-2.5-3.5"/></svg>`,
  documents:      `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 1H4a1.5 1.5 0 00-1.5 1.5v11A1.5 1.5 0 004 15h8a1.5 1.5 0 001.5-1.5V6.5L9 1z"/><path d="M9 1v5.5H14.5"/></svg>`,
  annonces:       `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V4z"/><path d="M5 8h6M5 5h6M5 11h4"/></svg>`,
  support:        `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"/><circle cx="8" cy="11" r=".5" fill="currentColor"/><path d="M8 4.5a2 2 0 010 4"/></svg>`,
  analytics:      `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 13l4-4 3 2 4-5 2 2"/><path d="M14 4.5l1 1-1 1"/></svg>`,
  moderation:     `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1L1.5 4v5c0 3.3 2.8 6.1 6.5 6.9 3.7-.8 6.5-3.6 6.5-6.9V4L8 1z"/><path d="M5 8l2 2 4-4"/></svg>`,
  infrastructure: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="1" width="14" height="5" rx="1.5"/><rect x="1" y="10" width="14" height="5" rx="1.5"/><circle cx="13" cy="3.5" r="1" fill="currentColor"/><circle cx="13" cy="12.5" r="1" fill="currentColor"/></svg>`,
  notifications:  `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1a5 5 0 00-5 5v3l-1.5 2h13L13 9V6a5 5 0 00-5-5z"/><path d="M6.5 13.5a1.5 1.5 0 003 0"/></svg>`,
  parametres:     `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="2.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.5 1.5M11.5 11.5L13 13M13 3l-1.5 1.5M4.5 11.5L3 13"/></svg>`,
  administration: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 13a6 6 0 0112 0"/><circle cx="8" cy="6" r="3"/><path d="M5 8l-1 2M11 8l1 2"/></svg>`,
  chevron_left:   `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 4L6 8l4 4"/></svg>`,
  search:         `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg>`,
  bell:           `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1a5 5 0 00-5 5v3l-1.5 2h13L13 9V6a5 5 0 00-5-5z"/><path d="M6.5 13.5a1.5 1.5 0 003 0"/></svg>`,
  question:       `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><path d="M8 11.5v.5"/><path d="M6.5 6a1.5 1.5 0 011.5-1.5A1.5 1.5 0 019.5 6c0 1-1.5 2-1.5 3"/></svg>`,
  external:       `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M7 3H3a1 1 0 00-1 1v9a1 1 0 001 1h9a1 1 0 001-1V9M9 1h6v6M15 1L8 8"/></svg>`,
  plus:           `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3v10M3 8h10"/></svg>`,
  download:       `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 2v8M5 7l3 3 3-3M2 12h12"/></svg>`,
  filter:         `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 3h14M4 8h8M7 13h2"/></svg>`,
  refresh:        `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2.5 8A5.5 5.5 0 0113 5M13.5 8a5.5 5.5 0 01-10.5 3"/><path d="M12 3l1 2-2 1M4 12l-1 2 2 1"/></svg>`,
  eye:            `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 8C2.7 5 5.1 3.5 8 3.5S13.3 5 15 8c-1.7 3-4.1 4.5-7 4.5S2.7 11 1 8z"/><circle cx="8" cy="8" r="2"/></svg>`,
  check:          `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l3.5 3.5L13 4"/></svg>`,
  cross:          `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4l8 8M12 4l-8 8"/></svg>`,
  ban:            `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><path d="M3.5 3.5l9 9"/></svg>`,
  send:           `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14 2L2 7l5 2 2 5 5-12z"/><path d="M7 9l4-4"/></svg>`,
  more:           `<svg viewBox="0 0 16 16" fill="currentColor"><circle cx="4" cy="8" r="1.3"/><circle cx="8" cy="8" r="1.3"/><circle cx="12" cy="8" r="1.3"/></svg>`,
  sort_asc:       `<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 8V2M2 5l3-3 3 3"/></svg>`,
  sort_desc:      `<svg viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M5 2v6M2 5l3 3 3-3"/></svg>`,
  chart_bar:      `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="9" width="3" height="6"/><rect x="6" y="5" width="3" height="10"/><rect x="11" y="2" width="3" height="13"/></svg>`,
  globe:          `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6.5"/><path d="M8 1.5C6 4 5 6 5 8s1 4 3 6.5M8 1.5C10 4 11 6 11 8s-1 4-3 6.5M1.5 8h13"/></svg>`,
  tag:            `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 9l6 6 8-8V1H9L1 9z"/><circle cx="12" cy="4" r="1" fill="currentColor"/></svg>`,
  mail:           `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="3.5" width="14" height="10" rx="1.5"/><path d="M1 4.5L8 9.5l7-5"/></svg>`,
  phone:          `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 1h3l1.5 4-2 1.5C6.5 8.5 7.5 9.5 10 10.5l1.5-2L15 10v3a1 1 0 01-1 1C6 14 2 10 1 3.5A1 1 0 013 3V1z"/></svg>`,
  logout:         `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2H2.5A1.5 1.5 0 001 3.5v9A1.5 1.5 0 002.5 14H6M10.5 4.5L14 8l-3.5 3.5M6 8h8"/></svg>`,
  edit:           `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M11.5 2.5l2 2-9 9H2.5v-2.5l9-9z"/></svg>`,
  trash:          `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4h12M5 4V2.5h6V4M6 7v5M10 7v5M3 4l1 10h8l1-10"/></svg>`,
  copy:           `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="5" y="5" width="9" height="9" rx="1.5"/><path d="M5 11H2.5A1.5 1.5 0 011 9.5V2.5A1.5 1.5 0 012.5 1h7A1.5 1.5 0 0111 2.5V5"/></svg>`,
  lock:           `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2.5" y="7" width="11" height="8" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2"/></svg>`,
  star:           `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 1l1.8 5.4H15l-4.6 3.4 1.8 5.4L8 12l-4.2 3.2 1.8-5.4L1 6.4h5.2z"/></svg>`,
  ai:             `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="3"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6L13 13M13 3l-1.4 1.4M4.4 11.6L3 13"/></svg>`,
};

/* ══════════════════════════════════════════════
   SUPABASE INIT
══════════════════════════════════════════════ */
const sb = window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_SERVICE_KEY);

/* ══════════════════════════════════════════════
   AUTH
══════════════════════════════════════════════ */
async function requireAdmin() {
  return { id: 'temp', nom: 'Admin', prenom: 'CDE', email: 'admin@coindesetudiants.com', access_token: '' };
}

/* ══════════════════════════════════════════════
   SIDEBAR
══════════════════════════════════════════════ */
const NAV_SECTIONS = [
  {
    label: 'Principal',
    items: [
      { id: 'dashboard',      label: 'Tableau de bord', icon: 'dashboard',  href: 'dashboard.html' },
      { id: 'utilisateurs',   label: 'Utilisateurs',    icon: 'users',      href: 'utilisateurs.html', badge: null },
      { id: 'documents',      label: 'Documents KYC',   icon: 'documents',  href: 'documents.html',    badge: 'docs_pending', badgeColor: 'orange' },
      { id: 'annonces',       label: 'Annonces',        icon: 'annonces',   href: 'annonces.html' },
      { id: 'support',        label: 'Support',         icon: 'support',    href: 'support.html',      badge: 'tickets_open' },
    ],
  },
  {
    label: 'Données & Modération',
    items: [
      { id: 'analytics',      label: 'Analytics',       icon: 'analytics',       href: 'analytics.html' },
      { id: 'moderation',     label: 'Modération',      icon: 'moderation',      href: 'moderation.html' },
    ],
  },
  {
    label: 'Système',
    items: [
      { id: 'infrastructure', label: 'Infrastructure',  icon: 'infrastructure',  href: 'infrastructure.html' },
      { id: 'notifications',  label: 'Notifications',   icon: 'notifications',   href: 'notifications.html' },
      { id: 'parametres',     label: 'Paramètres',      icon: 'parametres',      href: 'parametres.html' },
      { id: 'administration', label: 'Administration',  icon: 'administration',  href: 'administration.html' },
    ],
  },
];

function buildSidebar(activeId) {
  const kpis = window.MOCK ? window.MOCK.KPIS : {};
  const sidebarCollapsed = localStorage.getItem('cde_sidebar') === 'collapsed';

  const navHTML = NAV_SECTIONS.map(sec => {
    const items = sec.items.map(item => {
      const active = item.id === activeId;
      const badgeCount = item.badge && kpis[item.badge] > 0 ? kpis[item.badge] : null;
      const badgeColor = item.badgeColor || '';
      return `<a class="nav-item${active ? ' active' : ''}" href="${item.href}" data-tooltip="${item.label}">
        <span class="nav-icon">${ICONS[item.icon] || ''}</span>
        <span class="nav-label">${item.label}</span>
        ${badgeCount ? `<span class="nav-badge ${badgeColor}">${badgeCount}</span>` : ''}
      </a>`;
    }).join('');

    return `<div class="nav-section">
      <div class="nav-section-label">${sec.label}</div>
      ${items}
    </div>`;
  }).join('<hr class="nav-sep">');

  return `<aside class="sidebar${sidebarCollapsed ? ' collapsed' : ''}" id="sidebar">
    <div class="sidebar-logo">
      <div class="sidebar-logo-mark">CDE</div>
      <div class="sidebar-logo-text">
        <div class="sidebar-logo-title">Coin des Étudiants</div>
        <div class="sidebar-logo-sub">Back-office admin</div>
      </div>
      <button class="sidebar-toggle" onclick="toggleSidebar()" title="Réduire">${ICONS.chevron_left}</button>
    </div>
    <nav class="sidebar-nav">${navHTML}</nav>
    <div class="sidebar-profile" onclick="location.href='administration.html'">
      <div class="avatar avatar-sm" style="background:#1E3A5F;color:#7FB3E8;font-size:11px">CA</div>
      <div class="sidebar-profile-info">
        <div class="sidebar-profile-name">CDE Admin</div>
        <div class="sidebar-profile-role">Super administrateur</div>
      </div>
    </div>
  </aside>`;
}

function buildHeader(title, sub) {
  return `<header class="header">
    <div class="header-search">
      <span class="header-search-icon">${ICONS.search}</span>
      <input class="header-search-input" type="search" placeholder="Rechercher…" />
      <span class="header-search-kbd">⌘K</span>
    </div>
    <div class="header-status">
      <span class="status-dot"></span>
      <span>Tous systèmes OK</span>
    </div>
    <button class="header-btn" title="Notifications">
      ${ICONS.bell}
      <span class="header-btn-count">${window.MOCK ? window.MOCK.KPIS.docs_pending : 0}</span>
    </button>
    <div class="header-user">
      <div class="header-user-info">
        <div class="header-user-name">CDE Admin</div>
        <div class="header-user-role">Super admin</div>
      </div>
      <div class="avatar avatar-sm" style="background:#1E3A5F;color:#7FB3E8;font-size:11px">CA</div>
    </div>
  </header>`;
}

function toggleSidebar() {
  const s = document.getElementById('sidebar');
  s.classList.toggle('collapsed');
  localStorage.setItem('cde_sidebar', s.classList.contains('collapsed') ? 'collapsed' : 'expanded');
}

async function initPage(pageId) {
  const auth = await requireAdmin();

  const sidebarEl = document.getElementById('sidebar-placeholder');
  if (sidebarEl) sidebarEl.innerHTML = buildSidebar(pageId);

  const headerEl = document.getElementById('header-placeholder');
  if (headerEl) headerEl.innerHTML = buildHeader();

  return auth;
}

/* ══════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════ */
function toast(msg, type = 'success', duration = 4000) {
  let root = document.getElementById('toast-root');
  if (!root) {
    root = document.createElement('div');
    root.id = 'toast-root';
    document.body.appendChild(root);
  }
  const icons = { success: '✓', error: '✕', warning: '⚠', info: 'ℹ' };
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<span class="toast-icon">${icons[type] || '•'}</span><span class="toast-text">${msg}</span><button class="toast-close-btn" onclick="this.closest('.toast').remove()">✕</button>`;
  root.appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transform = 'translateX(16px)'; setTimeout(() => el.remove(), 300); }, duration);
}

/* ══════════════════════════════════════════════
   MODAL
══════════════════════════════════════════════ */
function openModal(id)  { const el = document.getElementById(id); if(el) { el.classList.remove('hidden'); el.style.display = 'flex'; } }
function closeModal(id) { const el = document.getElementById(id); if(el) { el.classList.add('hidden'); el.style.display = ''; } }

/* ══════════════════════════════════════════════
   DRAWER
══════════════════════════════════════════════ */
function openDrawer(id) {
  document.getElementById(id + '-overlay')?.classList.add('open');
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDrawer(id) {
  document.getElementById(id + '-overlay')?.classList.remove('open');
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════
   TABS
══════════════════════════════════════════════ */
function switchTab(tabBarId, contentPrefix, tabId, btn) {
  const bar = document.getElementById(tabBarId);
  if (bar) bar.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('[id^="' + contentPrefix + '"]').forEach(c => c.classList.remove('active'));
  const target = document.getElementById(contentPrefix + tabId);
  if (target) target.classList.add('active');
}

/* ══════════════════════════════════════════════
   CONFIRM DIALOG
══════════════════════════════════════════════ */
function showConfirm(message, onConfirm, opts = {}) {
  const { title = 'Confirmation', label = 'Confirmer', danger = false } = opts;
  let modal = document.getElementById('_confirm_modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = '_confirm_modal';
    modal.className = 'modal-backdrop hidden';
    modal.innerHTML = `<div class="modal modal-sm">
      <div class="modal-header">
        <div class="modal-title" id="_cm_title"></div>
        <button class="modal-close" onclick="document.getElementById('_confirm_modal').classList.add('hidden')">${ICONS.cross}</button>
      </div>
      <div class="modal-body"><p id="_cm_msg" style="font-size:13px;color:var(--text-2);line-height:1.6"></p></div>
      <div class="modal-footer">
        <button class="btn btn-ghost" onclick="document.getElementById('_confirm_modal').classList.add('hidden')">Annuler</button>
        <button class="btn" id="_cm_btn"></button>
      </div>
    </div>`;
    document.body.appendChild(modal);
  }
  document.getElementById('_cm_title').textContent = title;
  document.getElementById('_cm_msg').textContent   = message;
  const btn = document.getElementById('_cm_btn');
  btn.textContent = label;
  btn.className   = `btn ${danger ? 'btn-red' : 'btn-primary'}`;
  btn.onclick = () => { modal.classList.add('hidden'); onConfirm(); };
  modal.classList.remove('hidden');
  modal.style.display = 'flex';
}

/* ══════════════════════════════════════════════
   FORMATTERS
══════════════════════════════════════════════ */
function formatDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}
function fmtDate(d) {
  if (!d) return '—';
  return new Date(d).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
}
function fmtDateTime(d) {
  if (!d) return '—';
  return new Date(d).toLocaleString('fr-FR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' });
}
function fmtTimeAgo(d) {
  if (!d) return '—';
  const diff = (Date.now() - new Date(d)) / 1000;
  if (diff < 60)    return 'à l\'instant';
  if (diff < 3600)  return 'il y a ' + Math.floor(diff / 60) + ' min';
  if (diff < 86400) return 'il y a ' + Math.floor(diff / 3600) + 'h';
  return fmtDate(d);
}
function initials(nom, prenom) {
  return ((prenom || '').charAt(0) + (nom || '').charAt(0)).toUpperCase() || '?';
}
function num(n) {
  return Number(n).toLocaleString('fr-FR');
}

/* ══════════════════════════════════════════════
   BADGES
══════════════════════════════════════════════ */
function statusBadge(s) {
  const MAP = {
    actif:       ['green',  'Actif'],
    suspendu:    ['orange', 'Suspendu'],
    signale:     ['red',    'Signalé'],
    en_attente:  ['orange', 'En attente'],
    valide:      ['green',  'Validé'],
    refuse:      ['red',    'Refusé'],
    ouvert:      ['blue',   'Ouvert'],
    en_cours:    ['violet', 'En cours'],
    resolu:      ['green',  'Résolu'],
    programme:   ['cyan',   'Programmé'],
    termine:     ['gray',   'Terminé'],
    ok:          ['green',  'En ligne'],
    warn:        ['orange', 'Dégradé'],
    error:       ['red',    'Hors ligne'],
    super_admin: ['dark',   'Super Admin'],
    moderateur:  ['blue',   'Modérateur'],
    support:     ['cyan',   'Support'],
  };
  const [color, label] = MAP[s] || ['gray', s || '—'];
  return `<span class="badge badge-${color}">${label}</span>`;
}

function roleBadge(role) {
  const MAP = {
    etudiant:   ['etudiant',    '🎓 Étudiant'],
    bailleur:   ['bailleur',    '🏠 Bailleur'],
    particulier:['particulier', '🧑 Particulier'],
    admin:      ['admin',       '🛡 Admin'],
  };
  const [cls, label] = MAP[role] || ['gray', role || '—'];
  return `<span class="badge badge-${cls}">${label}</span>`;
}

function typeBadge(type) {
  const MAP = {
    cni:                   ['blue',  '🪪 Carte d\'identité'],
    passeport:             ['blue',  '📘 Passeport'],
    carte_etudiant:        ['cyan',  '🎓 Carte étudiant'],
    justificatif_domicile: ['violet','🏠 Just. domicile'],
    email:                 ['blue',  '📧 Email'],
    push:                  ['orange','📱 Push'],
    sms:                   ['green', '💬 SMS'],
  };
  const [cls, label] = MAP[type] || ['gray', type || '—'];
  return `<span class="badge badge-${cls}">${label}</span>`;
}

/* ══════════════════════════════════════════════
   PAGINATION
══════════════════════════════════════════════ */
const PAGE_SIZE = 15;
function paginate(arr, page) {
  const start = (page - 1) * PAGE_SIZE;
  return arr.slice(start, start + PAGE_SIZE);
}
function renderPagination(containerId, total, currentPage, onPage) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const pages = Math.ceil(total / PAGE_SIZE);
  if (pages <= 1) { el.innerHTML = ''; return; }

  let btns = '';
  const prev = currentPage > 1;
  const next = currentPage < pages;
  btns += `<button class="page-btn" ${prev ? `onclick="${onPage || 'gotoPage'}(${currentPage-1})"` : 'disabled'}>‹</button>`;
  for (let i = 1; i <= pages; i++) {
    if (pages > 7 && i > 2 && i < pages - 1 && Math.abs(i - currentPage) > 1) {
      if (i === 3 || i === pages - 2) btns += `<span style="padding:0 4px;color:var(--text-4)">…</span>`;
      continue;
    }
    btns += `<button class="page-btn${i===currentPage?' active':''}" onclick="${onPage || 'gotoPage'}(${i})">${i}</button>`;
  }
  btns += `<button class="page-btn" ${next ? `onclick="${onPage || 'gotoPage'}(${currentPage+1})"` : 'disabled'}>›</button>`;

  const start = (currentPage - 1) * PAGE_SIZE + 1;
  const end   = Math.min(currentPage * PAGE_SIZE, total);
  el.innerHTML = `<div class="pagination">
    <span>${start}–${end} sur ${num(total)}</span>
    <div class="page-btns">${btns}</div>
  </div>`;
}

/* ══════════════════════════════════════════════
   SVG CHARTS
══════════════════════════════════════════════ */
function renderBars(values, labels, opts = {}) {
  const { height = 120, colors, barColor = 'var(--brand)', gap = 4 } = opts;
  if (!values?.length) return '';
  const max = Math.max(...values, 1);
  const w = 100 / values.length;
  const bars = values.map((v, i) => {
    const h = (v / max) * (height - 20);
    const x = i * w;
    const c = Array.isArray(colors) ? colors[i] : barColor;
    const yBar = height - h;
    const label = labels?.[i] || '';
    return `<rect x="${x + gap/2}%" y="${yBar}" width="${w - gap}%" height="${h}" rx="3" fill="${c}" opacity="0.9">
      <title>${label}: ${num(v)}</title>
    </rect>
    <text x="${x + w/2}%" y="${height + 14}" text-anchor="middle" font-size="9" fill="var(--text-4)">${label}</text>`;
  }).join('');
  return `<svg viewBox="0 0 100 ${height + 20}" preserveAspectRatio="none" style="width:100%;height:${height + 20}px">
    ${bars}
  </svg>`;
}

function renderSparkline(values, opts = {}) {
  const { width = 80, height = 32, color = 'var(--brand)', fill = true } = opts;
  if (!values?.length) return '';
  const max = Math.max(...values, 1);
  const min = Math.min(...values, 0);
  const range = max - min || 1;
  const step  = width / (values.length - 1);
  const pts   = values.map((v, i) => [i * step, height - ((v - min) / range) * (height - 2) - 1]);
  const path  = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' ');
  const area  = fill ? `<path d="${path} L${width} ${height} L0 ${height} Z" fill="${color}" fill-opacity="0.12"/>` : '';
  return `<svg viewBox="0 0 ${width} ${height}" style="width:${width}px;height:${height}px;overflow:visible">
    ${area}
    <path d="${path}" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="${pts[pts.length-1][0]}" cy="${pts[pts.length-1][1]}" r="2.5" fill="${color}"/>
  </svg>`;
}

function renderLineChart(series, labels, opts = {}) {
  const { height = 160, colors = ['var(--brand)','var(--green)','var(--orange)'], paddingTop = 10, paddingLeft = 36 } = opts;
  if (!series?.length || !series[0]?.length) return '';
  const allVals = series.flat();
  const max = Math.max(...allVals, 1);
  const len  = series[0].length;
  const W    = 100;

  const lineColor = (i) => colors[i % colors.length];
  const py = (v) => paddingTop + ((1 - v / max) * (height - paddingTop));
  const px = (i) => paddingLeft + (i / (len - 1)) * (W - paddingLeft);

  const paths = series.map((data, si) => {
    const pts = data.map((v, i) => [px(i), py(v)]);
    const d   = pts.map((p, i) => (i === 0 ? 'M' : 'L') + p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
    const area = `${d} L${px(len-1).toFixed(1)},${height} L${px(0).toFixed(1)},${height} Z`;
    return `
      <path d="${area}" fill="${lineColor(si)}" fill-opacity="0.07"/>
      <path d="${d}" fill="none" stroke="${lineColor(si)}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
    `;
  }).join('');

  const gridLines = [0, 0.25, 0.5, 0.75, 1].map(p => {
    const y = py(p * max);
    return `<line x1="${paddingLeft}" y1="${y.toFixed(1)}" x2="${W}" y2="${y.toFixed(1)}" stroke="var(--border)" stroke-width="0.5"/>
      <text x="${paddingLeft - 2}" y="${(y + 3).toFixed(1)}" text-anchor="end" font-size="7" fill="var(--text-4)">${num(Math.round(p * max))}</text>`;
  }).join('');

  const xlabels = labels.map((l, i) =>
    `<text x="${px(i).toFixed(1)}" y="${height + 13}" text-anchor="middle" font-size="8" fill="var(--text-4)">${l}</text>`
  ).join('');

  return `<svg viewBox="0 0 ${W} ${height + 18}" style="width:100%;overflow:visible">
    ${gridLines}${paths}${xlabels}
  </svg>`;
}

function renderDonut(segments, opts = {}) {
  const { size = 100, strokeWidth = 14 } = opts;
  const r = (size - strokeWidth) / 2;
  const cx = size / 2, cy = size / 2;
  const circumference = 2 * Math.PI * r;
  const total = segments.reduce((s, seg) => s + seg.value, 0) || 1;

  let offset = 0;
  const arcs = segments.map(seg => {
    const pct = seg.value / total;
    const dash = pct * circumference;
    const gap  = circumference - dash;
    const arc  = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${seg.color}" stroke-width="${strokeWidth}"
      stroke-dasharray="${dash.toFixed(2)} ${gap.toFixed(2)}"
      stroke-dashoffset="${(-offset * circumference).toFixed(2)}"
      stroke-linecap="round"
      transform="rotate(-90 ${cx} ${cy})" style="transition:stroke-dasharray 0.5s"/>`;
    offset += pct;
    return arc;
  }).join('');

  return `<svg viewBox="0 0 ${size} ${size}" style="width:${size}px;height:${size}px">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--border)" stroke-width="${strokeWidth}"/>
    ${arcs}
  </svg>`;
}

/* ══════════════════════════════════════════════
   AVATAR HTML
══════════════════════════════════════════════ */
function avatarHTML(prenom, nom, size = 'sm', style = '') {
  const colors = [
    ['#EBF2FA','#1E5AA8'], ['#DCFCE7','#16A34A'], ['#F5F3FF','#7C3AED'],
    ['#FEF2F2','#DC2626'], ['#FFFBEB','#92400E'], ['#ECFEFF','#0E7490'],
  ];
  const idx  = ((prenom || '') + (nom || '')).charCodeAt(0) % colors.length;
  const [bg, color] = colors[idx];
  const init = initials(nom, prenom);
  return `<div class="avatar avatar-${size}" style="background:${bg};color:${color};${style}">${init}</div>`;
}

/* ══════════════════════════════════════════════
   TABLE HELPERS
══════════════════════════════════════════════ */
function sortBy(arr, key, asc = true) {
  return [...arr].sort((a, b) => {
    const va = a[key] ?? '';
    const vb = b[key] ?? '';
    if (va < vb) return asc ? -1 : 1;
    if (va > vb) return asc ? 1 : -1;
    return 0;
  });
}

function exportCSV(data, filename) {
  if (!data.length) { toast('Aucune donnée à exporter', 'warning'); return; }
  const keys = Object.keys(data[0]);
  const rows = [keys.join(','), ...data.map(row => keys.map(k => JSON.stringify(row[k] ?? '')).join(','))];
  const blob = new Blob([rows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a'); a.href = url; a.download = filename;
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Export CSV téléchargé ✓');
}

/* ══════════════════════════════════════════════
   SPINNER / LOADER
══════════════════════════════════════════════ */
function showSpinner() {
  let sp = document.getElementById('_global_spinner');
  if (!sp) {
    sp = document.createElement('div');
    sp.id = '_global_spinner';
    sp.style.cssText = 'position:fixed;inset:0;background:rgba(15,23,42,0.2);z-index:9000;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(2px)';
    sp.innerHTML = `<div style="background:var(--surface);border-radius:12px;padding:20px 28px;display:flex;align-items:center;gap:12px;box-shadow:var(--shadow-xl)">
      <svg width="20" height="20" viewBox="0 0 20 20"><circle cx="10" cy="10" r="8" stroke="var(--border)" stroke-width="2" fill="none"/><path d="M10 2a8 8 0 018 8" stroke="var(--brand)" stroke-width="2" fill="none" stroke-linecap="round" class="spin"/></svg>
      <span style="font-size:13px;font-weight:500;color:var(--text-2)">Traitement…</span>
    </div>`;
    document.body.appendChild(sp);
  }
  sp.style.display = 'flex';
}
function hideSpinner() {
  const sp = document.getElementById('_global_spinner');
  if (sp) sp.style.display = 'none';
}

/* ══════════════════════════════════════════════
   SKELETON TEMPLATES
══════════════════════════════════════════════ */
function skeletonCard() {
  return `<div class="card"><div class="card-body"><div class="skeleton sk-title mb-12" style="width:60%"></div><div class="skeleton sk-line mb-8" style="width:90%"></div><div class="skeleton sk-line" style="width:70%"></div></div></div>`;
}
function skeletonTable(rows = 5, cols = 5) {
  const tds = Array(cols).fill(`<td><div class="skeleton sk-line" style="width:${Math.round(60+Math.random()*30)}%"></div></td>`).join('');
  const trs = Array(rows).fill(`<tr>${tds}</tr>`).join('');
  return `<table class="data-table"><tbody>${trs}</tbody></table>`;
}

/* ══════════════════════════════════════════════
   GLOBAL CAT / ROLE MAPS (legacy compat)
══════════════════════════════════════════════ */
const CAT_ICON  = { logement:'🏠', emploi:'💼', services:'🔧', dons:'🎁', bons_plans:'🏷️' };
const ROLE_COLOR = { etudiant:'#1E5AA8', bailleur:'#1A7B23', particulier:'#7C3AED', admin:'#C0392B' };
const ROLE_BG    = { etudiant:'#EBF2FA', bailleur:'#DCFCE7', particulier:'#F5F3FF', admin:'#FEF2F2' };
const ROLE_LABEL = { etudiant:'Étudiant', bailleur:'Bailleur', particulier:'Particulier', admin:'Admin' };
