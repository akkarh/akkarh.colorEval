(function() {
    'use strict';
    var json = "";
    window.onload = function() {
      getColors("https://imgur.com/OxCuqhw");
      console.log("outside"+json);
    };

    // function getColors(url) {
    //     var headers = new Headers({
    //       "Access-Control-Allow-Origin" : "*",
    //       "Vary" : "Origin"
    //
    //     });
    //
    //     var myInit = {
    //       method: 'GET',
    //       headers: headers,
    //
    //       cache : 'default'
    //     };
    //
    //     // headers.append("X-Mashape-Key", "FlPgDvXBKZmshyJu0ebpPBtqu32cp1KBAl6jsnK4JszNTcgdAy");
    //     // headers.append("X-Mashape-Host", "apicloud-colortag.p.mashape.com");
    //     fetch("http://mkweb.bcgsc.ca/color-summarizer/?url="+url+"&precision=vhigh&json=1", myInit).then(function(response){
    //       json = response;
    //       console.log(json);
    //     });
    // }

    function getColors(url){
      var proxyUrl = 'https://mighty-beach-27822.herokuapp.com/',
        targetUrl = 'http://mkweb.bcgsc.ca/color-summarizer/?url='+url+'&precision=vhigh&json=1'
        fetch(proxyUrl + targetUrl)
          .then(handleResponse)
          .then(function(json){
            console.log(json);

          // .catch(e => {
          //   console.log(e);
          //   return e;
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


})();
