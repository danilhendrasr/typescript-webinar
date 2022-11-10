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

const shoeType = "sneakers";

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
}
