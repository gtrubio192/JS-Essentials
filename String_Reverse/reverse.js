// This is an exercise outlining the various ways to reverse a string

// Decrementing for-loop with concatenation
// The original way that I achieved the intended result was to use a decrementing for-loop that appended
// each character of the input to a new string in reverse order.
// I was able to access the parsed strings individual characters similar to the
// way you would reference an array’s items.
function reverse(str) {
  var o = '';

  for(var i = str.length -1; i >= 0; i--) {
    o += str[i];
  }
  return o;
}

//  In-built functions
function reverseWithFunctions(str) {
  return str.split('').reverse().join('');
}
