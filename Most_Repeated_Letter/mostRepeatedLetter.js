 // have the function LetterCount(str) take the str parameter being passed and return the first word
 // with the greatest number of repeated letters.
 // For example: "Today, is the greatest day ever!" should return 'greatest' because it has 2 e's (and 2 t's)
 // and it comes before ever which also has 2 e's.
 // If there are no words with repeating letters return -1. Words will be separated by spaces.

 /* NOT FINISHED */

function LetterCount(str) {

  var str = str.split(" ");
  var longest = 0;
  var letterCount, prevLetterCount = 0;

  for(var i = 0; i <= str.length - 1; i++) {
    for(var j = i; j <= str[i].length - 1; j++) {
    	if(str[i].charAt(i) == str[i].charAt(j) ) {
          letterCount++;
        }
    	if(letterCount > prevLetterCount){
       longest = letterCount;
      }
    }

  }
  return str;

}
