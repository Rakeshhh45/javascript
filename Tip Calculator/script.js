function tipcalculatior() {
    let amount = document.getElementById("bill").value;
    let tip = document.getElementById("tips").value;

    let tippersentage = amount * tip / 100

    let gst = amount * 18 / 100

    let tottal = parseInt(amount) + parseInt(tippersentage) + parseInt(gst)

    document.getElementById("result").innerHTML = (amount);
    document.getElementById("result1").innerHTML = (tippersentage);
    document.getElementById("result2").innerHTML = (gst);
    document.getElementById("result3").innerHTML = (tottal);

}