function pollindrome(){
    let name = document.getElementById("text").value ;
    let reverse = name.split("").reverse("").join("");

    console.log(reverse)
    if(name==reverse){
        document.getElementById("result").innerHTML = "this is pollindrone"
    }
    else{
       document.getElementById("result").innerHTML = "this is not pollindrone"
    }
}