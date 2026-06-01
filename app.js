// Prayer Tracker Application - Updated for new layout

// ============================================
// REAL ATHAN TIMES - May 2026 (Dallas/Fort Worth)
// ============================================
const athanTimesMay2026 = {
    '2026-05-01': { fajr: '05:26', dhuhr: '13:24', asr: '17:05', maghrib: '20:09', isha: '21:23' },
    '2026-05-02': { fajr: '05:25', dhuhr: '13:24', asr: '17:05', maghrib: '20:10', isha: '21:24' },
    '2026-05-03': { fajr: '05:24', dhuhr: '13:24', asr: '17:05', maghrib: '20:11', isha: '21:25' },
    '2026-05-04': { fajr: '05:23', dhuhr: '13:24', asr: '17:05', maghrib: '20:11', isha: '21:26' },
    '2026-05-05': { fajr: '05:21', dhuhr: '13:24', asr: '17:05', maghrib: '20:12', isha: '21:27' },
    '2026-05-06': { fajr: '05:20', dhuhr: '13:24', asr: '17:05', maghrib: '20:13', isha: '21:28' },
    '2026-05-07': { fajr: '05:19', dhuhr: '13:24', asr: '17:05', maghrib: '20:13', isha: '21:29' },
    '2026-05-08': { fajr: '05:18', dhuhr: '13:24', asr: '17:05', maghrib: '20:14', isha: '21:30' },
    '2026-05-09': { fajr: '05:17', dhuhr: '13:24', asr: '17:05', maghrib: '20:15', isha: '21:31' },
    '2026-05-10': { fajr: '05:16', dhuhr: '13:24', asr: '17:05', maghrib: '20:16', isha: '21:32' },
    '2026-05-11': { fajr: '05:15', dhuhr: '13:24', asr: '17:05', maghrib: '20:16', isha: '21:33' },
    '2026-05-12': { fajr: '05:14', dhuhr: '13:24', asr: '17:06', maghrib: '20:17', isha: '21:34' },
    '2026-05-13': { fajr: '05:13', dhuhr: '13:24', asr: '17:06', maghrib: '20:18', isha: '21:35' },
    '2026-05-14': { fajr: '05:12', dhuhr: '13:24', asr: '17:06', maghrib: '20:19', isha: '21:36' },
    '2026-05-15': { fajr: '05:11', dhuhr: '13:24', asr: '17:06', maghrib: '20:19', isha: '21:37' },
    '2026-05-16': { fajr: '05:10', dhuhr: '13:24', asr: '17:06', maghrib: '20:20', isha: '21:37' },
    '2026-05-17': { fajr: '05:09', dhuhr: '13:24', asr: '17:06', maghrib: '20:21', isha: '21:38' },
    '2026-05-18': { fajr: '05:08', dhuhr: '13:24', asr: '17:06', maghrib: '20:21', isha: '21:39' },
    '2026-05-19': { fajr: '05:08', dhuhr: '13:24', asr: '17:06', maghrib: '20:22', isha: '21:40' },
    '2026-05-20': { fajr: '05:07', dhuhr: '13:24', asr: '17:06', maghrib: '20:23', isha: '21:41' },
    '2026-05-21': { fajr: '05:06', dhuhr: '13:24', asr: '17:06', maghrib: '20:23', isha: '21:42' },
    '2026-05-22': { fajr: '05:05', dhuhr: '13:24', asr: '17:06', maghrib: '20:24', isha: '21:43' },
    '2026-05-23': { fajr: '05:05', dhuhr: '13:24', asr: '17:06', maghrib: '20:25', isha: '21:44' },
    '2026-05-24': { fajr: '05:04', dhuhr: '13:24', asr: '17:06', maghrib: '20:25', isha: '21:45' },
    '2026-05-25': { fajr: '05:03', dhuhr: '13:24', asr: '17:07', maghrib: '20:26', isha: '21:46' },
    '2026-05-26': { fajr: '05:03', dhuhr: '13:24', asr: '17:07', maghrib: '20:27', isha: '21:46' },
    '2026-05-27': { fajr: '05:02', dhuhr: '13:24', asr: '17:07', maghrib: '20:27', isha: '21:47' },
    '2026-05-28': { fajr: '05:01', dhuhr: '13:25', asr: '17:07', maghrib: '20:28', isha: '21:48' },
    '2026-05-29': { fajr: '05:01', dhuhr: '13:25', asr: '17:07', maghrib: '20:29', isha: '21:49' },
    '2026-05-30': { fajr: '05:00', dhuhr: '13:25', asr: '17:07', maghrib: '20:29', isha: '21:50' },
    '2026-05-31': { fajr: '05:00', dhuhr: '13:25', asr: '17:07', maghrib: '20:30', isha: '21:50' }
};

