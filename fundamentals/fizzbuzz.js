function fizzbuzz(){
    for(let i = 0; i < 100; i++){
        
        let fizzbuzz = ""
        if (i % 3 == 0){
            fizzbuzz = fizzbuzz + "Fizz"
        }
        if (i % 5 == 0){
            fizzbuzz = fizzbuzz + "Buzz"
        }
        console.log(i, ' ', fizzbuzz)
    }
}
fizzbuzz()