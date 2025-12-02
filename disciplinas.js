// Sistema de Seleção de Disciplinas
let playerName = localStorage.getItem('playerName') || 'Beni';

// Elementos do DOM
const playerNameInput = document.getElementById('player-name');
const saveNameBtn = document.getElementById('save-name-btn');
const playerDisplay = document.getElementById('player-display');
const displayName = document.getElementById('display-name');
const disciplinaCards = document.querySelectorAll('.disciplina-card');

// Inicializar
function init() {
    playerNameInput.value = playerName;
    if (playerName) {
        showPlayerDisplay();
    }
    
    // Event listeners
    saveNameBtn.addEventListener('click', savePlayerName);
    playerNameInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            savePlayerName();
        }
    });

    disciplinaCards.forEach(card => {
        const playBtn = card.querySelector('.btn-play');
        playBtn.addEventListener('click', () => {
            const disciplina = card.dataset.disciplina;
            startDisciplina(disciplina);
        });
    });
}

function savePlayerName() {
    const name = playerNameInput.value.trim();
    if (name) {
        playerName = name;
        localStorage.setItem('playerName', playerName);
        showPlayerDisplay();
        playerNameInput.style.borderColor = '#6bcf7f';
        setTimeout(() => {
            playerNameInput.style.borderColor = '';
        }, 1000);
    } else {
        playerNameInput.style.borderColor = '#ff6b6b';
        setTimeout(() => {
            playerNameInput.style.borderColor = '';
        }, 1000);
    }
}

function showPlayerDisplay() {
    displayName.textContent = playerName;
    playerDisplay.style.display = 'block';
}

function startDisciplina(disciplina) {
    // Guardar nome antes de iniciar (usa 'Beni' como padrão se não houver nome)
    if (!playerName || playerName.trim() === '') {
        playerName = 'Beni';
    }
    localStorage.setItem('playerName', playerName);
    
    if (disciplina === 'portugues') {
        window.location.href = 'portugues.html';
    } else if (disciplina === 'ingles') {
        window.location.href = 'ingles.html';
    }
}

// Inicializar quando a página carregar
init();