// ============================================
// MASJID DATA
// ============================================
const masjidsData = {
    cities: [
        { id: 'dallas', name: 'Dallas-Fort Worth', country: 'Texas, USA', lat: 32.7767, lng: -96.7970 }
    ],
    masjids: {
        'dallas': [
            { id: 'masjid_al_islam', name: 'Masjid Al-Islam', nameArabic: 'مسجد الإسلام', location: 'Dallas, TX' },
            { id: 'icsd', name: 'Islamic Center of South Dallas', nameArabic: 'المركز الإسلامي لجنوب دالاس', location: 'South Dallas, TX' },
            { id: 'masjid_al_quran', name: 'Masjid Al Quran', nameArabic: 'مسجد القرآن', location: 'Dallas, TX' },
            { id: 'al_razzaq', name: 'Al Razzaq Islamic Centre', nameArabic: 'مركز الرزاق الإسلامي', location: 'Irving, TX' },
            { id: 'collin_county', name: 'Islamic Association of Collin County', nameArabic: 'الجمعية الإسلامية لمقاطعة كولان', location: 'Plano, TX' },
            { id: 'epic', name: 'East Plano Islamic Center (EPIC)', nameArabic: 'المركز الإسلامي لشرق بلانو', location: 'East Plano, TX' },
            { id: 'frisco', name: 'Islamic Center of Frisco', nameArabic: 'المركز الإسلامي بفريسكو', location: 'Frisco, TX' },
            { id: 'allen', name: 'Islamic Association of Allen', nameArabic: 'الجمعية الإسلامية بألين', location: 'Allen, TX' },
            { id: 'baitul_ikram', name: 'Masjid Baitul Ikram', nameArabic: 'مسجد بيت الإكرام', location: 'McKinney, TX' },
            { id: 'mckinney', name: 'McKinney Masjid', nameArabic: 'مسجد ماكيني', location: 'McKinney, TX' },
            { id: 'iant', name: 'Islamic Association of North Texas (IANT)', nameArabic: 'الجمعية الإسلامية لشمال تكساس', location: 'Richardson, TX' },
            { id: 'mas_dallas', name: 'MAS Islamic Center of Dallas', nameArabic: 'المركز الإسلامي لجماعة المسلمين بدالاس', location: 'Dallas, TX' },
            { id: 'vric', name: 'Valley Ranch Islamic Center (VRIC)', nameArabic: 'مركز وادي رانش الإسلامي', location: 'Irving, TX' },
            { id: 'carrollton', name: 'Madinah Masjid of Carrollton', nameArabic: 'مسجد المدينة بكرولتون', location: 'Carrollton, TX' },
            { id: 'mic', name: 'Mesquite Islamic Center (MIC)', nameArabic: 'المركز الإسلامي بمسكيت', location: 'Mesquite, TX' },
            { id: 'desoto', name: 'Islamic Association of DeSoto', nameArabic: 'الجمعية الإسلامية ديسوتو', location: 'DeSoto, TX' },
            { id: 'house_of_peace', name: 'DeSoto House of Peace', nameArabic: 'دار السلام ديسوتو', location: 'DeSoto, TX' },
            { id: 'icr', name: 'Islamic Center of Rowlett (ICR)', nameArabic: 'المركز الإسلامي برووليت', location: 'Rowlett, TX' },
            { id: 'iatc', name: 'Islamic Association of Tarrant County', nameArabic: 'الجمعية الإسلامية لمقاطعة تارانت', location: 'Fort Worth, TX' },
            { id: 'fort_worth', name: 'Islamic Association of Fort Worth', nameArabic: 'الجمعية الإسلامية بفورت وورث', location: 'Fort Worth, TX' },
            { id: 'keller', name: 'Keller Islamic Center (KIC)', nameArabic: 'المركز الإسلامي بكيلر', location: 'Keller, TX' },
            { id: 'bayt_alkarim', name: 'Bayt Al-Karim Islamic Center', nameArabic: 'مركز بيت الكريم الإسلامي', location: 'Arlington, TX' },
            { id: 'alhedayah', name: 'Al-Hedayah Academy & Masjid', nameArabic: 'أكاديمية ومسجد الهداية', location: 'Fort Worth, TX' },
            { id: 'imam_ali', name: 'Imam Ali Islamic Center', nameArabic: 'مركز الإمام علي الإسلامي', location: 'Dallas, TX' }
        ]
    }
};

