// This covers recursive and non-recursive ways of finding a factorial

//prompt user to enter a number to calculate the factorial
var num = prompt(&quot;What number do you want to find the factorial of?&quot;)
// non-recursive
var factorial = function(n) {
    if(n == 0) {
        return 1
    } else {
        product = 1;
        for(i = 1; i &lt;= n; i++) {
            product *= i;
        }
        return product;
    }
}

console.log(factorial(num));

// recursive
var factorialRec = function(n) {
    if(n == 0) {
        return 1
    } else {
        return n * factorialRec(n - 1);
    }
}

console.log(factorialRec(num));
