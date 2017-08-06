"use strict";


// Declaring Variables
var topVal = 0;
var alertBoxoffsetHeight = 0;
var alertBoxLastChild = 0;
var alertBoxoffsetTop = 20;

function makeAlert (elem) {


	  // Creating elements and getting Attr's of user Input
	  var alertBox = document.createElement("div");
	  var close =document.createElement("i");
	  var animationStart = elem.getAttribute('data-animate-start');
	  var animationEnd = elem.getAttribute('data-animate-end');
	  var textColor = elem.getAttribute('data-text-color');
	  var bgColor = elem.getAttribute('data-bg-color');  
	  var placement = elem.getAttribute('data-placement');  

	  var alertContainer =  document.getElementById('alertBtns');


	  var content = document.createTextNode(elem.getAttribute('data-content')); 
	 
	 
	  // Adding animations, attributes & appending items
	  alertBox.className =" wf-alert-box animated "+ animationStart;
	  alertBox.appendChild(content); //add the text node to the newly created div. 

	  alertContainer.appendChild(alertBox);
	  alertContainer.className = placement;
	  alertBox.style.color = textColor;
	  alertBox.style.backgroundColor = bgColor;
	  // Default Call

	  removeItem(alertBox,3500);

	  // Force to close
	  var alertBoxes = document.querySelectorAll('.wf-alert-box i');

	  for (var i = 0; i < alertBoxes.length; i++) {
		  alertBoxes[i].addEventListener("click", function() {
		    removeItem(this.parentElement,0)
		  });
		}

	  function removeItem(item, time){

	 	 // Adding Animation END
		  setTimeout(function(){
		  	item.classList.remove(animationStart);
		  	item.className = "wf-alert-box animated " + animationEnd ;
		  	item.className = "wf-alert-box animated " + animationEnd +" transitionTrick" ;
		  }, time);

		  // Removing element from DOM 
		  setTimeout(function(){
		    document.getElementById('alertBtns').removeChild(alertBox);
		  }, time+1500);

	  }


}


