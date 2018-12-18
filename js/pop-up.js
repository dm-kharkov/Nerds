// POP-UP contact-us start
var contact = document.querySelector(".contact-us-btn");
var popUpContact = document.querySelector(".modal-contact-us-overlay");
var	closeContact = document.querySelector(".modal-write-us-close");

contact.addEventListener("click", function(event) 
	{ 
		event.preventDefault();
		popUpContact.classList.add("modal-overlay-show");
		console.log("Contact-form is open");
		login.focus();
	});

closeContact.addEventListener("click", function (event) 
	{
		event.preventDefault();
		popUpContact.classList.remove("modal-overlay-show");
		console.log("Contact-form is closed");
	});
// POP-UP contact-us end

// Input & Submit form
var form = document.querySelector("form");
var	login = document.querySelector("[name=user-name]");
var email = document.querySelector("[name=user-email]");
var message = document.querySelector("[name=user-text");
		
form.addEventListener("submit", function()
	{	
		if (!login.value || !email.value || !message.value)
			{
				event.preventDefault();
				console.log("Fill in all the fields");
			}
	});

// POP-UP google-map start
var mapMarker = document.querySelector(".map-marker");
var popUpMap = document.querySelector(".modal-user-map-overlay");
var closeMap = document.querySelector(".modal-user-map-close");

mapMarker.addEventListener("click", function(event)
	{
		event.preventDefault();
		popUpMap.classList.add("modal-overlay-show");
		console.log("Google-map is open");
	});

closeMap.addEventListener("click", function(event)
	{
		event.preventDefault();
		popUpMap.classList.remove("modal-overlay-show");
		console.log("Google-map is closed");
	});
// POP-UP google-map end

