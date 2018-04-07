fetch('http://api.screenshotlayer.com/api/capture?access_key=ddccf18819be3976a799d69c564d1401&url=document.getElementById('text').value;&format=JPG')
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(myJson);
	});