

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



//UI LOGIC

$(document).ready(function(){
	$("form#pizza").submit(function(event){
		event.preventDefault();
		debugger;
		 var quantity = $("#quantity").val();
		 var size = $("input:radio[name=size]:checked").val();
			var pizza = new Pizza(size, quantity);
		$("input:checkbox[name=topping]:checked").each(function(){
			var toppingSelected = $(this).val();
			 pizza.toppings.push(toppingSelected);
		});
		var cost = pizza.calculateCost();

		$('#toppingOutput').append(pizza.toppings.toString());
		$('#costOutput').append(cost);
		$('#sizeOutput').append(size);
		$('#quantityOutput').append(quantity);

	});
});
