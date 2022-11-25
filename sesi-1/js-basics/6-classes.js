/** =====================
 *      Regular class
 * ====================== */
class Human {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

const person = new Human(180, 72);
console.log(person.height);
console.log(person.weight);

/** =====================
 *   Class inheritance
 * ====================== */
class Worker extends Human {
    #occupation;

    constructor(height, weight, occupation, address) {
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
