function arrayIntersection(arr1, arr2){

    const common = [];
    
    for (let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                common.push(arr1[i])
            }
        }
    }
    return common

}

console.log(arrayIntersection([1,2,3,4,5,6,7],[1,2,3,4,5,6,7]))
console.log(arrayIntersection([1],[2,3,4,5,6,7]))
console.log(arrayIntersection([1,2,3,4,],[4,5,6,7]))