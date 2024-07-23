let array =[];
function average(){
    let x = parseInt(document.getElementById("no").value) ;
     
    array.push(x);

    let sum = 0

    for(let i=0; i<array.length; i++){
        sum += array[i]
    }

    console.log(sum)

    let avarge = sum / array.length ;

    document.getElementById("result1").innerHTML = "Sum Of Element:-" + sum ;
    document.getElementById("result2").innerHTML = "avg Of Element:-" + avarge ;
    document.getElementById("result").innerHTML = "Main Array:-" +  JSON.stringify(array) ;
}