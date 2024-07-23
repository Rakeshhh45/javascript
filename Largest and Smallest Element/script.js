let array = [];

function largeNumber() {
    let number = document.getElementById("no").value;


    let a = array.push(number);
    console.log(a)

    let sorted = array.sort(function (a, b) { return a - b });

    console.log(sorted)

    let small = sorted[0]
    let large = sorted[sorted.length - 1]

    document.getElementById("result").innerHTML = JSON.stringify(small);
    document.getElementById("result1").innerHTML = JSON.stringify(large);
    document.getElementById("array").innerHTML = JSON.stringify(array);




}