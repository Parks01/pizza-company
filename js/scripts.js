//BUSINESS LOGIC


// function Dog(dogName,age,size,gender,dogImage,shelter,isAvailable)
// {
// 	this.dogName = dogName;
// 	this.age = age;
// 	this.size = size;
// 	this.gender = gender;
// 	this.shelter = shelter;
// 	this.dogImage = dogImage;
// 	this.isAvailable = isAvailable;
// }
// var dogs = [];
//
// function fillDogsData()
// {
// 	var newDog1 = new Dog("Jax", "adult", "medium" , "male", "img/jax.jpg",
// 	"https://www.allpaws.com/adopt-a-dog/australian-cattle-dog-blue-heeler/6482237", true );
// 	dogs[0] = newDog1;
// 	var newDog2 = new Dog("Ellie", "adult", "small" , "female", "img/ellie.jpg", "https://www.allpaws.com/adopt-a-dog/shih-tzu/6644799" , true);
// 	dogs[1] = newDog2;
// 	var newDog3 = new Dog("Gunther", "adult", "small" , "male", "img/gunther.jpg",
// 	"https://www.allpaws.com/adopt-a-dog/maltese/6405800" , true);
// 	dogs[2] = newDog3;
// 	var newDog4 = new Dog("Orion", "puppy", "medium" , "male", "img/orion.jpg" , "https://www.allpaws.com/adopt-a-dog/terrier/6070901", true);
// 	dogs[3] = newDog4;
// //


//Business LOGIC
function Pizza(size,quantity) {
	this.toppings = [];
	this.size = size;
	this.basePrice = 5;
	this.quantity = quantity;
}

Pizza.prototype.calculateCost = function(){
	if (this.size === "small") {
		return this.basePrice * this.quantity + this.toppings.length;
	}else if (this.size === "medium") {
		return (this.basePrice + 2) * this.quantity + this.toppings.length;
	}else if (this.size === "large") {
		return (this.basePrice + 3) * this.quantity + this.toppings.length;
	}
}
// function pizzaData() {
// 	var theTopping = new Pizza("pepproni", "cheese", "artichokes", "sausage");
// 	var theSize = new Pizza("small", "meduim", "large");
// 	var thePrice = new Pizza(15,20,25,);
// }
//



//UI LOGIC

$(document).ready(function(){
	$("form#pizza").submit(function(event){
		event.preventDefault();
		 var quantity $();
		 var size = $();
		var pizza = new Pizza(size, quantity);
		$("input:checkbox[name=topping]:checked").each(function(){
			var toppingSelected = $(this).val();
			 pizza.toppings.push(toppingSelected);
			$('#output').append('<li>' + toppingSelected + '</li>'+ "<br>");

		});
	});
});



	// $('#transportation_survey').hide();

	//  $("#output h2").empty();
	// 	var userInput1 = $('input:radio[name=topping]:checked').val();
	// 	var newPizza = new Pizza(userInput1);
	// 	$("#output").append('<li>' + newPizza.toppings + '</li>');
	 //
	// 	var userInput2 = $('input:radio[name=choiceTwo]:checked').val();
	// 	 newPizza = new Pizza(userInput2);
	// 	$("#output").append('<li>' + newPizza.toppings + '</li>');
	 //
	// 	var userInput3 = $('input:radio[name=choiceThree]:checked').val();
	// 	 newPizza = new Pizza(userInput3);
	// 	$("#output").append('<li>' + newPizza.toppings + '</li>');
	 //
	// 	var userInput4 = $('input:radio[name=choiceFour]:checked').val();
	// 	newPizza = new Pizza(userInput4);
	// 	$("#output").append('<li>' + newPizza.toppings + '</li>');
