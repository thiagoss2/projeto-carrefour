let array = [1, 2, 3, 4, 4, 5, 6, 6];
let uniqueArray = [];
array.forEach((value) => {
    if (!uniqueArray.includes(value)) {
        uniqueArray.push(value);
    }
});
console.log(uniqueArray);
