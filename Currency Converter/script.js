function indianrupees(){
      let a = document.getElementById("indianrs").value ;
      let b = document.getElementById("usars").value ;

      a = a/83.49

      document.getElementById("usars").value = a;
}

function usarupees(){
    let a = document.getElementById("indianrs").value ;
    let b = document.getElementById("usars").value ;

    b = b*83.49

    document.getElementById("indianrs").value = b;


}