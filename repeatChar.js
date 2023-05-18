function doubleChar(input) {
    return input.split('').map((ele) => {
        return ele.repeat(2);
    }).join('');
}

console.log(doubleChar('tareq'));