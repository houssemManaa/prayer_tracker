
// --- Auth & User Data ---
function getUsers() {
  return JSON.parse(localStorage.getItem('users') || '{}');
}

function setUsers(users) {
  localStorage.setItem('users', JSON.stringify(users));
}

function getCurrentUser() {
  return localStorage.getItem('currentUser') || null;
}

function setCurrentUser(username) {
  if (username) localStorage.setItem('currentUser', username);
  else localStorage.removeItem('currentUser');
}

function renderAuthBar() {
  const authBar = document.getElementById('authBar');
  const userInfo = document.getElementById('userInfo');
  const user = getCurrentUser();
  if (user) {
    authBar.innerHTML = `<button class="btn btn-primary" id="logoutBtn">Logout</button>`;
    if (userInfo) userInfo.textContent = `Logged in as: ${user}`;
  } else {
    authBar.innerHTML = `
      <button class="btn btn-primary" id="loginBtn">Login</button>
      <button class="btn btn-primary" id="signupBtn">Sign Up</button>
    `;
    if (userInfo) userInfo.textContent = '';
  }
  setAuthListeners();
}

function setAuthListeners() {
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  if (loginBtn) loginBtn.onclick = showLoginModal;
  if (signupBtn) signupBtn.onclick = showSignupModal;
  if (logoutBtn) logoutBtn.onclick = () => {
    setCurrentUser(null);
    renderAuthBar();
    loadTracker();
  };
}

function showLoginModal() {
  const username = prompt('Enter username:');
  if (!username) return;
  const password = prompt('Enter password:');
  if (!password) return;
  const users = getUsers();
  // Defensive: ensure users[username] exists and is an object
  if (users[username] && typeof users[username] === 'object' && users[username].password === password) {
    setCurrentUser(username);
    alert('Login successful!');
    renderAuthBar();
    loadTracker();
  } else {
    alert('Invalid credentials.');
  }
}

function showSignupModal() {
  const username = prompt('Choose a username:');
  if (!username) return;
  const users = getUsers();
  if (users[username]) {
    alert('Username already exists.');
    return;
  }
  const password = prompt('Choose a password:');
  if (!password) return;
  users[username] = { password };
  setUsers(users);
  setCurrentUser(username);
  alert('Account created and logged in!');
  renderAuthBar();
  loadTracker();
}

// --- Tracker Logic ---
const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
const prayerNames = {
  fajr: 'Fajr',
  dhuhr: 'Dhuhr',
  asr: 'Asr',
  maghrib: 'Maghrib',
  isha: 'Isha'
};

function getTodayKey() {
  const today = new Date();
  return today.toISOString().slice(0, 10);
}


function loadTracker() {
  const trackerDiv = document.getElementById('prayerTracker');
  trackerDiv.innerHTML = '';
  const user = getCurrentUser();
  if (!user) {
    trackerDiv.innerHTML = '<div style="text-align:center;color:var(--text-muted);padding:32px;">Please log in to track your prayers.</div>';
    return;
  }
  const todayKey = getTodayKey();
  const users = getUsers();
  const saved = users[user]?.prayerChecklist || {};
  // Card layout
  const cardsWrapper = document.createElement('div');
  cardsWrapper.style.display = 'flex';
  cardsWrapper.style.gap = '20px';
  cardsWrapper.style.justifyContent = 'center';
  cardsWrapper.style.flexWrap = 'wrap';
  prayers.forEach(prayer => {
    const checked = saved[todayKey]?.[prayer]?.checked || false;
    const masjid = saved[todayKey]?.[prayer]?.masjid || false;
    const card = document.createElement('div');
    card.className = 'prayer-card';
    card.style.minWidth = '180px';
    card.style.background = 'var(--bg-card)';
    card.style.borderRadius = 'var(--radius-md)';
    card.style.boxShadow = 'var(--shadow-md)';
    card.style.padding = '24px 16px';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';
    card.innerHTML = `
      <div class="prayer-card-name" style="font-weight:700;font-size:1.1rem;margin-bottom:8px;">${prayerNames[prayer]}</div>
      <label style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">
        <input type="checkbox" class="tracker-checkbox" data-prayer="${prayer}" ${checked ? 'checked' : ''}>
        <span>Prayed</span>
      </label>
      <label style="display:flex;align-items:center;gap:8px;">
        <input type="checkbox" class="masjid-checkbox" data-prayer="${prayer}" ${masjid ? 'checked' : ''}>
        <span>In Masjid</span>
      </label>
    `;
    cardsWrapper.appendChild(card);
  });
  trackerDiv.appendChild(cardsWrapper);
  trackerDiv.addEventListener('change', onCheckboxChange);
}


function onCheckboxChange(e) {
  const prayer = e.target.getAttribute('data-prayer');
  if (!prayer) return;
  const todayKey = getTodayKey();
  const user = getCurrentUser();
  if (!user) return;
  const users = getUsers();
  if (!users[user].prayerChecklist) users[user].prayerChecklist = {};
  if (!users[user].prayerChecklist[todayKey]) users[user].prayerChecklist[todayKey] = {};
  if (!users[user].prayerChecklist[todayKey][prayer]) users[user].prayerChecklist[todayKey][prayer] = {};
  if (e.target.classList.contains('tracker-checkbox')) {
    users[user].prayerChecklist[todayKey][prayer].checked = e.target.checked;
  } else if (e.target.classList.contains('masjid-checkbox')) {
    users[user].prayerChecklist[todayKey][prayer].masjid = e.target.checked;
  }
  setUsers(users);
}

document.addEventListener('DOMContentLoaded', () => {
  renderAuthBar();
  loadTracker();
});
