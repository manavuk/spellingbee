let currentLives = 10;
let score = 0;
let currentWordObj = null;
let currentDifficulty = "easy";
let wordsPool = [];
let usedWords = new Set();
let synthMessage = null;
let speakTimeout = null;
let turnTimeout = null;
let selectedVoiceName = "";
let selectedWordListType = "default";
let selectedKeyboardMode = "virtual";
let rightAnswersCount = 0;
let wrongWordsSet = new Set();
let currentWordDefinition = "";
let currentWordSentence = "";
let currentWordPartOfSpeech = "";

// Gamification State
let totalLifetimePoints = 0;
let currentHoneyCoins = 0;
let consecutiveCorrectStreak = 0;
let unlockedStickers = new Set();
let activeWallpaperId = "default";
let selectedStickerCategory = "all";
let activeStickerTab = "shop"; // 'shop' or 'album'
let stickerSearchQuery = "";

let currentWordList = [];
let currentWordList11Plus = [];

function loadWordLists() {
    try {
        const stored = localStorage.getItem('spelling_bee_word_list');
        currentWordList = stored ? JSON.parse(stored) : WORD_LIST;
    } catch (e) {
        console.error("Error loading word list", e);
        currentWordList = WORD_LIST;
    }
    
    try {
        const stored11 = localStorage.getItem('spelling_bee_word_list_11plus');
        currentWordList11Plus = stored11 ? JSON.parse(stored11) : WORD_LIST_11PLUS;
    } catch (e) {
        console.error("Error loading 11plus word list", e);
        currentWordList11Plus = WORD_LIST_11PLUS;
    }
}
loadWordLists();


const synth = window.speechSynthesis;

const UI = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameOverScreen: document.getElementById('game-over-screen'),
    
    startBtn: document.getElementById('start-btn'),
    listenBtn: document.getElementById('listen-btn'),
    listenSlowBtn: document.getElementById('listen-slow-btn'),
    restartBtn: document.getElementById('restart-btn'),
    inGameRestartBtn: document.getElementById('in-game-restart-btn'),
    restartModal: document.getElementById('restart-modal'),
    modalCurrentScore: document.getElementById('modal-current-score'),
    cancelRestartBtn: document.getElementById('cancel-restart-btn'),
    confirmRestartBtn: document.getElementById('confirm-restart-btn'),
    voiceSelect: document.getElementById('voice-select'),
    wordListSelect: document.getElementById('word-list-select'),
    keyboardSelect: document.getElementById('keyboard-select'),
    
    answerForm: document.getElementById('answer-form'),
    answerInput: document.getElementById('answer-input'),
    virtualKeyboard: document.getElementById('virtual-keyboard'),
    
    optionsContainer: document.getElementById('options-container'),
    optionsGrid: document.getElementById('options-grid'),
    
    livesCount: document.getElementById('lives-count'),
    scoreDisplay: document.getElementById('score'),
    
    difficultyBadge: document.getElementById('difficulty-badge'),
    feedback: document.getElementById('feedback'),
    finalScore: document.getElementById('final-score'),
    rightAnswersDisplay: document.getElementById('right-answers'),
    wrongWordsList: document.getElementById('wrong-words-list'),
    gameOverTitle: document.getElementById('game-over-title'),
    defineBtn: document.getElementById('define-btn'),
    sentenceBtn: document.getElementById('sentence-btn'),
    hintContainer: document.getElementById('hint-container'),
    hintDisplay: document.getElementById('hint-display'),
    hintBadge: document.getElementById('hint-badge'),
    hintText: document.getElementById('hint-text'),

    // Gamification UI Elements
    startHoneyCoins: document.getElementById('start-honey-coins'),
    gameHoneyCoins: document.getElementById('game-honey-coins'),
    gameoverHoneyCoins: document.getElementById('gameover-honey-coins'),
    startStickerCount: document.getElementById('start-sticker-count'),
    openStickersBtn: document.getElementById('open-stickers-btn'),
    gameoverStickersBtn: document.getElementById('gameover-stickers-btn'),
    openWallpapersBtn: document.getElementById('open-wallpapers-btn'),
    gameoverWallpapersBtn: document.getElementById('gameover-wallpapers-btn'),
    
    flyingMascotContainer: document.getElementById('flying-mascot-container'),
    mascotImg: document.getElementById('mascot-img'),
    mascotSpeechText: document.getElementById('mascot-speech-text'),
    
    stickerShopModal: document.getElementById('sticker-shop-modal'),
    modalShopCoins: document.getElementById('modal-shop-coins'),
    closeStickersBtn: document.getElementById('close-stickers-btn'),
    shopTabAll: document.getElementById('shop-tab-all'),
    shopTabAlbum: document.getElementById('shop-tab-album'),
    albumCollectedCount: document.getElementById('album-collected-count'),
    stickerSearchInput: document.getElementById('sticker-search-input'),
    stickerCategoriesBar: document.getElementById('sticker-categories-bar'),
    stickersGrid: document.getElementById('stickers-grid'),
    
    wallpaperGalleryModal: document.getElementById('wallpaper-gallery-modal'),
    modalWpPoints: document.getElementById('modal-wp-points'),
    closeWallpapersBtn: document.getElementById('close-wallpapers-btn'),
    wallpapersGrid: document.getElementById('wallpapers-grid'),

    // Admin Panel elements
    adminEntranceBtn: document.getElementById('admin-entrance-btn'),
    adminAuthScreen: document.getElementById('admin-auth-screen'),
    adminAuthForm: document.getElementById('admin-auth-form'),
    adminPasswordInput: document.getElementById('admin-password-input'),
    adminAuthBackBtn: document.getElementById('admin-auth-back-btn'),
    adminAuthError: document.getElementById('admin-auth-error'),
    
    adminPanelScreen: document.getElementById('admin-panel-screen'),
    adminDashboardContainer: document.getElementById('admin-dashboard-container'),
    adminWordListSelect: document.getElementById('admin-word-list-select'),
    adminSearchInput: document.getElementById('admin-search-input'),
    adminAddWordBtn: document.getElementById('admin-add-word-btn'),
    adminWordsList: document.getElementById('admin-words-list'),
    adminExportJsBtn: document.getElementById('admin-export-js-btn'),
    adminExportFilteredBtn: document.getElementById('admin-export-filtered-btn'),
    adminResetBtn: document.getElementById('admin-reset-btn'),
    adminExitBtn: document.getElementById('admin-exit-btn'),
    
    adminFormContainer: document.getElementById('admin-form-container'),
    adminFormTitle: document.getElementById('admin-form-title'),
    adminWordForm: document.getElementById('admin-word-form'),
    adminWordInput: document.getElementById('admin-word-input'),
    adminValidInput: document.getElementById('admin-valid-input'),
    adminDifficultySelect: document.getElementById('admin-difficulty-select'),
    adminStatusSelect: document.getElementById('admin-status-select'),
    adminFormCancelBtn: document.getElementById('admin-form-cancel-btn')
};

