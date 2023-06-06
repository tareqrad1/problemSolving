let arr = [];
function count(x,n) {
    for(let i = 1; i <= n; i++){ 
        arr.push(x * i)
    }
    return arr
}
console.log(count(2,5));