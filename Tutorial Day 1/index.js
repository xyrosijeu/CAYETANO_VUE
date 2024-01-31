function greet(name) {
    console.log("Hello" + name);
    console.log(`Hello $(name)`);
}
let firstname = 'Sam';
let lastname = "Sijey";
greet(firstname);
greet(lastname);

function add(num1, num2) {
    console.log(num1+num2)
    return num1 + num2;
}

