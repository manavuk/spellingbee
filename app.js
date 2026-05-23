let currentLives = 10;
let score = 0;
let currentWordObj = null;
let currentDifficulty = "easy";
let wordsPool = [];
let usedWords = new Set();
let synthMessage = null;
let speakTimeout = null;
let selectedVoiceName = "";
let selectedWordListType = "default";
let rightAnswersCount = 0;
let wrongWordsSet = new Set();
let currentWordDefinition = "";
let currentWordSentence = "";
let currentWordPartOfSpeech = "";

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
    
    answerForm: document.getElementById('answer-form'),
    answerInput: document.getElementById('answer-input'),
    
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
    hintText: document.getElementById('hint-text')
};

function initGame() {
    currentLives = 10;
    score = 0;
    rightAnswersCount = 0;
    wrongWordsSet.clear();
    usedWords.clear();
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
    // WORD_LIST and WORD_LIST_11PLUS are defined in words.js
    const activeList = (selectedWordListType === "11plus") ? WORD_LIST_11PLUS : WORD_LIST;
    wordsPool = activeList.filter(w => w.difficulty === currentDifficulty);
    
    // Fallback: if the filtered list is empty (e.g. no easy words in the selected list),
    // fall back to using any available word from the list
    if (wordsPool.length === 0 && activeList.length > 0) {
        wordsPool = activeList;
    }
}

function nextTurn() {
    UI.answerForm.classList.remove('hidden');
    UI.optionsContainer.classList.add('hidden');
    
    UI.answerInput.value = '';
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
    const isCorrect = currentWordObj.valid.includes(selected);
    const buttons = UI.optionsGrid.querySelectorAll('.option-btn');
    buttons.forEach(b => b.disabled = true);
    
    if (isCorrect) {
        rightAnswersCount++;
        btnNode.classList.add('correct');
        showFeedback(true, 5); // 5 points for second chance
        score += 5;
        updateUI();
        setTimeout(nextTurn, 1000);
    } else {
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
        
        // Next word right after showing feedback briefly
        setTimeout(nextTurn, 1000);
    } else {
        // Incorrect on first try
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
