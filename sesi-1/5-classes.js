class Human {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

const person = new Human(180, 72);
console.log(person.height);

class Worker extends Human {
    #occupation;

    constructor(height, weight, occupation) {
        super(height, weight);
        this.#occupation = occupation;
    }

    get occupation() {
        return this.#occupation;
    }

    set occupation(newOccupation) {
        this.#occupation = newOccupation;
    }
}

const worker = new Worker(180, 72, "Engineer");
console.log(worker.occupation);
