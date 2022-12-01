/**
 * JS doesn't immediately give error when you forget to call a function.
 */

function give5() {
    return 5;
}

const result = give5 + 1;
console.log("5 + 1 = ", result);
