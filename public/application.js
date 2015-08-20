$(document).ready(function(){
  landingPage();
  // addButton();
  submitForm();
})


var landingPage = function(){
  $.ajax({
    url: "http://localhost:3000/notes"
  }).done(function(response){

    for(var i=0; i<response.length; i++){
      var element = "<li>" + response[i].body + "</li>"
      $('#list').append(element)
    }
    console.log("successfully loaded notes")
  }).fail(function(){})
}


// how to render a partial?
// hitting the add button triggers listener
// listener loads the partial
// partial is an html, serialize it
// append the serialized data into html view
var addButton = function(){
  $("#add_button").on("click", function(event){
    $(this).hide()
    $("#add_form").load("_form.html")
  })
  submitForm();
}


var submitForm = function(){
  $("#note_form").on("submit", function(event){
    (event).preventDefault();
    // $("#add_button").show();
    var data = $(this).serialize();

    $.ajax({
      url: "http://localhost:3000/notes",
      method: "POST",
      dataType: 'JSON',
      data: data

    }).done(function(response){
      console.log("added note?!")
      $("#list").append("<li>" + response.body + "</li>")

    }).fail(function(error){})
  })
}



