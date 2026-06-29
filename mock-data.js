/* ──────────────────────────────────────────────
   CDE Admin Panel — Mock Data
   All data is fictional and for UI preview only.
─────────────────────────────────────────────── */
window.MOCK = (function () {

  /* ── Utilities ── */
  function rnd(a, b)  { return Math.floor(Math.random() * (b - a + 1)) + a; }
  function pick(arr)  { return arr[Math.floor(Math.random() * arr.length)]; }
  function ago(days)  { const d = new Date(); d.setDate(d.getDate() - days); return d.toISOString(); }
  function isoToday() { return new Date().toISOString(); }

  /* ── Reference data ── */
  const FIRSTNAMES = ['Sophie','Lucas','Emma','Hugo','Léa','Tom','Chloé','Antoine','Marie','Paul','Camille','Maxime','Julie','Pierre','Sarah','Théo','Laura','Julien','Alice','Romain','Inès','Mathieu','Clara','Kevin','Manon','Baptiste','Zoé','Nicolas','Lena','Quentin'];
  const LASTNAMES  = ['Martin','Bernard','Dubois','Thomas','Robert','Richard','Petit','Durand','Leroy','Moreau','Simon','Laurent','Lefebvre','Michel','Garcia','David','Bertrand','Roux','Vincent','Fournier','Morel','Girard','André','Lambert','Dupont','Bonnet','François','Martinez','Legrand','Garnier'];
  const CITIES     = ['Paris','Lyon','Marseille','Toulouse','Bordeaux','Nantes','Strasbourg','Montpellier','Lille','Rennes','Nice','Toulon','Dijon','Grenoble','Clermont-Ferrand','Caen','Orléans','Tours','Amiens','Metz'];
  const UNIV       = ['Université Paris-Saclay','Sorbonne Université','Sciences Po Paris','INSA Lyon','Université de Bordeaux','Université Paul Sabatier','Université de Strasbourg','Université de Rennes','CentraleSupélec','HEC Paris','ENPC','Université de Lille','EM Lyon','ESSEC','Université Grenoble Alpes'];
  const PARCOURS   = ['Licence Informatique','Master Droit','Licence Éco-Gestion','BTS Commerce','DUT Génie Civil','Master Data Science','Licence Langues','Master Marketing','Licence Maths','Prépa MPSI','DUT Informatique','Master Finance','Licence Histoire','BTS Communication'];
  const CAT_LABELS = ['Logement','Emploi','Services','Dons','Bons plans'];
  const ROLES      = ['etudiant','etudiant','etudiant','bailleur','particulier'];
  const BADGES     = ['Étudiant vérifié','','','Bailleur premium',''];
  const MOTIFS_KYC = ['Document illisible','Photo floue','Document expiré','Fraude suspectée','Données non conformes'];

  /* ── Users (30) ── */
  const USERS = Array.from({ length: 30 }, (_, i) => {
    const fn   = FIRSTNAMES[i % FIRSTNAMES.length];
    const ln   = LASTNAMES[i % LASTNAMES.length];
    const role = ROLES[i % ROLES.length];
    return {
      id: 'u' + (i + 1),
      prenom: fn,
      nom: ln,
      email: fn.toLowerCase() + '.' + ln.toLowerCase() + '@gmail.com',
      telephone: '+336' + String(rnd(10000000, 99999999)),
      role,
      badge: i < 10 ? BADGES[i % BADGES.length] : '',
      verified: i % 3 !== 2,
      identity_verified: i % 4 !== 0,
      universite: role === 'etudiant' ? pick(UNIV)   : null,
      parcours:   role === 'etudiant' ? pick(PARCOURS): null,
      ville: pick(CITIES),
      banned_until: null,
      created_at: ago(rnd(5, 365)),
      nb_annonces: rnd(0, 12),
      nb_tickets:  rnd(0, 5),
      last_seen:   ago(rnd(0, 30)),
    };
  });

  /* ── Documents KYC (48) ── */
  const DOC_TYPES = ['cni','passeport','carte_etudiant','justificatif_domicile'];
  const DOC_STATUTS = ['en_attente','en_attente','en_attente','valide','valide','refuse'];
  const DOCUMENTS = Array.from({ length: 48 }, (_, i) => {
    const user = USERS[i % USERS.length];
    const type = pick(DOC_TYPES);
    const statut = pick(DOC_STATUTS);
    return {
      id: 'd' + (i + 1),
      user_id: user.id,
      user_prenom: user.prenom,
      user_nom: user.nom,
      user_email: user.email,
      user_ville: user.ville,
      type,
      type_label: { cni: 'Carte d\'identité', passeport: 'Passeport', carte_etudiant: 'Carte étudiant', justificatif_domicile: 'Justificatif domicile' }[type],
      statut,
      motif_refus: statut === 'refuse' ? pick(MOTIFS_KYC) : null,
      ai_score: rnd(62, 99),
      ai_flags: rnd(0, 2) === 0 ? [] : [pick(['Texte partiellement masqué', 'Photo légèrement floue', 'Fond non uniforme'])],
      storage_path: 'kyc/' + user.id + '/' + type + '_' + (i+1) + '.jpg',
      bucket: 'documents',
      created_at: ago(rnd(0, 60)),
    };
  });

  /* ── Announcements (52) ── */
  const CAT_DETAILS = {
    logement:   { icon: '🏠', color: '#1E5AA8', bg: '#EBF2FA', titres: ['Chambre meublée Paris 5e','Studio lumineux proche fac','Colocation 3 chambres','T2 idéal étudiant','Chambre en résidence universitaire','Appartement T3 centre-ville'] },
    emploi:     { icon: '💼', color: '#16A34A', bg: '#DCFCE7', titres: ['Stage développeur web 6 mois','CDI assistant comptable','Alternance marketing digital','CDD animateur périscolaire','Stage data analyst','Emploi étudiant libraire'] },
    services:   { icon: '🔧', color: '#7C3AED', bg: '#F5F3FF', titres: ['Cours particuliers maths','Transport bagages étudiant','Cours de guitare','Aide déménagement','Baby-sitting soir et week-end','Soutien scolaire lycée'] },
    dons:       { icon: '🎁', color: '#DC2626', bg: '#FEF2F2', titres: ['Don livres L1 droit','Bureau en bois à donner','Matériel informatique','Vélo en bon état','Don literie complète','Petit électroménager'] },
    bons_plans: { icon: '🏷️', color: '#92400E', bg: '#FFFBEB', titres: ['Réduction abonnement Spotify','Offre Adobe étudiant -60%','Code promo Uber Eats','Pass Navigo annuel -50%','Mutuelle étudiante avantageuse','Coupon resto U en ligne'] },
  };
  const CATS = Object.keys(CAT_DETAILS);
  const STATUTS_ANN = ['actif','actif','actif','suspendu','signale'];

  const ANNONCES = Array.from({ length: 52 }, (_, i) => {
    const cat  = CATS[i % CATS.length];
    const user = USERS[i % USERS.length];
    const det  = CAT_DETAILS[cat];
    const statut = pick(STATUTS_ANN);
    return {
      id: 'a' + (i + 1),
      titre: det.titres[i % det.titres.length],
      categorie: cat,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Offre intéressante pour les étudiants de la région.',
      prix: cat === 'dons' ? 0 : rnd(50, 1200),
      ville: user.ville,
      statut,
      nb_signalements: statut === 'signale' ? rnd(1, 8) : 0,
      auteur_id: user.id,
      auteur_prenom: user.prenom,
      auteur_nom: user.nom,
      photos: [],
      created_at: ago(rnd(0, 90)),
    };
  });

  /* ── Support tickets (28) ── */
  const SUJETS = [
    'Problème de connexion','Document refusé sans raison','Annonce supprimée injustement',
    'Comment modifier mon profil ?','Erreur lors du paiement','Signalement d\'un utilisateur',
    'Question sur la vérification SMS','Badge non attribué','Problème avec une photo',
    'Compte bloqué','Demande de suppression de compte','Annonce non publiée',
  ];
  const STATUTS_TICKET = ['ouvert','ouvert','en_cours','en_cours','resolu','resolu','resolu'];
  const PRIORITES = ['haute','haute','normale','normale','basse'];

  const TICKETS = Array.from({ length: 28 }, (_, i) => {
    const user = USERS[i % USERS.length];
    return {
      id: 't' + (i + 1),
      user_id: user.id,
      user_prenom: user.prenom,
      user_nom: user.nom,
      user_email: user.email,
      user_avatar: null,
      sujet: pick(SUJETS),
      message: 'Bonjour, j\'ai un problème avec mon compte et j\'aimerais que vous puissiez m\'aider à résoudre la situation. Merci d\'avance pour votre aide.',
      statut: STATUTS_TICKET[i % STATUTS_TICKET.length],
      priorite: pick(PRIORITES),
      created_at: ago(rnd(0, 30)),
      last_reply: ago(rnd(0, 5)),
      messages: [
        { id: 'm1', is_admin: false, message: 'Bonjour, j\'ai un problème avec mon compte.', created_at: ago(rnd(5, 30)) },
        ...(i % 3 !== 0 ? [{ id: 'm2', is_admin: true, message: 'Bonjour, merci de nous avoir contactés. Pouvez-vous nous donner plus de détails ?', created_at: ago(rnd(1, 4)) }] : []),
      ],
    };
  });

  /* ── Analytics ── */
  function genSeries(len, base, variance) {
    const arr = [];
    let v = base;
    for (let i = 0; i < len; i++) {
      v = Math.max(0, v + rnd(-variance, variance));
      arr.push(Math.round(v));
    }
    return arr;
  }
  const MONTHS = ['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  const TODAY  = new Date();
  const LAST12 = Array.from({ length: 12 }, (_, i) => {
    const d = new Date(TODAY); d.setMonth(d.getMonth() - 11 + i);
    return MONTHS[d.getMonth()];
  });

  const ANALYTICS = {
    monthly_labels: LAST12,
    inscriptions:   genSeries(12, 120, 40),
    annonces:       genSeries(12, 300, 80),
    dau:            genSeries(12, 850, 150),
    revenue:        genSeries(12, 4200, 900),

    dau_7j:   [420, 480, 395, 510, 490, 535, 580],
    dau_labels: ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'],

    retention:  [100, 68, 52, 44, 38, 34, 31],
    retention_labels: ['J1','J7','J14','J30','J60','J90','J180'],

    funnel: [
      { label: 'Visiteurs',    value: 18400, pct: 100 },
      { label: 'Inscrits',     value: 5200,  pct: 28 },
      { label: 'Profil complet', value: 3100, pct: 17 },
      { label: 'Doc envoyé',   value: 1800,  pct: 10 },
      { label: 'Vérifié',      value: 1240,  pct: 7 },
    ],

    by_role: [
      { role: 'Étudiants',    count: 18400, pct: 62, color: '#1E5AA8' },
      { role: 'Bailleurs',    count:  7200, pct: 24, color: '#22C55E' },
      { role: 'Particuliers', count:  4100, pct: 14, color: '#8B5CF6' },
    ],

    by_cat: CAT_LABELS.map((label, i) => ({
      label,
      count: rnd(200, 1400),
      color: ['#1E5AA8','#22C55E','#8B5CF6','#EF4444','#F59E0B'][i],
    })),

    top_cities: CITIES.slice(0, 8).map(c => ({ city: c, users: rnd(200, 3200) })),

    churn_rate:    4.2,
    nps_score:     68,
    avg_session:   '4m 32s',
    bounce_rate:   38.4,
  };

  /* ── Signalements / Modération ── */
  const MOTIFS_SIG = ['Contenu inapproprié','Arnaque potentielle','Photo trompeuse','Prix abusif','Doublon d\'annonce','Utilisateur suspect'];
  const SIGNALEMENTS = Array.from({ length: 20 }, (_, i) => {
    const ann  = ANNONCES[i % ANNONCES.length];
    const user = USERS[(i + 5) % USERS.length];
    return {
      id: 's' + (i + 1),
      annonce_id: ann.id,
      annonce_titre: ann.titre,
      annonce_cat: ann.categorie,
      reporter_id: user.id,
      reporter_name: user.prenom + ' ' + user.nom,
      motif: pick(MOTIFS_SIG),
      statut: pick(['en_attente','traite','ignore']),
      created_at: ago(rnd(0, 20)),
    };
  });

  /* ── Admins ── */
  const ADMINS = [
    { id: 'admin1', nom: 'Admin', prenom: 'CDE', email: 'admin@coindesetudiants.com', role: 'super_admin', last_login: ago(0), sessions: 142 },
    { id: 'admin2', nom: 'Dupont', prenom: 'Julie', email: 'julie.dupont@coindesetudiants.com', role: 'moderateur', last_login: ago(2), sessions: 38 },
    { id: 'admin3', nom: 'Leroy', prenom: 'Marc', email: 'marc.leroy@coindesetudiants.com', role: 'support', last_login: ago(5), sessions: 21 },
  ];

  /* ── Audit logs (40) ── */
  const AUDIT_ACTIONS = [
    'Connexion admin','Document validé','Document refusé','Annonce suspendue','Utilisateur suspendu',
    'Ticket résolu','Réponse support','Notification envoyée','Export CSV','Paramètres modifiés',
  ];
  const AUDIT_LOGS = Array.from({ length: 40 }, (_, i) => ({
    id: 'log' + (i + 1),
    admin: pick(ADMINS),
    action: pick(AUDIT_ACTIONS),
    target: i % 2 === 0 ? USERS[i % USERS.length].prenom + ' ' + USERS[i % USERS.length].nom : '—',
    ip: '82.' + rnd(100,200) + '.' + rnd(10,200) + '.' + rnd(1,254),
    created_at: ago(rnd(0, 30)),
  }));

  /* ── Notifications / Campaigns ── */
  const CAMPAIGNS = [
    { id: 'c1', nom: 'Bienvenue nouvel inscrit', type: 'email', statut: 'actif',    envoyes: 1240, ouverts: 820, clics: 310, created_at: ago(10) },
    { id: 'c2', nom: 'Rappel vérification KYC',  type: 'email', statut: 'actif',    envoyes: 480,  ouverts: 310, clics: 128, created_at: ago(8)  },
    { id: 'c3', nom: 'Nouvelle annonce logement', type: 'push',  statut: 'programme',envoyes: 0,    ouverts: 0,   clics: 0,   created_at: ago(1)  },
    { id: 'c4', nom: 'Promo rentrée septembre',  type: 'sms',   statut: 'termine',  envoyes: 3200, ouverts: 2800,clics: 940, created_at: ago(30) },
    { id: 'c5', nom: 'Alerte sécurité comptes',  type: 'email', statut: 'termine',  envoyes: 5400, ouverts: 4100,clics: 580, created_at: ago(45) },
  ];

  /* ── Infrastructure ── */
  const INFRA = {
    services: [
      { name: 'API Supabase',     statut: 'ok',   latency: '42ms',  uptime: '99.97%' },
      { name: 'Auth (Gotrue)',    statut: 'ok',   latency: '28ms',  uptime: '99.99%' },
      { name: 'Storage',         statut: 'ok',   latency: '89ms',  uptime: '99.91%' },
      { name: 'Edge Functions',  statut: 'warn', latency: '180ms', uptime: '98.40%' },
      { name: 'Twilio SMS',      statut: 'ok',   latency: '120ms', uptime: '99.85%' },
      { name: 'Vercel (Admin)',   statut: 'ok',   latency: '18ms',  uptime: '100%'   },
      { name: 'Vercel (App web)', statut: 'ok',  latency: '22ms',  uptime: '100%'   },
    ],
    cpu: genSeries(24, 30, 15),
    ram: genSeries(24, 45, 10),
    req_per_min: genSeries(24, 800, 300),
    labels_24h: Array.from({ length: 24 }, (_, i) => (i < 10 ? '0' : '') + i + 'h'),
    errors_today: 14,
    req_today: 48200,
    storage_gb: 2.4,
    storage_max: 10,
    db_size_mb: 84,
  };

  /* ── Paramètres ── */
  const PARAMS = {
    universities: UNIV.map((n, i) => ({ id: 'uni' + i, nom: n, ville: pick(CITIES), actif: true })),
    categories:   CAT_LABELS.map((n, i) => ({ id: 'cat' + i, nom: n, icon: ['🏠','💼','🔧','🎁','🏷️'][i], actif: true })),
    badges:       ['Étudiant vérifié','Bailleur premium','Particulier premium','Entreprise vérifiée'],
    smtp:         { host: 'smtp.sendgrid.net', port: 587, from: 'noreply@coindesetudiants.com' },
    twilio:       { sid: 'AC•••••••••••', from: '+33700000000' },
    rgpd_contact: 'dpo@coindesetudiants.com',
    brand_color:  '#1E5AA8',
    brand_name:   'Coin des Étudiants',
  };

  /* ── Aggregated KPIs ── */
  const KPIS = {
    users_total:      USERS.length,
    users_new_30j:    12,
    docs_pending:     DOCUMENTS.filter(d => d.statut === 'en_attente').length,
    docs_valides:     DOCUMENTS.filter(d => d.statut === 'valide').length,
    docs_refuses:     DOCUMENTS.filter(d => d.statut === 'refuse').length,
    annonces_total:   ANNONCES.length,
    annonces_actives: ANNONCES.filter(a => a.statut === 'actif').length,
    annonces_susp:    ANNONCES.filter(a => a.statut === 'suspendu').length,
    annonces_signal:  ANNONCES.filter(a => a.statut === 'signale').length,
    tickets_open:     TICKETS.filter(t => t.statut === 'ouvert').length,
    tickets_cours:    TICKETS.filter(t => t.statut === 'en_cours').length,
    tickets_resol:    TICKETS.filter(t => t.statut === 'resolu').length,
    revenue_month:    '14 800 €',
    revenue_delta:    '+12.4%',
    dau_today:        580,
    dau_delta:        '+8.2%',
  };

  /* ── Activity feed (recent actions) ── */
  const ACTIVITY = [
    { icon: '📄', color: '#EBF2FA', text: '<strong>Lucas Martin</strong> a soumis sa carte d\'identité', time: 'Il y a 3 min' },
    { icon: '✅', color: '#DCFCE7', text: '<strong>Admin CDE</strong> a validé le document de <strong>Emma Dupont</strong>', time: 'Il y a 12 min' },
    { icon: '⚠️', color: '#FFFBEB', text: 'L\'annonce "<strong>Studio Paris 5e</strong>" a été signalée 3×', time: 'Il y a 28 min' },
    { icon: '💬', color: '#F5F3FF', text: '<strong>Chloé Bernard</strong> a ouvert un ticket support', time: 'Il y a 45 min' },
    { icon: '❌', color: '#FEF2F2', text: 'Document de <strong>Paul Thomas</strong> refusé (photo floue)', time: 'Il y a 1h' },
    { icon: '🎓', color: '#EBF2FA', text: '<strong>Sophie Moreau</strong> a rejoint en tant qu\'étudiante', time: 'Il y a 1h 20m' },
    { icon: '🏠', color: '#DCFCE7', text: 'Nouvelle annonce logement publiée à <strong>Lyon</strong>', time: 'Il y a 2h' },
    { icon: '✅', color: '#DCFCE7', text: '<strong>Admin CDE</strong> a validé l\'identité de <strong>Tom Robert</strong>', time: 'Il y a 2h 30m' },
    { icon: '🔔', color: '#F5F3FF', text: 'Campagne email "Bienvenue" envoyée à <strong>1 240 users</strong>', time: 'Il y a 3h' },
    { icon: '🚫', color: '#FEF2F2', text: 'Compte de <strong>Kevin Simon</strong> suspendu 30 jours', time: 'Il y a 5h' },
  ];

  return { USERS, DOCUMENTS, ANNONCES, TICKETS, ANALYTICS, SIGNALEMENTS, ADMINS, AUDIT_LOGS, CAMPAIGNS, INFRA, PARAMS, KPIS, ACTIVITY, LAST12 };
})();
