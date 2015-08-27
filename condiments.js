var Sandwich = (function(Sandwich) {

	var condOpt = {	
		"oil": "0.00",
		"vinegar": "0.00",
		"mustard": "0.00",
		"mayonaise": "0.00",
		"saltAndPepper": "0.00",
		
	}

Sandwich.getVegOpt = function(userIput) {
		return vegOpt[userInput];
	}

	return Sandwich;


})(Sandwich);