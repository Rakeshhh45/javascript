let array = []
let evenarray = []
let oddarray = []
function filtering() {
    let number = document.getElementById("no").value;

    let a = array.push(number)

    console.log(a)

    if (number % 2 == 0) {
        evenarray.push(number);
    } else {
        oddarray.push(number);
    }

    document.getElementById("result").innerHTML = "this is even number:-" + JSON.stringify(evenarray);
    document.getElementById("result1").innerHTML =  "this is odd number:-" + JSON.stringify(oddarray);
    document.getElementById("array").innerHTML = JSON.stringify(array);

}