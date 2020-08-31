//Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive).
function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum += i;
    }
    return sum;
}
var x = sigma(3);
console.log(x);

//Factorial
function factorial(num) {

    var sum = 1;
    for (var i = 1; i <= num; i++) {
        sum *= i
    }
    return sum;
}
var x = factorial(5);
console.log(x);

//Fibonacci
function fibonacci(num) { // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34....
    var previous_first = 0;       // First  two fibonacci numbers are 0 & 1 and 
    var previous_second = 1;
    var next_number = 1;    //each next number is the sum of the previous two.

    for (var i = 2; i <= num; i++) {
        next_number = previous_first + previous_second;
        previous_first = previous_second;
        previous_second = next_number;
    }
    return next_number;
}
var x = fibonacci(10);
console.log(x);
//Array: Second-to-Last: Return the second-to-last element of an array. Given [42, true, 4, "Liam", 7], return "Liam".  If array is too short, return null.
function returnSecondToLast(arr) {

    if (arr.length < 2) {
        return null;
    }
    else {
        return arr[arr.length - 2];
    }
}
var x = returnSecondToLast([42, true, 4, "Liam", 7]);
console.log(x);
//Array: Nth-to-Last: Return the element that is N-from-array's-end.  Given ([5,2,3,6,4,9,7],3), return 4.  If the array is too short, return null.
function nth_to_last(arr, n) {

    if (arr.length < 2) {
        return null;
    }
    else {
        return arr.length - n;
    }
}
var x = nth_to_last([5, 2, 3, 6, 4, 9, 7], 3);
console.log(x);
//Array: Second-Largest: Return the second-largest element of an array. Given [42,1,4,3.14,7], return 7.  If the array is too short, return null.

function secondLargest(arr) {

    var max = arr[0];
    var secondLargest = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr.length < 2) {
            return null;
        }
        else if (arr[i] > max) {
            secondLargest = max; //swapping and giving old max to the new variable before we 
            max = arr[i];           //assign max
        }
        else if ((arr[i] > secondLargest) && (arr[i] < max)) {// any numb greater than 
            secondLargest = arr[i];                          //array index at this point,
        }                         // is the second largest. It should also be less than max
    }
    return secondLargest;
}

var x = secondLargest([42, 1, 4, 3.14, 7]);
console.log(x);
//Double Trouble: Create a function that changes a given array to list each existing element twice, retaining original order.  Convert [4, "Ulysses", 42, false] to [4,4, "Ulysses", "Ulysses", 42, 42, false, false].
var convert = [4, 'ulysses', 42, false];

convert.splice(1, 0, 4);
convert.splice(3, 0, 'ulysses');
convert.splice(5, 0, 42);
convert.splice(7, 0, 'false');

console.log(convert);
