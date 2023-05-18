// sol one
function operation(operation,onevalue,twovalue) {
    if(operation == '*') {
        return onevalue * twovalue;
    }else if(operation == '/') {
        return onevalue / twovalue;
    }else if(operation == '+') {
        return onevalue + twovalue;
    }else {
        return onevalue - twovalue;
    }
}
console.log(operation('-',2,1));


// sol tow by [eval]Method

function operation1(onevalue,operation,twovalue) {
    return eval(onevalue + operation + twovalue);
}
console.log(operation1(2,'-',1));