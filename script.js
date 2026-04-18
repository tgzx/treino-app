const STORAGE_KEYS = {
    workouts: 'treino-app-workouts-v2',
    settings: 'treino-app-settings-v2',
    weights: 'treino-app-weights-v2',
    theme: 'theme',
    installPromptDismissedAt: 'treino-app-install-dismissed-at'
};

const DEFAULT_SETTINGS = {
    enableWeightTracking: false
};

const DEFAULT_WORKOUTS = [
    {
        id: 'seg-a',
        dayNumber: 1,
        tabLabel: 'SEG - A',
        name: 'Inferiores 1',
        desc: 'Gluteo + Posterior + Estabilidade',
        imageUrl: '',
        exercises: [
            { id: 'a1', name: 'Hip thrust maquina', sets: 3, reps: '10', swaps: ['Glute bridge no chao (12 reps)', 'Hip thrust no smith (10 reps)', 'Pull-through no cabo (12 reps)'] },
            { id: 'a2', name: 'Mesa flexora', sets: 3, reps: '12', swaps: ['Flexora sentada (12 reps)', 'Flexora em pe unilateral (12 reps)', 'Sliding leg curl (10 reps)'] },
            { id: 'a3', name: 'Agachamento goblet para banco', sets: 3, reps: '10', swaps: ['Step-up baixo (10 reps)', 'Leg press curto controlado (12 reps)', 'Split squat leve (10 reps)'] },
            { id: 'a4', name: 'Cadeira abdutora', sets: 3, reps: '15', swaps: ['Abducao no cabo (12 reps)', 'Caminhada lateral miniband (12 passos)', 'Abducao unilateral maquina (12 reps)'] },
            { id: 'a5', name: 'Pallof press', sets: 3, reps: '12 cada lado', swaps: ['Dead bug (10 cada lado)', 'Bird-dog (8 cada lado)', 'Prancha curta (20-30s)'] }
        ]
    },
    {
        id: 'ter-b',
        dayNumber: 2,
        tabLabel: 'TER - B',
        name: 'Superior A',
        desc: 'Peito + Ombro + Triceps',
        imageUrl: '',
        exercises: [
            { id: 'b1', name: 'Chest press sentado maquina', sets: 3, reps: '10', swaps: ['Supino halteres banco (10 reps)', 'Smith inclinado leve (10 reps)', 'Flexao maos no banco (12 reps)'] },
            { id: 'b2', name: 'Peck deck / crucifixo maquina', sets: 3, reps: '12', swaps: ['Crossover cabo (12 reps)', 'Crucifixo halteres leve (12 reps)', 'Chest press convergente (10 reps)'] },
            { id: 'b3', name: 'Elevacao lateral sentada', sets: 3, reps: '12', swaps: ['Maquina lateral raise (12 reps)', 'Cabo unilateral (12 reps)', 'Halteres sentado com encosto (12 reps)'] },
            { id: 'b4', name: 'Desenvolvimento sentado encosto', sets: 2, reps: '10', swaps: ['Landmine press (10 reps)', 'Maquina shoulder press leve (10 reps)', 'Elevacao frontal cabo (12 reps)'], obs: 'Se comprimir lombar, corte sem pena.' },
            { id: 'b5', name: 'Triceps corda no pulley', sets: 3, reps: '12', swaps: ['Triceps barra (12 reps)', 'Frances sentado encosto (12 reps)', 'Mergulho assistido maquina (10 reps)'] }
        ]
    },
    {
        id: 'qui-c',
        dayNumber: 4,
        tabLabel: 'QUI - C',
        name: 'Superior B',
        desc: 'Costas + Biceps + Core',
        imageUrl: '',
        exercises: [
            { id: 'c1', name: 'Puxada alta pegada neutra', sets: 3, reps: '10', swaps: ['Puxada supinada (10 reps)', 'Puxada unilateral cabo (10 reps)', 'Pull-down com triangulo (10 reps)'] },
            { id: 'c2', name: 'Remada com apoio no peito', sets: 3, reps: '10', swaps: ['Remada baixa sentada (12 reps)', 'Remada unilateral joelho banco (10 reps)', 'Maquina convergente (10 reps)'] },
            { id: 'c3', name: 'Face pull', sets: 3, reps: '12', swaps: ['Reverse peck deck (12 reps)', 'Crucifixo inverso banco inclinado (12 reps)', 'Remada alta cabo leve (12 reps)'] },
            { id: 'c4', name: 'Rosca alternada sentada', sets: 3, reps: '12', swaps: ['Rosca maquina (12 reps)', 'Rosca no cabo (12 reps)', 'Rosca martelo sentada (12 reps)'] },
            { id: 'c5', name: 'Side plank modificada', sets: 3, reps: '20s cada lado', swaps: ['Prancha normal curta (20-30s)', 'Bird-dog (8 cada lado)', 'Abdominal bracing (15s)'] }
        ]
    },
    {
        id: 'sex-d',
        dayNumber: 5,
        tabLabel: 'SEX - D',
        name: 'Inferiores 2',
        desc: 'Quad + Gluteo + Anti-rotacao',
        imageUrl: '',
        exercises: [
            { id: 'd1', name: 'Step-up baixo/medio', sets: 3, reps: '10 cada lado', swaps: ['Afundo estatico leve (10 reps)', 'Agachamento smith para banco (10 reps)', 'Cadeira extensora (12 reps)'] },
            { id: 'd2', name: 'Cadeira extensora', sets: 3, reps: '12', swaps: ['Leg press curto/controlado (12 reps)', 'Spanish squat com faixa (12 reps)', 'Goblet squat para banco (10 reps)'] },
            { id: 'd3', name: 'Hip thrust unilateral', sets: 3, reps: '10 cada lado', swaps: ['Glute bridge unilateral (10 reps)', 'Coice no cabo (12 reps)', 'Glute drive maquina (10 reps)'] },
            { id: 'd4', name: 'Panturrilha sentado/em pe', sets: 3, reps: '15', swaps: ['Panturrilha leg press (15 reps)', 'Panturrilha com halter (15 reps)', 'Smith calf raise (15 reps)'] },
            { id: 'd5', name: 'Pallof press lateral walk', sets: 3, reps: '20s cada lado', swaps: ['Dead bug (10 cada lado)', 'Bird-dog (8 cada lado)', 'Side plank modificada (20s)'] }
        ]
    }
];