function openRestartModal() {
    if (UI.modalCurrentScore) {
        UI.modalCurrentScore.textContent = score;
    }
    if (UI.restartModal) {
        UI.restartModal.classList.remove('hidden');
    }
}

function closeRestartModal() {
    if (UI.restartModal) {
        UI.restartModal.classList.add('hidden');
    }
    if (UI.answerInput && !UI.gameScreen.classList.contains('hidden')) {
        UI.answerInput.focus();
    }
}

function loadKeyboardSetting() {
    try {
        const stored = localStorage.getItem('spelling_bee_keyboard_mode');
        if (stored) {
            selectedKeyboardMode = stored;
            if (UI.keyboardSelect) {
                UI.keyboardSelect.value = stored;
            }
        }
    } catch (e) {
        console.error("Error loading keyboard mode setting", e);
    }
}
loadKeyboardSetting();

function applyKeyboardMode() {
    if (!UI.answerInput) return;
    if (selectedKeyboardMode === "both") {
        UI.answerInput.setAttribute('inputmode', 'text');
    } else {
        UI.answerInput.setAttribute('inputmode', 'none');
    }
}

// ==========================================
// Gamification Controllers & State
// ==========================================
function loadGamificationState() {
    try {
        totalLifetimePoints = parseInt(localStorage.getItem('spelling_bee_lifetime_points') || '0', 10);
        currentHoneyCoins = parseInt(localStorage.getItem('spelling_bee_honey_coins') || '0', 10);
        
        const storedStickers = localStorage.getItem('spelling_bee_unlocked_stickers');
        unlockedStickers = storedStickers ? new Set(JSON.parse(storedStickers)) : new Set();
        
        activeWallpaperId = localStorage.getItem('spelling_bee_active_wallpaper') || 'default';
    } catch (e) {
        console.error("Error loading gamification state", e);
    }
    applyActiveWallpaper();
    updateCoinUI();
}

function saveGamificationState() {
    try {
        localStorage.setItem('spelling_bee_lifetime_points', totalLifetimePoints);
        localStorage.setItem('spelling_bee_honey_coins', currentHoneyCoins);
        localStorage.setItem('spelling_bee_unlocked_stickers', JSON.stringify(Array.from(unlockedStickers)));
        localStorage.setItem('spelling_bee_active_wallpaper', activeWallpaperId);
    } catch (e) {
        console.error("Error saving gamification state", e);
    }
    updateCoinUI();
}

function addHoneyCoins(points) {
    if (points <= 0) return;
    totalLifetimePoints += points;
    currentHoneyCoins += points;
    saveGamificationState();
    updateCoinUI();
}

function updateCoinUI() {
    if (UI.startHoneyCoins) UI.startHoneyCoins.textContent = currentHoneyCoins;
    if (UI.gameHoneyCoins) UI.gameHoneyCoins.textContent = currentHoneyCoins;
    if (UI.gameoverHoneyCoins) UI.gameoverHoneyCoins.textContent = currentHoneyCoins;
    if (UI.modalShopCoins) UI.modalShopCoins.textContent = currentHoneyCoins;
    if (UI.modalWpPoints) UI.modalWpPoints.textContent = totalLifetimePoints;
    if (UI.startStickerCount) UI.startStickerCount.textContent = unlockedStickers.size;
    if (UI.albumCollectedCount) UI.albumCollectedCount.textContent = unlockedStickers.size;
}

const CHEER_MASCOT_IMAGES = ['bee_happy.png', 'bee_superhero.png', 'bee_thinking.png'];
const CHEER_QUOTES = [
    "Bee-utiful job! 🐝✨",
    "Un-bee-lievable streak! 🔥",
    "Buzzing brilliant! ⭐",
    "Sweet as honey! 🍯",
    "Super Bee power! 🦸",
    "You're on a roll! 🌟",
    "Spelling master! 👑",
    "Keep buzzing along! 🐝",
    "Top of the hive! 🏆",
    "Honey sweet accuracy! 🍯✨"
];

let mascotCheerTimeout = null;

function triggerBeeCheer() {
    if (!UI.flyingMascotContainer || !UI.mascotImg || !UI.mascotSpeechText) return;
    
    if (mascotCheerTimeout) {
        clearTimeout(mascotCheerTimeout);
        mascotCheerTimeout = null;
    }

    const randomImg = CHEER_MASCOT_IMAGES[Math.floor(Math.random() * CHEER_MASCOT_IMAGES.length)];
    const randomQuote = CHEER_QUOTES[Math.floor(Math.random() * CHEER_QUOTES.length)];

    UI.mascotImg.src = randomImg;
    UI.mascotSpeechText.textContent = randomQuote;

    UI.flyingMascotContainer.classList.remove('hidden');
    UI.flyingMascotContainer.classList.remove('fly-in');
    void UI.flyingMascotContainer.offsetWidth;
    UI.flyingMascotContainer.classList.add('fly-in');

    mascotCheerTimeout = setTimeout(() => {
        UI.flyingMascotContainer.classList.add('hidden');
        UI.flyingMascotContainer.classList.remove('fly-in');
        mascotCheerTimeout = null;
    }, 3200);
}

function applyActiveWallpaper() {
    if (typeof WALLPAPERS === 'undefined') return;
    
    // Remove existing wallpaper background classes
    WALLPAPERS.forEach(wp => {
        document.body.classList.remove(wp.cssClass);
    });

    const activeWp = WALLPAPERS.find(w => w.id === activeWallpaperId);
    if (activeWp) {
        document.body.style.background = activeWp.bgStyle;
    } else {
        document.body.style.background = '';
    }
}
loadGamificationState();

function resetToStartScreen() {
    if (turnTimeout) {
        clearTimeout(turnTimeout);
        turnTimeout = null;
    }
    if (speakTimeout) {
        clearTimeout(speakTimeout);
        speakTimeout = null;
    }
    synth.cancel();
    closeRestartModal();

    currentLives = 10;
    score = 0;
    rightAnswersCount = 0;
    wrongWordsSet.clear();
    usedWords.clear();
    
    // Reset feedback, input styles, options, hints
    if (UI.feedback) UI.feedback.classList.remove('show');
    if (UI.answerInput) {
        UI.answerInput.value = '';
        UI.answerInput.style.color = '';
        UI.answerInput.classList.remove('error-shake', 'success-pop');
    }
    if (UI.gameScreen) UI.gameScreen.classList.remove('shake');
    if (UI.hintContainer) UI.hintContainer.classList.add('hidden');
    if (UI.hintDisplay) UI.hintDisplay.classList.add('hidden');

    switchScreen(UI.gameScreen, UI.startScreen);
    switchScreen(UI.gameOverScreen, UI.startScreen);
}

