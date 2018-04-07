(function() {

    'use strict';
var json;
    window.onload = function() {
      console.log("outside"+json);
    };


    function getColors(var url) {
        fetch("https://apicloud-colortag.p.mashape.com/tag-url.json?sort=weight&url="+url).then(function(response){
          json = response;
          console.log(json);
        });
    }


})();
