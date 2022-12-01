class Human {
    constructor(height, weight) {
        this.height = height;
        this.weight = weight;
    }
}

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

// TODO: Instantiate new Worker object