const prayerOrder = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha', 'jumuah'];

const masjidPrayerSchedules = {
    masjid_al_islam: { iqamah: { fajr: '05:10', dhuhr: '13:45', asr: '17:15', maghrib: '20:38', isha: '22:15' }, jumuah: ['13:45'] },
    al_razzaq: { iqamah: { dhuhr: '14:00', asr: '17:15', maghrib: '20:30' }, jumuah: [] },
    collin_county: { iqamah: { fajr: '05:30', dhuhr: '14:00', asr: '18:30', maghrib: '20:40', isha: '22:00' }, jumuah: ['13:45', '15:00'] },
    epic: { iqamah: { fajr: '05:30', dhuhr: '14:00', asr: '18:30', maghrib: '20:40', isha: '22:00' }, jumuah: ['13:45', '15:15'] },
    allen: { iqamah: { fajr: '05:30', dhuhr: '14:00', asr: '18:30', maghrib: '20:30', isha: '22:00' }, jumuah: ['14:00', '15:30'] },
    mckinney: { iqamah: { fajr: '05:10', dhuhr: '14:00', asr: '17:15', maghrib: '20:38', isha: '21:55' }, jumuah: ['13:45', '14:45', '15:45'] },
    mas_dallas: { iqamah: { fajr: '05:10', dhuhr: '13:45', asr: '17:15', maghrib: '20:34', isha: '21:55' }, jumuah: ['13:30'] },
    vric: { iqamah: { fajr: '05:30', dhuhr: '13:45', asr: '17:30', maghrib: '20:34', isha: '22:00' }, jumuah: ['13:45', '15:00'] },
    carrollton: { iqamah: { fajr: '05:45', dhuhr: '13:45', asr: '18:45', maghrib: '20:35', isha: '22:15' }, jumuah: ['14:00'] },
    mic: { iqamah: { fajr: '05:45', dhuhr: '13:45', asr: '17:16', maghrib: '20:39', isha: '21:54' }, jumuah: ['13:30', '14:30'] },
    icr: { iqamah: { fajr: '05:30', dhuhr: '13:45', asr: '18:15', maghrib: '20:40', isha: '22:00' }, jumuah: ['14:00'] },
    iatc: { iqamah: { fajr: '05:45', dhuhr: '14:00', asr: '17:30', maghrib: '20:39', isha: '22:00' }, jumuah: ['13:25'] },
    alhedayah: { iqamah: { fajr: '05:30', dhuhr: '14:00', asr: '17:30', maghrib: '20:39', isha: '22:00' }, jumuah: ['13:25', '14:25'] }
};

// ============================================
// Application State
// ============================================
const state = {
    currentCity: 'dallas',
    currentMasjidIndex: 0,
    selectedPrayer: 'fajr',
    currentPrayerIndex: 0,
    settings: {
        timeFormat: '12',
        language: 'en',
        theme: 'dark'
    },
    prayerTimes: {},
    currentPrayer: null,
    nextPrayer: null,
    countdownInterval: null,
    prayerStatus: {}
};

