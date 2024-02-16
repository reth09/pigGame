'use strict';

const player0Ele = document.querySelector('.player--0')
const player1Ele = document.querySelector('.player--1')
const score0Ele = document.getElementById('score--0');
const score1Ele = document.getElementById('score--1');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');
const diceEle = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let score, currentScore, activePlayer, play;

function init() {

    score0Ele.textContent = 0;
    score1Ele.textContent = 0;
    current0Ele.textContent = 0;
    current1Ele.textContent = 0
    diceEle.classList.add('hidden');

    score = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    play = true;

    player0Ele.classList.remove('player--winner');
    player1Ele.classList.remove('player--winner');
    player0Ele.classList.add('player--active');
    player1Ele.classList.remove('player--active');
}

init();



function switchPLayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Ele.classList.toggle('player--active');
    player1Ele.classList.toggle('player--active');
}

btnRoll.addEventListener("click", () => {

    if (play) {
        const dice = Math.trunc(Math.random() * 6) + 1

        diceEle.classList.remove('hidden');
        diceEle.src = `dice-${dice}.png`;

        if (dice !== 1) {

            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {

            switchPLayer();

        }
    }

});

btnHold.addEventListener("click", () => {

    if (play) {
        score[activePlayer] += currentScore;
        diceEle.classList.add('hidden');
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];

        if (score[activePlayer] >= 50) {
            play = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            switchPLayer();
        }
    }
})

btnNew.addEventListener("click", init)

