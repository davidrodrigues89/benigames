// Perguntas sobre Present Simple em Inglês
const questions = [
    {
        question: "I _____ to school every day.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "go", correct: true },
            { label: "B", text: "goes" },
            { label: "C", text: "going" },
            { label: "D", text: "went" }
        ]
    },
    {
        question: "She _____ her teeth every morning.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "brush" },
            { label: "B", text: "brushes", correct: true },
            { label: "C", text: "brushing" },
            { label: "D", text: "brushed" }
        ]
    },
    {
        question: "They _____ football on Saturdays.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "play", correct: true },
            { label: "B", text: "plays" },
            { label: "C", text: "playing" },
            { label: "D", text: "played" }
        ]
    },
    {
        question: "I _____ like vegetables.",
        type: "Present Simple - Negative",
        answers: [
            { label: "A", text: "do" },
            { label: "B", text: "does" },
            { label: "C", text: "don't", correct: true },
            { label: "D", text: "doesn't" }
        ]
    },
    {
        question: "He _____ play the piano.",
        type: "Present Simple - Negative",
        answers: [
            { label: "A", text: "do" },
            { label: "B", text: "does" },
            { label: "C", text: "don't" },
            { label: "D", text: "doesn't", correct: true }
        ]
    },
    {
        question: "We _____ watch TV in the morning.",
        type: "Present Simple - Negative",
        answers: [
            { label: "A", text: "do" },
            { label: "B", text: "does" },
            { label: "C", text: "don't", correct: true },
            { label: "D", text: "doesn't" }
        ]
    },
    {
        question: "_____ you like ice cream?",
        type: "Present Simple - Interrogative",
        answers: [
            { label: "A", text: "Do", correct: true },
            { label: "B", text: "Does" },
            { label: "C", text: "Are" },
            { label: "D", text: "Is" }
        ]
    },
    {
        question: "_____ she play tennis?",
        type: "Present Simple - Interrogative",
        answers: [
            { label: "A", text: "Do" },
            { label: "B", text: "Does", correct: true },
            { label: "C", text: "Are" },
            { label: "D", text: "Is" }
        ]
    },
    {
        question: "_____ they go to the park?",
        type: "Present Simple - Interrogative",
        answers: [
            { label: "A", text: "Do", correct: true },
            { label: "B", text: "Does" },
            { label: "C", text: "Are" },
            { label: "D", text: "Is" }
        ]
    },
    {
        question: "The cat _____ milk every day.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "drink" },
            { label: "B", text: "drinks", correct: true },
            { label: "C", text: "drinking" },
            { label: "D", text: "drank" }
        ]
    },
    {
        question: "My brother _____ eat fish.",
        type: "Present Simple - Negative",
        answers: [
            { label: "A", text: "do" },
            { label: "B", text: "does" },
            { label: "C", text: "don't" },
            { label: "D", text: "doesn't", correct: true }
        ]
    },
    {
        question: "_____ the dog sleep a lot?",
        type: "Present Simple - Interrogative",
        answers: [
            { label: "A", text: "Do" },
            { label: "B", text: "Does", correct: true },
            { label: "C", text: "Are" },
            { label: "D", text: "Is" }
        ]
    },
    {
        question: "You _____ your homework every day.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "do", correct: true },
            { label: "B", text: "does" },
            { label: "C", text: "doing" },
            { label: "D", text: "did" }
        ]
    },
    {
        question: "It _____ rain in summer.",
        type: "Present Simple - Negative",
        answers: [
            { label: "A", text: "do" },
            { label: "B", text: "does" },
            { label: "C", text: "don't" },
            { label: "D", text: "doesn't", correct: true }
        ]
    },
    {
        question: "_____ they help at home?",
        type: "Present Simple - Interrogative",
        answers: [
            { label: "A", text: "Do", correct: true },
            { label: "B", text: "Does" },
            { label: "C", text: "Are" },
            { label: "D", text: "Is" }
        ]
    },
    {
        question: "I _____ my room every week.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "clean", correct: true },
            { label: "B", text: "cleans" },
            { label: "C", text: "cleaning" },
            { label: "D", text: "cleaned" }
        ]
    },
    {
        question: "She _____ ride a bike.",
        type: "Present Simple - Negative",
        answers: [
            { label: "A", text: "do" },
            { label: "B", text: "does" },
            { label: "C", text: "don't" },
            { label: "D", text: "doesn't", correct: true }
        ]
    },
    {
        question: "_____ he read books?",
        type: "Present Simple - Interrogative",
        answers: [
            { label: "A", text: "Do" },
            { label: "B", text: "Does", correct: true },
            { label: "C", text: "Are" },
            { label: "D", text: "Is" }
        ]
    },
    {
        question: "We _____ breakfast at 8 o'clock.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "eat", correct: true },
            { label: "B", text: "eats" },
            { label: "C", text: "eating" },
            { label: "D", text: "ate" }
        ]
    },
    {
        question: "The birds _____ in the trees.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "sing", correct: true },
            { label: "B", text: "sings" },
            { label: "C", text: "singing" },
            { label: "D", text: "sang" }
        ]
    },
    {
        question: "I _____ like this.",
        type: "Present Simple - Negative",
        answers: [
            { label: "A", text: "do" },
            { label: "B", text: "does" },
            { label: "C", text: "don't", correct: true },
            { label: "D", text: "doesn't" }
        ]
    },
    {
        question: "_____ you speak English?",
        type: "Present Simple - Interrogative",
        answers: [
            { label: "A", text: "Do", correct: true },
            { label: "B", text: "Does" },
            { label: "C", text: "Are" },
            { label: "D", text: "Is" }
        ]
    },
    {
        question: "The sun _____ in the morning.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "shine" },
            { label: "B", text: "shines", correct: true },
            { label: "C", text: "shining" },
            { label: "D", text: "shone" }
        ]
    },
    {
        question: "They _____ live here.",
        type: "Present Simple - Negative",
        answers: [
            { label: "A", text: "do" },
            { label: "B", text: "does" },
            { label: "C", text: "don't", correct: true },
            { label: "D", text: "doesn't" }
        ]
    },
    {
        question: "_____ it work?",
        type: "Present Simple - Interrogative",
        answers: [
            { label: "A", text: "Do" },
            { label: "B", text: "Does", correct: true },
            { label: "C", text: "Are" },
            { label: "D", text: "Is" }
        ]
    },
    {
        question: "I _____ my bed every day.",
        type: "Present Simple - Affirmative",
        answers: [
            { label: "A", text: "make", correct: true },
            { label: "B", text: "makes" },
            { label: "C", text: "making" },
            { label: "D", text: "made" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

let PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
const QUESTIONS_PER_GAME = 25;
const RANKING_KEY = 'presentSimpleRanking';

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
    
    rankingTitle.textContent = `🏆 Ranking - Present Simple 🏆`;
    
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
        playerGreeting.textContent = `Hello ${PLAYER_NAME}! Learn the Present Simple in English!`;
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
    
    // Remover classe has-restart quando reinicia o jogo
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.classList.remove('has-restart');
    }
    
    // Setup back button confirmation
    setupBackButton();
}

function setupBackButton() {
    const backBtn = document.getElementById('back-btn');
    const confirmModal = document.getElementById('confirm-modal');
    const confirmYes = document.getElementById('confirm-yes');
    const confirmNo = document.getElementById('confirm-no');
    const confirmTitle = document.getElementById('confirm-title');
    const confirmMessage = document.getElementById('confirm-message');
    
    // Detect language from HTML lang attribute
    const isPortuguese = document.documentElement.lang === 'pt-PT' || document.documentElement.lang === 'pt';
    
    if (isPortuguese) {
        confirmTitle.textContent = '⚠️ Sair do Exercício?';
        confirmMessage.textContent = 'Tens a certeza que queres voltar? O teu progresso será perdido.';
        confirmYes.textContent = 'Sim, Voltar';
        confirmNo.textContent = 'Não, Continuar';
    } else {
        confirmTitle.textContent = '⚠️ Leave Exercise?';
        confirmMessage.textContent = 'Are you sure you want to go back? Your progress will be lost.';
        confirmYes.textContent = 'Yes, Go Back';
        confirmNo.textContent = 'No, Continue';
    }
    
    if (backBtn && confirmModal) {
        backBtn.addEventListener('click', () => {
            confirmModal.style.display = 'flex';
        });
        
        confirmYes.addEventListener('click', () => {
            const href = backBtn.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
        
        confirmNo.addEventListener('click', () => {
            confirmModal.style.display = 'none';
        });
        
        confirmModal.addEventListener('click', (e) => {
            if (e.target === confirmModal) {
                confirmModal.style.display = 'none';
            }
        });
    }
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
    
    // Adicionar classe para alinhar botões lado a lado quando restart-btn está visível
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.classList.add('has-restart');
    }
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initGame);

initGame();

