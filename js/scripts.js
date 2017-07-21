//BUSINESS LOGIC
var goodbye = "goodbye";

topping function("cheese","pepperoni", "artichoke",) {
  this.cheese = "firstOption";
  this.pepperoni = "secondOption";
  this.artichoke = "thirdOption";
}








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
