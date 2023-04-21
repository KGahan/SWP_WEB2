let urlTeams = "";

fetch(urlTeams, {
method:"GET",
headers:{
    "x-auth-token": ""
}
})
.then(response => response.json())
.then(function (data) {
    let html = "";
    data.teams.array.forEach(element => {
        html += "<li> <img src='" + element.crestUrl + "' />" + element.name + "</li>";
    });
    document.getElementById("teams").innerHTML = html;
});