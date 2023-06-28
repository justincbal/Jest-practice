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

module.exports = {capitalize, reverseString, Calculator};