// Perguntas sobre Nomes Próprios e Nomes Comuns Coletivos
const questions = [
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "cidade" },
            { label: "B", text: "Lisboa", correct: true },
            { label: "C", text: "animal" },
            { label: "D", text: "flor" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "cão" },
            { label: "B", text: "gato" },
            { label: "C", text: "matilha", correct: true },
            { label: "D", text: "pássaro" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "rio" },
            { label: "B", text: "montanha" },
            { label: "C", text: "Porto", correct: true },
            { label: "D", text: "floresta" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "abelha" },
            { label: "B", text: "enxame", correct: true },
            { label: "C", text: "borboleta" },
            { label: "D", text: "formiga" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Maria", correct: true },
            { label: "B", text: "menina" },
            { label: "C", text: "criança" },
            { label: "D", text: "pessoa" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "árvore" },
            { label: "B", text: "floresta", correct: true },
            { label: "C", text: "folha" },
            { label: "D", text: "ramo" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "país" },
            { label: "B", text: "Portugal", correct: true },
            { label: "C", text: "nação" },
            { label: "D", text: "continente" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "peixe" },
            { label: "B", text: "cardume", correct: true },
            { label: "C", text: "água" },
            { label: "D", text: "mar" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "rio" },
            { label: "B", text: "Tejo", correct: true },
            { label: "C", text: "água" },
            { label: "D", text: "mar" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "ovelha" },
            { label: "B", text: "rebanho", correct: true },
            { label: "C", text: "cabra" },
            { label: "D", text: "vaca" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "João", correct: true },
            { label: "B", text: "rapaz" },
            { label: "C", text: "menino" },
            { label: "D", text: "criança" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "livro" },
            { label: "B", text: "biblioteca", correct: true },
            { label: "C", text: "página" },
            { label: "D", text: "história" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Coimbra", correct: true },
            { label: "B", text: "cidade" },
            { label: "C", text: "rua" },
            { label: "D", text: "praça" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "estrela" },
            { label: "B", text: "constelação", correct: true },
            { label: "C", text: "lua" },
            { label: "D", text: "sol" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Ana", correct: true },
            { label: "B", text: "mulher" },
            { label: "C", text: "menina" },
            { label: "D", text: "pessoa" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Benedita", correct: true },
            { label: "B", text: "menina" },
            { label: "C", text: "criança" },
            { label: "D", text: "rapariga" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "aluno" },
            { label: "B", text: "turma", correct: true },
            { label: "C", text: "professor" },
            { label: "D", text: "escola" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Braga", correct: true },
            { label: "B", text: "cidade" },
            { label: "C", text: "vila" },
            { label: "D", text: "local" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "cavalo" },
            { label: "B", text: "manada", correct: true },
            { label: "C", text: "cavaleiro" },
            { label: "D", text: "estábulo" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "rio" },
            { label: "B", text: "Douro", correct: true },
            { label: "C", text: "água" },
            { label: "D", text: "corrente" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "cachorro" },
            { label: "B", text: "matilha", correct: true },
            { label: "C", text: "cão" },
            { label: "D", text: "floresta" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Sofia", correct: true },
            { label: "B", text: "menina" },
            { label: "C", text: "amiga" },
            { label: "D", text: "criança" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "navio" },
            { label: "B", text: "frota", correct: true },
            { label: "C", text: "marinheiro" },
            { label: "D", text: "porto" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "montanha" },
            { label: "B", text: "Serra da Estrela", correct: true },
            { label: "C", text: "pico" },
            { label: "D", text: "colina" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "gato" },
            { label: "B", text: "matilha", correct: true },
            { label: "C", text: "cão" },
            { label: "D", text: "animal" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Aveiro", correct: true },
            { label: "B", text: "cidade" },
            { label: "C", text: "litoral" },
            { label: "D", text: "praia" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "abelha" },
            { label: "B", text: "colmeia", correct: true },
            { label: "C", text: "mel" },
            { label: "D", text: "flor" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Pedro", correct: true },
            { label: "B", text: "rapaz" },
            { label: "C", text: "menino" },
            { label: "D", text: "criança" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "jogador" },
            { label: "B", text: "equipa", correct: true },
            { label: "C", text: "treinador" },
            { label: "D", text: "bola" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Faro", correct: true },
            { label: "B", text: "cidade" },
            { label: "C", text: "capital" },
            { label: "D", text: "lugar" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "ganso" },
            { label: "B", text: "bando", correct: true },
            { label: "C", text: "pássaro" },
            { label: "D", text: "asa" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Guimarães", correct: true },
            { label: "B", text: "cidade" },
            { label: "C", text: "vila" },
            { label: "D", text: "local" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "árvore" },
            { label: "B", text: "bosque", correct: true },
            { label: "C", text: "folha" },
            { label: "D", text: "tronco" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Inês", correct: true },
            { label: "B", text: "menina" },
            { label: "C", text: "rapariga" },
            { label: "D", text: "criança" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "leão" },
            { label: "B", text: "manada", correct: true },
            { label: "C", text: "tigre" },
            { label: "D", text: "urso" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Évora", correct: true },
            { label: "B", text: "cidade" },
            { label: "C", text: "vila" },
            { label: "D", text: "localidade" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "criança" },
            { label: "B", text: "turma", correct: true },
            { label: "C", text: "pessoa" },
            { label: "D", text: "adulto" }
        ]
    },
    {
        question: "Qual destas palavras é um nome próprio?",
        type: "Nome Próprio",
        answers: [
            { label: "A", text: "Tomás", correct: true },
            { label: "B", text: "rapaz" },
            { label: "C", text: "menino" },
            { label: "D", text: "criança" }
        ]
    },
    {
        question: "Qual destas palavras é um nome comum coletivo?",
        type: "Nome Comum Coletivo",
        answers: [
            { label: "A", text: "flor" },
            { label: "B", text: "jardim", correct: true },
            { label: "C", text: "pétala" },
            { label: "D", text: "caule" }
        ]
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

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

let PLAYER_NAME = localStorage.getItem('playerName') || 'Beni';
const QUESTIONS_PER_GAME = 25;
const RANKING_KEY = 'nomesRanking';

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
    
    rankingTitle.textContent = `🏆 Ranking - Nomes Próprios e Coletivos 🏆`;
    
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
        playerGreeting.textContent = `Olá ${PLAYER_NAME}! Aprende sobre Nomes Próprios e Nomes Comuns Coletivos!`;
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

