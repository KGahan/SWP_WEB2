let url = "https://newsapi.org/v2/everything?";
let apiKey = "apiKey=174edd5baf7a4d95a3220fd86f62b7e8";

function reload() {
    let topic = document.getElementById("topic").value;
    let date = document.getElementById("date").value;

    console.log(topic);
    console.log(date);

    if (topic == "" && date == "") {
        getNews(topic, date, true);
    } else {
        getNews(topic, date, false);
    }

}

function getNews(topic, dateStart, empty) {
    console.log(empty);
    console.log("fetching data...");
    if (empty) {
        fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=174edd5baf7a4d95a3220fd86f62b7e8")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.totalResults > 0) {
                    console.log("fetching data successful");
                    let html = "";
                    data.articles.forEach(element => {
                        html += "<div class='news'> <div class='image'> <img height='100' src='" + element.urlToImage + "'> </div> <div><p class='title'>" + element.title + "</p> <p class='content'>" + element.content + " </p> <p><a href = '" + element.url + "'> Read more </a></p> </div></div>";
                    });
                    document.getElementById("list").innerHTML = html;
                } else {
                    document.getElementById("list").innerHTML = "<div class='news'> <p class='title'>Sorry there were no results found.</p></div>"
                }

                console.log(data);
            })
    } else {
        fetch(url + 'qInTitle=' + topic + '&from=' + dateStart + '&sortBy=publishedAt&' + apiKey + '&language=en')  // dateStart = 2023-03-13, 
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                if (data.totalResults > 0) {
                    console.log("fetching data successful");
                    let html = "";
                    data.articles.forEach(element => {
                        html += "<div class='news'> <div class='image'> <img height='100' src='" + element.urlToImage + "'> </div> <div><p class='title'>" + element.title + "</p> <p class='content'>" + element.content + " </p> <p><a href = '" + element.url + "'> Read more </a></p> </div></div>";
                    });
                    document.getElementById("list").innerHTML = html;
                } else {
                    document.getElementById("list").innerHTML = "<div class='news'> <p class='title'>Sorry there were no results found.</p></div>"
                }

                console.log(data);
            })
    }
}