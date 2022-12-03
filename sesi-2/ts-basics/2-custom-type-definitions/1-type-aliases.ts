function secondPower(x: string | number) {
    if (typeof x === "string") return x + x;
    else x ** 2;
}

function thirdPower(x: string | number) {
    if (typeof x === "string") return x + x + x;
    else x ** 3;
}

// TODO: Create a type alias that can be used by both secondPower and thirdPower

/* =========================== */

// TODO: Create type alias for an object
