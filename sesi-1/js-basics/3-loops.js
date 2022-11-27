//region Regular for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
//endregion

//region While loop
let i = 0;
while (i < 5) {
    console.log(i);
    ++i;
}
//endregion

//region For of loop
const numbersForOf = [1, 2, 3];
for (const num of numbersForOf) {
    console.log(num);
}
//endregion

//region For in loop
const numbersForIn = [4, 5, 6];
for (const num in numbersForIn) {
    console.log(num);
}
//endregion

//region For each loop
[1, 2, 3].forEach((num) => console.log(num));
//endregion
