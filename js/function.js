var mascots = new Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');

// Gets current year.
var year = new Date().getFullYear();

// Controls buttons.
$(document).ready(function() {
    if (mascots.length > 30) {
        $('#elite-button').css('display', 'none');
    }
});