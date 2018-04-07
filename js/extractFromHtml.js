/*Nicole Riley 
CSE 154 Section AH 
Homework 3
This is the script for a page that takes in user input/text and displays it at a certain speed to 
the user. The user can modify the size of the text displayed, start the animation, stop the 
animation, and change the rate at which the words are appearing. The page starts with the stop
button disabled. If the user inputs any words that ends in ".", ",", "?", "!", ";", or ":" will
have its last character removed and be displayed twice as long to the user*/
//javascript file to get information out of our html page and put information back into div. 
(function() {
	"use strict";

	//Sets up event listeners for button pressing and changing selectors for the page. 
	window.onload = function() { 
		document.getElementById("submit") = submitInformation; 
	};

	function submitInformation() {
		var url = document.getElementById("url").value;

		document.getElementById("result").innerHTML = "blah"; 
	}



})();