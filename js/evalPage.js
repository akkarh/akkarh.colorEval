// process the color info and query WebAIM for accessibility info

// TODO: placeholder for now; replace with actual json result
let input = {
    "tags": [
        {
            "label": "Green",
            "color": "#2A5D24"
        },
        {
            "label": "Beige",
            "color": "#A99670"
        },
        {
            "label": "Gray",
            "color": "#282523"
        },
        {
            "label": "Brown",
            "color": "#523E2D"
        }
    ]
}

let tags = input["tags"];
let background = getColor(tags[0]);

function parseInput() {
    let bodyTags = tags.slice(1, tags.length);
    // color = foreground color
    bodyTags.forEach(function (tag) {
        let color = getColor(tag);
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

function getColor(tag) {
    return tag["color"].substring(1);
}

function sendRequest(request) {
    // TODO: replace this proxy url with swe's heroku server
    var proxyUrl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyUrl + request)
        .then(handleResponse)
        .then(function(json) {
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
parseInput();