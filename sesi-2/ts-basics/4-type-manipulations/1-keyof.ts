type Person = {
    shirtColor: string;
    isWearingWatch: boolean;
    shoeColor: string;
};

function printAttribute(person: Person, selectedAttribute: keyof Person) {
    console.log(person[selectedAttribute]);
}

// TODO: Call printAttribute
// TODO: Make printAttribute be able to print multiple attributes
