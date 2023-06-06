let arr = [1,-4,7,12,-5,5,1];

let x;
arr.filter((nums) => nums > 0).reduce((prev,next) => {
    return x = prev + next;
});
console.log(x);

/* the best */
let newArr = [];
let sum = 0;
for(let i=0; i<arr.length; i++) {
    if(arr[i] > 0) {
        sum+=arr[i]
    }
}
console.log(sum);
// here sum even number only



let y = 0
arr.filter((num) => {
    return num
}).reduce((prev,next) => {
    return  y = prev + next
})
console.log(y);

// here sum all number 

