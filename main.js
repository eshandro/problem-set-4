// Problem Set 4

// Problem 1
var addNumbers = function(str) {
	var allNumbers = [0,1,2,3,4,5,6,7,8,9];
	var numbersFromString = [];
	var newNumber = '';
	
	for(var i=0; i <= str.length; i++) {
		if(str.charAt(i) in allNumbers) {
			newNumber += str.charAt(i);				
		}
		else {
			numbersFromString.push(+newNumber);
			newNumber = '';
		}
	}
	var answer =  _.reduce(numbersFromString, function(memo,num) { 
		return memo + num; }, 0);
	return answer;
}

// Problem 2
var longestWord = function(str) {
	var strList = str.split(' ');
	var answer = [' '];

	for (var i=0; i < strList.length; i++) {
		if (strList[i].length > answer[0].length) {
			answer.pop();
			answer.push(strList[i]);
		};
	};
	return answer[0];
};

// Problem 3 - Bonus
var averageStringNumbers = function(str) {
	var allNumbers = [0,1,2,3,4,5,6,7,8,9];
	var numbersFromString = [];
	var specialChar = [' ', '!', '-', '.', '?', ';', ':', ',']
	var specialCharCounter = 0;

	for (var i=0; i <= str.length; i++) {
/*		if(str.charAt(i) === ' ') {
			specialCharCounter++;
			console.log(specialCharCounter + i + ' space');
		}*/
		if(str.charAt(i) in specialChar !== -1) {
			specialCharCounter++
			console.log(specialCharCounter);
			console.log(str.charAt(i));
		}
	}
	
	for(var i=0; i <= str.length; i++) {
		if(str.charAt(i) in allNumbers) {
			numbersFromString.push(+str.charAt(i));	
		}
	}
	
	var answer = 0;
	for(var i=0; i < numbersFromString.length; i++) {
		answer += numbersFromString[i];
	}

	console.log(specialCharCounter);
	return Math.round(answer/(str.length - numbersFromString.length - specialCharCounter));	
}