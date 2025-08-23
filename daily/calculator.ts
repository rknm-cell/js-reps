// implement a simple calculator that supports +, -, /, and * on exactly two numbers.
// Your input will be a string, like "4 * 8" or "66 / 33".
// You don't need to do any validation on the input; assume all operators and numbers are separated by a string.
// Next: implement multiple operations, evaluated left-to-right. e.g "3 - 1 - 1" is 1. "5 * 2 * 2" is 20.
// Next: implement parentheses. "3 - 1 - 1" is 1, but "3 - (1 - 1)" is 3. "4 - (6 - (1 - 1))" is -2.


function calc(arg: string): number { 

    let result: number = 0

    //take string argument, convert it to array
    //if 
    const operationArray = arg.split(" ")

    const operators = {
        '+' : (a: number, b: number) => a + b,
        '-' : (a: number, b: number) => a - b,
        '*' : (a: number, b: number) => a * b,
        '/' : (a: number, b: number) => a / b,
    }


    for (let i = 1; i < operationArray.length - 1; i += 2){
        
        let prev = Number(operationArray[i - 1]);
        if(i > 1){
            prev = result
        }
        const operation = operationArray[i];
        const next = Number(operationArray[i + 1]);
        result = operators[operation](prev, next)
    }
    return result
} // TODO. Rename this and add types!

function assert(expected, actual) {
    if (expected !== actual) {
        console.log("Test case failed! Expected", expected, "but you returned", actual)
    }
}
console.log(calc("7 * 12 - 4 + 5"))
console.log(calc("7 - 12"))
console.log(calc("7 + 12"))
console.log(calc("7 / 12"))
assert(15, calc("5 * 4 - 5"))
assert(2, calc("66 / 33"))
assert(1, calc("2 - 1"))
assert(50, calc("50 + 0"))