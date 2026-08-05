let currentLives = 10;
let startingLives = 10;
let score = 0;
let currentWordObj = null;
let currentDifficulty = "easy";
let wordsPool = [];
let usedWords = new Set();
let synthMessage = null;
let speakTimeout = null;
let selectedVoiceName = "";
let selectedWordListType = "11plus";
let rightAnswersCount = 0;
let wrongWordsSet = new Set();
let currentWordDefinition = "";
let currentWordSentence = "";
let currentWordPartOfSpeech = "";

let currentWordList = [];
let currentWordList11Plus = [];

const MISSPELLED_STORAGE_KEY = 'spelling_bee_misspelled_words_bank';
let misspelledBank = [];

function loadMisspelledBank() {
    try {
        const stored = localStorage.getItem(MISSPELLED_STORAGE_KEY);
        misspelledBank = stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error("Error loading misspelled bank", e);
        misspelledBank = [];
    }
}
loadMisspelledBank();

function saveMisspelledBank() {
    try {
        localStorage.setItem(MISSPELLED_STORAGE_KEY, JSON.stringify(misspelledBank));
    } catch (e) {
        console.error("Error saving misspelled bank", e);
    }
}
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

function addMisspelledWord(wordObj, userTypedWord = null) {
    if (!wordObj || !wordObj.word) return;
    const targetWord = wordObj.word;
    const existingIndex = misspelledBank.findIndex(item => item.word.toLowerCase() === targetWord.toLowerCase());
    const validSpellings = wordObj.valid || [targetWord];
    const difficulty = wordObj.difficulty || "easy";
    const dateStr = new Date().toISOString();

    if (existingIndex !== -1) {
        misspelledBank[existingIndex].count = (misspelledBank[existingIndex].count || 1) + 1;
        misspelledBank[existingIndex].lastMissed = dateStr;
        if (userTypedWord && !misspelledBank[existingIndex].attempts.includes(userTypedWord)) {
            misspelledBank[existingIndex].attempts.push(userTypedWord);
        }
    } else {
        misspelledBank.push({
            word: targetWord,
            valid: validSpellings,
            difficulty: difficulty,
            count: 1,
            lastMissed: dateStr,
            attempts: userTypedWord ? [userTypedWord] : []
        });
    }
    saveMisspelledBank();
}

function removeMisspelledWord(word) {
    misspelledBank = misspelledBank.filter(item => item.word.toLowerCase() !== word.toLowerCase());
    saveMisspelledBank();
}

function clearAllMisspelledWords() {
    misspelledBank = [];
    saveMisspelledBank();
}


const synth = window.speechSynthesis;

const UI = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameOverScreen: document.getElementById('game-over-screen'),
    
    startBtn: document.getElementById('start-btn'),
    listenBtn: document.getElementById('listen-btn'),
    listenSlowBtn: document.getElementById('listen-slow-btn'),
    restartBtn: document.getElementById('restart-btn'),
    voiceSelect: document.getElementById('voice-select'),
    wordListSelect: document.getElementById('word-list-select'),
    livesSelect: document.getElementById('lives-select'),
    
    answerForm: document.getElementById('answer-form'),
    answerInput: document.getElementById('answer-input'),
    
    optionsContainer: document.getElementById('options-container'),
    optionsGrid: document.getElementById('options-grid'),
    
    livesCount: document.getElementById('lives-count'),
    scoreDisplay: document.getElementById('score'),
    
    difficultyBadge: document.getElementById('difficulty-badge'),
    feedback: document.getElementById('feedback'),
    mascotPopup: document.getElementById('mascot-popup'),
    mascotPopupImg: document.getElementById('mascot-popup-img'),
    mascotPopupText: document.getElementById('mascot-popup-text'),
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

    // Misspelled Screen elements
    misspelledEntranceBtn: document.getElementById('misspelled-entrance-btn'),
    gameoverMisspelledBtn: document.getElementById('gameover-misspelled-btn'),
    misspelledScreen: document.getElementById('misspelled-screen'),
    misspelledSearchInput: document.getElementById('misspelled-search-input'),
    exportCsvBtn: document.getElementById('export-csv-btn'),
    clearAllMisspelledBtn: document.getElementById('clear-all-misspelled-btn'),
    misspelledWordsList: document.getElementById('misspelled-words-list'),
    misspelledExitBtn: document.getElementById('misspelled-exit-btn'),

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