// ============================================
// Translations
// ============================================
const translations = {
    en: {
        prayers: { fajr: 'Fajr', sunrise: 'Sunrise', dhuhr: 'Dhuhr', asr: 'Asr', maghrib: 'Maghrib', isha: 'Isha', jumuah: 'Jumuah' },
        arabic: { fajr: 'الفجر', sunrise: 'الشروق', dhuhr: 'الظهر', asr: 'العصر', maghrib: 'المغرب', isha: 'العشاء', jumuah: 'الجمعة' },
        labels: {
            athan: 'Athan', iqama: 'Iqama', nextPrayer: 'Next Prayer', countdownAthan: 'Time Remaining',
            prayerPassed: 'The prayer has passed', selectCity: 'City', selectMasjid: 'Masjid',
            chooseCity: 'Choose a city...', chooseMasjid: 'Choose a masjid...',
            prayerTimesNote: 'Prayer times are calculated based on your selected location',
            timesMayVary: 'Times may vary slightly from actual masjid times',
            swipeHint: 'Swipe to see all prayers', jumuahTime: 'Jumuah', masjids: 'Masjids',
            iqamahTimes: 'Iqamah times', earliestIqama: 'First iqama', timeRemaining: 'Time Remaining',
            nextJumuah: 'Next Jumuah', timeNotListed: 'Time not listed',
            findCurrentTimes: 'Find current times', verifyTimes: 'Verify before leaving'
        }
    },
    ar: {
        prayers: { fajr: 'الفجر', sunrise: 'الشروق', dhuhr: 'الظهر', asr: 'العصر', maghrib: 'المغرب', isha: 'العشاء', jumuah: 'الجمعة' },
        arabic: { fajr: 'الفجر', sunrise: 'الشروق', dhuhr: 'الظهر', asr: 'العصر', maghrib: 'المغرب', isha: 'العشاء', jumuah: 'الجمعة' },
        labels: {
            athan: 'الأذان', iqama: 'الإقامة', nextPrayer: 'الصلاة القادمة', countdownAthan: 'الوقت المتبقي',
            prayerPassed: 'مرت الصلاة', selectCity: 'المدينة', selectMasjid: 'المسجد',
            chooseCity: 'اختر مدينة...', chooseMasjid: 'اختر مسجدًا...',
            prayerTimesNote: 'أوقات الصلاة تحسب بناءً على الموقع المختار',
            timesMayVary: 'قد تختلف الأوقات قليلاً عن أوقات المسجد الفعلية',
            swipeHint: 'اسحب لرؤية جميع الصلوات', jumuahTime: 'الجمعة', masjids: 'المساجد',
            iqamahTimes: 'أوقات الإقامة', earliestIqama: 'أول إقامة', timeRemaining: 'الوقت المتبقي',
            nextJumuah: 'الجمعة القادمة', timeNotListed: 'الوقت غير متوفر',
            findCurrentTimes: 'ابحث عن الوقت الحالي', verifyTimes: 'تحقق قبل الذهاب'
        }
    }
};

// ============================================
// DOM Elements
// ============================================
let elements = {};

// ============================================
// Initialize Application
// ============================================
function init() {
    // Get DOM elements
    elements = {
        prayerCardsWrapper: document.getElementById('prayerCardsWrapper'),
        prayerIndicators: document.getElementById('prayerIndicators'),
        prayerPrevBtn: document.getElementById('prayerPrevBtn'),
        prayerNextBtn: document.getElementById('prayerNextBtn'),
        masjidList: document.getElementById('masjidList'),
        masjidListLabel: document.getElementById('masjidListLabel'),
        masjidListHint: document.getElementById('masjidListHint'),
        gregorianDate: document.getElementById('gregorianDate'),
        hijriDate: document.getElementById('hijriDate'),
        currentTime: document.getElementById('currentTime'),
        refreshBtn: document.getElementById('refreshBtn'),
        settingsBtn: document.getElementById('settingsBtn'),
        themeToggle: document.getElementById('themeToggle'),
        settingsModal: document.getElementById('settingsModal'),
        closeSettings: document.getElementById('closeSettings'),
        saveSettings: document.getElementById('saveSettings'),
        timeFormat: document.getElementById('timeFormat'),
        themeSelect: document.getElementById('themeSelect'),
        language: document.getElementById('language'),
        countdownLabel: document.getElementById('countdownLabel'),
        footerText: document.getElementById('footerText'),
        footerNote: document.getElementById('footerNote')
    };

    loadSettings();
    applyTheme(state.settings.theme);
    calculatePrayerTimes();
    renderPrayerCards();
    renderMasjidList();
    updateDateDisplay();
    updateClock();
    setupEventListeners();
    startCountdownTimer();
}

