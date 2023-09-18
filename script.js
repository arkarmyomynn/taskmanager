
let data = [];
    
function addtask() {
    let taskname = document.getElementById("taskname").value;
    let time = document.getElementById("time").value;
    if (taskname == '' & time =='') {
    
    alert("Please fill all the fields");
    } else {
    let taskname = document.getElementById("taskname").value;
    let time = document.getElementById("time").value;

    let newObj = { name: taskname, time: time };

    data.push(newObj);
    localStorage.setItem("object", JSON.stringify(data));
    read();
}

    

}

   
function read() {
    

    var object = localStorage.getItem("object");
    var objectData = JSON.parse(object);
    var element= '';

    objectData.map(take =>
    (
        element += ` <tr>
        <td id="check"><input type="checkbox" name="" id="checkbox"></td>
        <td id="taskName">${take.name}</td>
        <td id="Time">${take.time}</td>
        </tr>`
        

    )

    )
    document.getElementById('table').innerHTML = element;
} 
function del() {
    delete localStorage.removeItem("object"); 
    
    
}



