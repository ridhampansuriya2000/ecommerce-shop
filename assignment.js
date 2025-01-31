//Problem: Caesar Cipher encoding and decoding

function caesarCipher(message, shift, mode = 'encode') {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

    const processChar = (char) => {
        const upperChar = char.toUpperCase();
        const index = alphabet.indexOf(upperChar);
        if (index === -1) return char;
        const shiftedChar = mode === 'encode' ? shiftedAlphabet[index] : alphabet[shiftedAlphabet.indexOf(upperChar)];
        return char === upperChar ? shiftedChar : shiftedChar.toLowerCase();
    };

    return message.split('').map(processChar).join('');
}

// Problem: Convert number into a comma separated Indian currency format
function formatIndianCurrency(number) {
    const [integerPart, decimalPart] = number.toString().split('.');
    const length = integerPart.length;
    let formattedInteger = '';

    for (let i = 0; i < length; i++) {
        if (i === 0) {
            formattedInteger = integerPart[length - 1 - i];
        } else if (i === 1 || i === 2) {
            formattedInteger = integerPart[length - 1 - i] + formattedInteger;
        } else if ((i - 2) % 2 === 1) {
            formattedInteger = integerPart[length - 1 - i] + ',' + formattedInteger;
        } else {
            formattedInteger = integerPart[length - 1 - i] + formattedInteger;
        }
    }

    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
}

//Problem: Combining two lists
function combineLists(list1, list2) {
    const combined = [...list1, ...list2].sort((a, b) => a.positions[0] - b.positions[0]);
    const result = [];

    for (let i = 0; i < combined.length; i++) {
        let current = combined[i];
        for (let j = i + 1; j < combined.length; j++) {
            const next = combined[j];
            const overlap = Math.min(current.positions[1], next.positions[1]) - Math.max(current.positions[0], next.positions[0]);
            const minLength = Math.min(current.positions[1] - current.positions[0], next.positions[1] - next.positions[0]);

            if (overlap > minLength / 2) {
                current = {
                    positions: current.positions,
                    values: [...new Set([...current.values, ...next.values])]
                };
                i = j;
            } else {
                break;
            }
        }
        result.push(current);
    }

    return result;
}

const list1 = [
    { positions: [1, 5], values: ['A', 'B'] },
    { positions: [10, 15], values: ['C'] }
];

const list2 = [
    { positions: [2, 6], values: ['D'] },
    { positions: [12, 16], values: ['E'] }
];


// Problem: Minimizing Loss

function minimizeLoss(prices) {
    const n = prices.length;
    let minLoss = Infinity;
    let buyYear = 0;
    let sellYear = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const loss = prices[i] - prices[j];
            if (loss > 0 && loss < minLoss) {
                minLoss = loss;
                buyYear = i + 1;
                sellYear = j + 1;
            }
        }
    }

    return { buyYear, sellYear, loss: minLoss };
}

