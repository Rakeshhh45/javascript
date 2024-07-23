function prime() {
    let a = document.getElementById("no").value;

    let fleg = true;
    for (let i = 2; i < a; i++) {
        if (a % i == 0) {
            fleg = false
        }
    }
    if (fleg) {
        document.getElementById("result").innerHTML = "this is prime"
    } else {
        document.getElementById("result").innerHTML = "this is not prime"
    }
}