// ============================================
// Event Listeners
// ============================================
function setupEventListeners() {
    elements.prayerPrevBtn.addEventListener('click', () => navigatePrayerCarousel(-1));
    elements.prayerNextBtn.addEventListener('click', () => navigatePrayerCarousel(1));
    elements.refreshBtn.addEventListener('click', () => {
        calculatePrayerTimes();
        renderPrayerCards();
        renderMasjidList();
    });
    elements.settingsBtn.addEventListener('click', openSettingsModal);
    elements.closeSettings.addEventListener('click', closeSettingsModal);
    elements.saveSettings.addEventListener('click', saveSettings);
    elements.themeToggle.addEventListener('click', toggleTheme);
    elements.settingsModal.addEventListener('click', (e) => { if (e.target === elements.settingsModal) closeSettingsModal(); });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') navigatePrayerCarousel(-1);
        if (e.key === 'ArrowRight') navigatePrayerCarousel(1);
        if (e.key === 'Escape') closeSettingsModal();
    });

    // Touch and mouse drag/swipe support
    let dragStartX = 0;
    let dragging = false;

    // Touch events
    elements.prayerCardsWrapper.addEventListener('touchstart', (e) => {
        dragStartX = e.changedTouches[0].screenX;
        dragging = true;
    }, { passive: true });
    elements.prayerCardsWrapper.addEventListener('touchend', (e) => {
        if (!dragging) return;
        const diff = dragStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) navigatePrayerCarousel(diff > 0 ? 1 : -1);
        dragging = false;
    }, { passive: true });

    // Mouse events for desktop drag
    elements.prayerCardsWrapper.addEventListener('mousedown', (e) => {
        dragStartX = e.screenX;
        dragging = true;
    });
    elements.prayerCardsWrapper.addEventListener('mouseup', (e) => {
        if (!dragging) return;
        const diff = dragStartX - e.screenX;
        if (Math.abs(diff) > 50) navigatePrayerCarousel(diff > 0 ? 1 : -1);
        dragging = false;
    });
    elements.prayerCardsWrapper.addEventListener('mouseleave', () => { dragging = false; });
    // Tracker button navigates to tracker page
    const trackerBtn = document.getElementById('trackerBtn');
    if (trackerBtn) {
        trackerBtn.addEventListener('click', () => {
            window.location.href = 'tracker.html';
        });
    }

    // Notification permission button
    const notifPermissionBtn = document.getElementById('notifPermissionBtn');
    if (notifPermissionBtn) {
        notifPermissionBtn.addEventListener('click', () => {
            if ('Notification' in window) {
                Notification.requestPermission().then((perm) => {
                    if (perm === 'granted') {
                        alert('Notifications enabled!');
                    } else {
                        alert('Notifications denied.');
                    }
                });
            } else {
                alert('Notifications are not supported in this browser.');
            }
        });
    }
}
// ============================================
// ATHAN NOTIFICATIONS
// ============================================
function scheduleAthanNotifications() {
    if (!('Notification' in window) || Notification.permission !== 'granted') return;
    // Clear any previous timeouts
    if (window.athanTimeouts) {
        window.athanTimeouts.forEach(clearTimeout);
    }
    window.athanTimeouts = [];

    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    const today = new Date();
    const dateKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    const times = athanTimesMay2026[dateKey] || {};

    prayers.forEach(prayer => {
        const timeStr = times[prayer];
        if (!timeStr) return;
        const [h, m] = timeStr.split(':').map(Number);
        const athanDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), h, m, 0, 0);
        const msUntilAthan = athanDate - Date.now();
        if (msUntilAthan > 0) {
            const timeout = setTimeout(() => {
                new Notification(`Athan for ${prayer.charAt(0).toUpperCase() + prayer.slice(1)}`, {
                    body: `It's time for ${prayer.charAt(0).toUpperCase() + prayer.slice(1)} prayer.`,
                    icon: '/favicon.ico'
                });
            }, msUntilAthan);
            window.athanTimeouts.push(timeout);
        }
    });
}
    // Schedule notifications if permission is already granted
    if ('Notification' in window && Notification.permission === 'granted') {
        scheduleAthanNotifications();
    }

// ============================================
// Prayer Times
// ============================================
function calculatePrayerTimes() {
    const today = new Date();
    const dateKey = formatDateKey(today);
    state.prayerTimes = athanTimesMay2026[dateKey] || generateFallbackPrayerTimes(today);
    determineCurrentPrayer();
}

function formatDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function generateFallbackPrayerTimes() {
    return { fajr: '05:09', dhuhr: '13:24', asr: '17:06', maghrib: '20:21', isha: '21:38' };
}

