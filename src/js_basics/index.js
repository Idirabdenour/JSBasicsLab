
export const isNumberEven = (i) => {
    // i will be an integer.
    // Return true if it's even, and false if it isn't.

 var i; 
    if  (i%2 == 0 ) {
    	return true;
    }else {
    	return false;  
    }
};

export const getFileExtension = (str) => {
    // str will be a string, but it may not have a file extension.
    // Return the file extension (with no period) if it has one, otherwise false
    if(str.indexOf('.') < 0){
	return false;
    }
	var value = /(?:\.([^.]+))?$/.exec(str)[1];	
        return value; 
 };

export const longestString = (arr) => {
    // arr will be an array.
    // Return the longest string in the array
  var longest = "";
	for(var i in arr){
		if(typeof arr[i] == "string"
			&& arr[i].length > longest.length){
			longest = arr[i];
		}
	}
	return longest;
};

export const reverseString = (str) => {
    // str will be an string
    // Return a new string who's characters are in the opposite order to str's.
       return str.split("").reverse().join("");
};

export const isPalindrome = (str) => {
    // str will be an string
    // Return true if it is a palindrome and false otherwise.
    // It should be case insensitive and not consider space or punctuation.
        str = str.toLowerCase();
	var reversed = reverseString(str);
	return reversed == str;
};

export const nestedSum = (arr) => {
    // arr will be an array, containing integers, strings and/or arrays like itself
    // Return the sum all the numbers you find, anywhere in the nest of arrays.
  var sum = 0;
	for(var i in arr) {
		if(typeof arr[i] == "number") {
		   	sum+=arr[i];
		} else if(arr[i] instanceof Array){
	    	sum+=nestedSum(arr[i]);
		}
	}
	return sum;
};
