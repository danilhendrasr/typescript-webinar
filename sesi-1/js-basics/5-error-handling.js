//region Try-catch-finally
try {
    const x = 10;
    x / 5;
} catch (e) {
    console.log("Cannot do the above operations.");
} finally {
    console.log("This will always get executed.");
}
//endregion

//region Try catch inside a function
function createArray(length) {
    try {
        const newArray = new Array(length);
        console.log("Array successfully created.");
        return newArray;
    } catch {
        console.log(`Failed creating array with length of ${length}.`);
    }
}

createArray(10);
createArray(-1);
//endregion