function determineCurrentPrayer() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const prayers = ['fajr', 'dhuhr', 'asr', 'maghrib', 'isha'];
    let current = null;
    let next = null;
    state.prayerStatus = {};
    
    for (const prayer of prayers) {
        const time = state.prayerTimes[prayer];
        if (time) {
            const [h, m] = time.split(':').map(Number);
            const prayerMinutes = h * 60 + m;
            if (currentMinutes >= prayerMinutes) {
                current = prayer;
                state.prayerStatus[prayer] = 'passed';
            } else {
                if (!next) next = prayer;
                state.prayerStatus[prayer] = 'upcoming';
            }
        }
    }
    
    if (!next) { next = 'fajr'; state.prayerStatus.fajr = 'upcoming'; }
    state.currentPrayer = current;
    state.nextPrayer = next;
}

// ============================================
// Render Prayer Cards (Sliding)
// ============================================
function renderPrayerCards() {
    const t = translations[state.settings.language] || translations.en;
    
    elements.prayerCardsWrapper.innerHTML = '';
    elements.prayerIndicators.innerHTML = '';
    
    prayerOrder.forEach((prayer, index) => {
        const entries = getSortedMasjidEntries(prayer);
        const firstEntry = entries[0];
        const time = state.prayerTimes[prayer] || '--:--';
        const formattedTime = formatTime(time);
        const status = state.prayerStatus[prayer];
        const isPassed = status === 'passed';
        const isCurrent = state.currentPrayer === prayer;
        const countdown = getCountdownText(prayer);
        
        const card = document.createElement('div');
        card.className = `prayer-card${index === state.currentPrayerIndex ? ' active' : ''}${isPassed ? ' passed' : ''}${isCurrent ? ' current' : ''}`;
        card.addEventListener('click', () => {
            state.currentPrayerIndex = index;
            updatePrayerCarousel();
        });
        card.innerHTML = `
            <div class="prayer-card-header">
                <div class="prayer-card-name">${t.prayers[prayer]}</div>
                <div class="prayer-card-arabic">${t.arabic[prayer]}</div>
                ${isPassed && prayer !== 'jumuah' ? '<span class="passed-label">' + t.labels.prayerPassed + '</span>' : ''}
            </div>
            <div class="prayer-card-times">
                ${prayer === 'jumuah' ? '' : `<div class="time-block athan-block">
                    <span class="time-label">${t.labels.athan}</span>
                    <span class="time-value">${formattedTime}</span>
                </div>`}
                <div class="time-block countdown-block">
                    <span class="time-label">${prayer === 'jumuah' ? t.labels.nextJumuah : t.labels.timeRemaining}</span>
                    <span class="time-value">${countdown}</span>
                </div>
            </div>
        `;
        elements.prayerCardsWrapper.appendChild(card);
        
        // Indicator
        const indicator = document.createElement('div');
        indicator.className = `prayer-indicator${index === state.currentPrayerIndex ? ' active' : ''}`;
        indicator.addEventListener('click', () => {
            state.currentPrayerIndex = index;
            updatePrayerCarousel();
        });
        elements.prayerIndicators.appendChild(indicator);
    });
    
    updatePrayerCarousel();
    renderMasjidList();
}

function calculateIqamaTime(prayer, athanTime, masjid) {
    if (prayer === 'jumuah') return getJumuahTimes(masjid)[0] || '--:--';
    const listedIqamah = masjidPrayerSchedules[masjid.id]?.iqamah?.[prayer];
    if (listedIqamah) return listedIqamah;
    return '--:--';
}

function getJumuahTimes(masjid) {
    return masjidPrayerSchedules[masjid.id]?.jumuah || [];
}

