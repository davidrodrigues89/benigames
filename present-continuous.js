// Perguntas sobre Present Continuous em Inglês
const questions = [
    {
        question: "I _____ playing football now.",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am", correct: true },
            { label: "B", text: "is" },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "She _____ reading a book.",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is", correct: true },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "They _____ watching TV.",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is" },
            { label: "C", text: "are", correct: true },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "I _____ not eating pizza.",
        type: "Present Continuous - Negative",
        answers: [
            { label: "A", text: "am", correct: true },
            { label: "B", text: "is" },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "He _____ not sleeping.",
        type: "Present Continuous - Negative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is", correct: true },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "We _____ not playing games.",
        type: "Present Continuous - Negative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is" },
            { label: "C", text: "are", correct: true },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "_____ you running?",
        type: "Present Continuous - Interrogative",
        answers: [
            { label: "A", text: "Am" },
            { label: "B", text: "Is" },
            { label: "C", text: "Are", correct: true },
            { label: "D", text: "Be" }
        ]
    },
    {
        question: "_____ she dancing?",
        type: "Present Continuous - Interrogative",
        answers: [
            { label: "A", text: "Am" },
            { label: "B", text: "Is", correct: true },
            { label: "C", text: "Are" },
            { label: "D", text: "Be" }
        ]
    },
    {
        question: "_____ I playing?",
        type: "Present Continuous - Interrogative",
        answers: [
            { label: "A", text: "Am", correct: true },
            { label: "B", text: "Is" },
            { label: "C", text: "Are" },
            { label: "D", text: "Be" }
        ]
    },
    {
        question: "The cat _____ sleeping on the sofa.",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is", correct: true },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "My friends _____ not coming today.",
        type: "Present Continuous - Negative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is" },
            { label: "C", text: "are", correct: true },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "_____ the dog barking?",
        type: "Present Continuous - Interrogative",
        answers: [
            { label: "A", text: "Am" },
            { label: "B", text: "Is", correct: true },
            { label: "C", text: "Are" },
            { label: "D", text: "Be" }
        ]
    },
    {
        question: "You _____ singing.",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is" },
            { label: "C", text: "are", correct: true },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "It _____ not raining now.",
        type: "Present Continuous - Negative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is", correct: true },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "_____ they playing football?",
        type: "Present Continuous - Interrogative",
        answers: [
            { label: "A", text: "Am" },
            { label: "B", text: "Is" },
            { label: "C", text: "Are", correct: true },
            { label: "D", text: "Be" }
        ]
    },
    {
        question: "I _____ drawing.",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am", correct: true },
            { label: "B", text: "is" },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "She _____ not listening to music.",
        type: "Present Continuous - Negative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is", correct: true },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "_____ he eating breakfast?",
        type: "Present Continuous - Interrogative",
        answers: [
            { label: "A", text: "Am" },
            { label: "B", text: "Is", correct: true },
            { label: "C", text: "Are" },
            { label: "D", text: "Be" }
        ]
    },
    {
        question: "We _____ having fun!",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is" },
            { label: "C", text: "are", correct: true },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "The birds _____ flying in the sky.",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is" },
            { label: "C", text: "are", correct: true },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "I _____ not going to school today.",
        type: "Present Continuous - Negative",
        answers: [
            { label: "A", text: "am", correct: true },
            { label: "B", text: "is" },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "_____ you studying English?",
        type: "Present Continuous - Interrogative",
        answers: [
            { label: "A", text: "Am" },
            { label: "B", text: "Is" },
            { label: "C", text: "Are", correct: true },
            { label: "D", text: "Be" }
        ]
    },
    {
        question: "The sun _____ shining.",
        type: "Present Continuous - Affirmative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is", correct: true },
            { label: "C", text: "are" },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "They _____ not swimming.",
        type: "Present Continuous - Negative",
        answers: [
            { label: "A", text: "am" },
            { label: "B", text: "is" },
            { label: "C", text: "are", correct: true },
            { label: "D", text: "be" }
        ]
    },
    {
        question: "_____ it snowing?",
        type: "Present Continuous - Interrogative",
        answers: [
            { label: "A", text: "Am" },
            { label: "B", text: "Is", correct: true },
            { label: "C", text: "Are" },
            { label: "D", text: "Be" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

let PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
const QUESTIONS_PER_GAME = 25;
const RANKING_KEY = 'presentContinuousRanking';

const questionText = document.getElementById('question-text');
const questionType = document.getElementById('question-type');
const answersContainer = document.getElementById('answers-container');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreElement = document.getElementById('score');
const questionNumberElement = document.getElementById('question-number');
const totalQuestionsElement = document.getElementById('total-questions');

// Embaralhar perguntas aleatoriamente
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

let shuffledQuestions = shuffleArray(questions).slice(0, QUESTIONS_PER_GAME);

// Sistema de Ranking
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
    
    rankingTitle.textContent = `🏆 Ranking - Present Continuous 🏆`;
    
    if (ranking.length === 0) {
        rankingList.innerHTML = '<p class="no-ranking">No scores yet! Play to appear on the ranking! 🎮</p>';
        return;
    }
    
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

function initGame() {
    PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
    const playerGreeting = document.getElementById('player-greeting');
    if (playerGreeting) {
        playerGreeting.textContent = `Hello ${PLAYER_NAME}! Learn the Present Continuous in English!`;
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

