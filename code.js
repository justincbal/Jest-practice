function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function reverseString(str) {
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

let Calculator = {
    add: function(a,b) { return a + b; },
    subtract: function(a,b) { return a - b},
    multiply: function(a,b) { return a * b},
    divide: function(a,b) { return a / b}
}

function shift(str, num) {
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
        let letterIndex = letters.indexOf(str[i]);
        
        if(letterIndex + num > 25) {
            /*
                [23]x + 5 = c
            */
           let diff = 25 - letterIndex; // 2
           newStr += letters[-1 + (num - diff)];
        }
        else {
            newStr += letters[letterIndex + num];
        }
        
    }
    return newStr;
}

function analyzeArray(arr) {
    class Obj {
        constructor(avg, min, max, length) {
            this.average = avg;
            this.min = min;
            this.max = max;
            this.length = length;
        }
    }

    // Get length
    let length = arr.length;
    // Get max
    let maxNum = Math.max(...arr);
    // Get min
    let minNum = Math.min(...arr);
    // Get average
    let total = arr.reduce((a, b) => a + b, 0);
    let average = total / length;

    const analyzedArr = new Obj(average, minNum, maxNum, length);
    
    return analyzedArr;

}

module.exports = {capitalize, reverseString, Calculator, shift, analyzeArray};