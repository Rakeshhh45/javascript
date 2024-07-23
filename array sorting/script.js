let array = []
function arraysorting() {
    let number = document.getElementById("no").value;
    array.push(number)
    document.getElementById("result").innerHTML = "orignal array:-" + JSON.stringify(array);
    console.log(array)

    let sorted = array.sort(function (a, b) { return a - b })
    document.getElementById("result1").innerHTML = "asendind order:-" + JSON.stringify(sorted);

    let sorted1 = array.sort(function (a, b) { return b - a })
    document.getElementById("result2").innerHTML = "desending order:-" + JSON.stringify(sorted1);

}