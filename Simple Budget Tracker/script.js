function budgettracker() {
    let text = document.getElementById("description").value;
    let amount = document.getElementById("amount").value;

    let transection = JSON.parse(sessionStorage.getItem("item"))
    if (transection == null) {
        transection = [];
    }

    let type = ""
    if (amount >= 0) {
        type = "i"
    }
    else {
        type = "e"
    }

    transection.push({ transection: text, amount: amount, type: type })

    sessionStorage.setItem("item", JSON.stringify(transection))

    console.log(JSON.parse(sessionStorage.getItem("item")))

    let sum = 0;

    transection.forEach(number => {

        sum += parseInt(number.amount)

    });

    document.getElementById("balance").innerHTML = sum;

    let history = document.createElement("li");

    let data = document.createTextNode(text + "   " + amount);
    history.appendChild(data);

    document.getElementById("product").appendChild(history);

    let money_i = 0;
    let money_e = 0;

    transection.forEach(number => {

        if (number.type === "i") {
            money_i += parseInt(number.amount)
        }

        else {
            money_e += parseInt(number.amount)
        }
    })

    document.getElementById("money-plus").innerHTML = (money_i);
    document.getElementById("money-minus").innerHTML = (money_e);

}

