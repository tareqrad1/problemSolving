// add function
const arr = [3,4,6,8,9,1,2];

function sum_without_MinMax() {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return arr.filter((numbers) => numbers !== min && numbers !== max).reduce((prev,next) => {
        return prev + next;
    });
}
console.log(sum_without_MinMax());

/* the best */
let sum = 0;
arr.sort().slice(1,-1).reduce((prev,next) => {
    return sum = prev + next;
})
console.log(sum);