const state = {
    currentDay: new Date().getDay(),
    activeWorkoutId: null,
    progress: {},
    swaps: {},
    audioUnlocked: false,
    settings: loadSettings(),
    workouts: loadWorkouts(),
    weights: loadWeights(),
    editingWorkoutId: null,
    configOpen: false,
    deferredInstallPrompt: null,
    installPromptVisible: false,
    imageSearch: {
        provider: 'wikimedia',
        query: '',
        offset: 0,
        pageSize: 10,
        hasMore: false
    }
};

const themeToggle = document.getElementById('themeToggle');
const sunIcon = document.getElementById('sunIcon');
const moonIcon = document.getElementById('moonIcon');
const beepSound = document.getElementById('beepSound');
const daySelector = document.getElementById('daySelector');
const exercisesList = document.getElementById('exercisesList');
const workoutTitle = document.getElementById('workoutTitle');
const restMessage = document.getElementById('restMessage');
const dayLabel = document.getElementById('dayLabel');
const muscleGroup = document.getElementById('muscleGroup');
const workoutHero = document.getElementById('workoutHero');
const workoutHeroImage = document.getElementById('workoutHeroImage');
const toggleConfigBtn = document.getElementById('toggleConfigBtn');
const configPanel = document.getElementById('configPanel');
const weightTrackingToggle = document.getElementById('weightTrackingToggle');
const workoutManagerList = document.getElementById('workoutManagerList');
const workoutForm = document.getElementById('workoutForm');
const workoutFormTitle = document.getElementById('workoutFormTitle');
const cancelWorkoutEditBtn = document.getElementById('cancelWorkoutEditBtn');
const addWorkoutBtn = document.getElementById('addWorkoutBtn');
const resetDefaultsBtn = document.getElementById('resetDefaultsBtn');
const addExerciseBtn = document.getElementById('addExerciseBtn');
const exerciseEditorList = document.getElementById('exerciseEditorList');
const fillExampleJsonBtn = document.getElementById('fillExampleJsonBtn');
const exportJsonBtn = document.getElementById('exportJsonBtn');
const importJsonBtn = document.getElementById('importJsonBtn');
const jsonEditor = document.getElementById('jsonEditor');
const workoutTabLabelInput = document.getElementById('workoutTabLabel');
const workoutDayNumberInput = document.getElementById('workoutDayNumber');
const workoutNameInput = document.getElementById('workoutName');
const workoutDescInput = document.getElementById('workoutDesc');
const workoutImageUrlInput = document.getElementById('workoutImageUrl');
const searchWorkoutImageBtn = document.getElementById('searchWorkoutImageBtn');
const installPrompt = document.getElementById('installPrompt');
const installPromptText = document.getElementById('installPromptText');
const installAppBtn = document.getElementById('installAppBtn');
const installLaterBtn = document.getElementById('installLaterBtn');
const dismissInstallPromptBtn = document.getElementById('dismissInstallPromptBtn');
const imageSearchModal = document.getElementById('imageSearchModal');
const closeImageSearchBtn = document.getElementById('closeImageSearchBtn');
const imageSearchInput = document.getElementById('imageSearchInput');
const submitImageSearchBtn = document.getElementById('submitImageSearchBtn');
const imageSearchStatus = document.getElementById('imageSearchStatus');
const imageSearchResults = document.getElementById('imageSearchResults');
const imageSearchProviders = document.getElementById('imageSearchProviders');
const loadMoreImageResultsBtn = document.getElementById('loadMoreImageResultsBtn');

const WIKIMEDIA_IMAGE_SEARCH_ENDPOINT = 'https://commons.wikimedia.org/w/api.php';
const OPENVERSE_IMAGE_SEARCH_ENDPOINT = 'https://api.openverse.org/v1/images/';
const FLICKR_PUBLIC_FEED_ENDPOINT = 'https://www.flickr.com/services/feeds/photos_public.gne';
const IMAGE_SEARCH_DEFAULT_TERM = 'academia exercicio';

function cloneDefaultWorkouts() {
    return normalizeWorkouts(JSON.parse(JSON.stringify(DEFAULT_WORKOUTS)));
}

function createId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

function loadJson(key, fallbackValue) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) {
            return fallbackValue;
        }
        return JSON.parse(raw);
    } catch (error) {
        return fallbackValue;
    }
}

