//BUSINESS LOGIC

var custmerOrder;
var orderCalculation;


function topping(cheese,pepperoni,artichoke,sausage) {
  this.cheese = "firstOption";
  this.pepperoni = "secondOption";
  this.artichoke = "thirdOption";
  this.sausage = "fourthOption";
}

function orderForm(customer) {
this.customer = "topping";
}

orderForm.prototype.chooseTopping = function() {
  if(this.customer === "firstOption") {
    alert("Good Choice");
  }
}





//UI LOGIC
  $(document).ready(function() {
  $("form").submit(function(event){
  event.preventDefault();

    });
  });
