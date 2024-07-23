let array = []
function numbersorting(){
    let x = document.getElementById("no").value ;
    array.push(x)
    document.getElementById("result").innerHTML =  "orignal Array:-" + JSON.stringify(array ) ;
    console.log(array)


        let sorted = array.sort(function(a,b){return a-b})
        document.getElementById("result1").innerHTML =  "Sorted Dencriment Array:-" + JSON.stringify(sorted)  ;

        let sorted1 = array.sort(function(a,b){return b-a})

        document.getElementById("result2").innerHTML =  "Sorted Increment Array:-" + JSON.stringify(sorted1)  ;
      
}