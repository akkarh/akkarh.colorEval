let web = document.getElementById("url").value;
web = "https://www.apple.com/";

var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

let request = "http://api.screenshotlayer.com/api/capture?access_key=ddccf18819be3976a799d69c564d1401&url=" + web + "&format=JPG";

function getScreenShot() {
	fetch(proxyUrl + request)
		.then(function(response) {
			console.log(response.type);
			return response;
		});
}

// function getToken() {
// 
// 
// }
