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

    // listen for savebtn clicks

    // show notification that the item was saved in localStg
    // More code for this item styling

    // Function to update the current hour and change the colors of the time blocks
    function colorUpdater() {
        // create a variable that holds the current time value

        // loop over the timeblocks

        // conditional statement to check the hours and apply correct time
    }
    // call the function
    colorUpdater();

});

// another way to keep time updated
var interval = setInterval(colorUpdater, 15000);

// need the saved data from local storage
$("").val(localStorage.getItem(""));



// function colorUpdater() {
//     // Now variable for the conditional statement
//     var now = new Date().getHours();

//     // Using a conditional to update the color
//     if (now > 9) {
//         $("#9AM").addClass("past");
//     }   else if (now >= 9 && now < 10) {
//         $("#9AM").addClass("present");
//     } else {
//         $("#9AM").addClass("future");
//     }
// };

// window.onload = function() {
//     colorUpdater();
// };
