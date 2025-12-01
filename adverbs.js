// Perguntas sobre Adverbs em Inglês
const questions = [
    {
        question: "She runs _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "quick", correct: false },
            { label: "B", text: "quickly", correct: true },
            { label: "C", text: "quickest" },
            { label: "D", text: "quicker" }
        ]
    },
    {
        question: "He speaks _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "loud", correct: false },
            { label: "B", text: "loudly", correct: true },
            { label: "C", text: "loudest" },
            { label: "D", text: "louder" }
        ]
    },
    {
        question: "They play _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "happy", correct: false },
            { label: "B", text: "happily", correct: true },
            { label: "C", text: "happiest" },
            { label: "D", text: "happier" }
        ]
    },
    {
        question: "I eat my food _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "slow", correct: false },
            { label: "B", text: "slowly", correct: true },
            { label: "C", text: "slowest" },
            { label: "D", text: "slower" }
        ]
    },
    {
        question: "She sings _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "beautiful", correct: false },
            { label: "B", text: "beautifully", correct: true },
            { label: "C", text: "beautifulest" },
            { label: "D", text: "more beautiful" }
        ]
    },
    {
        question: "He works _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "hard", correct: true },
            { label: "B", text: "hardly" },
            { label: "C", text: "hardest" },
            { label: "D", text: "harder" }
        ]
    },
    {
        question: "We walk _____ to school.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "quick", correct: false },
            { label: "B", text: "quickly", correct: true },
            { label: "C", text: "quickest" },
            { label: "D", text: "quicker" }
        ]
    },
    {
        question: "The cat sleeps _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "quiet", correct: false },
            { label: "B", text: "quietly", correct: true },
            { label: "C", text: "quietest" },
            { label: "D", text: "quieter" }
        ]
    },
    {
        question: "I read _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "careful", correct: false },
            { label: "B", text: "carefully", correct: true },
            { label: "C", text: "carefulest" },
            { label: "D", text: "more careful" }
        ]
    },
    {
        question: "She dances _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "good", correct: false },
            { label: "B", text: "well", correct: true },
            { label: "C", text: "best" },
            { label: "D", text: "better" }
        ]
    },
    {
        question: "He draws _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "nice", correct: false },
            { label: "B", text: "nicely", correct: true },
            { label: "C", text: "nicest" },
            { label: "D", text: "nicer" }
        ]
    },
    {
        question: "They talk _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "loud", correct: false },
            { label: "B", text: "loudly", correct: true },
            { label: "C", text: "loudest" },
            { label: "D", text: "louder" }
        ]
    },
    {
        question: "I write _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "neat", correct: false },
            { label: "B", text: "neatly", correct: true },
            { label: "C", text: "neatest" },
            { label: "D", text: "neater" }
        ]
    },
    {
        question: "She listens _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "careful", correct: false },
            { label: "B", text: "carefully", correct: true },
            { label: "C", text: "carefulest" },
            { label: "D", text: "more careful" }
        ]
    },
    {
        question: "He plays football _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "good", correct: false },
            { label: "B", text: "well", correct: true },
            { label: "C", text: "best" },
            { label: "D", text: "better" }
        ]
    },
    {
        question: "We study _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "hard", correct: true },
            { label: "B", text: "hardly" },
            { label: "C", text: "hardest" },
            { label: "D", text: "harder" }
        ]
    },
    {
        question: "The bird flies _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "high", correct: true },
            { label: "B", text: "highly" },
            { label: "C", text: "highest" },
            { label: "D", text: "higher" }
        ]
    },
    {
        question: "She smiles _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "sweet", correct: false },
            { label: "B", text: "sweetly", correct: true },
            { label: "C", text: "sweetest" },
            { label: "D", text: "sweeter" }
        ]
    },
    {
        question: "I speak English _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "good", correct: false },
            { label: "B", text: "well", correct: true },
            { label: "C", text: "best" },
            { label: "D", text: "better" }
        ]
    },
    {
        question: "They run _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "fast", correct: true },
            { label: "B", text: "fastly" },
            { label: "C", text: "fastest" },
            { label: "D", text: "faster" }
        ]
    },
    {
        question: "He answers _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "quick", correct: false },
            { label: "B", text: "quickly", correct: true },
            { label: "C", text: "quickest" },
            { label: "D", text: "quicker" }
        ]
    },
    {
        question: "She walks _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "slow", correct: false },
            { label: "B", text: "slowly", correct: true },
            { label: "C", text: "slowest" },
            { label: "D", text: "slower" }
        ]
    },
    {
        question: "I jump _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "high", correct: true },
            { label: "B", text: "highly" },
            { label: "C", text: "highest" },
            { label: "D", text: "higher" }
        ]
    },
    {
        question: "They laugh _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "loud", correct: false },
            { label: "B", text: "loudly", correct: true },
            { label: "C", text: "loudest" },
            { label: "D", text: "louder" }
        ]
    },
    {
        question: "She reads _____.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "careful", correct: false },
            { label: "B", text: "carefully", correct: true },
            { label: "C", text: "carefulest" },
            { label: "D", text: "more careful" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

let PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
const QUESTIONS_PER_GAME = 25;
const RANKING_KEY = 'adverbsRanking';

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
    
    rankingTitle.textContent = `🏆 Ranking - Adverbs 🏆`;
    
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
        playerGreeting.textContent = `Hello ${PLAYER_NAME}! Learn about adverbs in English!`;
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

