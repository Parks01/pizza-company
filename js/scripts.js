//BUSINESS LOGIC

var custmerOrder = 0;
var orderCalculation = 0;


function toppings(pepproni,cheese,artichoke,sausage) {

}

//(cheese,pepperoni,artichoke,sausage) {
  //this.cheese = "firstOption";
  //this.pepperoni = "secondOption";
  //this.artichoke = "thirdOption";
  //this.sausage = "fourthOption";
//}


//function orderForm(customer) {
//this.customer = "topping";
//}

//orderForm.prototype.chooseTopping = function() {
  //if(this.customer === this.cheese) {

  //}
//}





//UI LOGIC
  $(document).ready(function() {
  $("form").submit(function(event){
  event.preventDefault();
  var customerOrder = $("orderForm").val();
  alert("CORRECT");
    });
  });
