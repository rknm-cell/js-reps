function removeDuplicates(arr){
    if (arr.length === 1){
        return arr
    }
    
    const newArr = []
    for (let i = 0; i < arr.length; i++){
        // if the arr index isn't the first
        // check if 
        let curr = arr[i]
        let prev = arr[i - 1]
        if (i === 0){
            newArr.push(curr)
        }
        else if (curr !== prev){
            newArr.push(curr)
        }
            
    }
    return newArr
}

console.log(removeDuplicates([1,1,1,1,1,1,1,1]))
console.log(removeDuplicates([1,2,3,4,5,6,7,8]))
console.log(removeDuplicates([1,1,2,2,3,3,4,4]))
