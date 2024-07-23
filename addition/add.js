function addi() {

    let x = parseInt(document.getElementById("no1").value);
    let y = parseInt(document.getElementById("no2").value);
    let sum = x + y;

    document.getElementById("result").innerHTML = sum;

    console.log(sum);
}

function substraction() {
    let a = parseInt(document.getElementById("no1").value);
    let b = parseInt(document.getElementById("no2").value);
    let sub = a - b;

    document.getElementById("rakesh").innerHTML = sub;

}

function multi() {
    let c = parseInt(document.getElementById("no1").value);
    let d = parseInt(document.getElementById("no2").value);

    let multi = c * d;

    document.getElementById("result").innerHTML = multi
}

function divi() {
    let s = parseInt(document.getElementById("no1").value);
    let r = parseInt(document.getElementById("no2").value);

    let divi = s / r;

    document.getElementById("result").innerHTML = divi
}