const STORAGE_KEY = 'spellingBeeGameState';

function saveGameState() {
    if (!currentWordObj || currentLives <= 0) {
        clearGameState();
        return;
    }
    const state = {
        isGameActive: true,
        currentLives,
        startingLives,
        score,
        rightAnswersCount,
        currentDifficulty,
        selectedVoiceName,
        selectedWordListType,
        usedWords: Array.from(usedWords),
        wrongWordsSet: Array.from(wrongWordsSet),
        currentWordObj,
        isOptionsShowing: UI.optionsContainer ? !UI.optionsContainer.classList.contains('hidden') : false,
        currentWordDefinition,
        currentWordSentence,
        currentWordPartOfSpeech
    };
    const serialized = JSON.stringify(state);
    try {
        localStorage.setItem(STORAGE_KEY, serialized);
    } catch (e) {
        console.error("Error saving to localStorage:", e);
    }
    try {
        sessionStorage.setItem(STORAGE_KEY, serialized);
    } catch (e) {
        console.error("Error saving to sessionStorage:", e);
    }
}

function clearGameState() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    try {
        sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
}

function restoreGameState() {
    let saved = null;
    try {
        saved = sessionStorage.getItem(STORAGE_KEY);
    } catch (e) {}
    if (!saved) {
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        } catch (e) {}
    }

    if (!saved) return false;

    let state;
    try {
        state = JSON.parse(saved);
    } catch (e) {
        console.error("Corrupted game state in storage:", e);
        clearGameState();
        return false;
    }

    if (!state || !state.isGameActive || state.currentLives <= 0 || !state.currentWordObj) {
        clearGameState();
        return false;
    }

    try {
        startingLives = state.startingLives || 10;
        currentLives = state.currentLives;
        score = state.score;
        rightAnswersCount = state.rightAnswersCount || 0;
        currentDifficulty = state.currentDifficulty || "easy";
        selectedVoiceName = state.selectedVoiceName || "";
        selectedWordListType = state.selectedWordListType || "11plus";
        usedWords = new Set(state.usedWords || []);
        wrongWordsSet = new Set(state.wrongWordsSet || []);
        currentWordObj = state.currentWordObj;
        currentWordDefinition = state.currentWordDefinition || "";
        currentWordSentence = state.currentWordSentence || "";
        currentWordPartOfSpeech = state.currentWordPartOfSpeech || "";

        if (UI.voiceSelect && selectedVoiceName) {
            UI.voiceSelect.value = selectedVoiceName;
        }
        if (UI.wordListSelect && selectedWordListType) {
            UI.wordListSelect.value = selectedWordListType;
        }
        if (UI.livesSelect && startingLives) {
            UI.livesSelect.value = String(startingLives);
        }

        updateDifficulty();
        updateUI();
        updateBadge();

        showScreen(UI.gameScreen);

        if (state.isOptionsShowing) {
            showOptions();
        } else {
            UI.answerForm.classList.remove('hidden');
            UI.optionsContainer.classList.add('hidden');
            UI.answerInput.value = '';
        }

        if (currentWordDefinition || currentWordSentence) {
            if (UI.hintContainer) UI.hintContainer.classList.remove('hidden');
            if (UI.defineBtn) UI.defineBtn.disabled = !currentWordDefinition;
            if (UI.sentenceBtn) UI.sentenceBtn.disabled = !currentWordSentence;
        } else {
            if (UI.hintContainer) UI.hintContainer.classList.add('hidden');
            if (UI.hintDisplay) UI.hintDisplay.classList.add('hidden');
            if (UI.defineBtn) UI.defineBtn.disabled = true;
            if (UI.sentenceBtn) UI.sentenceBtn.disabled = true;
            fetchWordDetails(currentWordObj.word);
        }

        saveGameState();
        return true;
    } catch (e) {
        console.error("Error restoring game state UI:", e);
        return false;
    }
}

