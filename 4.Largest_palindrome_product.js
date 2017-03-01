/*
A palindromic number reads the same both ways. 
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers.
*/

var palindrome = 0;
var goodPalindrome = 0;
var palindromeText = "";
var palindromeTextInverted = "";

var x = 0;
var y = 1000;
var count = 0;
var run = true;
var p = 0;

while(run){
	y--;
	x = 1000;
	count++;
	while(x > 100){
		x--;
		palindrome = x * y;
		palindromeText = palindrome.toString();

		palindromeTextInverted = "";
		
		for (var i = palindromeText.length; i >= 0; i--) {
			palindromeTextInverted = palindromeTextInverted + palindromeText.substring(i-1,i);
		}
        
		if (palindromeText === palindromeTextInverted){
            if(goodPalindrome < palindrome){
                goodPalindrome = palindrome;
                count = 0;
            }
        }
	}
	if(count > 5){
	    run = false;
	}
}

console.log(goodPalindrome);