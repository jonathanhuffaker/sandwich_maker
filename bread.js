var Bread = (function(Sandwich) {

	var breadOpt = {	
		"white": "1.00",
		"wheat": "1.00",
		"pumpernickle": "1.50",
		"wrap": "1.00"
	}

Sandwich.getBreadOpt = function(userIput) {
		return breadOpt[userInput];
	}

	return Sandwich;


})(Sandwich);