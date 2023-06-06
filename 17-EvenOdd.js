function transformNumber(num) {
    // 1
    let arr = [];
    for(let i =0; i < num.length; i++){
        arr.push(num[i] * -1)
    }
    return arr

    // 2
    return num.map((ele) => ele * -1);    //map => because if even and if odd return true or false 
}

console.log(transformNumber([1,-2,3,-4,5]));