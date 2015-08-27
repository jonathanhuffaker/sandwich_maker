var Sandwich = (function(Sandwich) {

	var vegOpt = {	
		"lettuce": "0.00",
		"tomato": "0.00",
		"onion": "0.00",
		"cucumber": "0.00",
		"spinach": "0.00",
		"pickle": "0.25"
		
	}

	Sandwich.getVegOpt = function(userIput) {
		return vegOpt[userInput];
	}

	return Sandwich;

})(Sandwich);