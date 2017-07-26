//BUSINESS LOGIC


function Dog(dogName,age,size,gender,dogImage,shelter,isAvailable)
{
	this.dogName = dogName;
	this.age = age;
	this.size = size;
	this.gender = gender;
	this.shelter = shelter;
	this.dogImage = dogImage;
	this.isAvailable = isAvailable;
}
var dogs = [];

function fillDogsData()
{
	var newDog1 = new Dog("Jax", "adult", "medium" , "male", "img/jax.jpg",
	"https://www.allpaws.com/adopt-a-dog/australian-cattle-dog-blue-heeler/6482237", true );
	dogs[0] = newDog1;
	var newDog2 = new Dog("Ellie", "adult", "small" , "female", "img/ellie.jpg", "https://www.allpaws.com/adopt-a-dog/shih-tzu/6644799" , true);
	dogs[1] = newDog2;
	var newDog3 = new Dog("Gunther", "adult", "small" , "male", "img/gunther.jpg",
	"https://www.allpaws.com/adopt-a-dog/maltese/6405800" , true);
	dogs[2] = newDog3;
	var newDog4 = new Dog("Orion", "puppy", "medium" , "male", "img/orion.jpg" , "https://www.allpaws.com/adopt-a-dog/terrier/6070901", true);
	dogs[3] = newDog4;
//





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
