let arr = [1,2,3,4,5,6];
arr.reverse().toString();
console.log(arr);


//by function
function reverse(num) {
    return num.toString().split('').map((ele) => {
        return Number(ele);
    }).reverse();
}
console.log(reverse(123456));