function initGame() {
    if (turnTimeout) {
        clearTimeout(turnTimeout);
        turnTimeout = null;
    }
    if (speakTimeout) {
        clearTimeout(speakTimeout);
        speakTimeout = null;
    }
    synth.cancel();
    closeRestartModal();

    currentLives = 10;
    score = 0;
    rightAnswersCount = 0;
    wrongWordsSet.clear();
    usedWords.clear();
    
    // Reset feedback, input styles, options, hints
    if (UI.feedback) UI.feedback.classList.remove('show');
    if (UI.answerInput) {
        UI.answerInput.value = '';
        UI.answerInput.style.color = '';
        UI.answerInput.classList.remove('error-shake', 'success-pop');
    }
    if (UI.gameScreen) UI.gameScreen.classList.remove('shake');
    
    applyKeyboardMode();
    updateDifficulty();
    updateUI();
    
    switchScreen(UI.startScreen, UI.gameScreen);
    switchScreen(UI.gameOverScreen, UI.gameScreen);
    nextTurn();
}

function switchScreen(from, to) {
    if (!from.classList.contains('hidden')) {
        from.classList.remove('active');
        from.classList.add('hidden');
    }
    to.classList.remove('hidden');
    // small timeout to allow display:block to apply before animating opacity/transform via class
    setTimeout(() => {
        to.classList.add('active');
    }, 50);
}

function determineDifficulty() {
    if (score < 50) return "easy";
    if (score < 150) return "medium";
    if (score < 350) return "hard";
    return "expert";
}

function updateDifficulty() {
    currentDifficulty = determineDifficulty();
    // currentWordList and currentWordList11Plus are loaded from LocalStorage (or defaults)
    const activeList = (selectedWordListType === "11plus") ? currentWordList11Plus : currentWordList;
    wordsPool = activeList.filter(w => w.difficulty === currentDifficulty && w.status !== "inactive");
    
    // Fallback: if the filtered list is empty (e.g. no easy words in the selected list),
    // fall back to using any available word from the list
    if (wordsPool.length === 0 && activeList.length > 0) {
        wordsPool = activeList.filter(w => w.status !== "inactive");
        if (wordsPool.length === 0) {
            wordsPool = activeList;
        }
    }
}

function nextTurn() {
    UI.answerForm.classList.remove('hidden');
    if (UI.virtualKeyboard) UI.virtualKeyboard.classList.remove('hidden');
    UI.optionsContainer.classList.add('hidden');
    
    UI.answerInput.value = '';
    applyKeyboardMode();
    UI.answerInput.focus();
    updateDifficulty();
    
    let availableWords = wordsPool.filter(w => !usedWords.has(w.word));
    if (availableWords.length === 0) {
        // Reset used words for this difficulty if we exhaust them
        usedWords.clear();
        availableWords = wordsPool;
    }
    
    const randomIdx = Math.floor(Math.random() * availableWords.length);
    currentWordObj = availableWords[randomIdx];
    usedWords.add(currentWordObj.word);
    
    updateBadge();
    
    // Reset and hide hint card and buttons for the new turn
    if (UI.hintContainer) UI.hintContainer.classList.add('hidden');
    if (UI.hintDisplay) UI.hintDisplay.classList.add('hidden');
    if (UI.defineBtn) UI.defineBtn.disabled = true;
    if (UI.sentenceBtn) UI.sentenceBtn.disabled = true;
    if (UI.hintText) UI.hintText.textContent = '';
    
    speakWord(currentWordObj.word);
    
    // Fetch definition and example sentence asynchronously
    fetchWordDetails(currentWordObj.word);
}

function speakWord(word, slow = false) {
    if (speakTimeout) {
        clearTimeout(speakTimeout);
    }
    synth.cancel();
    
    synthMessage = new SpeechSynthesisUtterance(word);
    const voices = synth.getVoices();
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    
    let chosenVoice = null;
    if (selectedVoiceName) {
        chosenVoice = voices.find(v => v.name === selectedVoiceName);
    }
    
    if (!chosenVoice && enVoices.length > 0) {
        // Automatically select the best local/native English voice that is fully responsive 
        // (excluding Enhanced, Siri, and Google voices which ignore rate changes on macOS Chrome/Safari)
        const responsiveVoices = enVoices.filter(v => 
            (v.localService || v.localService === undefined) && 
            !v.name.includes('Enhanced') && 
            !v.name.includes('Siri') &&
            !v.name.includes('Google')
        );
        
        if (responsiveVoices.length > 0) {
            chosenVoice = 
                responsiveVoices.find(v => v.name.includes('Alex')) ||
                responsiveVoices.find(v => v.name.includes('Samantha')) ||
                responsiveVoices.find(v => v.name.includes('Daniel')) ||
                responsiveVoices[0];
        } else {
            chosenVoice = 
                enVoices.find(v => (v.localService || v.localService === undefined) && v.name.includes('Samantha')) ||
                enVoices.find(v => (v.localService || v.localService === undefined) && v.name.includes('Alex')) ||
                enVoices.find(v => v.localService) ||
                enVoices[0];
        }
    }
    
    if (chosenVoice) {
        synthMessage.voice = chosenVoice;
    }
    
    synthMessage.rate = slow ? 0.45 : 0.85;

    // Speak synchronously to preserve the active user gesture/activation context.
    synth.speak(synthMessage);
}

function updateBadge() {
    UI.difficultyBadge.textContent = currentDifficulty;
    UI.difficultyBadge.className = 'difficulty-badge ' + currentDifficulty;
}

function updateUI() {
    UI.livesCount.textContent = currentLives;
    UI.scoreDisplay.textContent = score;
    
    if (currentLives <= 3) {
        UI.livesCount.style.animation = "shake 0.5s infinite";
    } else {
        UI.livesCount.style.animation = "none";
    }
}

function showFeedback(isCorrect, change) {
    UI.feedback.textContent = isCorrect ? `+${change}` : 'Incorrect!';
    UI.feedback.className = `feedback-toast show ${isCorrect ? 'correct' : 'incorrect'}`;
    
    setTimeout(() => {
        UI.feedback.classList.remove('show');
    }, 1200);
}

