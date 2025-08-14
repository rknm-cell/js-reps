function PrimeNumberChecker(num){

    if (num <= 1){
        return false;
    }
    if (num % 2 === 0 || num % 3 === 0){
        return false;
    }

    for (let i = 5; i * i <= num; i++){
        if (num % i === 0){
            return false
        }
    }
    return true
}
console.log(PrimeNumberChecker(1))
console.log(PrimeNumberChecker(13))
console.log(PrimeNumberChecker(20))
console.log(PrimeNumberChecker(47))
