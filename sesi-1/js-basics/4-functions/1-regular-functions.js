// This is how regular functions are commonly defined
function addTwo(a, b) {
    return a + b;
}

addTwo(1, 5);

// We can also do this
const addAll = function (...numbers) {
    let total = 0;

    for (const num of numbers) {
        total += num;
    }

    return total;
};

addAll(1, 2, 3, 5);
