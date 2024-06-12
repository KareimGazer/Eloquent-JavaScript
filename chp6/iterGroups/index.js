class Group {
    constructor() {
        this.groupMembers = [];
    }

    add(element) {
        if(!this.has(element)){
            this.groupMembers.push(element);
        }
    }

    delete(element) {
        this.groupMembers = this.groupMembers.filter(member => member !== element);
    }

    // has(element) {
    //     return this.#groupMembers.includes(element);
    // }

    has(element) {
        return this.groupMembers.some(member => member === element);
    }

    static from(elements) {
        let group = new this();
        for(let element of elements){
            group.add(element);
        }
        return group;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }
}

class GroupIterator {
    #group;
    #index;
    constructor(group) {
        this.#group = group;
        this.#index = 0;
    }
    next() {
        if(this.#index < this.#group.groupMembers.length){
            return {value: this.#group.groupMembers[this.#index++], done: false};
        } else {
            return {done: true};
        }
    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
