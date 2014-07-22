// Problem Set 4

// Problem 1
var addNumbers = function(str) {
	var allNumbers = [0,1,2,3,4,5,6,7,8,9];
	// var strList = str.split('');
	var numbersFromString = [];

	for(var i=0; i < str.length; i++) {
		if(str.charAt(i) in allNumbers) {
			+numbersFromString.push(+str.charAt(i));
		}
		else {
			numbersFromString.push('-');
		}
	}

	console.log(numbersFromString);
}
