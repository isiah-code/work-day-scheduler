$(document).ready(function() {

    $(".saveBtn").on("click", function() {
    //grab my values
    
    var value = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id")
    
    //save them to local storage
    localStorage.setItem(time,value)
    
    
    
    })
    
    // write a function to update the hours in the time blocks
    // get current time, use moment
    
    // loop over our time blocks hint: (look up .each)
    
    // check to see if we have moved past the current time
    // if
    // addClass (to the row)  addClass("past")
    
    // check to see if it is the current time
    // else if
    // removeClass
    // addClass
    
    // check to see if time is future
    // else
    // removeClass
    // removeClass
    // addClass 
    
    // load any saved data from localStorage
    
    $("#hour-9 .task").val(localStorage.getItem("hour-9"));



    
    // display current day on the top of the page using moment
