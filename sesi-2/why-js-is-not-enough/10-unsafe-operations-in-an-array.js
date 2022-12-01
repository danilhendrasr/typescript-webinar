/**
 * JS increases the chance of you accidentally getting an error like the following.
 */

const array = [1, 2];

for (const item of array) {
    console.log(item.toFixed(2));
}

array.push("Hehe");

for (const item of array) {
    console.log(item.toFixed(2));
}
