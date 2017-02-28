var num = 13195;
var divider = 1;
var flag = true;
var primes = [];

while(divider <= num){
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
}

for(i = 0; i < primes.length; i++){
  console.log(primes[i]);
}