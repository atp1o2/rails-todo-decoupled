$(document).ready(function(){
  landingPage();
})


var landingPage = function(){

  $.ajax({
    url: "http://localhost:3000/notes"
  }).done(function(response){
    console.log("success")
    element = "<li>" + response[0].body + "</li>"

    $('#list').append(element)

  })
}
