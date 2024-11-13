const num1 = Number(prompt('Enter 1st number'))
const num2 = Number(prompt('Enter 2nd number'))
console.log(summarize(num1)(num2))

function summarize(num) {
    return function(arg = 1) {
        return num + arg
    }
}