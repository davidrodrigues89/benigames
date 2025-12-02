// Perguntas sobre Conectores de Discurso em Português
const questions = [
    {
        question: "Eu gosto de brincar _____ também gosto de ler livros.",
        type: "Conector de Adição",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Estava a chover _____ fomos brincar dentro de casa.",
        type: "Conector de Causa",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "por isso", correct: true },
            { label: "C", text: "mas" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Quero ir ao parque _____ está a chover.",
        type: "Conector de Oposição",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "mas", correct: true },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Fiz os trabalhos de casa _____ queria brincar.",
        type: "Conector de Causa",
        answers: [
            { label: "A", text: "mas" },
            { label: "B", text: "porque", correct: true },
            { label: "C", text: "ou" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Podes escolher: vais brincar _____ vais estudar?",
        type: "Conector de Alternativa",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "mas" },
            { label: "C", text: "ou", correct: true },
            { label: "D", text: "porque" }
        ]
    },
    {
        question: "Acabei de comer _____ agora vou brincar.",
        type: "Conector de Sequência",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "então", correct: true },
            { label: "C", text: "mas" },
            { label: "D", text: "porque" }
        ]
    },
    {
        question: "Gosto de animais _____ especialmente de cães.",
        type: "Conector de Adição",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Estava cansado _____ continuei a brincar.",
        type: "Conector de Oposição",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "mas", correct: true },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Não fui à escola _____ estava doente.",
        type: "Conector de Causa",
        answers: [
            { label: "A", text: "mas" },
            { label: "B", text: "porque", correct: true },
            { label: "C", text: "e" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Primeiro arrumei o quarto _____ depois fui brincar.",
        type: "Conector de Sequência",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Quero ir à praia _____ também quero ir ao parque.",
        type: "Conector de Adição",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Estava com fome _____ comi uma maçã.",
        type: "Conector de Causa",
        answers: [
            { label: "A", text: "mas" },
            { label: "B", text: "por isso", correct: true },
            { label: "C", text: "e" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Gosto de chocolate _____ não gosto de brócolos.",
        type: "Conector de Oposição",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "mas", correct: true },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Vais ao cinema _____ vais ao teatro?",
        type: "Conector de Alternativa",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "mas" },
            { label: "C", text: "ou", correct: true },
            { label: "D", text: "porque" }
        ]
    },
    {
        question: "Acordei cedo _____ fui tomar o pequeno-almoço.",
        type: "Conector de Sequência",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Estudei muito _____ tirei boa nota.",
        type: "Conector de Causa",
        answers: [
            { label: "A", text: "mas" },
            { label: "B", text: "por isso", correct: true },
            { label: "C", text: "e" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Gosto de ver televisão _____ também gosto de ler.",
        type: "Conector de Adição",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Queria sair a brincar _____ começou a chover.",
        type: "Conector de Oposição",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "mas", correct: true },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Terminei os trabalhos de casa _____ queria brincar.",
        type: "Conector de Causa",
        answers: [
            { label: "A", text: "mas" },
            { label: "B", text: "porque", correct: true },
            { label: "C", text: "e" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Primeiro vesti-me _____ depois fui tomar o pequeno-almoço.",
        type: "Conector de Sequência",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Gosto de fruta _____ especialmente de morangos.",
        type: "Conector de Adição",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Estava com sede _____ bebi água.",
        type: "Conector de Causa",
        answers: [
            { label: "A", text: "mas" },
            { label: "B", text: "por isso", correct: true },
            { label: "C", text: "e" },
            { label: "D", text: "ou" }
        ]
    },
    {
        question: "Gosto de verão _____ não gosto de inverno.",
        type: "Conector de Oposição",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "mas", correct: true },
            { label: "C", text: "porque" },
            { label: "D", text: "então" }
        ]
    },
    {
        question: "Vais nadar _____ vais correr?",
        type: "Conector de Alternativa",
        answers: [
            { label: "A", text: "e" },
            { label: "B", text: "mas" },
            { label: "C", text: "ou", correct: true },
            { label: "D", text: "porque" }
        ]
    },
    {
        question: "Terminei de estudar _____ fui brincar.",
        type: "Conector de Sequência",
        answers: [
            { label: "A", text: "e", correct: true },
            { label: "B", text: "mas" },
            { label: "C", text: "porque" },
            { label: "D", text: "ou" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

let PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
const QUESTIONS_PER_GAME = 25;
const RANKING_KEY = 'conectoresRanking';

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
    
    rankingTitle.textContent = `🏆 Ranking - Conectores de Português 🏆`;
    
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
        playerGreeting.textContent = `Olá ${PLAYER_NAME}! Completa as frases com os conectores corretos!`;
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
    
    // Adicionar classe para alinhar botões lado a lado quando restart-btn está visível
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.classList.add('has-restart');
    }
}

nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', initGame);

// Iniciar o jogo
initGame();

