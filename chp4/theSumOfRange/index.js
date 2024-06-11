const range = (start, end, step=(start < end)?1:-1) => {
    const arr = [];
    if(start > end) {
        step = step < 0? step : -step;
        for(let i = start; i >= end; i += step) {
            arr.push(i);
        }
    }
    else{
        for(let i = start; i <= end; i += step) {
            arr.push(i);
        }
    }
    return arr;
}

const sum = (arr) => arr.reduce((a, b) => a + b, 0);

console.log(range(5, 2));
console.log(sum(range(1, 10)));

