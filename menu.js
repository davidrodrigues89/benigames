// Sistema de Menu Principal
let playerName = localStorage.getItem('playerName') || 'Beni';

// Elementos do DOM
const playerNameInput = document.getElementById('player-name');
const saveNameBtn = document.getElementById('save-name-btn');
const playerDisplay = document.getElementById('player-display');
const displayName = document.getElementById('display-name');
const gameCards = document.querySelectorAll('.game-card');
const rankingBtns = document.querySelectorAll('.btn-ranking-small');
const rankingModal = document.getElementById('ranking-modal');
const closeRankingBtn = document.getElementById('close-ranking-btn');
const rankingList = document.getElementById('ranking-list');
const rankingTitle = document.getElementById('ranking-title');

// Inicializar
function init() {
    // Só inicializar campos de nome se existirem (página principal)
    if (playerNameInput) {
        playerNameInput.value = playerName;
        if (playerName) {
            showPlayerDisplay();
        }
        
        // Event listeners para campo de nome
        saveNameBtn.addEventListener('click', savePlayerName);
        playerNameInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                savePlayerName();
            }
        });
    }

    gameCards.forEach(card => {
        const playBtn = card.querySelector('.btn-play');
        playBtn.addEventListener('click', () => {
            const game = card.dataset.game;
            startGame(game);
        });
    });

    rankingBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const game = btn.dataset.game;
            showRanking(game);
        });
    });

    closeRankingBtn.addEventListener('click', () => {
        rankingModal.style.display = 'none';
    });

    rankingModal.addEventListener('click', (e) => {
        if (e.target === rankingModal) {
            rankingModal.style.display = 'none';
        }
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

function startGame(game) {
    // Usar nome do localStorage (já foi definido na página principal)
    const savedName = localStorage.getItem('playerName') || 'Beni';
    
    if (game === 'nomes') {
        window.location.href = 'nomes.html';
    } else if (game === 'conectores') {
        window.location.href = 'conectores.html';
    } else if (game === 'tipos-frases') {
        window.location.href = 'tipos-frases.html';
    }
}

function showRanking(game) {
    let gameName = '';
    let rankingKey = '';
    
    if (game === 'nomes') {
        gameName = 'Nomes Próprios e Coletivos';
        rankingKey = 'nomesRanking';
    } else if (game === 'conectores') {
        gameName = 'Conectores de Português';
        rankingKey = 'conectoresRanking';
    } else if (game === 'tipos-frases') {
        gameName = 'Tipos de Frases';
        rankingKey = 'tiposFrasesRanking';
    }
    
    rankingTitle.textContent = `🏆 Ranking - ${gameName} 🏆`;
    const ranking = getRanking(rankingKey);
    
    if (ranking.length === 0) {
        rankingList.innerHTML = '<p class="no-ranking">Ainda não há pontuações registadas! Joga para apareceres no ranking! 🎮</p>';
    } else {
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
    
    rankingModal.style.display = 'flex';
}

function getRanking(key) {
    const ranking = localStorage.getItem(key);
    return ranking ? JSON.parse(ranking) : [];
}

// Inicializar quando a página carregar
init();

