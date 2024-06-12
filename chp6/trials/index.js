const person = {name: "Kisho", age: 24};
// console.log(person);
// console.log(Object.getPrototypeOf(person));
// console.log(Object.getPrototypeOf({}));
// console.log(Object.getPrototypeOf({}) == Object.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf({})));
// console.log(Object.getPrototypeOf(null));
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(Function.prototype)));


let protoRabbit = {
    speak(line) {
      console.log(`The ${this.type} rabbit says '${line}'`);
    }
  };
let blackRabbit = Object.create(protoRabbit);
blackRabbit.type = "black";
  // blackRabbit.speak("I am fear and darkness");
// console.log(Object.getPrototypeOf(blackRabbit));

const makerRabbit = (type) => {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
};

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
killerRabbit.speak("I am fear and darkness");
// console.log(Object.getPrototypeOf(Object.getPrototypeOf(killerRabbit)));
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype);
console.log(Object.getPrototypeOf(killerRabbit) == Rabbit.prototype);