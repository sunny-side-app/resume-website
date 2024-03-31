console.log("called app.js")
window.addEventListener("load", (event) => {
    console.log("called EventListener")
    request = new XMLHttpRequest();
    request.open("GET", "json/portfolio.json");
    request.responseType = "json";
    request.send();
    request.onload = function() {
        const portfolio_hashmap_arr = JSON.parse(JSON.stringify(request.response));
    }
});