function validPalindrome(string){

    let reversedString = string.split("").reverse().join("")
    console.log(reversedString)

    return string === reversedString
}

console.log("dog", validPalindrome("dog"))
console.log("bob", validPalindrome("bob"))