function saveJson(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function loadSettings() {
    const settings = loadJson(STORAGE_KEYS.settings, DEFAULT_SETTINGS);
    return {
        enableWeightTracking: Boolean(settings.enableWeightTracking)
    };
}

function saveSettings() {
    saveJson(STORAGE_KEYS.settings, state.settings);
}

function loadWeights() {
    return loadJson(STORAGE_KEYS.weights, {});
}

function saveWeights() {
    saveJson(STORAGE_KEYS.weights, state.weights);
}

function normalizeExercise(exercise, workoutIndex, exerciseIndex) {
    const rawSwaps = Array.isArray(exercise.swaps) ? exercise.swaps : [];
    return {
        id: exercise.id || createId(`ex-${workoutIndex}-${exerciseIndex}`),
        name: String(exercise.name || `Exercício ${exerciseIndex + 1}`).trim(),
        sets: Math.max(1, parseInt(exercise.sets, 10) || 3),
        reps: String(exercise.reps || '10').trim(),
        obs: String(exercise.obs || '').trim(),
        imageUrl: String(exercise.imageUrl || '').trim(),
        swaps: rawSwaps.map((swap) => {
            if (typeof swap === 'string') {
                return {
                    name: swap.trim(),
                    imageUrl: ''
                };
            }

            return {
                name: String(swap.name || '').trim(),
                imageUrl: String(swap.imageUrl || '').trim()
            };
        }).filter((swap) => swap.name)
    };
}

function normalizeWorkout(workout, index) {
    const exercises = Array.isArray(workout.exercises) ? workout.exercises : [];
    return {
        id: workout.id || createId(`workout-${index}`),
        dayNumber: Number.isInteger(Number(workout.dayNumber)) ? Number(workout.dayNumber) : index + 1,
        tabLabel: String(workout.tabLabel || workout.badge || `TREINO ${index + 1}`).trim(),
        name: String(workout.name || `Treino ${index + 1}`).trim(),
        desc: String(workout.desc || workout.description || '').trim(),
        imageUrl: String(workout.imageUrl || '').trim(),
        exercises: exercises.map((exercise, exerciseIndex) => normalizeExercise(exercise, index, exerciseIndex))
    };
}

function normalizeWorkouts(input) {
    const list = Array.isArray(input) ? input : [];
    return list.map((workout, index) => normalizeWorkout(workout, index)).filter((workout) => workout.tabLabel && workout.name);
}

function loadWorkouts() {
    const saved = loadJson(STORAGE_KEYS.workouts, null);
    if (!saved) {
        return cloneDefaultWorkouts();
    }

    const normalized = normalizeWorkouts(saved);
    return normalized.length ? normalized : cloneDefaultWorkouts();
}

function saveWorkouts() {
    saveJson(STORAGE_KEYS.workouts, state.workouts);
}

function sortWorkouts(workouts) {
    return [...workouts].sort((left, right) => {
        if (left.dayNumber !== right.dayNumber) {
            return left.dayNumber - right.dayNumber;
        }
        return left.tabLabel.localeCompare(right.tabLabel);
    });
}

function getWorkoutById(workoutId) {
    return state.workouts.find((workout) => workout.id === workoutId) || null;
}

function getInitialWorkoutId() {
    const todayWorkout = sortWorkouts(state.workouts).find((workout) => workout.dayNumber === state.currentDay);
    if (todayWorkout) {
        return todayWorkout.id;
    }
    return 'rest';
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function escapeForSingleQuotedJs(value) {
    return String(value)
        .replace(/\\/g, '\\\\')
        .replace(/'/g, "\\'");
}

function encodeSwapPayload(payload) {
    return escapeForSingleQuotedJs(encodeURIComponent(JSON.stringify(payload)));
}

function decodeSwapPayload(payload) {
    return JSON.parse(decodeURIComponent(payload));
}

function isIosDevice() {
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function isStandaloneMode() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
}

function wasInstallPromptDismissedRecently() {
    const dismissedAt = Number(localStorage.getItem(STORAGE_KEYS.installPromptDismissedAt) || '0');
    const threeDays = 1000 * 60 * 60 * 24 * 3;
    return dismissedAt > 0 && (Date.now() - dismissedAt) < threeDays;
}

function rememberInstallDismiss() {
    localStorage.setItem(STORAGE_KEYS.installPromptDismissedAt, String(Date.now()));
}

function showInstallPrompt(options = {}) {
    if (!installPrompt || state.installPromptVisible || isStandaloneMode()) {
        return;
    }

    if (!options.force && wasInstallPromptDismissedRecently()) {
        return;
    }

    installPromptText.textContent = options.message || 'Adicione o Treino Personalizado a tela inicial para abrir como app.';
    installAppBtn.textContent = options.buttonLabel || 'Instalar app';
    installAppBtn.dataset.mode = options.mode || 'install';
    installPrompt.classList.remove('hidden');
    state.installPromptVisible = true;
}

function hideInstallPrompt(rememberDismiss = false) {
    if (!installPrompt) {
        return;
    }

    installPrompt.classList.add('hidden');
    state.installPromptVisible = false;

    if (rememberDismiss) {
        rememberInstallDismiss();
    }
}

async function registerServiceWorker() {
    if (!('serviceWorker' in navigator)) {
        return;
    }

    try {
        await navigator.serviceWorker.register('./sw.js');
    } catch (error) {
        console.error('Erro ao registrar service worker:', error);
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    sunIcon.classList.toggle('hidden', !isDark);
    moonIcon.classList.toggle('hidden', isDark);
    localStorage.setItem(STORAGE_KEYS.theme, isDark ? 'dark' : 'light');
}

function unlockAudio() {
    if (state.audioUnlocked || !beepSound) {
        return;
    }

    beepSound.volume = 0;
    beepSound.play()
        .then(() => {
            beepSound.pause();
            beepSound.currentTime = 0;
            beepSound.volume = 1;
            state.audioUnlocked = true;
        })
        .catch(() => {
            beepSound.volume = 1;
        });
}

function setConfigOpen(open) {
    state.configOpen = open;
    configPanel.classList.toggle('hidden', !open);
    toggleConfigBtn.textContent = open ? 'Fechar' : 'Abrir';
}

function getDayButtonTarget() {
    return daySelector.querySelector('[data-day-target="active"]')
        || daySelector.querySelector('[data-day-target="today"]')
        || null;
}

function ensureDayButtonVisibility(behavior = 'auto') {
    const target = getDayButtonTarget();
    if (!target) {
        return;
    }

    window.requestAnimationFrame(() => {
        target.scrollIntoView({
            behavior,
            block: 'nearest',
            inline: 'center'
        });
    });
}

function renderDayButtons() {
    const hasWorkoutToday = state.workouts.some((workout) => workout.dayNumber === state.currentDay);
    const buttons = sortWorkouts(state.workouts).map((workout) => {
        const isToday = hasWorkoutToday && workout.dayNumber === state.currentDay;
        const isActive = workout.id === state.activeWorkoutId;
        const classes = ['day-btn', 'px-4', 'py-2', 'rounded-full', 'whitespace-nowrap', 'text-sm', 'font-semibold'];
        const targetType = isToday ? 'today' : (isActive ? 'active' : '');
        if (isActive) {
            classes.push('is-active');
        }
        if (isToday) {
            classes.push('is-today');
        }
        return `<button type="button" onclick="changeWorkout('${workout.id}')" data-day-target="${targetType}" class="${classes.join(' ')}">${escapeHtml(workout.tabLabel)}</button>`;
    });

    buttons.push(`<button type="button" onclick="changeWorkout('rest')" data-day-target="${hasWorkoutToday ? (state.activeWorkoutId === 'rest' ? 'active' : '') : 'today'}" class="day-btn px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold ${state.activeWorkoutId === 'rest' ? 'is-active' : ''} ${hasWorkoutToday ? '' : 'is-today'}">OUTROS</button>`);
    daySelector.innerHTML = buttons.join('');
}

function renderWorkoutHero(workout) {
    if (workout && workout.imageUrl) {
        workoutHeroImage.src = workout.imageUrl;
        workoutHeroImage.alt = `Imagem do treino ${workout.name}`;
        workoutHero.classList.remove('hidden');
    } else {
        workoutHeroImage.removeAttribute('src');
        workoutHero.classList.add('hidden');
    }
}

function getWeightValue(exerciseId) {
    return state.weights[exerciseId] || '';
}

function renderExercises() {
    const workout = getWorkoutById(state.activeWorkoutId);
    exercisesList.innerHTML = '';

    if (!workout) {
        workoutTitle.classList.add('hidden');
        restMessage.classList.remove('hidden');
        renderWorkoutHero(null);
        return;
    }

    workoutTitle.classList.remove('hidden');
    restMessage.classList.add('hidden');
    dayLabel.innerText = workout.name;
    muscleGroup.innerText = workout.desc ? workout.desc : '';
    renderWorkoutHero(workout);

    workout.exercises.forEach((exercise) => {
        const card = document.createElement('div');
        card.className = 'card p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm relative overflow-hidden';

        const exerciseProgress = state.progress[exercise.id] || 0;
        const selectedSwap = state.swaps[exercise.id] || { name: exercise.name, imageUrl: exercise.imageUrl || '' };
        const originalPayload = encodeSwapPayload({ name: exercise.name, imageUrl: exercise.imageUrl || '' });
        const weightControl = state.settings.enableWeightTracking ? `
            <div class="weight-control mt-4">
                <label class="weight-label">
                    <span>Carga</span>
                    <div class="weight-input-wrap">
                        <input type="number" step="0.5" min="0" value="${escapeHtml(getWeightValue(exercise.id))}" oninput="updateExerciseWeight('${exercise.id}', this.value)">
                        <span>kg</span>
                    </div>
                </label>
            </div>
        ` : '';
        const exerciseImage = selectedSwap.imageUrl ? `
            <div class="exercise-media mb-4">
                <img src="${escapeHtml(selectedSwap.imageUrl)}" alt="${escapeHtml(selectedSwap.name)}" class="exercise-image">
            </div>
        ` : '';

        card.innerHTML = `
            <div class="flex justify-between items-start mb-4 gap-3">
                <div class="flex-1">
                    <h3 class="font-bold text-lg leading-tight" id="title-${exercise.id}">${escapeHtml(selectedSwap.name)}</h3>
                    <p class="text-sm opacity-60">${exercise.sets} series x ${escapeHtml(exercise.reps)}</p>
                    ${exercise.obs ? `<p class="text-xs text-red-400 mt-1 font-semibold italic">${escapeHtml(exercise.obs)}</p>` : ''}
                </div>
                <button onclick="showSwaps('${exercise.id}')" class="text-xs bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-md font-medium border border-slate-200 dark:border-slate-600">TROCAR</button>
            </div>

            ${exerciseImage}

            <div class="flex items-center gap-4 mb-4">
                <div class="flex gap-2" onclick="incrementSeries('${exercise.id}', ${exercise.sets})">
                    ${Array.from({ length: exercise.sets }).map((_, index) => `
                        <div class="series-dot ${index < exerciseProgress ? 'active' : ''}">
                            ${index < exerciseProgress ? '✓' : index + 1}
                        </div>
                    `).join('')}
                </div>
                <div class="flex-1 text-right">
                    <button onclick="startTimer(this)" class="bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400 text-xs font-bold px-3 py-2 rounded-lg transition-all active:scale-95">
                        ⏱️ DESCANSO
                    </button>
                </div>
            </div>

            ${weightControl}

            <div class="absolute bottom-0 left-0 h-1 bg-blue-500 timer-progress" style="width: 0%"></div>

            <div id="swaps-${exercise.id}" class="hidden absolute inset-0 bg-white dark:bg-slate-900 z-10 p-4 overflow-y-auto">
                <div class="flex justify-between items-center mb-3">
                    <h4 class="font-bold text-sm uppercase">Trocas disponiveis</h4>
                    <button onclick="hideSwaps('${exercise.id}')" class="text-xs font-bold text-red-500">FECHAR</button>
                </div>
                <div class="space-y-2">
                    <button onclick="applySwap('${exercise.id}', '${originalPayload}')" class="swap-option w-full text-left p-2 text-sm border rounded bg-slate-50 dark:bg-slate-800">
                        ${exercise.imageUrl ? `<img src="${escapeHtml(exercise.imageUrl)}" alt="${escapeHtml(exercise.name)}" class="swap-option-image">` : ''}
                        <span>${escapeHtml(exercise.name)} (Original)</span>
                    </button>
                    ${exercise.swaps.map((swap) => `
                        <button onclick="applySwap('${exercise.id}', '${encodeSwapPayload(swap)}')" class="swap-option w-full text-left p-2 text-sm border rounded hover:border-blue-500 dark:border-slate-700">
                            ${swap.imageUrl ? `<img src="${escapeHtml(swap.imageUrl)}" alt="${escapeHtml(swap.name)}" class="swap-option-image">` : ''}
                            <span>${escapeHtml(swap.name)}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        exercisesList.appendChild(card);
    });
}

function renderWorkoutManager() {
    const workouts = sortWorkouts(state.workouts);
    workoutManagerList.innerHTML = workouts.map((workout) => `
        <div class="manager-card">
            <div class="manager-card-main">
                ${workout.imageUrl ? `<img src="${escapeHtml(workout.imageUrl)}" alt="${escapeHtml(workout.name)}" class="manager-thumb">` : `<div class="manager-thumb manager-thumb-placeholder">${escapeHtml(workout.tabLabel.slice(0, 2) || 'TR')}</div>`}
                <div>
                    <div class="manager-badge">${escapeHtml(workout.tabLabel)}</div>
                    <h4 class="font-semibold mt-1">${escapeHtml(workout.name)}</h4>
                    <p class="text-sm opacity-80">${escapeHtml(workout.desc || 'Sem descricao')}</p>
                    <p class="text-xs opacity-80 mt-1">${workout.exercises.length} exercício(s)</p>
                </div>
            </div>
            <div class="manager-actions">
                <button type="button" class="config-btn" onclick="editWorkout('${workout.id}')">Editar</button>
                <button type="button" class="config-btn config-btn-danger" onclick="deleteWorkout('${workout.id}')">Excluir</button>
            </div>
        </div>
    `).join('');
}

function renderExerciseEditor(exercises) {
    exerciseEditorList.innerHTML = exercises.map((exercise, index) => `
        <div class="exercise-editor-card">
            <div class="exercise-editor-head">
                <strong>Exercício ${index + 1}</strong>
                <button type="button" class="config-btn config-btn-danger" onclick="removeExerciseField('${exercise.id}')">Remover</button>
            </div>
            <label class="field">
                <span>Nome</span>
                <input type="text" data-exercise-id="${exercise.id}" data-field="name" value="${escapeHtml(exercise.name)}" placeholder="Nome do exercício">
            </label>
            <div class="grid grid-cols-2 gap-3">
                <label class="field">
                    <span>Series</span>
                    <input type="number" min="1" data-exercise-id="${exercise.id}" data-field="sets" value="${exercise.sets}">
                </label>
                <label class="field">
                    <span>Repeticoes</span>
                    <input type="text" data-exercise-id="${exercise.id}" data-field="reps" value="${escapeHtml(exercise.reps)}" placeholder="10">
                </label>
            </div>
            <label class="field">
                <span>Observacao</span>
                <input type="text" data-exercise-id="${exercise.id}" data-field="obs" value="${escapeHtml(exercise.obs || '')}" placeholder="Opcional">
            </label>
            <label class="field">
                <span>Imagem do exercício</span>
                <div class="image-field-row">
                    <input type="url" data-exercise-id="${exercise.id}" data-field="imageUrl" value="${escapeHtml(exercise.imageUrl || '')}" placeholder="https://...">
                    <button type="button" class="config-btn config-btn-secondary" data-action="search-exercise-image" data-exercise-id="${exercise.id}">Buscar imagem</button>
                </div>
            </label>
            <label class="field">
                <span>Trocas (uma por linha)</span>
                <textarea data-exercise-id="${exercise.id}" data-field="swaps">${escapeHtml((exercise.swaps || []).map((swap) => swap.name).join('\n'))}</textarea>
            </label>
            <label class="field">
                <span>Imagens das trocas (uma por linha, mesma ordem)</span>
                <textarea data-exercise-id="${exercise.id}" data-field="swapImages">${escapeHtml((exercise.swaps || []).map((swap) => swap.imageUrl || '').join('\n'))}</textarea>
            </label>
        </div>
    `).join('');
}

function openWorkoutForm(workout) {
    state.editingWorkoutId = workout.id;
    workoutFormTitle.textContent = workout.id.startsWith('draft-') ? 'Novo treino' : 'Editar treino';
    workoutTabLabelInput.value = workout.tabLabel;
    workoutDayNumberInput.value = String(workout.dayNumber);
    workoutNameInput.value = workout.name;
    workoutDescInput.value = workout.desc;
    workoutImageUrlInput.value = workout.imageUrl;
    workoutForm.dataset.workoutId = workout.id;
    workoutForm.classList.remove('hidden');
    renderExerciseEditor(workout.exercises);
}

function closeWorkoutForm() {
    state.editingWorkoutId = null;
    delete workoutForm.dataset.workoutId;
    workoutForm.reset();
    workoutForm.classList.add('hidden');
    exerciseEditorList.innerHTML = '';
}

function getCurrentFormExercises() {
    const grouped = {};
    exerciseEditorList.querySelectorAll('[data-exercise-id]').forEach((input) => {
        const exerciseId = input.dataset.exerciseId;
        const field = input.dataset.field;
        if (!grouped[exerciseId]) {
            grouped[exerciseId] = { id: exerciseId, swaps: [], swapImages: [] };
        }
        grouped[exerciseId][field] = input.value;
    });

    return Object.values(grouped).map((exercise, index) => normalizeExercise({
        ...exercise,
        swaps: String(exercise.swaps || '')
            .split('\n')
            .map((item) => item.trim())
            .filter(Boolean)
            .map((name, swapIndex) => ({
                name,
                imageUrl: String(exercise.swapImages || '')
                    .split('\n')
                    .map((item) => item.trim())[swapIndex] || ''
            }))
    }, 'form', index));
}

function createDraftWorkout() {
    return {
        id: createId('draft'),
        dayNumber: 1,
        tabLabel: 'NOVO',
        name: 'Novo treino',
        desc: '',
        imageUrl: '',
        exercises: [
            normalizeExercise({ name: 'Novo exercício', sets: 3, reps: '10', swaps: [] }, 'draft', 0)
        ]
    };
}

function updateJsonEditorWithExample() {
    const example = {
        settings: { enableWeightTracking: false },
        workouts: [
            {
                dayNumber: 1,
                tabLabel: 'SEG - PUSH',
                name: 'Push',
                desc: 'Peito + Ombro + Triceps',
                imageUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80',
                exercises: [
                    { name: 'Supino reto', sets: 4, reps: '8-10', swaps: ['Chest press', 'Supino com halter'] },
                    { name: 'Desenvolvimento sentado', sets: 3, reps: '10', swaps: ['Shoulder press maquina'] }
                ]
            },
            {
                dayNumber: 3,
                tabLabel: 'QUA - PULL',
                name: 'Pull',
                desc: 'Costas + Biceps',
                imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
                exercises: [
                    { name: 'Puxada frontal', sets: 4, reps: '10', swaps: ['Pulldown com triangulo'] },
                    { name: 'Rosca alternada', sets: 3, reps: '12', swaps: ['Rosca no cabo'] }
                ]
            },
            {
                dayNumber: 5,
                tabLabel: 'SEX - LEG',
                name: 'Leg Day',
                desc: 'Quad + Posterior + Gluteo',
                imageUrl: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=800&q=80',
                exercises: [
                    { name: 'Leg press', sets: 4, reps: '12', swaps: ['Agachamento goblet'] },
                    { name: 'Mesa flexora', sets: 3, reps: '12', swaps: ['Flexora sentada'] }
                ]
            }
        ]
    };

    jsonEditor.value = JSON.stringify(example, null, 2);
}

function exportCurrentConfig() {
    const payload = {
        settings: state.settings,
        workouts: state.workouts
    };
    jsonEditor.value = JSON.stringify(payload, null, 2);
}

function importJsonConfig() {
    try {
        const parsed = JSON.parse(jsonEditor.value);
        const workoutsInput = Array.isArray(parsed) ? parsed : parsed.workouts;
        const settingsInput = Array.isArray(parsed) ? null : parsed.settings;
        const workouts = normalizeWorkouts(workoutsInput);

        if (!workouts.length) {
            alert('Nao encontrei treinos validos no JSON.');
            return;
        }

        state.workouts = workouts;
        if (settingsInput) {
            state.settings.enableWeightTracking = Boolean(settingsInput.enableWeightTracking);
            saveSettings();
        }
        saveWorkouts();
        syncWeightToggle();
        state.activeWorkoutId = getInitialWorkoutId();
        closeWorkoutForm();
        renderAll();
    } catch (error) {
        alert('O JSON esta invalido. Revise e tente novamente.');
    }
}

function syncWeightToggle() {
    weightTrackingToggle.checked = state.settings.enableWeightTracking;
}

function setImageSearchProvider(provider) {
    state.imageSearch.provider = ['openverse', 'flickr'].includes(provider) ? provider : 'wikimedia';
    imageSearchProviders.querySelectorAll('[data-provider]').forEach((button) => {
        button.classList.toggle('is-active', button.dataset.provider === state.imageSearch.provider);
        button.classList.toggle('config-btn-secondary', button.dataset.provider !== state.imageSearch.provider);
    });
}

function resetImageSearchPagination(query = '') {
    state.imageSearch.query = query;
    state.imageSearch.offset = 0;
    state.imageSearch.hasMore = false;
    loadMoreImageResultsBtn.classList.add('hidden');
}

function getImageSearchStatusLabel(isLoading, message = '') {
    if (isLoading) {
        return 'Buscando imagens...';
    }
    return message;
}

function setImageSearchStatus(message = '', isLoading = false) {
    imageSearchStatus.textContent = getImageSearchStatusLabel(isLoading, message);
    imageSearchStatus.classList.toggle('hidden', !imageSearchStatus.textContent);
}

function updateLoadMoreVisibility() {
    loadMoreImageResultsBtn.classList.toggle('hidden', !state.imageSearch.hasMore);
}

function renderImageSearchResults(results = [], append = false) {
    if (!results.length) {
        if (!append) {
            imageSearchResults.innerHTML = '<div class="image-search-empty">Nenhuma imagem encontrada. Tente outro termo.</div>';
        }
        return;
    }

    const markup = results.map((result) => `
        <button type="button" class="image-search-item" onclick="applyImageSearchResult('${escapeForSingleQuotedJs(result.url)}')">
            <img src="${escapeHtml(result.thumbnail || result.url)}" alt="${escapeHtml(result.title)}" class="image-search-thumb" loading="lazy">
            <div class="image-search-body">
                <div class="image-search-name">${escapeHtml(result.title)}</div>
                <div class="image-search-link">Usar esse link</div>
            </div>
        </button>
    `).join('');

    imageSearchResults.innerHTML = append ? `${imageSearchResults.innerHTML}${markup}` : markup;
}

function clearImageSearchResults() {
    imageSearchResults.innerHTML = '';
    updateLoadMoreVisibility();
}

function getImageSearchSeedTerm(input) {
    if (input && input.value.trim()) {
        return input.value.trim();
    }

    if (state.activeWorkoutId && state.activeWorkoutId !== 'rest') {
        const workout = getWorkoutById(state.activeWorkoutId);
        if (workout?.name) {
            return workout.name;
        }
    }

    return IMAGE_SEARCH_DEFAULT_TERM;
}

function openImageSearch(targetInput, seedTerm = '') {
    if (!targetInput || !imageSearchModal) {
        return;
    }

    imageSearchModal.classList.remove('hidden');
    const initialQuery = seedTerm || getImageSearchSeedTerm(targetInput);
    imageSearchInput.value = initialQuery;
    imageSearchModal.dataset.targetSelector = targetInput.id
        ? `#${targetInput.id}`
        : `[data-exercise-id="${targetInput.dataset.exerciseId}"][data-field="${targetInput.dataset.field}"]`;
    resetImageSearchPagination(initialQuery);
    setImageSearchProvider(state.imageSearch.provider);
    setImageSearchStatus('');
    clearImageSearchResults();
    imageSearchInput.focus();
    imageSearchInput.select();
}

function getImageSearchTarget() {
    const selector = imageSearchModal.dataset.targetSelector;
    return selector ? document.querySelector(selector) : null;
}

function closeImageSearch() {
    if (!imageSearchModal) {
        return;
    }

    imageSearchModal.classList.add('hidden');
    delete imageSearchModal.dataset.targetSelector;
    setImageSearchStatus('');
    resetImageSearchPagination('');
    clearImageSearchResults();
}

function getWikimediaSearchUrl(query) {
    const url = new URL(WIKIMEDIA_IMAGE_SEARCH_ENDPOINT);
    url.searchParams.set('action', 'query');
    url.searchParams.set('generator', 'search');
    url.searchParams.set('gsrsearch', query);
    url.searchParams.set('gsrnamespace', '6');
    url.searchParams.set('gsrlimit', String(state.imageSearch.pageSize));
    url.searchParams.set('gsroffset', String(state.imageSearch.offset));
    url.searchParams.set('prop', 'imageinfo');
    url.searchParams.set('iiprop', 'url');
    url.searchParams.set('iiurlwidth', '480');
    url.searchParams.set('format', 'json');
    url.searchParams.set('origin', '*');
    return url;
}

async function searchWikimediaImages(query) {
    const response = await fetch(getWikimediaSearchUrl(query).toString());
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    const pages = Object.values(payload.query?.pages || {});
    return {
        results: pages.map((page) => {
            const imageInfo = page.imageinfo?.[0];
            return {
                title: String(page.title || '').replace(/^File:/i, ''),
                url: imageInfo?.url || '',
                thumbnail: imageInfo?.thumburl || imageInfo?.url || ''
            };
        }).filter((item) => item.url),
        hasMore: Boolean(pages.length === state.imageSearch.pageSize)
    };
}

function getOpenverseSearchUrl(query) {
    const url = new URL(OPENVERSE_IMAGE_SEARCH_ENDPOINT);
    url.searchParams.set('q', query);
    url.searchParams.set('page_size', String(state.imageSearch.pageSize));
    url.searchParams.set('page', String(Math.floor(state.imageSearch.offset / state.imageSearch.pageSize) + 1));
    return url;
}

async function searchOpenverseImages(query) {
    const response = await fetch(getOpenverseSearchUrl(query).toString(), {
        headers: {
            'User-Agent': 'TreinoApp/1.0 ImageSearch'
        }
    });
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }

    const payload = await response.json();
    return {
        results: (payload.results || []).map((item) => ({
            title: String(item.title || 'Imagem'),
            url: item.url || '',
            thumbnail: item.thumbnail || item.url || ''
        })).filter((item) => item.url),
        hasMore: Boolean(payload.page_count && payload.page < payload.page_count)
    };
}

function loadFlickrFeed(query) {
    return new Promise((resolve, reject) => {
        const callbackName = 'jsonFlickrFeed';
        const previousCallback = window[callbackName];
        const script = document.createElement('script');
        const cleanup = () => {
            window[callbackName] = previousCallback;
            script.remove();
        };
        const url = new URL(FLICKR_PUBLIC_FEED_ENDPOINT);
        const tags = query
            .split(/\s+/)
            .map((item) => item.trim())
            .filter(Boolean)
            .join(',');

        url.searchParams.set('format', 'json');
        url.searchParams.set('lang', 'pt-br');
        url.searchParams.set('tagmode', 'any');
        if (tags) {
            url.searchParams.set('tags', tags);
        }

        window[callbackName] = (payload) => {
            cleanup();
            resolve(payload);
        };

        script.onerror = () => {
            cleanup();
            reject(new Error('flickr-feed-error'));
        };
        script.src = url.toString();
        document.body.appendChild(script);
    });
}

async function searchFlickrImages(query) {
    const payload = await loadFlickrFeed(query);
    return {
        results: (payload.items || []).map((item) => ({
            title: String(item.title || 'Imagem Flickr'),
            url: item.media?.m || '',
            thumbnail: item.media?.m || ''
        })).filter((item) => item.url),
        hasMore: false
    };
}

async function searchImages({ append = false } = {}) {
    const query = imageSearchInput.value.trim();
    if (!query) {
        setImageSearchStatus('Digite um termo para buscar.');
        clearImageSearchResults();
        imageSearchInput.focus();
        return;
    }

    if (!append) {
        resetImageSearchPagination(query);
        clearImageSearchResults();
    }

    setImageSearchStatus('', true);

    try {
        let response;
        if (state.imageSearch.provider === 'openverse') {
            response = await searchOpenverseImages(query);
        } else if (state.imageSearch.provider === 'flickr') {
            response = await searchFlickrImages(query);
        } else {
            response = await searchWikimediaImages(query);
        }

        state.imageSearch.query = query;
        state.imageSearch.offset += response.results.length;
        state.imageSearch.hasMore = response.hasMore && response.results.length > 0;
        setImageSearchStatus(
            response.results.length
                ? `${state.imageSearch.offset} imagem(ns) carregada(s) de ${state.imageSearch.provider === 'openverse' ? 'Openverse' : state.imageSearch.provider === 'flickr' ? 'Flickr' : 'Wikimedia Commons'}.`
                : 'Nenhuma imagem encontrada.'
        );
        renderImageSearchResults(response.results, append);
        updateLoadMoreVisibility();
    } catch (error) {
        console.error('Erro ao buscar imagens:', error);
        state.imageSearch.hasMore = false;
        updateLoadMoreVisibility();

        setImageSearchStatus('Nao foi possivel buscar imagens agora.');
        if (!append) {
            renderImageSearchResults([]);
        }
    }
}

function applyImageSearchResult(url) {
    const targetInput = getImageSearchTarget();
    if (!targetInput) {
        return;
    }

    targetInput.value = url;
    targetInput.dispatchEvent(new Event('input', { bubbles: true }));
    closeImageSearch();
}

function renderAll() {
    renderDayButtons();
    renderExercises();
    renderWorkoutManager();
    ensureDayButtonVisibility();
}

function changeWorkout(workoutId) {
    state.activeWorkoutId = workoutId;
    renderDayButtons();
    renderExercises();
    ensureDayButtonVisibility('smooth');
}

function incrementSeries(exerciseId, total) {
    if (!state.progress[exerciseId]) {
        state.progress[exerciseId] = 0;
    }

    state.progress[exerciseId] += 1;

    if (state.progress[exerciseId] > total) {
        state.progress[exerciseId] = 0;
    }

    renderExercises();

    if (state.progress[exerciseId] === total) {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#3b82f6', '#60a5fa', '#ffffff']
        });
    }
}

function showSwaps(exerciseId) {
    const element = document.getElementById(`swaps-${exerciseId}`);
    if (element) {
        element.classList.remove('hidden');
    }
}

function hideSwaps(exerciseId) {
    const element = document.getElementById(`swaps-${exerciseId}`);
    if (element) {
        element.classList.add('hidden');
    }
}

function applySwap(exerciseId, newName) {
    state.swaps[exerciseId] = decodeSwapPayload(newName);
    renderExercises();
}

function startTimer(button) {
    const card = button.closest('.card');
    const progressBar = card.querySelector('.timer-progress');

    unlockAudio();

    if (button.dataset.running === 'true') {
        return;
    }

    let timeLeft = 60;
    button.dataset.running = 'true';
    button.classList.add('opacity-50');

    const interval = setInterval(() => {
        timeLeft -= 1;
        const percent = ((60 - timeLeft) / 60) * 100;
        progressBar.style.width = `${percent}%`;
        button.innerText = `⏳ ${timeLeft}s`;

        if (timeLeft <= 0) {
            clearInterval(interval);
            button.innerText = '⏱️ DESCANSO';
            button.dataset.running = 'false';
            button.classList.remove('opacity-50');
            progressBar.style.width = '0%';
            beepSound.currentTime = 0;
            beepSound.play().catch(() => console.log('Erro ao tocar som: interação necessaria'));
        }
    }, 1000);
}

function updateExerciseWeight(exerciseId, value) {
    const trimmed = String(value).trim();
    if (!trimmed) {
        delete state.weights[exerciseId];
    } else {
        state.weights[exerciseId] = trimmed;
    }
    saveWeights();
}

function editWorkout(workoutId) {
    const workout = getWorkoutById(workoutId);
    if (!workout) {
        return;
    }
    openWorkoutForm(JSON.parse(JSON.stringify(workout)));
    setConfigOpen(true);
}

function deleteWorkout(workoutId) {
    const workout = getWorkoutById(workoutId);
    if (!workout) {
        return;
    }

    const confirmed = window.confirm(`Excluir o treino "${workout.name}"?`);
    if (!confirmed) {
        return;
    }

    state.workouts = state.workouts.filter((item) => item.id !== workoutId);
    if (!state.workouts.length) {
        state.workouts = cloneDefaultWorkouts();
    }
    saveWorkouts();

    if (state.activeWorkoutId === workoutId) {
        state.activeWorkoutId = getInitialWorkoutId();
    }

    if (state.editingWorkoutId === workoutId) {
        closeWorkoutForm();
    }

    renderAll();
}

function removeExerciseField(exerciseId) {
    const cards = exerciseEditorList.querySelectorAll('.exercise-editor-card');
    if (cards.length === 1) {
        alert('Deixe pelo menos um exercício no treino.');
        return;
    }

    const element = exerciseEditorList.querySelector(`[data-exercise-id="${exerciseId}"]`)?.closest('.exercise-editor-card');
    if (element) {
        element.remove();
    }
}

function addExerciseField() {
    const exercises = getCurrentFormExercises();
    exercises.push(normalizeExercise({ name: 'Novo exercício', sets: 3, reps: '10', swaps: [] }, 'form', exercises.length));
    renderExerciseEditor(exercises);
}

function handleWorkoutSubmit(event) {
    event.preventDefault();

    const workoutId = workoutForm.dataset.workoutId || createId('workout');
    const exercises = getCurrentFormExercises();

    if (!workoutTabLabelInput.value.trim() || !workoutNameInput.value.trim()) {
        alert('Preencha pelo menos badge e nome do treino.');
        return;
    }

    const workout = normalizeWorkout({
        id: workoutId.startsWith('draft-') ? createId('workout') : workoutId,
        dayNumber: parseInt(workoutDayNumberInput.value, 10),
        tabLabel: workoutTabLabelInput.value,
        name: workoutNameInput.value,
        desc: workoutDescInput.value,
        imageUrl: workoutImageUrlInput.value,
        exercises
    }, 0);

    const existingIndex = state.workouts.findIndex((item) => item.id === workoutId || item.id === workout.id);
    if (existingIndex >= 0) {
        state.workouts.splice(existingIndex, 1, workout);
    } else {
        state.workouts.push(workout);
    }

    saveWorkouts();
    state.activeWorkoutId = workout.id;
    closeWorkoutForm();
    renderAll();
}

toggleConfigBtn.addEventListener('click', () => {
    setConfigOpen(!state.configOpen);
});

weightTrackingToggle.addEventListener('change', (event) => {
    state.settings.enableWeightTracking = event.target.checked;
    saveSettings();
    renderExercises();
});

addWorkoutBtn.addEventListener('click', () => {
    openWorkoutForm(createDraftWorkout());
    setConfigOpen(true);
});

resetDefaultsBtn.addEventListener('click', () => {
    const confirmed = window.confirm('Restaurar os treinos padrão e sobrescrever os treinos salvos?');
    if (!confirmed) {
        return;
    }

    state.workouts = cloneDefaultWorkouts();
    saveWorkouts();
    state.activeWorkoutId = getInitialWorkoutId();
    closeWorkoutForm();
    renderAll();
});

cancelWorkoutEditBtn.addEventListener('click', () => {
    closeWorkoutForm();
});

addExerciseBtn.addEventListener('click', () => {
    addExerciseField();
});

searchWorkoutImageBtn.addEventListener('click', () => {
    openImageSearch(workoutImageUrlInput, workoutNameInput.value.trim() || workoutTabLabelInput.value.trim());
});

exerciseEditorList.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-action="search-exercise-image"]');
    if (!trigger) {
        return;
    }

    const exerciseId = trigger.dataset.exerciseId;
    const input = exerciseEditorList.querySelector(`[data-exercise-id="${exerciseId}"][data-field="imageUrl"]`);
    const nameInput = exerciseEditorList.querySelector(`[data-exercise-id="${exerciseId}"][data-field="name"]`);
    openImageSearch(input, nameInput?.value.trim() || '');
});

