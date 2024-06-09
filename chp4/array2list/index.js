const arrayToList = arr => {
    let list = null
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        list = { value: arr[i], rest: list }
    }
    return list
}

const listToArray = list => {
    let arr = []
    for (let node = list; node; node = node.rest) {
        arr.push(node.value)
    }
    return arr
}

const prepend = (value, list) => {
    return { value, rest: list }
}

const nth = (list, n) => {
    if (!list) {
        return undefined
    } else if (n === 0) {
        return list.value
    } else {
        return nth(list.rest, n - 1)
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20