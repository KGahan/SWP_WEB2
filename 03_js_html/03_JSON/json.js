let data = [
    { firstNname: "Hans", lastName: "Huber", points: 30},
    { firstNname: "Paul", lastName: "Hainz", points: 10},
    { firstNname: "Franz", lastName: "Kunz", points: 20}
];


for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element.firstNname);
}

let person = {firstNname: "Hans", lastName: "Huber", points: 30}

console.log(person.firstNname);

function loadPeople(){
    let html = "";

    data.forEach(element => {
        html += "<div>" + element.firstNname + " " + element.lastName + "</div>"
    });

    console.log(html);

    document.getElementById("content").innerHTML = html;
}

loadPeople();