fillExampleJsonBtn.addEventListener('click', () => {
    updateJsonEditorWithExample();
});

exportJsonBtn.addEventListener('click', () => {
    exportCurrentConfig();
});

importJsonBtn.addEventListener('click', () => {
    importJsonConfig();
});

workoutForm.addEventListener('submit', handleWorkoutSubmit);

installAppBtn.addEventListener('click', async () => {
    if (installAppBtn.dataset.mode === 'ios') {
        hideInstallPrompt(true);
        return;
    }

    if (!state.deferredInstallPrompt) {
        hideInstallPrompt(true);
        return;
    }

    state.deferredInstallPrompt.prompt();
    const choiceResult = await state.deferredInstallPrompt.userChoice;

    if (choiceResult.outcome !== 'accepted') {
        rememberInstallDismiss();
    }

    state.deferredInstallPrompt = null;
    hideInstallPrompt(false);
});

installLaterBtn.addEventListener('click', () => {
    hideInstallPrompt(true);
});

dismissInstallPromptBtn.addEventListener('click', () => {
    hideInstallPrompt(true);
});

closeImageSearchBtn.addEventListener('click', closeImageSearch);
submitImageSearchBtn.addEventListener('click', searchImages);

imageSearchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        searchImages();
    }
});

imageSearchProviders.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-provider]');
    if (!trigger) {
        return;
    }

    setImageSearchProvider(trigger.dataset.provider);
    resetImageSearchPagination(imageSearchInput.value.trim());
    clearImageSearchResults();
    setImageSearchStatus('');
});

