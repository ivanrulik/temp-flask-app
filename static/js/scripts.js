function myFunc(event) {
    event.preventDefault();  // Prevent the default form submission
    $.ajax({
        type: 'POST',
        url: '/my_func',
        success: function(response) {
            // Handle the success response from the server
            console.log(response);
            alert("Button Clicked")
        },
        error: function(xhr, status, error) {
            // Handle the error response
            console.log('Error:', error);
            alert("error")
        }
    });
}