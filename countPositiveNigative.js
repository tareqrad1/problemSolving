
function count_positive_nigative(input) {
    let arr = [];
    let sum = 0;
    for(let i =0; i<input.length; i++) {
        if(input[i] > 0){
            arr.push(input[i]) //[1,2,3,4]  array.length = 4 طول الاري 
        }else {
            sum += input[i]
        }
    }
    return [arr.length,sum];
}

console.log(count_positive_nigative([1,2,3,4,-1,-1]));