function getMasjidTimesSearchUrl(masjid) {
    const query = `${masjid.name} ${masjid.location} iqamah jumuah times`;
    return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

function parseTimeToMinutes(timeStr) {
    if (!timeStr || timeStr === '--:--') return Number.POSITIVE_INFINITY;
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function getSortedMasjidEntries(prayer) {
    const masjids = masjidsData.masjids[state.currentCity] || [];
    return masjids
        .map((masjid) => {
            const times = prayer === 'jumuah'
                ? getJumuahTimes(masjid)
                : [calculateIqamaTime(prayer, state.prayerTimes[prayer], masjid)];
            const sortTime = times[0] || '--:--';
            return {
                masjid,
                times,
                sortTime,
                sortMinutes: parseTimeToMinutes(sortTime)
            };
        })
        .sort((a, b) => {
            if (a.sortMinutes !== b.sortMinutes) return a.sortMinutes - b.sortMinutes;
            return a.masjid.name.localeCompare(b.masjid.name);
        });
}

function renderMasjidList() {
    if (!elements.masjidList) return;

    const prayer = prayerOrder[state.currentPrayerIndex] || 'fajr';
    const t = translations[state.settings.language] || translations.en;
    const entries = getSortedMasjidEntries(prayer);

    if (elements.masjidListLabel) elements.masjidListLabel.textContent = `${t.prayers[prayer]} ${t.labels.masjids}`;
    if (elements.masjidListHint) elements.masjidListHint.textContent = prayer === 'jumuah' ? t.labels.jumuahTime : t.labels.iqamahTimes;

    elements.masjidList.innerHTML = entries.map(({ masjid, times }) => {
        const listedTimes = times.filter((time) => time && time !== '--:--');
        const formattedTimes = listedTimes.map(formatTime).join(' / ');
        const isVerified = listedTimes.length > 0;
        return `
            <article class="masjid-list-card">
                <div class="masjid-list-main">
                    <div class="masjid-list-name">${masjid.name}</div>
                    <div class="masjid-list-location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>${masjid.location}</span>
                    </div>
                </div>
                <div class="masjid-list-side">
                    <div class="masjid-list-time">${formattedTimes || t.labels.timeNotListed}</div>
                    <div class="masjid-list-type">${isVerified ? (prayer === 'jumuah' ? t.labels.jumuahTime : t.labels.iqama) : t.labels.verifyTimes}</div>
                    ${isVerified ? '' : `<a class="masjid-list-link" href="${getMasjidTimesSearchUrl(masjid)}" target="_blank" rel="noopener noreferrer">${t.labels.findCurrentTimes}</a>`}
                </div>
            </article>
        `;
    }).join('');
}

// ============================================
// Prayer Carousel Navigation
// ============================================
function navigatePrayerCarousel(direction) {
    const newIndex = state.currentPrayerIndex + direction;
    if (newIndex >= 0 && newIndex < prayerOrder.length) {
        state.currentPrayerIndex = newIndex;
        updatePrayerCarousel();
    }
}

function updatePrayerCarousel() {
    const cards = elements.prayerCardsWrapper.querySelectorAll('.prayer-card');
    const indicators = elements.prayerIndicators.querySelectorAll('.prayer-indicator');
    
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === state.currentPrayerIndex);
    });
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === state.currentPrayerIndex);
    });
    
    // Scroll to active card using scrollLeft
    const wrapper = elements.prayerCardsWrapper;
    const activeCard = cards[state.currentPrayerIndex];
    if (activeCard && wrapper) {
        const cardWidth = activeCard.offsetWidth;
        const gap = 16; // matches CSS gap
        wrapper.scrollTo({
            left: state.currentPrayerIndex * (cardWidth + gap),
            behavior: 'smooth'
        });
    }

    renderMasjidList();
}

