let toDos = [];

function loadToDos(){
    let html = "";

    toDos.forEach(element => {
        html += "<div>" + "<input type='checkbox'>  </input>"+ element.toDo + "<button onclick='deleteBox(" + element.id + ")'>Delete</button>" + "</div>"
    });

    document.getElementById("content").innerHTML = html;
}

function addToDo(){
    let newTodo = prompt("Add your what you need to do.");
    console.log(newTodo);
    console.log(toDos);
    toDos.push({id: toDos.length,toDo: newTodo});
    loadToDos();
}

function deleteBox(id){
    console.log(id);
    toDos.splice(id, 1);
    loadToDos();
}
loadToDos();