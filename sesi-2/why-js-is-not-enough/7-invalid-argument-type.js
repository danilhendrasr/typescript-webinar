/**
 * JS doesn't prevent you from passing an invalid argument to a function.
 */

function subtract(a, b) {
    return a - b;
}

// This will return NaN
subtract(3, "Testing");
