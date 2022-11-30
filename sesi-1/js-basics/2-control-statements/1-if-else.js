const bagPrice = 160_000;

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
