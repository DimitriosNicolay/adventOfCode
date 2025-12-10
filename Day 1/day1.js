const fs = require('fs');
const inputText = fs.readFileSync('./inputs.md', 'utf8');
const inputs = inputText.trim().split('\n').map(line => line.trim());

let position = 50;
let zeroHits = 0;

for (let instruction of inputs) {
    let turn = instruction[0]; // 'R' or 'L'
    let steps = parseInt(instruction.slice(1));
    
    if (turn === 'R') {
        position = (position + steps) % 100;
    } else if (turn === 'L') {
        position = (position - steps + 100) % 100;
    }
    
    if (position === 0) {
        zeroHits++;
    }
}

console.log('Zero hits:', zeroHits);
