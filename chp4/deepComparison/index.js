const deepCompare = (obj1, obj2) => {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (const key in obj1) {
        if (!deepCompare(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
};

let obj = {here: {is: "an"}, object: 2};
console.log(deepCompare(obj, obj));
console.log(deepCompare(obj, {here: 1, object: 2}));
console.log(deepCompare(obj, {here: {is: "an"}, object: 2}));