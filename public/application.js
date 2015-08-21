$(document).ready(function(){
  // landingPage();
  listTemplate();
  addButton();
  submitForm();
})

// loads all the notes
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
}


// submits comment and hides form
var submitForm = function(){
  $("#add_form").on("submit", function(event){
    (event).preventDefault();
    $("#add_button").show();
    var data = $("#note_form").serialize();

    $.ajax({
      url: "http://localhost:3000/notes",
      method: "POST",
      dataType: 'JSON',
      data: data

    }).done(function(response){
      $("#list").append("<li>" + response.body + "</li>")

    }).fail(function(error){})
    $("#note_form").remove()
  })
}



// Handlebars
var listTemplate = function(){
  $.ajax({
    url: "http://localhost:3000/notes"
  }).done(function(response){
    var source = $("#list_template").html();
    var template = Handlebars.compile(source)
    $("#list").append(template(response))
  })
}













