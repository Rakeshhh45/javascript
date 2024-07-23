function gotoform() {
    Document.getElementById("direct").style.display = "block";
}

function closeform() {
    document.getElementById("direct").style.display = "none";
}



function openform() {

    document.getElementById("direct").style.display = "none";

    let username = document.getElementById("rakesh").value;
    let task = document.getElementById("taskname").value;
    let label = document.getElementById("labe").value;
    let date = document.getElementById("dte").value;

    let store = JSON.parse(localStorage.getItem("item"));

    if (store == null) {
        store = [];
    }

    store.push({
        name: username,
        taskname: task,
        labelname: label,
        date: date
    })

    localStorage.setItem("item", JSON.stringify(store));

    console.log(JSON.parse(localStorage.getItem("item")));

    let body = document.getElementById("access");
    body.className = "first"

    while (body.firstchild) {
        body.removeChild(body.firstchild);
    }

    store.forEach((item) => {
        let row = document.createElement("tr");

        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");

        td1.innerHTML = item.name;
        td2.innerHTML = item.taskname;
        td3.innerHTML = item.labelname;
        td4.innerHTML = item.date;

        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        row.appendChild(td4);

        body.appendChild(row);


    })

    let col = document.querySelector(".first").style.alignItem = 'center';

}







