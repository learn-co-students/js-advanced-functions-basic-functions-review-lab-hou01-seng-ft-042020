// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(style="*") {
    return function(adjective="special") {
        return `You are ${style}${adjective}${style}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return a + b
    },
    subtract: (a ,b) => a-b,
    multiply: (a ,b) => a*b,
    divide: (a, b) => a/b

}

const actionApplyer = (int, arr) => {
    let num = int
    arr.forEach(a => num = a(num))
    return num
}