let array =[]
function obj(){
      let a = document.getElementById("name").value
      let b = document.getElementById("surname").value
      let c = document.getElementById("no").value

      array.push(
        {
            Name:a,
            surname:b,
            mobile:c
    
        }
      )

      document.getElementById("result").innerHTML = JSON.stringify(array) ;

}