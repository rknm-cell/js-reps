function twoSum(arr, target){
    const pair = []

    for (let i = 0; i < arr.length ; i++){
        for (let j = i + 1; j < arr.length; j++){
            const sum = arr[i] + arr[j]
            if (sum === target){
                pair.push(arr[i], arr[j])
                return pair
            }
        }

    }
    return pair
}

console.log(twoSum([1,2,3,4,5], 7))
console.log(twoSum([1,2,3,4,5], 4))
console.log(twoSum([1,2,3,4,5], 9))