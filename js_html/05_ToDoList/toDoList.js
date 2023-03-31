let toDos = [
    { toDo: "Hans"},
];

function loadToDos(){
    let html = "";

    toDos.forEach(element => {
        html += "<div>" + "<input type ='checkBox'> </input>"+ element.toDo + "</div>"
    });

    console.log(html);

    document.getElementById("content").innerHTML = html;
}

function addToDo(){
    let newTodo = prompt("Add your what you need to do.");
    toDos += { toDo: newTodo};
    loadToDos();
}

loadToDos();