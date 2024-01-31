let counter = document.getElementById("counter").innerHTML;

function add() {
    let  new_counter = parseInt(counter);
    new_counter++;
    counter = new_counter;

    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
}
function sub() {
    let  new_counter = parseInt(counter);
    new_counter--;
    counter = new_counter;

    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
}
function times() {
    let  new_counter = parseInt(counter);
    new_counter = counter * 2;
    counter = new_counter;

    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
}
function divide() {
    let new_counter = parseInt(counter);
    new_counter = counter / 2;
    counter = new_counter;
    console.log(counter);
    document.getElementById("counter").innerHTML = counter;
}



