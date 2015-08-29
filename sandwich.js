$(document).ready(function(){
//below works
	$("#sandButton").click(function(){
		// console.log(alert("your button works"));

		$('input[type=checkbox]').each(function () {
           var sandIngred;
           var strSandIng =[];
			// for (var i=0; i<sandIngred.length; i++) {

          		if (this.checked) {
              	sandIngred= [($(this).val())];
              	console.log(sandIngred);

              	
              	
              	
              	for (var i =0; i<sandIngred.length; i++) {
              		strSandIng.push('<span' + sandIngred[i] + '</span>');
              	}
              	


//this works test below
               // console.log($(this).val()); 
           		}
	
		});	
	});
});









	// for(var i=0; i<meatArray.length; i++) {
	//  if($("#meat:checked").val() === meatArray[i]) {
	//  	console.log(meatArray[i]);

	 	// $("#custOrder").html()f
// 	 }
// }
	
		// if($("#meat:checked").val() === "ham") {
		// console.log("it's pork time");
		// $("#custOrder").html("Ham");
		// }

		// if($("#meat:checked").val() === "turkey") {
		// console.log("it's turkey time");
		// $("#custOrder").html("Turkey");
		// }
	//  else {
	// alert("no pork for you");
	// }
// });
//