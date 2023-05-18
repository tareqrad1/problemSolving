// solution 1
function squreNuber(input) {
    let arr = [];
    for(let i = 0; i < input.length; i++) { 
        if(Number.isInteger(Math.sqrt(input[i]))) {
            arr.push(Math.sqrt(input[i]));
        }else {
            arr.push(input[i] * input[i]);
        }
    }
    return arr;
}
console.log(squreNuber([4,3,9,7,2,1]));




// solution 2 
function squreNumber(input) {
    return input.map((ele) =>{
        return Number.isInteger(Math.sqrt(ele)) ? Math.sqrt(ele) : ele * ele;
    });
}

console.log(squreNumber([4,3,9,7,2,1]));