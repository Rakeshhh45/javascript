function oddEven(){
    let rakesh = document.getElementById("no1").value;

    console.log(rakesh)

    if(rakesh%2==0){
        document.getElementById("result").innerHTML = rakesh + ":-This number is Even"
    }else{
        document.getElementById("result").innerHTML = rakesh + ":-This number is Odd"
    }

}