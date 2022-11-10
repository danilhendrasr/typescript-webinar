function hello(name) {
    console.log("Hello" + name);
}
hello("Danil");

const holaNTimes = function (n) {
    for (let i = 0; i < n; i++) {
        console.log("Hola");
    }
};
holaNTimes(3);

(function () {
    console.log("What is this function.");
})();

const add = (a, b) => {
    console.log(`${a} + ${b} = `, a + b);
};
add(3, 5);
