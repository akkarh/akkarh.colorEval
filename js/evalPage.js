'use strict';

window.onload = function () {
    getColors("https://i.imgur.com/OxCuqhw.jpg");
};

function getColors(url) {
    var proxyUrl = 'https://mighty-beach-27822.herokuapp.com/',
        targetUrl = 'http://mkweb.bcgsc.ca/color-summarizer/?url=' + url + '&precision=medium&json=1'
    fetch(proxyUrl + targetUrl)
        .then(handleResponse)
        .then(function (json) {
            var jsonArr = json["clusters"];
            var hexArr = [];
            var cluster;
            for (cluster in jsonArr) {
                hexArr.push(jsonArr[cluster]["hex"][0]);
            }
            return hexArr;
        })
        .then(parseInput);
}

function parseInput(hexValues) {
    let background = getColor(hexValues[0]);
    let bodyColors = hexValues.slice(1, hexValues.length);
    // color = foreground color
    let div = document.getElementById("eval");
    div.textContent = "";
    bodyColors.forEach(function (hex) {
        let color = getColor(hex);
        let request = composeRequest(color, background)
        sendRequest(request, background, color);
    });
}

function composeRequest(foreground, background) {
    let baseURL = "https://webaim.org/resources/contrastchecker/?fcolor=<FOREGROUND>&bcolor=<BACKGROUND>&api";
    baseURL = baseURL.replace("<FOREGROUND>", foreground);
    baseURL = baseURL.replace("<BACKGROUND>", background);
    return baseURL;
}

function getColor(hex) {
    return hex.substring(1);
}

function sendRequest(request, background, foreground) {
    var proxyUrl = "https://mighty-beach-27822.herokuapp.com/";
    fetch(proxyUrl + request)
        .then(handleResponse)
        .then(function (json) {
            displayResults(json, background, foreground);
        });
}

function displayResults(test, background, foreground) {
    let div = document.getElementById("eval");
    let result = document.createElement("div");
    let innerDiv = document.createElement("div");
    
    console.log(test);

    let bg = document.createElement("p");
    let fg = document.createElement("p");
    bg.textContent = "Background: #" + background;
    bg.style.color = "#" + background;
    fg.textContent = "Foreground: #" + foreground
    fg.style.color = "#" + foreground;

    let ul = document.createElement("ul");
    let li1 = document.createElement("li"); // AA
    li1.textContent = "AA: " + test["AA"];
    li1 = passed(li1, test["AA"]);

    let li2 = document.createElement("li"); // AALarge
    li2.textContent = "AALarge: " + test["AALarge"];
    li2 = passed(li2, test["AALarge"]);

    let li3 = document.createElement("li"); // AAA
    li3.textContent = "AAA: " + test["AAA"];
    li3 = passed(li3, test["AAA"]);

    let li4 = document.createElement("li"); // AAALarge
    li4.textContent = "AAALarge: " + test["AAALarge"];
    li4 = passed(li4, test["AAALarge"]);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    
    result.appendChild(bg);
    result.appendChild(fg);
    result.appendChild(ul);
    
    div.appendChild(result);
}

function passed(item, result) {
    if (result == "pass") {
        item.classList.add("pass");
    } else {
        item.classList.add("fail");
    }
    return item;
}

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        return response.json()
            .then(function (err) {
                throw new Error(err.errorMessage);
            });
    }
}