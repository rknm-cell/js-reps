function binarySearch(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (arr[mid] === target){
            return mid
        }
        else if (arr[mid] < target){
            left = mid + 1
        }
        else {
            right = mid - 1
        }
    }
    return -1
}

console.log('2', binarySearch([1,2,3,4,5,6,7,8,9], 2))
console.log('77', binarySearch([1,9,12,15,16,17,55,77,88,100],77))
console.log('2', binarySearch([1,1,1,1,1,1,1,1,2], 2))
console.log('3', binarySearch([1,1,1,1,1,1,1,1,2], 2))
