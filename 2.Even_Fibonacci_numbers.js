var sum = 0;
var i = 1;
var j = 0;
var k = 0;
var m = 0;

while(j < 4000000){
  k = j;
  j = j + i;
  i = k;
  if(j % 2 === 0){
    sum += j;
  }
}

console.log(sum);

//This is the messy way to solve it using no arrays, i will add the other
//way to do it in a separate file