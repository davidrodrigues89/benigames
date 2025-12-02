// Perguntas sobre Tipos de Frases em Português
const questions = [
    {
        question: "Gosto muito de brincar!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa", correct: true },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Vais brincar comigo?",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa", correct: true },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "O sol brilha no céu.",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa", correct: true },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Senta-te, por favor!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa", correct: true }
        ]
    },
    {
        question: "Que dia lindo!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa", correct: true },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Qual é a tua cor favorita?",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa", correct: true },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Os pássaros voam alto.",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa", correct: true },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Vem cá!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa", correct: true }
        ]
    },
    {
        question: "Estou muito feliz!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa", correct: true },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Onde está o teu brinquedo?",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa", correct: true },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "A chuva cai.",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa", correct: true },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Calma, por favor!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa", correct: true }
        ]
    },
    {
        question: "Que surpresa!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa", correct: true },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Quantos anos tens?",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa", correct: true },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "As flores são bonitas.",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa", correct: true },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Para de correr!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa", correct: true }
        ]
    },
    {
        question: "Que alegria!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa", correct: true },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Como te chamas?",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa", correct: true },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "O gato dorme no sofá.",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa", correct: true },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Fecha a porta!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa", correct: true }
        ]
    },
    {
        question: "Que bom dia!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa", correct: true },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "O que queres fazer hoje?",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa", correct: true },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "A lua brilha à noite.",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa", correct: true },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa" }
        ]
    },
    {
        question: "Levanta-te!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa" },
            { label: "D", text: "Imperativa", correct: true }
        ]
    },
    {
        question: "Que festa divertida!",
        type: "Tipos de Frases",
        answers: [
            { label: "A", text: "Declarativa" },
            { label: "B", text: "Interrogativa" },
            { label: "C", text: "Exclamativa", correct: true },
            { label: "D", text: "Imperativa" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

let PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
const QUESTIONS_PER_GAME = 25;
const RANKING_KEY = 'tiposFrasesRanking';

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
    // Manter apenas os 10 melhores resultados
    ranking.sort((a, b) => b.percentage - a.percentage);
    const topRanking = ranking.slice(0, 10);
    localStorage.setItem(RANKING_KEY, JSON.stringify(topRanking));
    return topRanking;
}

function displayRanking() {
    const ranking = getRanking();
    const rankingList = document.getElementById('ranking-list');
    const rankingTitle = document.getElementById('ranking-title');
    
    rankingTitle.textContent = `🏆 Ranking - Tipos de Frases 🏆`;
    
    if (ranking.length === 0) {
        rankingList.innerHTML = '<p class="no-ranking">Ainda não há pontuações registadas! Joga para apareceres no ranking! 🎮</p>';
        return;
    }
    
    rankingList.innerHTML = ranking.map((entry, index) => {
        const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : '🏅';
        return `
            <div class="ranking-entry ${index < 3 ? 'top-three' : ''}">
                <span class="ranking-position">${medal} ${index + 1}º</span>
                <span class="ranking-player">${entry.player}</span>
                <span class="ranking-score">${entry.score}/${entry.total} (${entry.percentage}%)</span>
                <span class="ranking-date">${entry.date}</span>
            </div>
        `;
    }).join('');
}

function initGame() {
    // Atualizar nome do jogador
    PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
    const playerGreeting = document.getElementById('player-greeting');
    if (playerGreeting) {
        playerGreeting.textContent = `Olá ${PLAYER_NAME}! Identifica os tipos de frases de forma divertida!`;
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
        button.type = 'button'; // Prevenir submit se dentro de form
        button.innerHTML = `<span class="answer-label">${answer.label}</span>${answer.text}`;
        button.disabled = false;
        button.style.pointerEvents = 'auto';
        button.addEventListener('click', () => selectAnswer(answer, button), { once: true });
        answersContainer.appendChild(button);
    });
}

function selectAnswer(answer, button) {
    // Proteção contra cliques duplos
    if (answered || button.classList.contains('disabled')) return;
    
    // Marcar como respondido e desabilitar todos os botões IMEDIATAMENTE
    answered = true;
    const allButtons = answersContainer.querySelectorAll('.answer-btn');
    
    // Desabilitar todos os botões antes de processar a resposta
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
            `🎉 Excelente ${PLAYER_NAME}! Resposta correta! 🎉`,
            `🌟 Muito bem ${PLAYER_NAME}! Estás a aprender! 🌟`,
            `👏 Parabéns ${PLAYER_NAME}! Continua assim! 👏`,
            `✨ Ótimo trabalho ${PLAYER_NAME}! ✨`
        ];
        feedback.textContent = messages[Math.floor(Math.random() * messages.length)];
        feedback.className = 'feedback correct';
    } else {
        button.classList.add('incorrect');
        // Encontrar e destacar a resposta correta
        const correctAnswer = shuffledQuestions[currentQuestionIndex].answers.find(a => a.correct);
        allButtons.forEach(btn => {
            if (btn.textContent.includes(correctAnswer.text)) {
                btn.classList.add('correct');
            }
        });
        feedback.textContent = `❌ Não foi desta vez! A resposta correta era: ${correctAnswer.label} - ${correctAnswer.text}`;
        feedback.className = 'feedback incorrect';
    }

    // Mostrar botão de próxima pergunta
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
    questionText.textContent = `🎊 Parabéns ${PLAYER_NAME}! Terminaste o jogo! 🎊`;
    questionType.textContent = '';
    answersContainer.innerHTML = '';
    
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    let message = '';
    
    if (percentage === 100) {
        message = `🏆 Perfeito ${PLAYER_NAME}! Acertaste todas as perguntas! És uma estrela! 🏆`;
    } else if (percentage >= 80) {
        message = `🌟 Muito bem ${PLAYER_NAME}! Foste excelente! 🌟`;
    } else if (percentage >= 60) {
        message = `👍 Bom trabalho ${PLAYER_NAME}! Continua a praticar! 👍`;
    } else {
        message = `💪 Boa tentativa ${PLAYER_NAME}! Continua a aprender! 💪`;
    }
    
    feedback.textContent = `${message}\n\nPontuação: ${score} de ${shuffledQuestions.length} (${percentage}%)`;
    feedback.className = 'feedback correct';
    
    // Salvar pontuação no ranking
    saveScore(score, shuffledQuestions.length, percentage);
    
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initGame);

// Iniciar o jogo
initGame();

