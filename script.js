// Setting the time in the header
var time = moment().format("MMM Do YYYY, h:mm:ss a");
$("#currentDay").text(time);

// This feature updates the time in real time
var update = function() {
    document.getElementById("currentDay").innerHTML = moment().format("MMM Do YYYY, h:mm:ss a");
};
setInterval(update, 1000);

// Begin a function using jQuery syntax
$(document).ready(function() {



});