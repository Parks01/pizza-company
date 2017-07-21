//BUSINESS LOGIC
var goodbye = "goodbye";












//UI LOGIC
  $(document).ready(function() {
  $("form").submit(function(evetn){
  event.preventDefault();
  var userInput = $("#userInput1").val();
  if(userInput === goodbye) {
    $("#output").append(goodbye);
      }
    else {
        $("#output").append("wrong");

  }

    });
  });
