// Prevent form submission on enter
$(document).keypress(function(event){
    if (event.which == '13') {
        event.preventDefault();
    }
});

// Functionalities
$(document).ready(function() {
    // New task creation
    $('#addTask').click(function() {
        // Adding the new task to the list
        $('#tasks').html($('#tasks').html() 
                         + '<li class="list-group-item align-items-center d-flex p-1">'
                         +   '<span class="ms-1 p-1 w-100">' +  $('#newTask').val() + '</span>'
                         +   '<div class="btn-group my-1" role="group">'
                         +      '<button type="button" class="btn btn-info"'
                         +      'onclick="$(this).parent().parent().insertBefore($(this).parent().parent().prev())">Up</button>'

                         +      '<button type="button" class="btn btn-warning"'
                         +      'onclick="$(this).parent().parent().insertAfter($(this).parent().parent().next())">Down</button>'

                         +      '<button type="button" class="btn btn-danger"'
                         +      'onclick="$(this).parent().parent().remove()">Delete</button>'
                         +  '</div>' 
                         + '</li>');
        
        // Clear input
        $('#newTask').val('');
    });
});