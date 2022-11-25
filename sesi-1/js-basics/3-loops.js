/** =====================
 *    Regular for loop
 * ====================== */
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/** =====================
 *   Regular while loop
 * ====================== */
let i = 0;
while (i < 5) {
    console.log(i);
    ++i;
}

/** =====================
 *       For of loop
 * ====================== */
const numbersForOf = [1, 2, 3];
for (const num of numbersForOf) {
    console.log(num);
}

/** =====================
 *      For in loop
 * ====================== */
const numbersForIn = [4, 5, 6];
for (const num in numbersForIn) {
    console.log(num);
}

/** =====================
 *      For each loop
 * ====================== */
[1, 2, 3].forEach((num) => console.log(num));