// ============================================
// Time Formatting
// ============================================
function formatTime(timeStr) {
    if (!timeStr || timeStr === '--:--') return '--:--';
    const [hours, minutes] = timeStr.split(':').map(Number);
    if (state.settings.timeFormat === '12') {
        const period = hours >= 12 ? 'PM' : 'AM';
        return `${hours % 12 || 12}:${String(minutes).padStart(2, '0')} ${period}`;
    }
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

// ============================================
// Next Prayer Countdown
// ============================================
function updateNextPrayer() {
    renderPrayerCards();
    renderMasjidList();
}

function updateCountdown() {
    renderPrayerCards();
}

function getCountdownTarget(prayer) {
    const now = new Date();
    const entries = getSortedMasjidEntries(prayer);
    const timeStr = prayer === 'jumuah' ? getNextJumuahTime(entries, now) : state.prayerTimes[prayer];
    if (!timeStr) return null;

    const [hours, minutes] = timeStr.split(':').map(Number);
    const target = new Date(now);
    target.setHours(hours, minutes, 0, 0);

    if (prayer === 'jumuah') {
        const friday = 5;
        const daysUntilFriday = (friday - now.getDay() + 7) % 7;
        target.setDate(now.getDate() + daysUntilFriday);
        if (target <= now) target.setDate(target.getDate() + 7);
    }

    return target;
}

function getNextJumuahTime(entries, now) {
    const jumuahTimes = entries
        .flatMap((entry) => entry.times)
        .filter(Boolean)
        .sort((a, b) => parseTimeToMinutes(a) - parseTimeToMinutes(b));

    if (now.getDay() === 5) {
        const currentMinutes = now.getHours() * 60 + now.getMinutes();
        const upcomingToday = jumuahTimes.find((time) => parseTimeToMinutes(time) > currentMinutes);
        if (upcomingToday) return upcomingToday;
    }

    return jumuahTimes[0] || null;
}

function getCountdownText(prayer) {
    const target = getCountdownTarget(prayer);
    const t = translations[state.settings.language] || translations.en;
    if (!target) return '--:--:--';

    const now = new Date();
    if (target < now) return t.labels.prayerPassed;

    const diff = target - now;
    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

// ============================================
// Countdown Timer
// ============================================
function startCountdownTimer() {
    if (state.countdownInterval) clearInterval(state.countdownInterval);
    state.countdownInterval = setInterval(() => {
        updateClock();
        determineCurrentPrayer();
        renderPrayerCards();
    }, 1000);
}

// ============================================
// Clock & Date
// ============================================
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    if (state.settings.timeFormat === '12') {
        const period = hours >= 12 ? 'PM' : 'AM';
        elements.currentTime.textContent = `${hours % 12 || 12}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
    } else {
        elements.currentTime.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
}

function updateDateDisplay() {
    const now = new Date();
    elements.gregorianDate.textContent = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    try {
        elements.hijriDate.textContent = new Intl.DateTimeFormat('en-TN-u-ca-islamic-umalqura', { day: 'numeric', month: 'long', year: 'numeric' }).format(now);
    } catch (e) {
        elements.hijriDate.textContent = 'Islamic date';
    }
}

// ============================================
// Settings & Theme
// ============================================
function loadSettings() {
    const saved = localStorage.getItem('prayerTrackerSettings');
    if (saved) {
        try { state.settings = { ...state.settings, ...JSON.parse(saved) }; } catch (e) {}
    }
    elements.timeFormat.value = state.settings.timeFormat;
    elements.themeSelect.value = state.settings.theme;
    elements.language.value = state.settings.language;
}

function saveSettings() {
        // Reschedule notifications on settings change
        if ('Notification' in window && Notification.permission === 'granted') {
            scheduleAthanNotifications();
        }
    state.settings = {
        timeFormat: elements.timeFormat.value,
        theme: elements.themeSelect.value,
        language: elements.language.value
    };
    localStorage.setItem('prayerTrackerSettings', JSON.stringify(state.settings));
    applyTheme(state.settings.theme);
    applyLanguage(state.settings.language);
    closeSettingsModal();
    // Refresh display
    calculatePrayerTimes();
    updateNextPrayer();
}

function toggleTheme() {
    const newTheme = state.settings.theme === 'dark' ? 'light' : 'dark';
    state.settings.theme = newTheme;
    elements.themeSelect.value = newTheme;
    applyTheme(newTheme);
    localStorage.setItem('prayerTrackerSettings', JSON.stringify(state.settings));
}

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    // Update theme toggle icon
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');
    if (theme === 'light') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    } else {
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    }
}

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    const t = translations[lang] || translations.en;
    
    if (elements.countdownLabel) elements.countdownLabel.textContent = t.labels.countdownAthan;
    elements.footerText.textContent = t.labels.prayerTimesNote;
    elements.footerNote.textContent = t.labels.timesMayVary;
    
    // Update city/masjid labels
    const cityLabel = document.querySelector('.selector-group:first-child label');
    const masjidLabel = document.querySelector('.selector-group:last-child label');
    if (cityLabel) cityLabel.textContent = t.labels.selectCity;
    if (masjidLabel) masjidLabel.textContent = t.labels.selectMasjid;
    
    // Re-render prayer cards
    renderPrayerCards();
    updateNextPrayer();
}

function openSettingsModal() {
    elements.settingsModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSettingsModal() {
    elements.settingsModal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', init);
