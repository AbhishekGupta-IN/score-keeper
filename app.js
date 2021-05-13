const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#reset');
const playUptoSelect = document.querySelector('#playUpto')
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;

let maxScore = 3;
let isOver = false;

p1btn.addEventListener('click', () => {
    if (!isOver) {
        p1Score++;
        p1Display.innerText = p1Score;
        if (p1Score === maxScore) {
            isOver = true;
            p1Display.classList.add('has-text-success');
            p2Display.classList.add('has-text-danger');
        }
    }
})

p2btn.addEventListener('click', () => {
    if (!isOver) {
        p2Score++;
        p2Display.innerText = p2Score;
        if (p2Score === maxScore) {
            isOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
        }
    }
})

playUptoSelect.addEventListener('change', () => {
    maxScore = parseInt(playUptoSelect.value);
    reset();
})

resetbtn.addEventListener('click', reset)

function reset() {
    isOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.innerText = 0;
    p2Display.innerText = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
}