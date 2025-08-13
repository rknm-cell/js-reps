function anagramChecker(arr){
    // take two strings and sort them
    // check if they are the same
    if (arr[0].length !== arr[1].length){
        return false
    }
    const anagramList = []
    for (let i = 0; i < arr.length; i++){
        let anagram = arr[i].split().sort().join("")
        anagramList.push(anagram)
    }
    return anagramList[0] === anagramList[1]
}

const anagrams1 = ["eat", "ate"]
const anagrams2 = ["arf", "rat"]
const anagrams3 = ["t", "rat"]
console.log(anagrams1,anagramChecker(anagrams1))
console.log(anagrams2,anagramChecker(anagrams2))
console.log(anagrams3,anagramChecker(anagrams3))