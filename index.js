// Your code here
function saturdayFun(celebration = "roller-skate") {
    return `This Saturday, I want to ${celebration}!`
}

function mondayWork(todo = "go to the office") {
    return `This Monday, I will ${todo}.`
}

let wrapAdjective = function(style = "*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}


const Calculator = {
    add: function(a,b) {
        return a + b
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    }
}

function actionApplyer(int, arr = []) {
    for (const el of arr) {
        int = el(int)
    }
    return int
}

