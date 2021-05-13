const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1Score = 0;
let p2Score = 0;

let maxScore = 5;
let isOver = false;

p1btn.addEventListener('click', () => {
    if (!isOver) {
        p1Score++;
        p1Display.innerText = p1Score;
        if (p1Score === maxScore) isOver = true;
    }
})

p2btn.addEventListener('click', () => {
    if (!isOver) {
        p2Score++;
        p2Display.innerText = p2Score;
        if (p2Score === maxScore) isOver = true;
    }
})
