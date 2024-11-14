const sum = summarize(5)
console.log(sum(3))
console.log(sum(0))

function summarize(num) {
    return function(arg = 1) {
        return num + arg
    }
}