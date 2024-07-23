
let array = ['rakesh', 'harsh', 'paras', 'kishor', 'nilesh'];
let array1 = ['harsh', 'yogesh', 'paras', 'sachin', 'praksh'];
let array2 = [];

function intersection() {

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array1.length; j++) {
            if (array[i] == array1[j]) {
                array2.push(array1[j]);
            }
        }
    }


   
    document.getElementById("result2").innerHTML = JSON.stringify(array2);

  

}




