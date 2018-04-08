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
    bodyColors.forEach(function (hex) {
        let color = getColor(hex);
        let request = composeRequest(color, background)
        sendRequest(request);
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

function sendRequest(request) {
    var proxyUrl = "https://mighty-beach-27822.herokuapp.com/";
    fetch(proxyUrl + request)
        .then(handleResponse)
        .then(function (json) {
            console.log(json);
        });
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