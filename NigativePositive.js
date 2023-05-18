
function get_opposite(numbers) {
    return numbers >= 0 ? numbers * -1 : numbers * -1;
}
console.log(get_opposite(-1));



// or
function get_oppositeTow(n) {
    return -n;
}
console.log(get_oppositeTow(60));



//or
function get_oppositeThree(n) {
    return n === 0 ? n : -n; 
}
console.log(get_oppositeThree(0));