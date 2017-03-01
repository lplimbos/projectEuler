/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

var number = 0;
var flag = true;

while(flag){
	number++;
	for (var i = 2; i <= 20; i++){
	    if(i!=1 || i!=2){
    	    if(number % i === 0){
    		    flag = false;
    	    }else{
    		    flag = true;
    		    break;
    	    }
	    }
	}
}

console.log(number);