function generateMisspellings(word) {
    const options = new Set([word]);
    let attempts = 0;
    while(options.size < 3 && attempts < 50) {
        let variant = word;
        const type = Math.floor(Math.random() * 4);
        if (type === 0 && word.length > 3) {
            const idx = Math.floor(Math.random() * (word.length - 2)) + 1;
            variant = word.substring(0, idx) + word[idx+1] + word[idx] + word.substring(idx+2);
        } else if (type === 1) {
            const cons = word.match(/[bcdfghjklmnpqrstvwxyz]/g);
            if (cons) {
               const c = cons[Math.floor(Math.random()*cons.length)];
               variant = word.replace(c, c+c);
            }
        } else if (type === 2) {
            const vowels = ['a','e','i','o','u'];
            for(let i=1; i<word.length; i++) {
                if (vowels.includes(word[i])) {
                    variant = word.substring(0, i) + word.substring(i+1);
                    break;
                }
            }
        } else if (type === 3) {
            const vowels = ['a','e','i','o','u'];
            for(let i=1; i<word.length; i++) {
                if (vowels.includes(word[i])) {
                    const other = vowels.filter(v => v !== word[i]);
                    variant = word.substring(0, i) + other[Math.floor(Math.random()*other.length)] + word.substring(i+1);
                    break;
                }
            }
        }
        if (variant !== word && variant.length >= 3) options.add(variant);
        attempts++;
    }
    
    const fallbacks = ['s', 'e', 'd', 'ing', 'ly', 'er'];
    let fallbackIdx = 0;
    while(options.size < 3) {
        options.add(word + fallbacks[fallbackIdx % fallbacks.length]);
        fallbackIdx++;
    }
    
    return Array.from(options).sort(() => Math.random() - 0.5);
}

function showOptions() {
    UI.answerForm.classList.add('hidden');
    if (UI.virtualKeyboard) UI.virtualKeyboard.classList.add('hidden');
    UI.optionsContainer.classList.remove('hidden');
    UI.optionsGrid.innerHTML = '';
    
    const opts = generateMisspellings(currentWordObj.valid[0]);
    opts.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt;
        btn.onclick = () => handleOptionSelect(opt, btn);
        UI.optionsGrid.appendChild(btn);
    });
}

function handleOptionSelect(selected, btnNode) {
    if (turnTimeout) {
        clearTimeout(turnTimeout);
        turnTimeout = null;
    }
    const isCorrect = currentWordObj.valid.includes(selected);
    const buttons = UI.optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (isCorrect) {
        rightAnswersCount++;
        consecutiveCorrectStreak++;
        btnNode.classList.add('correct');
        showFeedback(true, 5); // 5 points for second chance
        score += 5;
        addHoneyCoins(5);
        updateUI();

        if (consecutiveCorrectStreak % 3 === 0 || rightAnswersCount % 4 === 0) {
            triggerBeeCheer();
        }

        turnTimeout = setTimeout(nextTurn, 1000);
    } else {
        consecutiveCorrectStreak = 0;
        currentLives--;
        wrongWordsSet.add(currentWordObj.valid[0]);
        btnNode.classList.add('wrong');
        buttons.forEach(b => {
            if (currentWordObj.valid.includes(b.textContent)) {
                b.classList.add('correct');
            }
        });
        
        showFeedback(false);
        updateUI();
        
        if (currentLives <= 0) {
            turnTimeout = setTimeout(gameOver, 2000);
        } else {
            turnTimeout = setTimeout(nextTurn, 2500);
        }
    }
}

function handleAnswer(e) {
    e.preventDefault();
    if (turnTimeout) {
        clearTimeout(turnTimeout);
        turnTimeout = null;
    }
    const userAnswer = UI.answerInput.value.trim().toLowerCase();
    if (!userAnswer) return;
    
    if (currentWordObj.valid.includes(userAnswer)) {
        // Correct
        rightAnswersCount++;
        consecutiveCorrectStreak++;
        let points = 10;
        if (currentDifficulty === 'medium') points = 20;
        if (currentDifficulty === 'hard') points = 30;
        if (currentDifficulty === 'expert') points = 50;
        
        score += points;
        addHoneyCoins(points);
        
        // Trigger CSS animations
        UI.answerInput.classList.remove('error-shake', 'success-pop');
        void UI.answerInput.offsetWidth;
        UI.answerInput.classList.add('success-pop');
        
        showFeedback(true, points);
        updateUI();

        // Cheer on every 3 streaks or every 3 right answers
        if (consecutiveCorrectStreak % 3 === 0 || rightAnswersCount % 3 === 0) {
            triggerBeeCheer();
        }
        
        // Next word right after showing feedback briefly
        turnTimeout = setTimeout(nextTurn, 1000);
    } else {
        // Incorrect on first try
        consecutiveCorrectStreak = 0;
        wrongWordsSet.add(currentWordObj.valid[0]);
        currentLives--;
        
        UI.answerInput.classList.remove('error-shake', 'success-pop');
        void UI.answerInput.offsetWidth;
        UI.answerInput.classList.add('error-shake');
        
        UI.gameScreen.classList.remove('shake');
        void UI.gameScreen.offsetWidth;
        UI.gameScreen.classList.add('shake');
        
        showFeedback(false);
        updateUI();
        
        if (currentLives <= 0) {
            UI.answerInput.blur();
            UI.answerInput.value = currentWordObj.valid[0]; 
            UI.answerInput.style.color = 'var(--danger)';
            turnTimeout = setTimeout(gameOver, 1500);
        } else {
            // Show options as penalty
            turnTimeout = setTimeout(() => {
                showOptions();
            }, 1000);
        }
    }
}

function gameOver() {
    UI.answerInput.style.color = ''; // reset style
    UI.finalScore.textContent = score;
    UI.rightAnswersDisplay.textContent = rightAnswersCount;
    updateCoinUI();
    
    UI.wrongWordsList.innerHTML = '';
    wrongWordsSet.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        UI.wrongWordsList.appendChild(li);
    });
    
    UI.gameOverTitle.textContent = score > 200 ? "Amazing Job!" : "Game Over";
    switchScreen(UI.gameScreen, UI.gameOverScreen);
}

function populateVoiceList() {
    if (!UI.voiceSelect) return;
    UI.voiceSelect.innerHTML = '<option value="">Auto-Detect Best Local Voice</option>';
    
    const voices = synth.getVoices();
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    
    enVoices.forEach(voice => {
        const option = document.createElement('option');
        // Filter out Enhanced, Siri, and Google voices as unresponsive to rate settings
        const isResponsive = !voice.name.includes('Enhanced') && !voice.name.includes('Siri') && !voice.name.includes('Google');
        const isLocal = voice.localService || voice.localService === undefined;
        
        let label = "Cloud/Unresponsive";
        if (isLocal) {
            label = isResponsive ? "Local/Responsive" : "Local/Unresponsive (Siri/Enhanced)";
        }
        
        option.textContent = `${voice.name} (${voice.lang}) [${label}]`;
        option.value = voice.name;
        UI.voiceSelect.appendChild(option);
    });
}

