const every = (array, test) => {
    return !array.some(element => !test(element))
}


console.log(every([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(every([], n => n < 10));