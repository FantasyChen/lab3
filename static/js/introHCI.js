'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript has taken control");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");
	});
	$("a.thumbnail").click(projectClick);

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function projectClick(e){
	// prevent the page from reloading
	e.preventDefault();
	$(this).css("background-color", "#7fff00")
	var containProject = $(this).closest(".project");
	var description = $(containProject).find(".project-description");
	if(description.length == 0){
		containProject.append("<div class ='project-description'><p>\
		Description of the project. </p></div>");
	}else{
		$(".project-description p").fadeToggle()
	// 	description.html("<p>Stop clicking on me! You just did it at "
	// + (new Date()) + "</p>");
	}

}