function initGame() {
    clearGameState();
    startingLives = UI.livesSelect ? (parseInt(UI.livesSelect.value) || 10) : 10;
    currentLives = startingLives;
    score = 0;
    rightAnswersCount = 0;
    wrongWordsSet.clear();
    usedWords.clear();
    updateDifficulty();
    updateUI();

    showScreen(UI.gameScreen);
    nextTurn();
}

function showScreen(screenToShow) {
    const screens = [
        UI.startScreen,
        UI.gameScreen,
        UI.gameOverScreen,
        UI.misspelledScreen,
        UI.adminAuthScreen,
        UI.adminPanelScreen
    ];
    screens.forEach(screen => {
        if (!screen) return;
        if (screen === screenToShow) {
            screen.classList.remove('hidden');
            screen.classList.add('active');
        } else {
            screen.classList.remove('active');
            screen.classList.add('hidden');
        }
    });
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
    UI.optionsContainer.classList.add('hidden');

    UI.answerInput.value = '';
    UI.answerInput.focus();
    updateDifficulty();

    const activeList = (selectedWordListType === "11plus") ? currentWordList11Plus : currentWordList;

    // Filter unused words for current difficulty tier
    let availableWords = wordsPool.filter(w => !usedWords.has(w.word));

    // If current difficulty tier words are exhausted, search across all difficulties in active word bank
    if (availableWords.length === 0) {
        availableWords = activeList.filter(w => !usedWords.has(w.word) && w.status !== "inactive");
    }

    // If ALL words in the entire word bank have been used, trigger game victory (no repeating words)
    if (availableWords.length === 0) {
        clearGameState();
        UI.finalScore.textContent = score;
        UI.rightAnswersDisplay.textContent = rightAnswersCount;
        UI.wrongWordsList.innerHTML = '<li>All words completed! Great job!</li>';
        UI.gameOverTitle.textContent = "Victory! All Words Spelled!";
        showScreen(UI.gameOverScreen);
        return;
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

    saveGameState();
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
    
    if (UI.mascotPopup) {
        if (isCorrect) {
            const correctVariations = [
                { img: 'bee_happy.png', msg: `Awesome! +${change} pts! 🌟` },
                { img: 'bee_superhero.png', msg: `Super Bee! +${change} pts! 🚀` },
                { img: 'bee_logo.png', msg: `Genius! +${change} pts! 🎓` }
            ];
            const pick = correctVariations[Math.floor(Math.random() * correctVariations.length)];
            UI.mascotPopupImg.src = pick.img;
            UI.mascotPopupText.textContent = pick.msg;
            UI.mascotPopup.className = 'mascot-popup show correct';
        } else {
            const wrongVariations = [
                { img: 'bee_oops.png', msg: "Oops! Keep trying! 🐝" },
                { img: 'bee_thinking.png', msg: "Hmm, let's search again! 🔍" },
                { img: 'bee_dizzy.png', msg: "Whoops! Almost had it! 💫" },
                { img: 'bee_oops.png', msg: "Don't give up! Try again! 💪" }
            ];
            const pick = wrongVariations[Math.floor(Math.random() * wrongVariations.length)];
            UI.mascotPopupImg.src = pick.img;
            UI.mascotPopupText.textContent = pick.msg;
            UI.mascotPopup.className = 'mascot-popup show wrong';
        }
    }

    setTimeout(() => {
        UI.feedback.classList.remove('show');
        if (UI.mascotPopup) {
            UI.mascotPopup.classList.remove('show');
        }
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

    saveGameState();
}

function handleOptionSelect(selected, btnNode) {
    const isCorrect = currentWordObj.valid.includes(selected);
    const buttons = UI.optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);

    if (isCorrect) {
        rightAnswersCount++;
        btnNode.classList.add('correct');
        showFeedback(true, 5); // 5 points for second chance
        score += 5;
        updateUI();
        saveGameState();
        setTimeout(nextTurn, 1000);
    } else {
        currentLives--;
        wrongWordsSet.add(currentWordObj.valid[0]);
        addMisspelledWord(currentWordObj, selected);
        btnNode.classList.add('wrong');
        buttons.forEach(b => {
            if (currentWordObj.valid.includes(b.textContent)) {
                b.classList.add('correct');
            }
        });

        showFeedback(false);
        updateUI();
        saveGameState();

        if (currentLives <= 0) {
            setTimeout(gameOver, 2000);
        } else {
            setTimeout(nextTurn, 2500);
        }
    }
}

function handleAnswer(e) {
    e.preventDefault();
    const userAnswer = UI.answerInput.value.trim().toLowerCase();
    if (!userAnswer) return;
    
    if (currentWordObj.valid.includes(userAnswer)) {
        // Correct
        rightAnswersCount++;
        let points = 10;
        if (currentDifficulty === 'medium') points = 20;
        if (currentDifficulty === 'hard') points = 30;
        if (currentDifficulty === 'expert') points = 50;
        
        score += points;
        
        // Trigger CSS animations
        UI.answerInput.classList.remove('error-shake', 'success-pop');
        void UI.answerInput.offsetWidth;
        UI.answerInput.classList.add('success-pop');
        
        showFeedback(true, points);
        updateUI();
        saveGameState();

        // Next word right after showing feedback briefly
        setTimeout(nextTurn, 1000);
    } else {
        // Incorrect on first try
        wrongWordsSet.add(currentWordObj.valid[0]);
        addMisspelledWord(currentWordObj, userAnswer);
        currentLives--;

        UI.answerInput.classList.remove('error-shake', 'success-pop');
        void UI.answerInput.offsetWidth;
        UI.answerInput.classList.add('error-shake');

        UI.gameScreen.classList.remove('shake');
        void UI.gameScreen.offsetWidth;
        UI.gameScreen.classList.add('shake');

        showFeedback(false);
        updateUI();
        saveGameState();

        if (currentLives <= 0) {
            UI.answerInput.blur();
            UI.answerInput.value = currentWordObj.valid[0];
            UI.answerInput.style.color = 'var(--danger)';
            setTimeout(gameOver, 1500);
        } else {
            // Show options as penalty
            setTimeout(() => {
                showOptions();
            }, 1000);
        }
    }
}

function gameOver() {
    clearGameState();
    UI.answerInput.style.color = ''; // reset style
    UI.finalScore.textContent = score;
    UI.rightAnswersDisplay.textContent = rightAnswersCount;

    UI.wrongWordsList.innerHTML = '';
    wrongWordsSet.forEach(word => {
        const li = document.createElement('li');
        li.textContent = word;
        UI.wrongWordsList.appendChild(li);
    });

    UI.gameOverTitle.textContent = score > 200 ? "Amazing Job!" : "Game Over";
    showScreen(UI.gameOverScreen);
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

    const cleanWord = word.trim().toLowerCase();

    // 1. Try Free Dictionary API
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(cleanWord)}`);
        if (response.ok) {
            const data = await response.json();
            if (data && data.length > 0) {
                const firstEntry = data[0];
                if (firstEntry.meanings && firstEntry.meanings.length > 0) {
                    for (const meaning of firstEntry.meanings) {
                        if (meaning.definitions && meaning.definitions.length > 0) {
                            currentWordDefinition = meaning.definitions[0].definition || "";
                            currentWordPartOfSpeech = meaning.partOfSpeech || "";
                            break;
                        }
                    }
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
            }
        }
    } catch (err) {
        console.error("Error fetching from primary dictionary API:", err);
    }

    // 2. Fallback: Try Datamuse API if primary dictionary didn't return a definition
    if (!currentWordDefinition) {
        try {
            const response = await fetch(`https://api.datamuse.com/words?sp=${encodeURIComponent(cleanWord)}&md=d&max=1`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.length > 0 && data[0].defs && data[0].defs.length > 0) {
                    const defString = data[0].defs[0]; // Format: "n\tdefinition text"
                    const parts = defString.split('\t');
                    if (parts.length > 1) {
                        const posMap = { n: 'noun', v: 'verb', adj: 'adjective', adv: 'adverb' };
                        currentWordPartOfSpeech = posMap[parts[0]] || parts[0];
                        currentWordDefinition = parts[1];
                    } else {
                        currentWordDefinition = defString;
                    }
                }
            }
        } catch (err) {
            console.error("Error fetching from secondary dictionary API:", err);
        }
    }

    // 3. Fallback: Try English Wiktionary REST API if still no definition
    if (!currentWordDefinition) {
        try {
            const response = await fetch(`https://en.wiktionary.org/api/rest_v1/page/definition/${encodeURIComponent(cleanWord)}`);
            if (response.ok) {
                const data = await response.json();
                if (data && data.en && data.en.length > 0) {
                    const firstMeaning = data.en[0];
                    if (firstMeaning.definitions && firstMeaning.definitions.length > 0) {
                        const rawDef = firstMeaning.definitions[0].definition || "";
                        // Strip HTML tags if any from Wiktionary HTML response
                        const cleanDef = rawDef.replace(/<[^>]*>?/gm, '').trim();
                        if (cleanDef) {
                            currentWordDefinition = cleanDef;
                            currentWordPartOfSpeech = firstMeaning.partOfSpeech || "";
                        }
                    }
                }
            }
        } catch (err) {
            console.error("Error fetching from tertiary dictionary API:", err);
        }
    }

    // If a definition was found, format part of speech into definition if available
    if (currentWordDefinition && currentWordPartOfSpeech) {
        // Normalize capitalization
        currentWordDefinition = currentWordDefinition.charAt(0).toUpperCase() + currentWordDefinition.slice(1);
    }

    // Enable define button since we attempted to retrieve accurate definition
    if (UI.defineBtn) UI.defineBtn.disabled = !currentWordDefinition;
    if (currentWordSentence && UI.sentenceBtn) UI.sentenceBtn.disabled = false;

    if (UI.hintContainer) {
        if (currentWordDefinition || currentWordSentence) {
            UI.hintContainer.classList.remove('hidden');
        } else {
            UI.hintContainer.classList.add('hidden');
        }
    }

    saveGameState();
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
UI.restartBtn.addEventListener('click', initGame);
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

