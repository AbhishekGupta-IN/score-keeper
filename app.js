const player1 = {
    score: 0,
    button: document.querySelector('#p1btn'),
    display: document.querySelector('#p1Display')
}

const player2 = {
    score: 0,
    button: document.querySelector('#p2btn'),
    display: document.querySelector('#p2Display')
}

const resetbtn = document.querySelector('#reset');
const playUptoSelect = document.querySelector('#playUpto')

let maxScore = 3;
let isOver = false;

function updateScore(player, opponent) {
    if (!isOver) {
        player.score++;
        player.display.innerText = player.score;
        if (player.score === maxScore) {
            isOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

player1.button.addEventListener('click', () => {
    updateScore(player1, player2);
})

player2.button.addEventListener('click', () => {
    updateScore(player2, player1);
})

playUptoSelect.addEventListener('change', () => {
    maxScore = parseInt(playUptoSelect.value);
    reset();
})

resetbtn.addEventListener('click', reset)

function reset() {
    isOver = false;
    for (let player of [player1, player2]) {
        player.score = 0;
        player.display.innerText = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}