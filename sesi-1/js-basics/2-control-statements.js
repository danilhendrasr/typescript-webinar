//region Regular if statement
// TODO: Tinker around with below variable's value
const bagPrice = 100_000;

const isBagExpensive = bagPrice > 150_000;
const isBagNormal = bagPrice >= 100_000 && bagPrice < 150_000;
const isBagCheap = bagPrice < 100_000;

if (isBagExpensive) {
    console.log("This bag is expensive.");
} else if (isBagNormal) {
    console.log("This bag is normal.");
} else {
    console.log("This bag is cheap!");
}
//endregion

//region Ternary expression
const toPrint = isBagCheap ? "Bag is cheap" : "Bag is expensive";
console.log(toPrint);
//endregion

//region Switch statement
// TODO: tinker around with below variable's value
const shoeType = "sepatu";

switch (shoeType) {
    case "sneakers":
        console.log("This is a snakers");
        break;
    case "running shoe":
        console.log("I'm fast boy");
        break;
    case "boots":
        console.log("Look at my boots");
        break;
    default:
        console.log("not found");
}
//endregion