// Misspelled Words Bank UI Logic
let misspelledSearchQuery = "";

function renderMisspelledWordsList() {
    if (!UI.misspelledWordsList) return;
    UI.misspelledWordsList.innerHTML = '';

    let filtered = misspelledBank.slice();

    if (misspelledSearchQuery.trim() !== "") {
        const query = misspelledSearchQuery.trim().toLowerCase();
        filtered = filtered.filter(item => 
            item.word.toLowerCase().includes(query) ||
            item.valid.some(v => v.toLowerCase().includes(query)) ||
            (item.attempts && item.attempts.some(a => a.toLowerCase().includes(query)))
        );
    }

    if (filtered.length === 0) {
        const emptyMsg = document.createElement('div');
        emptyMsg.className = 'no-words-message';
        emptyMsg.textContent = misspelledSearchQuery 
            ? "No misspelled words match your search." 
            : "No misspelled words recorded yet! Play a game to practice spelling.";
        UI.misspelledWordsList.appendChild(emptyMsg);
        return;
    }

    // Sort by count descending (most missed first), then alphabetically
    filtered.sort((a, b) => (b.count || 1) - (a.count || 1) || a.word.localeCompare(b.word));

    filtered.forEach(item => {
        const row = document.createElement('div');
        row.className = 'admin-word-row';

        const details = document.createElement('div');
        details.className = 'admin-word-details';

        const textWrapper = document.createElement('div');
        textWrapper.className = 'admin-word-text-wrapper';

        const name = document.createElement('span');
        name.className = 'admin-word-name';
        name.textContent = item.word;

        const countBadge = document.createElement('span');
        countBadge.className = 'status-badge inactive';
        countBadge.textContent = `Missed ${item.count || 1}x`;

        const diffBadge = document.createElement('span');
        diffBadge.className = 'status-badge active';
        diffBadge.textContent = item.difficulty || 'easy';

        textWrapper.appendChild(name);
        textWrapper.appendChild(countBadge);
        textWrapper.appendChild(diffBadge);

        const spellings = document.createElement('div');
        spellings.className = 'admin-word-valid-spells';
        let subText = `Valid: ${item.valid ? item.valid.join(', ') : item.word}`;
        if (item.attempts && item.attempts.length > 0) {
            subText += ` | Typed: "${item.attempts.join('", "')}"`;
        }
        spellings.textContent = subText;

        details.appendChild(textWrapper);
        details.appendChild(spellings);

        row.appendChild(details);

        const actions = document.createElement('div');
        actions.className = 'admin-word-actions';

        const removeBtn = document.createElement('button');
        removeBtn.className = 'action-btn-sm delete-btn';
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = () => {
            removeMisspelledWord(item.word);
            renderMisspelledWordsList();
        };
        actions.appendChild(removeBtn);

        row.appendChild(actions);

        UI.misspelledWordsList.appendChild(row);
    });
}