loadMoreImageResultsBtn.addEventListener('click', () => {
    searchImages({ append: true });
});

imageSearchModal.addEventListener('click', (event) => {
    if (event.target === imageSearchModal) {
        closeImageSearch();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !imageSearchModal.classList.contains('hidden')) {
        closeImageSearch();
    }
});

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    state.deferredInstallPrompt = event;
    showInstallPrompt({
        mode: 'install',
        buttonLabel: 'Instalar app',
        message: 'Instale o app para abrir direto da tela inicial e usar com cara de aplicativo.'
    });
});

window.addEventListener('appinstalled', () => {
    state.deferredInstallPrompt = null;
    hideInstallPrompt(false);
});

themeToggle.addEventListener('click', toggleTheme);
if (localStorage.getItem(STORAGE_KEYS.theme) === 'dark') {
    toggleTheme();
}

window.changeWorkout = changeWorkout;
window.incrementSeries = incrementSeries;
window.showSwaps = showSwaps;
window.hideSwaps = hideSwaps;
window.applySwap = applySwap;
window.startTimer = startTimer;
window.updateExerciseWeight = updateExerciseWeight;
window.editWorkout = editWorkout;
window.deleteWorkout = deleteWorkout;
window.removeExerciseField = removeExerciseField;
window.applyImageSearchResult = applyImageSearchResult;

window.onload = () => {
    syncWeightToggle();
    setImageSearchProvider(state.imageSearch.provider);
    updateJsonEditorWithExample();
    state.activeWorkoutId = getInitialWorkoutId();
    renderAll();
    registerServiceWorker();

    if (isIosDevice() && !isStandaloneMode()) {
        showInstallPrompt({
            mode: 'ios',
            buttonLabel: 'Entendi',
            message: 'No iPhone/iPad, abra no Safari, toque em Compartilhar e depois em Adicionar a Tela de Inicio.'
        });
    }
};
