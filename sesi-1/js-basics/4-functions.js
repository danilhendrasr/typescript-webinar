//region Regular function
function hello(name) {
    console.log("Hello " + name);
}
hello("Joni");

//endregion

//region Arrow function

const add = (a, b) => {
    console.log(`${a} + ${b} = `, a + b);
};
add(3, 5);

//endregion

//region Functions are value

const holaNTimes = function (n) {
    for (let i = 0; i < n; i++) {
        console.log("Hola");
    }
};

holaNTimes(3);

//endregion

//region Function as parameter

function functionAsParameter(func) {
    func();
    console.log("I've run the function");
}

function print5() {
    console.log(5);
}

functionAsParameter(print5);

//endregion
