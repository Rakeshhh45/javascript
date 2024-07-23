let array = []
function mapping(){
    let map = document.getElementById("no").value ;

    array.push(map)

    let rakesh = array.map(function (e) {return e*2} );
    console.log(rakesh)

    document.getElementById("result").innerHTML = JSON.stringify(array);
    document.getElementById("array").innerHTML = JSON.stringify(rakesh);

}