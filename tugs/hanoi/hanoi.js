let towers = [[], [], []];
const numDiscs = 5;

function initializeTowers() {
    towers = [[], [], []];
    for (let i = numDiscs; i >= 1; i--) {
        towers[0].push(i);
    }
    renderTowers();
}

function renderTowers() {
    for (let i = 1; i <= 3; i++) {
        const towerElement = document.getElementById(`tower${i}`);
        towerElement.innerHTML = '';
        towers[i-1].forEach((disc, index) => {
            const discElement = document.createElement('div');
            discElement.className = 'disc';
            discElement.style.width = `${20 * disc}px`;
            discElement.style.bottom = `${index * 22}px`; // Position the discs vertically
            towerElement.appendChild(discElement);
        });
    }
}

function hanoi(n, from, to, aux, moves) {
    if (n === 0) return;    
    hanoi(n-1, from, aux, to, moves);
    moves.push([from, to]);
    hanoi(n-1, aux, to, from, moves);
}

function solveHanoi() {    
    const moves = [];
    initializeTowers();    

    hanoi(numDiscs, 0, 2, 1, moves);
    executeMoves(moves);
}

function executeMoves(moves) {
    if (moves.length === 0) {
        return;
    }
    const [from, to] = moves.shift();
    const disc = towers[from].pop();
    towers[to].push(disc);
    renderTowers();
    setTimeout(() => executeMoves(moves), 500);
}

initializeTowers();
