// Problem Set 4

// Problem 1
var addNumbers = function(str) {
	var allNumbers = [0,1,2,3,4,5,6,7,8,9];
	var numbersFromString = [];
	var newNumber = '';
	
	for(var i=0; i <= str.length; i++) {
		if(str.charAt(i) in allNumbers) {
			newNumber += str.charAt(i);				
			console.log(newNumber);
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
	console.log(answer[0].length);
	for (var i=0; i < strList.length; i++) {
		if (strList[i].length > answer[0].length) {
			answer.pop();
			answer.push(strList[i]);
		};
	};
	return answer[0];
};