async function fetchWordDetails(word) {
    currentWordDefinition = "";
    currentWordSentence = "";
    currentWordPartOfSpeech = "";
    
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`);
        if (!response.ok) return;
        
        const data = await response.json();
        if (!data || data.length === 0) return;
        
        const firstEntry = data[0];
        
        if (firstEntry.meanings && firstEntry.meanings.length > 0) {
            // Find a meaning with a definition
            for (const meaning of firstEntry.meanings) {
                if (meaning.definitions && meaning.definitions.length > 0) {
                    currentWordDefinition = meaning.definitions[0].definition || "";
                    currentWordPartOfSpeech = meaning.partOfSpeech || "";
                    break;
                }
            }
            
            // Find an example sentence from any definition in any meaning
            for (const meaning of firstEntry.meanings) {
                for (const definition of meaning.definitions) {
                    if (definition.example) {
                        currentWordSentence = definition.example;
                        break;
                    }
                }
                if (currentWordSentence) break;
            }
        }
        
        // Show/enable buttons
        let hasHints = false;
        if (currentWordDefinition) {
            if (UI.defineBtn) UI.defineBtn.disabled = false;
            hasHints = true;
        }
        if (currentWordSentence) {
            if (UI.sentenceBtn) UI.sentenceBtn.disabled = false;
            hasHints = true;
        }
        
        if (hasHints && UI.hintContainer) {
            UI.hintContainer.classList.remove('hidden');
        }
    } catch (err) {
        console.error("Error fetching word details:", err);
    }
}

function speakAnnouncement(phrase) {
    if (speakTimeout) {
        clearTimeout(speakTimeout);
    }
    synth.cancel();
    
    const utterance = new SpeechSynthesisUtterance(phrase);
    let chosenVoice = null;
    if (selectedVoiceName) {
        chosenVoice = synth.getVoices().find(v => v.name === selectedVoiceName);
    }
    if (!chosenVoice) {
        const enVoices = synth.getVoices().filter(v => v.lang.startsWith('en'));
        const responsiveVoices = enVoices.filter(v => 
            (v.localService || v.localService === undefined) && 
            !v.name.includes('Enhanced') && 
            !v.name.includes('Siri') &&
            !v.name.includes('Google')
        );
        
        if (responsiveVoices.length > 0) {
            chosenVoice = 
                responsiveVoices.find(v => v.name.includes('Alex')) ||
                responsiveVoices.find(v => v.name.includes('Samantha')) ||
                responsiveVoices.find(v => v.name.includes('Daniel')) ||
                responsiveVoices[0];
        } else {
            chosenVoice = enVoices[0];
        }
    }
    
    if (chosenVoice) {
        utterance.voice = chosenVoice;
    }
    
    utterance.rate = 0.85;

    // Speak synchronously to preserve the active user gesture/activation context
    synth.speak(utterance);
}

// Event Listeners
UI.startBtn.addEventListener('click', initGame);
UI.restartBtn.addEventListener('click', resetToStartScreen);
if (UI.inGameRestartBtn) {
    UI.inGameRestartBtn.addEventListener('click', openRestartModal);
}
if (UI.cancelRestartBtn) {
    UI.cancelRestartBtn.addEventListener('click', closeRestartModal);
}
if (UI.confirmRestartBtn) {
    UI.confirmRestartBtn.addEventListener('click', () => {
        resetToStartScreen();
    });
}
if (UI.restartModal) {
    UI.restartModal.addEventListener('click', (e) => {
        if (e.target === UI.restartModal) {
            closeRestartModal();
        }
    });
}
function handleVirtualKeyPress(key) {
    if (!UI.answerInput) return;
    if (key === 'Backspace') {
        UI.answerInput.value = UI.answerInput.value.slice(0, -1);
    } else if (key === 'Enter') {
        if (UI.answerForm) {
            if (typeof UI.answerForm.requestSubmit === 'function') {
                UI.answerForm.requestSubmit();
            } else {
                UI.answerForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
            }
        }
        return;
    } else if (/^[a-zA-Z]$/.test(key)) {
        UI.answerInput.value += key.toLowerCase();
    }
    UI.answerInput.dispatchEvent(new Event('input', { bubbles: true }));
    UI.answerInput.focus();
}

if (UI.virtualKeyboard) {
    const onKeyTrigger = (e) => {
        const keyBtn = e.target.closest('.key-btn');
        if (!keyBtn) return;
        e.preventDefault();
        e.stopPropagation();
        
        const key = keyBtn.getAttribute('data-key');
        if (key) {
            handleVirtualKeyPress(key);
            keyBtn.classList.add('pressed');
            setTimeout(() => keyBtn.classList.remove('pressed'), 120);
        }
    };
    
    UI.virtualKeyboard.addEventListener('pointerdown', onKeyTrigger);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && UI.restartModal && !UI.restartModal.classList.contains('hidden')) {
        closeRestartModal();
        return;
    }
    
    // Highlight pressed key on virtual keyboard for visual feedback
    const key = e.key;
    const btn = document.querySelector(`.key-btn[data-key="${key.toLowerCase()}"]`) || 
                document.querySelector(`.key-btn[data-key="${key}"]`);
    if (btn) {
        btn.classList.add('pressed');
        setTimeout(() => btn.classList.remove('pressed'), 120);
    }
});
UI.listenBtn.addEventListener('click', () => {
    if (currentWordObj) {
        speakWord(currentWordObj.word, false);
        UI.answerInput.focus();
    }
});
UI.listenSlowBtn.addEventListener('click', () => {
    if (currentWordObj) {
        speakWord(currentWordObj.word, true);
        UI.answerInput.focus();
    }
});
UI.answerForm.addEventListener('submit', handleAnswer);

if (UI.defineBtn) {
    UI.defineBtn.addEventListener('click', () => {
        if (currentWordDefinition) {
            speakAnnouncement(`The definition is: ${currentWordDefinition}`);
            if (UI.hintDisplay && UI.hintBadge && UI.hintText) {
                UI.hintDisplay.classList.remove('hidden');
                UI.hintBadge.textContent = currentWordPartOfSpeech ? `Definition (${currentWordPartOfSpeech})` : "Definition";
                UI.hintText.textContent = currentWordDefinition;
            }
        }
    });
}

if (UI.sentenceBtn) {
    UI.sentenceBtn.addEventListener('click', () => {
        if (currentWordSentence) {
            speakAnnouncement(`Sentence: ${currentWordSentence}`);
            if (UI.hintDisplay && UI.hintBadge && UI.hintText && currentWordObj) {
                const regex = new RegExp(`\\b${currentWordObj.word}\\b`, 'gi');
                const maskedSentence = currentWordSentence.replace(regex, '______');
                
                UI.hintDisplay.classList.remove('hidden');
                UI.hintBadge.textContent = "Sentence";
                UI.hintText.textContent = maskedSentence;
            }
        }
    });
}

if (UI.voiceSelect) {
    UI.voiceSelect.addEventListener('change', (e) => {
        selectedVoiceName = e.target.value;
    });
}

if (UI.wordListSelect) {
    UI.wordListSelect.addEventListener('change', (e) => {
        selectedWordListType = e.target.value;
    });
}

if (UI.keyboardSelect) {
    UI.keyboardSelect.addEventListener('change', (e) => {
        selectedKeyboardMode = e.target.value;
        try {
            localStorage.setItem('spelling_bee_keyboard_mode', selectedKeyboardMode);
        } catch (err) {
            console.error("Error saving keyboard setting", err);
        }
        applyKeyboardMode();
    });
}

// Initialize Voices on Load
if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
        populateVoiceList();
    };
}
populateVoiceList();

// ==========================================
// Admin Panel Controllers & Handlers
// ==========================================
const ADMIN_PASSWORD_HASH = "240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9"; // sha256 hash of "admin123"
let adminCurrentWordBank = "default";
let adminCurrentDifficulty = "easy";
let adminEditingWord = null;
let adminSearchQuery = "";

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

function showAdminToast(message, isError = false) {
    UI.feedback.textContent = message;
    UI.feedback.className = `feedback-toast show ${isError ? 'incorrect' : 'correct'}`;
    setTimeout(() => {
        UI.feedback.classList.remove('show');
    }, 1500);
}

function saveWordsToStorage() {
    localStorage.setItem('spelling_bee_word_list', JSON.stringify(currentWordList));
    localStorage.setItem('spelling_bee_word_list_11plus', JSON.stringify(currentWordList11Plus));
}

function renderAdminWordsList() {
    const activeList = (adminCurrentWordBank === "11plus") ? currentWordList11Plus : currentWordList;
    const filteredList = activeList.filter(w => {
        const matchesCategory = w.difficulty === adminCurrentDifficulty;
        const matchesSearch = w.word.toLowerCase().includes(adminSearchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    UI.adminWordsList.innerHTML = '';
    
    if (filteredList.length === 0) {
        const msg = document.createElement('div');
        msg.className = 'no-words-message';
        msg.textContent = 'No words found in this category.';
        UI.adminWordsList.appendChild(msg);
        return;
    }

    filteredList.forEach(item => {
        const row = document.createElement('div');
        row.className = 'admin-word-row';

        const details = document.createElement('div');
        details.className = 'admin-word-details';

        const textWrapper = document.createElement('div');
        textWrapper.className = 'admin-word-text-wrapper';

        const nameSpan = document.createElement('span');
        nameSpan.className = 'admin-word-name';
        nameSpan.textContent = item.word;
        textWrapper.appendChild(nameSpan);

        const status = item.status || "active";
        const badge = document.createElement('span');
        badge.className = `status-badge ${status}`;
        badge.textContent = status;
        textWrapper.appendChild(badge);

        details.appendChild(textWrapper);

        const validSpellings = document.createElement('span');
        validSpellings.className = 'admin-word-valid-spells';
        validSpellings.textContent = `Valid: ${item.valid.join(', ')}`;
        details.appendChild(validSpellings);

        row.appendChild(details);

        const actions = document.createElement('div');
        actions.className = 'admin-word-actions';

        // Toggle Status Button
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'action-btn-sm toggle-active-btn';
        toggleBtn.textContent = status === "active" ? "Disable" : "Enable";
        toggleBtn.onclick = () => {
            item.status = status === "active" ? "inactive" : "active";
            saveWordsToStorage();
            renderAdminWordsList();
            showAdminToast(status === "active" ? "Word Disabled" : "Word Enabled");
        };
        actions.appendChild(toggleBtn);

        // Edit Button
        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn-sm';
        editBtn.textContent = "Edit";
        editBtn.onclick = () => {
            openEditWordForm(item);
        };
        actions.appendChild(editBtn);

        // Delete Button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'action-btn-sm delete-btn';
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            if (confirm(`Are you sure you want to delete "${item.word}"?`)) {
                const listIndex = activeList.indexOf(item);
                if (listIndex > -1) {
                    activeList.splice(listIndex, 1);
                    saveWordsToStorage();
                    renderAdminWordsList();
                    showAdminToast("Word Deleted");
                }
            }
        };
        actions.appendChild(deleteBtn);

        row.appendChild(actions);
        UI.adminWordsList.appendChild(row);
    });
}

function openAddWordForm() {
    adminEditingWord = null;
    UI.adminFormTitle.textContent = "Add New Word";
    UI.adminWordInput.value = "";
    UI.adminWordInput.disabled = false;
    UI.adminValidInput.value = "";
    UI.adminDifficultySelect.value = adminCurrentDifficulty;
    UI.adminStatusSelect.value = "active";
    
    UI.adminDashboardContainer.classList.add('hidden');
    UI.adminFormContainer.classList.remove('hidden');
}

function openEditWordForm(wordObj) {
    adminEditingWord = wordObj;
    UI.adminFormTitle.textContent = `Edit Word: ${wordObj.word}`;
    UI.adminWordInput.value = wordObj.word;
    UI.adminWordInput.disabled = true;
    UI.adminValidInput.value = wordObj.valid.join(', ');
    UI.adminDifficultySelect.value = wordObj.difficulty;
    UI.adminStatusSelect.value = wordObj.status || "active";
    
    UI.adminDashboardContainer.classList.add('hidden');
    UI.adminFormContainer.classList.remove('hidden');
}

function closeWordForm() {
    UI.adminFormContainer.classList.add('hidden');
    UI.adminDashboardContainer.classList.remove('hidden');
    adminEditingWord = null;
}

function saveWordForm(e) {
    e.preventDefault();
    const wordText = UI.adminWordInput.value.trim().toLowerCase();
    const validSpellings = UI.adminValidInput.value.split(',')
        .map(s => s.trim().toLowerCase())
        .filter(s => s.length > 0);
    const difficulty = UI.adminDifficultySelect.value;
    const status = UI.adminStatusSelect.value;

    if (!wordText) {
        showAdminToast("Word cannot be empty", true);
        return;
    }
    if (validSpellings.length === 0) {
        showAdminToast("At least one valid spelling is required", true);
        return;
    }

    const activeList = (adminCurrentWordBank === "11plus") ? currentWordList11Plus : currentWordList;

    if (adminEditingWord) {
        adminEditingWord.valid = validSpellings;
        adminEditingWord.difficulty = difficulty;
        adminEditingWord.status = status;
        showAdminToast("Word Saved");
    } else {
        const exists = activeList.some(w => w.word === wordText);
        if (exists) {
            showAdminToast("Word already exists in this bank", true);
            return;
        }

        const newWordObj = {
            word: wordText,
            valid: validSpellings,
            difficulty: difficulty,
            status: status
        };
        activeList.push(newWordObj);
        showAdminToast("Word Added");
    }

    saveWordsToStorage();
    closeWordForm();
    renderAdminWordsList();
}

function resetToDefaults() {
    if (confirm("Are you sure you want to reset all lists to their defaults? Any custom added, edited, or deleted words will be permanently lost.")) {
        localStorage.removeItem('spelling_bee_word_list');
        localStorage.removeItem('spelling_bee_word_list_11plus');
        loadWordLists();
        renderAdminWordsList();
        showAdminToast("Word lists reset to defaults");
    }
}

function exportWordListFile(filename, content) {
    const blob = new Blob([content], { type: 'text/javascript;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

// Admin Event Listeners
if (UI.adminEntranceBtn) {
    UI.adminEntranceBtn.addEventListener('click', () => {
        switchScreen(UI.startScreen, UI.adminAuthScreen);
        UI.adminPasswordInput.value = "";
        UI.adminAuthError.classList.add('hidden');
        UI.adminPasswordInput.focus();
    });
}

if (UI.adminAuthBackBtn) {
    UI.adminAuthBackBtn.addEventListener('click', () => {
        switchScreen(UI.adminAuthScreen, UI.startScreen);
    });
}

if (UI.adminExitBtn) {
    UI.adminExitBtn.addEventListener('click', () => {
        switchScreen(UI.adminPanelScreen, UI.startScreen);
    });
}

if (UI.adminAuthForm) {
    UI.adminAuthForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const enteredPassword = UI.adminPasswordInput.value;
        const enteredHash = await hashPassword(enteredPassword);
        
        if (enteredHash === ADMIN_PASSWORD_HASH) {
            UI.adminPasswordInput.value = "";
            UI.adminAuthError.classList.add('hidden');
            switchScreen(UI.adminAuthScreen, UI.adminPanelScreen);
            renderAdminWordsList();
        } else {
            UI.adminAuthError.textContent = "Incorrect password. Try again.";
            UI.adminAuthError.classList.remove('hidden');
            UI.adminPasswordInput.focus();
            UI.adminPasswordInput.select();
        }
    });
}

if (UI.adminWordListSelect) {
    UI.adminWordListSelect.addEventListener('change', (e) => {
        adminCurrentWordBank = e.target.value;
        renderAdminWordsList();
    });
}

const diffTabs = document.querySelectorAll('.diff-tab-btn');
diffTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        diffTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        adminCurrentDifficulty = tab.getAttribute('data-difficulty');
        renderAdminWordsList();
    });
});

if (UI.adminSearchInput) {
    UI.adminSearchInput.addEventListener('input', (e) => {
        adminSearchQuery = e.target.value;
        renderAdminWordsList();
    });
}

if (UI.adminAddWordBtn) {
    UI.adminAddWordBtn.addEventListener('click', openAddWordForm);
}

if (UI.adminFormCancelBtn) {
    UI.adminFormCancelBtn.addEventListener('click', closeWordForm);
}

if (UI.adminWordForm) {
    UI.adminWordForm.addEventListener('submit', saveWordForm);
}

if (UI.adminResetBtn) {
    UI.adminResetBtn.addEventListener('click', resetToDefaults);
}

if (UI.adminExportJsBtn) {
    UI.adminExportJsBtn.addEventListener('click', () => {
        const content = `const WORD_LIST_11PLUS = ${JSON.stringify(currentWordList11Plus, null, 4)};\n\nconst WORD_LIST = ${JSON.stringify(currentWordList, null, 4)};\n`;
        exportWordListFile("words.js", content);
        showAdminToast("Exported words.js");
    });
}

if (UI.adminExportFilteredBtn) {
    UI.adminExportFilteredBtn.addEventListener('click', () => {
        const content = `const WORD_LIST = ${JSON.stringify(currentWordList, null, 4)};\n`;
        exportWordListFile("words_filtered.js", content);
        showAdminToast("Exported words_filtered.js");
    });
}

// ==========================================
// Sticker Shop & Album Controllers
// ==========================================
function openStickerShop(tab = "shop") {
    activeStickerTab = tab;
    if (UI.shopTabAll && UI.shopTabAlbum) {
        if (tab === "shop") {
            UI.shopTabAll.classList.add('active');
            UI.shopTabAlbum.classList.remove('active');
        } else {
            UI.shopTabAlbum.classList.add('active');
            UI.shopTabAll.classList.remove('active');
        }
    }
    renderStickerCategories();
    renderStickers();
    updateCoinUI();
    if (UI.stickerShopModal) {
        UI.stickerShopModal.classList.remove('hidden');
    }
}

function closeStickerShop() {
    if (UI.stickerShopModal) {
        UI.stickerShopModal.classList.add('hidden');
    }
}

function renderStickerCategories() {
    if (!UI.stickerCategoriesBar || typeof STICKER_CATEGORIES === 'undefined') return;
    UI.stickerCategoriesBar.innerHTML = '';

    const allChip = document.createElement('button');
    allChip.className = `sticker-cat-chip ${selectedStickerCategory === 'all' ? 'active' : ''}`;
    allChip.textContent = '🌟 All Categories';
    allChip.onclick = () => {
        selectedStickerCategory = 'all';
        renderStickerCategories();
        renderStickers();
    };
    UI.stickerCategoriesBar.appendChild(allChip);

    STICKER_CATEGORIES.forEach(cat => {
        const chip = document.createElement('button');
        chip.className = `sticker-cat-chip ${selectedStickerCategory === cat.id ? 'active' : ''}`;
        chip.textContent = `${cat.icon} ${cat.name}`;
        chip.onclick = () => {
            selectedStickerCategory = cat.id;
            renderStickerCategories();
            renderStickers();
        };
        UI.stickerCategoriesBar.appendChild(chip);
    });
}

function renderStickers() {
    if (!UI.stickersGrid || typeof ALL_STICKERS === 'undefined') return;
    UI.stickersGrid.innerHTML = '';

    let filtered = ALL_STICKERS.filter(s => {
        const matchesCategory = selectedStickerCategory === 'all' || s.category === selectedStickerCategory;
        const matchesSearch = s.name.toLowerCase().includes(stickerSearchQuery.toLowerCase());
        const matchesTab = (activeStickerTab === 'shop') ? true : unlockedStickers.has(s.id);
        return matchesCategory && matchesSearch && matchesTab;
    });

    if (filtered.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'no-words-message';
        emptyMsg.style.gridColumn = '1 / -1';
        emptyMsg.textContent = activeStickerTab === 'album' 
            ? 'No stickers collected in this category yet! Visit the Shop to unlock them with Honey Coins.' 
            : 'No stickers found matching your search.';
        UI.stickersGrid.appendChild(emptyMsg);
        return;
    }

    filtered.forEach(sticker => {
        const isOwned = unlockedStickers.has(sticker.id);
        const card = document.createElement('div');
        card.className = `sticker-item rarity-${sticker.rarity}`;

        const iconEl = document.createElement('div');
        iconEl.className = 'sticker-icon';
        iconEl.textContent = sticker.icon;

        const nameEl = document.createElement('div');
        nameEl.className = 'sticker-name';
        nameEl.textContent = sticker.name;

        const rarityEl = document.createElement('span');
        rarityEl.className = `sticker-rarity ${sticker.rarity}`;
        rarityEl.textContent = sticker.rarity;

        const buyBtn = document.createElement('button');
        buyBtn.type = 'button';
        if (isOwned) {
            buyBtn.className = 'sticker-buy-btn owned';
            buyBtn.textContent = '✅ Owned';
            buyBtn.disabled = true;
        } else {
            buyBtn.className = 'sticker-buy-btn buy';
            buyBtn.textContent = `${sticker.price} 🍯 Buy`;
            buyBtn.disabled = currentHoneyCoins < sticker.price;
            buyBtn.onclick = () => buySticker(sticker);
        }

        card.appendChild(iconEl);
        card.appendChild(nameEl);
        card.appendChild(rarityEl);
        card.appendChild(buyBtn);
        UI.stickersGrid.appendChild(card);
    });
}

function buySticker(sticker) {
    if (currentHoneyCoins < sticker.price) {
        showFeedback(false);
        return;
    }
    currentHoneyCoins -= sticker.price;
    unlockedStickers.add(sticker.id);
    saveGamificationState();
    updateCoinUI();
    renderStickers();
    triggerBeeCheer();
}

// ==========================================
// Wallpaper Gallery Controllers
// ==========================================
function openWallpaperGallery() {
    renderWallpapers();
    updateCoinUI();
    if (UI.wallpaperGalleryModal) {
        UI.wallpaperGalleryModal.classList.remove('hidden');
    }
}

function closeWallpaperGallery() {
    if (UI.wallpaperGalleryModal) {
        UI.wallpaperGalleryModal.classList.add('hidden');
    }
}

function renderWallpapers() {
    if (!UI.wallpapersGrid || typeof WALLPAPERS === 'undefined') return;
    UI.wallpapersGrid.innerHTML = '';

    WALLPAPERS.forEach(wp => {
        const isUnlocked = totalLifetimePoints >= wp.pointsRequired;
        const isEquipped = activeWallpaperId === wp.id;
        const revealedTiles = Math.min(wp.totalTiles, Math.floor((totalLifetimePoints / wp.pointsRequired) * wp.totalTiles));
        const progressPct = Math.min(100, Math.floor((totalLifetimePoints / wp.pointsRequired) * 100));

        const card = document.createElement('div');
        card.className = 'wallpaper-card';

        // Header
        const header = document.createElement('div');
        header.className = 'wallpaper-card-header';
        
        const title = document.createElement('span');
        title.className = 'wp-title';
        title.textContent = wp.name;

        const badge = document.createElement('span');
        badge.className = `wp-status-badge ${isUnlocked ? 'unlocked' : 'locked'}`;
        badge.textContent = isUnlocked ? 'Unlocked' : `${totalLifetimePoints}/${wp.pointsRequired} Pts`;

        header.appendChild(title);
        header.appendChild(badge);

        // Preview Box with Mystery Tiles
        const previewBox = document.createElement('div');
        previewBox.className = 'wp-preview-box';
        previewBox.style.background = wp.bgStyle;

        const centerEmoji = document.createElement('div');
        centerEmoji.className = 'wp-preview-center-emoji';
        centerEmoji.textContent = wp.emoji;
        previewBox.appendChild(centerEmoji);

        const tileGrid = document.createElement('div');
        tileGrid.className = 'wp-tile-grid';
        for (let i = 0; i < wp.totalTiles; i++) {
            const tile = document.createElement('div');
            tile.className = `wp-tile ${i < revealedTiles ? 'revealed' : ''}`;
            tileGrid.appendChild(tile);
        }
        previewBox.appendChild(tileGrid);

        // Progress Bar
        const progContainer = document.createElement('div');
        progContainer.className = 'wp-progress-bar-container';
        const progBar = document.createElement('div');
        progBar.className = 'wp-progress-bar';
        progBar.style.width = `${progressPct}%`;
        progContainer.appendChild(progBar);

        // Description
        const desc = document.createElement('p');
        desc.style.fontSize = '0.88rem';
        desc.style.color = 'var(--text-muted)';
        desc.style.margin = '2px 0 6px 0';
        desc.textContent = wp.desc;

        // Button
        const btn = document.createElement('button');
        btn.type = 'button';
        if (!isUnlocked) {
            btn.className = 'wp-equip-btn';
            btn.disabled = true;
            btn.textContent = `🔒 Unlocks at ${wp.pointsRequired} Pts (${revealedTiles}/${wp.totalTiles} Revealed)`;
        } else if (isEquipped) {
            btn.className = 'wp-equip-btn equipped';
            btn.textContent = '✅ Currently Equipped (Click to Default)';
            btn.onclick = () => {
                activeWallpaperId = 'default';
                saveGamificationState();
                applyActiveWallpaper();
                renderWallpapers();
            };
        } else {
            btn.className = 'wp-equip-btn equip';
            btn.textContent = 'Equip Wallpaper';
            btn.onclick = () => {
                activeWallpaperId = wp.id;
                saveGamificationState();
                applyActiveWallpaper();
                renderWallpapers();
            };
        }

        card.appendChild(header);
        card.appendChild(previewBox);
        card.appendChild(progContainer);
        card.appendChild(desc);
        card.appendChild(btn);

        UI.wallpapersGrid.appendChild(card);
    });
}

// Gamification Modal Event Listeners
if (UI.openStickersBtn) {
    UI.openStickersBtn.addEventListener('click', () => openStickerShop("shop"));
}
if (UI.gameoverStickersBtn) {
    UI.gameoverStickersBtn.addEventListener('click', () => openStickerShop("shop"));
}
if (UI.closeStickersBtn) {
    UI.closeStickersBtn.addEventListener('click', closeStickerShop);
}
if (UI.shopTabAll) {
    UI.shopTabAll.addEventListener('click', () => {
        UI.shopTabAll.classList.add('active');
        if (UI.shopTabAlbum) UI.shopTabAlbum.classList.remove('active');
        activeStickerTab = "shop";
        renderStickers();
    });
}
if (UI.shopTabAlbum) {
    UI.shopTabAlbum.addEventListener('click', () => {
        UI.shopTabAlbum.classList.add('active');
        if (UI.shopTabAll) UI.shopTabAll.classList.remove('active');
        activeStickerTab = "album";
        renderStickers();
    });
}
if (UI.stickerSearchInput) {
    UI.stickerSearchInput.addEventListener('input', (e) => {
        stickerSearchQuery = e.target.value;
        renderStickers();
    });
}

if (UI.openWallpapersBtn) {
    UI.openWallpapersBtn.addEventListener('click', openWallpaperGallery);
}
if (UI.gameoverWallpapersBtn) {
    UI.gameoverWallpapersBtn.addEventListener('click', openWallpaperGallery);
}
if (UI.closeWallpapersBtn) {
    UI.closeWallpapersBtn.addEventListener('click', closeWallpaperGallery);
}

// Close modals on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (UI.stickerShopModal && !UI.stickerShopModal.classList.contains('hidden')) {
            closeStickerShop();
        }
        if (UI.wallpaperGalleryModal && !UI.wallpaperGalleryModal.classList.contains('hidden')) {
            closeWallpaperGallery();
        }
    }
});


