let array = [];
function RemoveDuplicates(){
    let num =  document.getElementById("remove").value ;

    array.push(num)
    console.log(array);

    
    let duplicateremove = (data)=>{
        return [...new Set(data)]
    }

    document.getElementById("result").innerHTML = JSON.stringify(array);
    document.getElementById("result1").innerHTML = JSON.stringify(duplicateremove(array));


}