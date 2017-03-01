/*
The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?
*/

var num = 13195;
var divider = 1;
var flag = true;
var primes = [];
var run = true;

while(run){
	divider++;
	
	for (var i = 2; i <= divider; i++) {
		if(i % divider === 0 && divider !== i){
			flag = false;
		}else{
			flag = true;
		}
	}

	if(flag){
		if (num % divider === 0) {
			primes.push(divider);
			num = num / divider;
			divider--;
		}
	}

	if(divider > num){
		run = false;
	}
}

for(i = 0; i < primes.length; i++){
  console.log(primes[i]);
}