let currentLives = 10;
let score = 0;
let currentWordObj = null;
let currentDifficulty = "easy";
let wordsPool = [];
let usedWords = new Set();
let synthMessage = null;

const synth = window.speechSynthesis;

const UI = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    gameOverScreen: document.getElementById('game-over-screen'),
    
    startBtn: document.getElementById('start-btn'),
    listenBtn: document.getElementById('listen-btn'),
    restartBtn: document.getElementById('restart-btn'),
    
    answerForm: document.getElementById('answer-form'),
    answerInput: document.getElementById('answer-input'),
    
    optionsContainer: document.getElementById('options-container'),
    optionsGrid: document.getElementById('options-grid'),
    
    livesCount: document.getElementById('lives-count'),
    scoreDisplay: document.getElementById('score'),
    
    difficultyBadge: document.getElementById('difficulty-badge'),
    feedback: document.getElementById('feedback'),
    finalScore: document.getElementById('final-score'),
    gameOverTitle: document.getElementById('game-over-title')
};

function initGame() {
    currentLives = 10;
    score = 0;
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
    // WORD_LIST is defined in words.js
    wordsPool = WORD_LIST.filter(w => w.difficulty === currentDifficulty);
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
    speakWord(currentWordObj.word);
}

function speakWord(word) {
    if (synth.speaking) {
        synth.cancel();
    }
    synthMessage = new SpeechSynthesisUtterance(word);
    const voices = synth.getVoices();
    const enVoices = voices.filter(v => v.lang.startsWith('en'));
    
    if (enVoices.length > 0) {
        // Find Google US/UK English or default to first en voice
        synthMessage.voice = enVoices.find(v => v.name.includes('Google') && v.lang.startsWith('en')) || 
                             enVoices.find(v => v.lang === 'en-US' || v.lang === 'en-GB') || 
                             enVoices[0];
    }
    synthMessage.rate = 0.85; // slightly slower
    
    // Add brief delay so it feels natural
    setTimeout(() => synth.speak(synthMessage), 100);
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
        btnNode.classList.add('correct');
        showFeedback(true, 5); // 5 points for second chance
        score += 5;
        updateUI();
        setTimeout(nextTurn, 1000);
    } else {
        currentLives--;
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
    UI.gameOverTitle.textContent = score > 200 ? "Amazing Job!" : "Game Over";
    switchScreen(UI.gameScreen, UI.gameOverScreen);
}

// Event Listeners
UI.startBtn.addEventListener('click', initGame);
UI.restartBtn.addEventListener('click', initGame);
UI.listenBtn.addEventListener('click', () => {
    if (currentWordObj) {
        speakWord(currentWordObj.word);
        UI.answerInput.focus();
    }
});
UI.answerForm.addEventListener('submit', handleAnswer);

// Initialize Voices on Load
window.speechSynthesis.onvoiceschanged = () => {
    synth.getVoices();
};
