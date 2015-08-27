$(document).ready(function(){

$("#sandButton").click(function(){
	console.log(alert("your button works"));
	
if($("#meat:checked").val() === "ham") {
	console.log("it's pork time");
	$("#custOrder").html("Ham");

} else {
	alert("no pork for you");
}

// var $selectedMeat = $("#meat:checked").forEach(value);
// console.log($selectedMeat);

// var $testVar = $("input:checked").forEach("#meat");
// console.log($testVar);

	});

});

