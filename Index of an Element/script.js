let array  = ['rakesh', 'harsh','paras','50','30', 'kishor'] ;
function Element(){
    let Number = document.getElementById("no").value ;
    
    document.getElementById("result").innerHTML = "index of an element:-" + JSON.stringify(array.indexOf(Number))
}