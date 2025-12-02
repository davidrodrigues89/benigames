// Sistema de Menu Inglês
let playerName = localStorage.getItem('playerName') || 'Beni';

// Elementos do DOM
const gameCards = document.querySelectorAll('.game-card');
const rankingBtns = document.querySelectorAll('.btn-ranking-small');
const rankingModal = document.getElementById('ranking-modal');
const closeRankingBtn = document.getElementById('close-ranking-btn');
const rankingList = document.getElementById('ranking-list');
const rankingTitle = document.getElementById('ranking-title');

// Inicializar
function init() {
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

function startGame(game) {
    const savedName = localStorage.getItem('playerName') || 'Beni';
    
    if (game === 'present-continuous') {
        window.location.href = 'present-continuous.html';
    } else if (game === 'present-simple') {
        window.location.href = 'present-simple.html';
    } else if (game === 'present-simple-to-be') {
        window.location.href = 'present-simple-to-be.html';
    } else if (game === 'present-simple-have-got') {
        window.location.href = 'present-simple-have-got.html';
    } else if (game === 'adverbs') {
        window.location.href = 'adverbs.html';
    } else if (game === 'numbers') {
        window.location.href = 'numbers.html';
    }
}

function showRanking(game) {
    let gameName = '';
    let rankingKey = '';
    
    if (game === 'present-continuous') {
        gameName = 'Present Continuous';
        rankingKey = 'presentContinuousRanking';
    } else if (game === 'present-simple') {
        gameName = 'Present Simple';
        rankingKey = 'presentSimpleRanking';
    } else if (game === 'present-simple-to-be') {
        gameName = 'Present Simple - To Be';
        rankingKey = 'presentSimpleToBeRanking';
    } else if (game === 'present-simple-have-got') {
        gameName = 'Present Simple - Have Got';
        rankingKey = 'presentSimpleHaveGotRanking';
    } else if (game === 'adverbs') {
        gameName = 'Adverbs';
        rankingKey = 'adverbsRanking';
    } else if (game === 'numbers') {
        gameName = 'Numbers 1-100';
        rankingKey = 'numbersRanking';
    }
    
    rankingTitle.textContent = `🏆 Ranking - ${gameName} 🏆`;
    const ranking = getRanking(rankingKey);
    
    function getOrdinal(n) {
        const s = ["th", "st", "nd", "rd"];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    }
    
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
    
    rankingModal.style.display = 'flex';
}

function getRanking(key) {
    const ranking = localStorage.getItem(key);
    return ranking ? JSON.parse(ranking) : [];
}

// Inicializar quando a página carregar
init();

