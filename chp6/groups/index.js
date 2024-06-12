class Group {
    #groupMembers;
    constructor() {
        this.#groupMembers = [];
    }

    add(element) {
        if(!this.has(element)){
            this.#groupMembers.push(element);
        }
    }

    delete(element) {
        this.#groupMembers = this.#groupMembers.filter(member => member !== element);
    }

    // has(element) {
    //     return this.#groupMembers.includes(element);
    // }

    has(element) {
        return this.#groupMembers.some(member => member === element);
    }

    static from(elements) {
        let group = new this();
        for(let element of elements){
            group.add(element);
        }
        return group;
    }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));