function reverseString(string){
    let reversedArray = []
    for (let i = string.length; i > -1; i--){

        let stringChar = string.charAt(i)
        reversedArray.push(stringChar);
    }
    console.log(reversedArray.join(""))

}
reverseString("I\'m da joka, baby")
