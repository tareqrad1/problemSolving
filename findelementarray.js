// function index(array) {
//     for(let i =0; i<array.length; i++) {
//         if(array[i] === 'tareq') {
//             return `we found the index ${i}`;
//         }
//     }
// }
// console.log(index(['shadi','sabreen','tareq','nareeman','mohammed','yazzan']));


// or
function indexTow(array) {
    return "we found the index " + array.indexOf('tareq');
}
console.log(indexTow(['shadi','sabreen','yaz','areeman','mohammed','tareq']));