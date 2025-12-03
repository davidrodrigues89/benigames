// Perguntas sobre Present Simple - Have Got em Inglês
const questions = [
    {
        question: "I _____ a new bike.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got", correct: true },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "She _____ a pet cat.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got", correct: true },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "They _____ many toys.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got", correct: true },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "I _____ a computer.",
        type: "Present Simple - Have Got - Negative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got", correct: true },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "He _____ a dog.",
        type: "Present Simple - Have Got - Negative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got", correct: true }
        ]
    },
    {
        question: "We _____ a car.",
        type: "Present Simple - Have Got - Negative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got", correct: true },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "_____ you have a pencil?",
        type: "Present Simple - Have Got - Interrogative",
        answers: [
            { label: "A", text: "Have", correct: true },
            { label: "B", text: "Has" },
            { label: "C", text: "Haven't" },
            { label: "D", text: "Hasn't" }
        ]
    },
    {
        question: "_____ she have a book?",
        type: "Present Simple - Have Got - Interrogative",
        answers: [
            { label: "A", text: "Have" },
            { label: "B", text: "Has", correct: true },
            { label: "C", text: "Haven't" },
            { label: "D", text: "Hasn't" }
        ]
    },
    {
        question: "_____ I have time?",
        type: "Present Simple - Have Got - Interrogative",
        answers: [
            { label: "A", text: "Have", correct: true },
            { label: "B", text: "Has" },
            { label: "C", text: "Haven't" },
            { label: "D", text: "Hasn't" }
        ]
    },
    {
        question: "The cat _____ four legs.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got", correct: true },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "My friends _____ bikes.",
        type: "Present Simple - Have Got - Negative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got", correct: true },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "_____ the dog have a bone?",
        type: "Present Simple - Have Got - Interrogative",
        answers: [
            { label: "A", text: "Have" },
            { label: "B", text: "Has", correct: true },
            { label: "C", text: "Haven't" },
            { label: "D", text: "Hasn't" }
        ]
    },
    {
        question: "You _____ nice shoes.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got", correct: true },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "It _____ wheels.",
        type: "Present Simple - Have Got - Negative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got", correct: true }
        ]
    },
    {
        question: "_____ they have homework?",
        type: "Present Simple - Have Got - Interrogative",
        answers: [
            { label: "A", text: "Have", correct: true },
            { label: "B", text: "Has" },
            { label: "C", text: "Haven't" },
            { label: "D", text: "Hasn't" }
        ]
    },
    {
        question: "I _____ a red ball.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got", correct: true },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "She _____ a sister.",
        type: "Present Simple - Have Got - Negative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got", correct: true }
        ]
    },
    {
        question: "_____ he have a friend?",
        type: "Present Simple - Have Got - Interrogative",
        answers: [
            { label: "A", text: "Have" },
            { label: "B", text: "Has", correct: true },
            { label: "C", text: "Haven't" },
            { label: "D", text: "Hasn't" }
        ]
    },
    {
        question: "We _____ a big house.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got", correct: true },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "The birds _____ wings.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got", correct: true },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "I _____ a phone.",
        type: "Present Simple - Have Got - Negative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got", correct: true },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "_____ you have a pen?",
        type: "Present Simple - Have Got - Interrogative",
        answers: [
            { label: "A", text: "Have", correct: true },
            { label: "B", text: "Has" },
            { label: "C", text: "Haven't" },
            { label: "D", text: "Hasn't" }
        ]
    },
    {
        question: "The sun _____ light.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got", correct: true },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "I _____ a toy.",
        type: "Present Simple - Have Got - Affirmative",
        answers: [
            { label: "A", text: "have got", correct: true },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got" },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "They _____ money.",
        type: "Present Simple - Have Got - Negative",
        answers: [
            { label: "A", text: "have got" },
            { label: "B", text: "has got" },
            { label: "C", text: "haven't got", correct: true },
            { label: "D", text: "hasn't got" }
        ]
    },
    {
        question: "_____ it have a tail?",
        type: "Present Simple - Have Got - Interrogative",
        answers: [
            { label: "A", text: "Have" },
            { label: "B", text: "Has", correct: true },
            { label: "C", text: "Haven't" },
            { label: "D", text: "Hasn't" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

let PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
const QUESTIONS_PER_GAME = 25;
const RANKING_KEY = 'presentSimpleHaveGotRanking';

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
    
    rankingTitle.textContent = `🏆 Ranking - Present Simple Have Got 🏆`;
    
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
        playerGreeting.textContent = `Hello ${PLAYER_NAME}! Learn 'have got' in English!`;
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

