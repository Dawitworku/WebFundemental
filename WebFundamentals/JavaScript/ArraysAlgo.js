//Array Alog

var testArr = [6,3,5,1,2,4];

var sum = 0;
for(var i = 0; i < testArr.length; i++) {
 
  sum += testArr[i];
  console.log("Num " + testArr[i] + ", " , "Sum " + sum);
} 

for(var i = 0; i < testArr.length; i++) {
  
  testArr[i] = testArr[i] * i;
 
} // once it finishes its iteration, it will print the new values on line 15. 
  console.log(testArr);
  