function exportMisspelledCSV() {
    if (misspelledBank.length === 0) {
        alert("No misspelled words to export.");
        return;
    }

    const headers = ["Word", "Valid Spellings", "Difficulty", "Times Missed", "User Typed Attempts", "Last Missed Date"];
    const rows = misspelledBank.map(item => {
        const escapeCsv = (str) => `"${String(str || '').replace(/"/g, '""')}"`;
        return [
            escapeCsv(item.word),
            escapeCsv(item.valid ? item.valid.join('; ') : item.word),
            escapeCsv(item.difficulty || 'easy'),
            item.count || 1,
            escapeCsv(item.attempts ? item.attempts.join('; ') : ''),
            escapeCsv(item.lastMissed || '')
        ].join(',');
    });

    const csvContent = [headers.join(','), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `misspelled_words_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
        showScreen(UI.adminAuthScreen);
        UI.adminPasswordInput.value = "";
        UI.adminAuthError.classList.add('hidden');
        UI.adminPasswordInput.focus();
    });
}

if (UI.adminAuthBackBtn) {
    UI.adminAuthBackBtn.addEventListener('click', () => {
        showScreen(UI.startScreen);
    });
}

if (UI.adminExitBtn) {
    UI.adminExitBtn.addEventListener('click', () => {
        showScreen(UI.startScreen);
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
            showScreen(UI.adminPanelScreen);
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

// Misspelled Words Event Listeners
if (UI.misspelledEntranceBtn) {
    UI.misspelledEntranceBtn.addEventListener('click', () => {
        showScreen(UI.misspelledScreen);
        renderMisspelledWordsList();
    });
}

if (UI.gameoverMisspelledBtn) {
    UI.gameoverMisspelledBtn.addEventListener('click', () => {
        showScreen(UI.misspelledScreen);
        renderMisspelledWordsList();
    });
}

if (UI.misspelledExitBtn) {
    UI.misspelledExitBtn.addEventListener('click', () => {
        showScreen(UI.startScreen);
    });
}

if (UI.misspelledSearchInput) {
    UI.misspelledSearchInput.addEventListener('input', (e) => {
        misspelledSearchQuery = e.target.value;
        renderMisspelledWordsList();
    });
}

if (UI.exportCsvBtn) {
    UI.exportCsvBtn.addEventListener('click', exportMisspelledCSV);
}

if (UI.clearAllMisspelledBtn) {
    UI.clearAllMisspelledBtn.addEventListener('click', () => {
        if (misspelledBank.length === 0) return;
        if (confirm("Are you sure you want to clear all misspelled words from the bank?")) {
            clearAllMisspelledWords();
            renderMisspelledWordsList();
        }
    });
}

// Save state right before tab unload or page refresh
window.addEventListener('beforeunload', () => {
    saveGameState();
});
window.addEventListener('pagehide', () => {
    saveGameState();
});

// Restore persisted game state if present
restoreGameState();
document.addEventListener('DOMContentLoaded', () => {
    restoreGameState();
    initSparklesCanvas();
});

// Dynamic Floating Bee Sparkles Animation Canvas
function initSparklesCanvas() {
    const canvas = document.getElementById('sparkles-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const colors = ['#f59e0b', '#fbbf24', '#3b82f6', '#ec4899', '#8b5cf6'];

    for (let i = 0; i < 35; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 3 + 1,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 0.4,
            vy: -Math.random() * 0.5 - 0.2,
            alpha: Math.random() * 0.7 + 0.3
        });
    }

    function animate() {
        ctx.clearRect(0, 0, width, height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            if (p.y < -10) {
                p.y = height + 10;
                p.x = Math.random() * width;
            }
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;

            ctx.save();
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowColor = p.color;
            ctx.shadowBlur = 10;
            ctx.fill();
            ctx.restore();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

