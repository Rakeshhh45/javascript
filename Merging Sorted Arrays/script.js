let array = [1, 2, 5, 6, 9]
let array1 = [4, 5, 7, 3, 6]
let array3 = []


function merge() {
    let array2 = [...array, ...array1];
    console.log(array2);

    array3.push(array2)

    let x = array3.sort(function (a, b) { return a - b })
    document.getElementById("result").innerHTML = x;

    console.log(array3)
}

