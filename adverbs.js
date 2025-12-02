// Perguntas sobre Adverbs de Frequência em Inglês
const questions = [
    {
        question: "I _____ brush my teeth. Every single day, never forget!",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: true },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "She _____ plays with toys. Only when she feels like it.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: true },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "He _____ eats candy. His mom never lets him.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: true },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "We _____ eat breakfast. Almost every day, but not always.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: true }
        ]
    },
    {
        question: "I go to school _____. Monday, Tuesday, Wednesday, Thursday, Friday.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: true }
        ]
    },
    {
        question: "They _____ play games. Not every day, just now and then.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: true },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: false }
        ]
    },
    {
        question: "She _____ forgets her bag. She always remembers it!",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: true },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "I _____ wake up early. Most mornings, but sometimes I sleep late.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: true }
        ]
    },
    {
        question: "We eat lunch _____. Every single day at noon.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: true }
        ]
    },
    {
        question: "He _____ helps at home. Without fail, every single time!",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: true },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "I _____ watch cartoons. Only on weekends, not every day.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: true },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: false }
        ]
    },
    {
        question: "She _____ goes to bed late. She always sleeps at 8 PM!",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: true },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "We _____ do homework. Almost every day, but we skip it sometimes.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: true }
        ]
    },
    {
        question: "I drink milk _____. Every morning and every night.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: true }
        ]
    },
    {
        question: "They _____ visit friends. Only once in a while, not often.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: true },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: false }
        ]
    },
    {
        question: "He _____ says hello. Every time he sees someone, without exception!",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: true },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "I _____ eat fruit. Not every day, just when I feel like it.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: true },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: false }
        ]
    },
    {
        question: "She _____ reads books. Most nights before bed, but not always.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: true }
        ]
    },
    {
        question: "We play outside _____. Every single day after school.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: true }
        ]
    },
    {
        question: "I _____ clean my room. Only when my mom asks me to.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: true },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "He _____ comes to school. Every single day, never misses!",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: true },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: false }
        ]
    },
    {
        question: "She _____ goes swimming. She is afraid of water!",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: true },
            { label: "D", text: "usually", correct: false }
        ]
    },
    {
        question: "I _____ have a snack. Most afternoons, but not every day.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "usually", correct: true }
        ]
    },
    {
        question: "We play games _____. Every day after homework.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: false },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: true }
        ]
    },
    {
        question: "They _____ listen to songs. Not every day, just occasionally.",
        type: "Adverbs",
        answers: [
            { label: "A", text: "always", correct: false },
            { label: "B", text: "sometimes", correct: true },
            { label: "C", text: "never", correct: false },
            { label: "D", text: "everyday", correct: false }
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
    const rankingModal = document.getElementById('ranking-modal');
    const closeRankingBtn = document.getElementById('close-ranking-btn');
    
    rankingTitle.textContent = `🏆 Ranking - Adverbs 🏆`;
    
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
    // Remover classe quando next-btn está oculto
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
        // Adicionar classe para alinhar botões lado a lado
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

