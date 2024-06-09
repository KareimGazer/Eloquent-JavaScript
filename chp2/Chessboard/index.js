const width = 10;
const hight = 8;

let board = '';

for (let i = 0; i < hight; i++) {
    for (let j = 0; j < width; j++) {
        if ((j + i) % 2 == 0) { // the index of i alters between even and odd for each row
            board += '#';
        } else {
            board += ' ';
        }
    }
    i < hight - 1 && (board += '\n');
}

console.log(board);