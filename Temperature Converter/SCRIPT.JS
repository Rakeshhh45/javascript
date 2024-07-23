function  CelsiusConverter(){
     let a = document.getElementById("celsius").value ;
    let b = document.getElementById("Fahrenheit").value ;

    x = a*9/5+32;

    document.getElementById("Fahrenheit").value = x;

}

function  FahrenheitConverter(){
     let a = document.getElementById("celsius").value ;
    let b = document.getElementById("Fahrenheit").value ;

    y = (b-32) * 5/9;

    document.getElementById("celsius").value =y;
}