var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

let imageURL = "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2008/04/17/dolphin11a.jpg";
let request = "https://api.imgur.com/3/" + imageURL; 

var headers = new Headers({
	"Authorization":"0d7270ef3e5e7e3",
	"Authorization":"c8178a2a56ec55c293d7cc917d0b9869f8b85f25"
});

var myInit = {method: 'POST', headers: headers, cache: 'default'};


function postImage() {
	fetch(proxyUrl + request, myInit)
		.then(function(response) {
			console.log(response.json);
			return response.json;
		});
}