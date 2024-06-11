/**
 * to be expanded into a language finder that find the language to which a sentence belong
 * and gives some info about that language.
 * (Script Recognizer)
 */

const SCRIPTS = require('./scripts.js');

const livingScripts = SCRIPTS.filter(s => s.living);
const deadScripts = SCRIPTS.filter(s => !s.living);

const namesOfLivingScripts = livingScripts.map(s => s.name);
// console.log(names);

const characterCount = (script) =>{
    return script.ranges.reduce((count, [from, to]) =>{
        return count + (to - from);
    }, 0);
}

// the script with the most characters
const scriptWithMostCharacters = SCRIPTS.reduce((a, b) => characterCount(a) > characterCount(b) ? a : b);
// console.log(scriptWithMostCharacters.name)

// average year of origin
const average = (array) => {
    const sum = array.reduce((a, b) => a + b, 0);
    return sum / array.length;
}

const avgYearLiv = Math.round(average(livingScripts.map(script => script.year)));
const avgYearDead = Math.round(average(deadScripts.map(script => script.year)));
// console.log(avgYearLiv, avgYearDead);

const characterScript = (code) => {
    return SCRIPTS.filter(script => script.ranges.some(([from, to]) => code >= from && code < to))[0];
}
// console.log(characterScript(121));

/**
 * 
 * @param {*} array 
 * @returns an object with the count of each element
 */
const countBy= (array) => {
    const groups = {};
    array.filter(element => element!== undefined).forEach(element => {
        if(!groups[element]){
            groups[element] = 0;
        }
        groups[element]++;
    });
    return groups;
}

// script name freq
const longScript = '英国的狗说"woof", 俄罗斯的狗说"тяв"'
const charslangs = longScript.split("").map((char) => characterScript(char.codePointAt(0))?.name);
const scriptsCount = countBy(charslangs);
const countsToPercentage = (scriptsCount) => {
    const total = Object.keys(scriptsCount).reduce((a, b) => a + scriptsCount[b], 0);
    const result = {}
    for(const [key, value] of Object.entries(scriptsCount)){
        result[key] = Math.round((value / total) * 100);
        // console.log(key, value, Math.round((value / total) * 100));
    }
    return result;
};

const scriptsPercentage = countsToPercentage(scriptsCount);
// console.log(scriptsPercentage);
Object.keys(scriptsPercentage).forEach(key => console.log(`${key}: ${scriptsPercentage[key]}%`));

// getting the most common direction
const sentence = "Hey, مساء الخير"
const charsDirections = sentence.split("").map((char) => characterScript(char.codePointAt(0))?.direction);
const mostDominantDirection = Object.keys(countBy(charsDirections)).reduce((a, b) => charsDirections[a] > charsDirections[b] ? a : b);
console.log(mostDominantDirection);