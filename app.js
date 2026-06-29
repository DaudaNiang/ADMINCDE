const SUPABASE_URL = 'https://sovelwnthvqtgtvxfpsj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvdmVsd250aHZxdGd0dnhmcHNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4NTc5MDIsImV4cCI6MjA5NzQzMzkwMn0.GEvY81Wn_CAROwXDFc_GIdWxBxMhORach9bZJcsPpDk';

const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function requireAdmin() {
  const { data: { session } } = await sb.auth.getSession();
  if (!session) { window.location.href = 'index.html'; return null; }
  const { data: profile } = await sb.from('profiles').select('role, nom, prenom').eq('id', session.user.id).single();
  if (!profile || profile.role !== 'admin') {
    await sb.auth.signOut();
    window.location.href = 'index.html';
    return null;
  }
  return { session, profile };
}

async function logout() {
  await sb.auth.signOut();
  window.location.href = 'index.html';
}

function sidebar(active) {
  const links = [
    { id: 'dashboard',    label: 'Dashboard',    icon: '◉', href: 'dashboard.html' },
    { id: 'certificats',  label: 'Certificats',  icon: '📄', href: 'certificats.html' },
    { id: 'utilisateurs', label: 'Utilisateurs', icon: '👥', href: 'utilisateurs.html' },
    { id: 'annonces',     label: 'Annonces',     icon: '📋', href: 'annonces.html' },
  ];
  return `
    <nav class="sidebar">
      <div class="sidebar-brand">
        <div class="sidebar-brand-icon">🛡️</div>
        <div>
          <div class="sidebar-title">Administration</div>
          <div class="sidebar-sub">Coin des Étudiants</div>
        </div>
      </div>
      <ul class="sidebar-nav">
        ${links.map(l => `
          <li>
            <a href="${l.href}" class="sidebar-link ${active === l.id ? 'active' : ''}">
              <span class="nav-icon">${l.icon}</span>${l.label}
            </a>
          </li>`).join('')}
      </ul>
      <button class="sidebar-logout" onclick="logout()">⬈ Se déconnecter</button>
    </nav>`;
}

function toast(msg, type = 'success') {
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2800);
}

function fmtDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

function initials(nom, prenom) {
  return ((prenom?.[0] ?? '') + (nom?.[0] ?? '')).toUpperCase();
}
