function factiorial(num){
    let sum = num
    for (let i = num - 1; i > 0; i--){
        sum *= i
    }
    return sum
}

console.log(factiorial(5));
console.log(factiorial(17));
console.log(factiorial(2));