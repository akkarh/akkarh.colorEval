/*
This part was originally the first step in our work flow. Taking in the url of a webpage, getting the screenshot
and then extracting color from the picture. But due to technical difficulties, we had to simulate this part of the
tool.
*/

let web = document.getElementById("url").value;
web = "https://www.apple.com/";

var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

let request = "http://api.screenshotlayer.com/api/capture?access_key=ddccf18819be3976a799d69c564d1401&url=" + web + "&format=JPG";
fetch(proxyUrl + request)
	.then(handleResponse)
	.then(function (response) {
		console.log(response);
		console.log(response.json());
		console.log(response.type);
		return response;
	});

function handleResponse(response) {
	console.log(response);
	if (response.ok) {
		return response.json();
	} else {
		return response.json()
			.then(function (err) {
				throw new Error(err.errorMessage);
			});
	}
}

