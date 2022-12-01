function createArray(length) {
    try {
        const newArray = new Array(length);
        console.log("Array successfully created.");
        return newArray;
    } catch {
        console.log("Failed creating array with length of " + length);
    }
}

createArray(10);
// TODO: Change the above argument to -1
