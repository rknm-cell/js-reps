function findMissingNum(arr){
    let missingNum = -1
    for (let i = 1; i < arr.length; i++){
        const prev = arr[i - 1]
        const curr = arr[i]
        if(curr !== prev + 1){
            missingNum = prev + 1
        }
    }
    return missingNum
}

console.log(findMissingNum([1,2,3,4,5,6,7]))
console.log(findMissingNum([1,2,3,5,6,7]))
console.log(findMissingNum([1,2,3,4,6,7]))