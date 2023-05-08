$(document).ready(function () {
    /*
    Using jQuery to demonstrate the use of getElementById
    and onClick event to display an alert  
    */
    $("#foo").click(function () {
        alert("foo");
    });

    /*
    Using jQuery to demonstrate the use of getElementsByTagName
    and onmouseover/onmouseout events to change the background color
    */
    $("p").mouseover(function () {
        $(this).css("background-color", "red");
    });

    $("p").mouseout(function () {
        $(this).css("background-color", "blue");
    });

    /*
    Using jQuery to demonstrate the use of onfocus/onblur/onkeydown/onkeyup 
    events to update a div's innerHTML
    */
    $("#bar").focus(function () {
        $("#baz").html("focus");
    });

    $("#bar").blur(function () {
        $("#baz").html("blur");
    });

    $("#bar").keydown(function () {
        $("#baz").html("keydown");
    });

    $("#bar").keyup(function () {
        $("#baz").html("keyup");
    });

    /*
    Using jQuery to demonstrate the use of onchange event to update a div's innerHTML
    */
    $("#caz").change(function () {
        $("#qux").html("change");
    });
});
