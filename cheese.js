var Sandwich = (function(Sandwich) {

	var cheeseOpt = {	
		"cheddar": "1.00",
		"swiss": "1.00",
		"american": "1.00",
		"provolone": "1.00",
		"pepperJack": "1.00"
		
	}

	Sandwich.getCheeseOpt = function(userIput) {
		return cheeseOpt[userInput];
	}

	return Sandwich;


})(Sandwich);