// Perguntas sobre Números de 1 a 100 em Inglês
const numberWords = {
    1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
    6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten",
    11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
    16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty",
    21: "twenty-one", 22: "twenty-two", 23: "twenty-three", 24: "twenty-four", 25: "twenty-five",
    26: "twenty-six", 27: "twenty-seven", 28: "twenty-eight", 29: "twenty-nine", 30: "thirty",
    31: "thirty-one", 32: "thirty-two", 33: "thirty-three", 34: "thirty-four", 35: "thirty-five",
    36: "thirty-six", 37: "thirty-seven", 38: "thirty-eight", 39: "thirty-nine", 40: "forty",
    41: "forty-one", 42: "forty-two", 43: "forty-three", 44: "forty-four", 45: "forty-five",
    46: "forty-six", 47: "forty-seven", 48: "forty-eight", 49: "forty-nine", 50: "fifty",
    51: "fifty-one", 52: "fifty-two", 53: "fifty-three", 54: "fifty-four", 55: "fifty-five",
    56: "fifty-six", 57: "fifty-seven", 58: "fifty-eight", 59: "fifty-nine", 60: "sixty",
    61: "sixty-one", 62: "sixty-two", 63: "sixty-three", 64: "sixty-four", 65: "sixty-five",
    66: "sixty-six", 67: "sixty-seven", 68: "sixty-eight", 69: "sixty-nine", 70: "seventy",
    71: "seventy-one", 72: "seventy-two", 73: "seventy-three", 74: "seventy-four", 75: "seventy-five",
    76: "seventy-six", 77: "seventy-seven", 78: "seventy-eight", 79: "seventy-nine", 80: "eighty",
    81: "eighty-one", 82: "eighty-two", 83: "eighty-three", 84: "eighty-four", 85: "eighty-five",
    86: "eighty-six", 87: "eighty-seven", 88: "eighty-eight", 89: "eighty-nine", 90: "ninety",
    91: "ninety-one", 92: "ninety-two", 93: "ninety-three", 94: "ninety-four", 95: "ninety-five",
    96: "ninety-six", 97: "ninety-seven", 98: "ninety-eight", 99: "ninety-nine", 100: "one hundred"
};

function generateNumberQuestions() {
    const questions = [];
    const numbers = Object.keys(numberWords).map(Number);
    
    // Generate questions: number to word
    for (let i = 0; i < 50; i++) {
        const num = numbers[Math.floor(Math.random() * numbers.length)];
        const correctWord = numberWords[num];
        
        // Get 3 random wrong answers
        const wrongNumbers = numbers.filter(n => n !== num);
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongNum = wrongNumbers[Math.floor(Math.random() * wrongNumbers.length)];
            const wrongWord = numberWords[wrongNum];
            if (!wrongAnswers.includes(wrongWord)) {
                wrongAnswers.push(wrongWord);
            }
        }
        
        const allAnswers = [correctWord, ...wrongAnswers].sort(() => Math.random() - 0.5);
        
        questions.push({
            question: `What is the number ${num} in words?`,
            type: "Numbers 1-100",
            answers: [
                { label: "A", text: allAnswers[0], correct: allAnswers[0] === correctWord },
                { label: "B", text: allAnswers[1], correct: allAnswers[1] === correctWord },
                { label: "C", text: allAnswers[2], correct: allAnswers[2] === correctWord },
                { label: "D", text: allAnswers[3], correct: allAnswers[3] === correctWord }
            ]
        });
    }
    
    // Generate questions: word to number
    for (let i = 0; i < 50; i++) {
        const num = numbers[Math.floor(Math.random() * numbers.length)];
        const word = numberWords[num];
        
        // Get 3 random wrong numbers
        const wrongNumbers = numbers.filter(n => n !== num);
        const wrongAnswers = [];
        while (wrongAnswers.length < 3) {
            const wrongNum = wrongNumbers[Math.floor(Math.random() * wrongNumbers.length)];
            if (!wrongAnswers.includes(wrongNum)) {
                wrongAnswers.push(wrongNum);
            }
        }
        
        const allAnswers = [num, ...wrongAnswers].sort(() => Math.random() - 0.5);
        
        questions.push({
            question: `What number is "${word}"?`,
            type: "Numbers 1-100",
            answers: [
                { label: "A", text: allAnswers[0].toString(), correct: allAnswers[0] === num },
                { label: "B", text: allAnswers[1].toString(), correct: allAnswers[1] === num },
                { label: "C", text: allAnswers[2].toString(), correct: allAnswers[2] === num },
                { label: "D", text: allAnswers[3].toString(), correct: allAnswers[3] === num }
            ]
        });
    }
    
    return questions;
}

const questions = generateNumberQuestions();

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

let PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
const QUESTIONS_PER_GAME = 25;
const RANKING_KEY = 'numbersRanking';

const questionText = document.getElementById('question-text');
const questionType = document.getElementById('question-type');
const answersContainer = document.getElementById('answers-container');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreElement = document.getElementById('score');
const questionNumberElement = document.getElementById('question-number');
const totalQuestionsElement = document.getElementById('total-questions');

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

let shuffledQuestions = shuffleArray(questions).slice(0, QUESTIONS_PER_GAME);

function getRanking() {
    const ranking = localStorage.getItem(RANKING_KEY);
    return ranking ? JSON.parse(ranking) : [];
}

function saveScore(score, total, percentage) {
    const ranking = getRanking();
    const newEntry = {
        player: PLAYER_NAME,
        score: score,
        total: total,
        percentage: percentage,
        date: new Date().toLocaleString('pt-PT')
    };
    ranking.push(newEntry);
    ranking.sort((a, b) => b.percentage - a.percentage);
    const topRanking = ranking.slice(0, 10);
    localStorage.setItem(RANKING_KEY, JSON.stringify(topRanking));
    return topRanking;
}

function getOrdinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return s[(v - 20) % 10] || s[v] || s[0];
}

function displayRanking() {
    const ranking = getRanking();
    const rankingList = document.getElementById('ranking-list');
    const rankingTitle = document.getElementById('ranking-title');
    const rankingModal = document.getElementById('ranking-modal');
    const closeRankingBtn = document.getElementById('close-ranking-btn');
    
    rankingTitle.textContent = `🏆 Ranking - Numbers 🏆`;
    
    if (ranking.length === 0) {
        rankingList.innerHTML = '<p class="no-ranking">No scores yet! Play to appear on the ranking! 🎮</p>';
    } else {
        rankingList.innerHTML = ranking.map((entry, index) => {
            const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
            return `
                <div class="ranking-entry ${index < 3 ? 'top-three' : ''}">
                    <span class="ranking-position">${medal} ${index + 1}${getOrdinal(index + 1)}</span>
                    <span class="ranking-player">${entry.player}</span>
                    <span class="ranking-score">${entry.score}/${entry.total} (${entry.percentage}%)</span>
                    <span class="ranking-date">${entry.date}</span>
                </div>
            `;
        }).join('');
    }
    
    // Mostrar modal
    if (rankingModal) {
        rankingModal.style.display = 'flex';
    }
    
    // Event listeners para fechar modal
    if (closeRankingBtn) {
        closeRankingBtn.addEventListener('click', () => {
            if (rankingModal) {
                rankingModal.style.display = 'none';
            }
        });
    }
    
    if (rankingModal) {
        rankingModal.addEventListener('click', (e) => {
            if (e.target === rankingModal) {
                rankingModal.style.display = 'none';
            }
        });
    }
}

function initGame() {
    PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
    const playerGreeting = document.getElementById('player-greeting');
    if (playerGreeting) {
        playerGreeting.textContent = `Hello ${PLAYER_NAME}! Learn numbers 1 to 100 in English!`;
    }
    
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    shuffledQuestions = shuffleArray(questions).slice(0, QUESTIONS_PER_GAME);
    totalQuestionsElement.textContent = shuffledQuestions.length;
    updateScore();
    loadQuestion();
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'none';
    feedback.textContent = '';
    feedback.className = 'feedback';
}

function updateScore() {
    scoreElement.textContent = score;
    questionNumberElement.textContent = currentQuestionIndex + 1;
}

function loadQuestion() {
    if (currentQuestionIndex >= shuffledQuestions.length) {
        endGame();
        return;
    }

    answered = false;
    const question = shuffledQuestions[currentQuestionIndex];
    
    questionText.textContent = question.question;
    questionType.textContent = question.type;
    
    answersContainer.innerHTML = '';
    feedback.textContent = '';
    feedback.className = 'feedback';
    nextBtn.style.display = 'none';
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.classList.remove('has-next');
    }

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.type = 'button';
        button.innerHTML = `<span class="answer-label">${answer.label}</span>${answer.text}`;
        button.disabled = false;
        button.style.pointerEvents = 'auto';
        button.addEventListener('click', () => selectAnswer(answer, button), { once: true });
        answersContainer.appendChild(button);
    });
}

function selectAnswer(answer, button) {
    if (answered || button.classList.contains('disabled')) return;
    
    answered = true;
    const allButtons = answersContainer.querySelectorAll('.answer-btn');
    
    allButtons.forEach(btn => {
        btn.classList.add('disabled');
        btn.style.pointerEvents = 'none';
        btn.disabled = true;
    });

    if (answer.correct) {
        button.classList.add('correct');
        score++;
        updateScore();
        const messages = [
            `🎉 Excellent ${PLAYER_NAME}! Correct answer! 🎉`,
            `🌟 Well done ${PLAYER_NAME}! You're learning! 🌟`,
            `👏 Great job ${PLAYER_NAME}! Keep it up! 👏`,
            `✨ Amazing work ${PLAYER_NAME}! ✨`
        ];
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
        feedback.className = 'feedback correct';
    } else {
        button.classList.add('incorrect');
        const correctAnswer = shuffledQuestions[currentQuestionIndex].answers.find(a => a.correct);
        allButtons.forEach(btn => {
            if (btn.textContent.includes(correctAnswer.text)) {
                btn.classList.add('correct');
            }
        });
        feedback.textContent = `❌ Not this time! The correct answer was: ${correctAnswer.label} - ${correctAnswer.text}`;
        feedback.className = 'feedback incorrect';
    }

    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        nextBtn.style.display = 'inline-block';
        const backButton = document.querySelector('.back-button');
        if (backButton) {
            backButton.classList.add('has-next');
        }
    } else {
        setTimeout(() => {
            endGame();
        }, 2000);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function endGame() {
    questionText.textContent = `🎊 Congratulations ${PLAYER_NAME}! You finished the game! 🎊`;
    questionType.textContent = '';
    answersContainer.innerHTML = '';
    
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    let message = '';
    
    if (percentage === 100) {
        message = `🏆 Perfect ${PLAYER_NAME}! You got all questions right! You're a star! 🏆`;
    } else if (percentage >= 80) {
        message = `🌟 Excellent ${PLAYER_NAME}! You did great! 🌟`;
    } else if (percentage >= 60) {
        message = `👍 Good work ${PLAYER_NAME}! Keep practicing! 👍`;
    } else {
        message = `💪 Good try ${PLAYER_NAME}! Keep learning! 💪`;
    }
    
    feedback.textContent = `${message}\n\nScore: ${score} out of ${shuffledQuestions.length} (${percentage}%)`;
    feedback.className = 'feedback correct';
    
    saveScore(score, shuffledQuestions.length, percentage);
    
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initGame);

initGame();

