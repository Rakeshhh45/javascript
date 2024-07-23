function fibbo() {
    let number = document.getElementById("no").value;

    let a = 0;
    let b = 1;
    let result;

    for (let i = 2; i <= number; i++) {
        result = a + b;
        a = b;
        b = result;

        console.log(result)

        document.getElementById("result").innerHTML = result;
    }
}