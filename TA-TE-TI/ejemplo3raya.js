const board = document.getElementById('board');
const squares = document.getElementsByClassName('square');
let currentPlayer = 'X';
let moves = 0;

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', function() {
        if (squares[i].innerHTML === '') {
            squares[i].innerHTML = currentPlayer;
            moves++;
            if (checkWin()) {
                alert(currentPlayer + ' wins!');
                reset();
            } else if (moves === 9) {
                alert('Tie!');
                reset();
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            }
        }
    });
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let i = 0; i < winningCombos.length; i++) {
        const combo = winningCombos[i];
        if (
            squares[combo[0]].innerHTML === currentPlayer &&
            squares[combo[1]].innerHTML === currentPlayer &&
            squares[combo[2]].innerHTML === currentPlayer
        ) {
            return true;
        }
    }
    return false;
}

function reset() {
    for (let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = '';
    }
    moves = 0;
    currentPlayer = 'X';
}