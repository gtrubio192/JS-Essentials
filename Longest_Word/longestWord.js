function LongestWord(sen) {
  var words = sen.split(" ");
  var longest = 0;
  var lengthiest = '';
  console.log(words);
  for(var i = 0; i <= words.length - 1; i++) {
    if(words[i].length > longest) {
    	lengthiest = words[i];
      	longest = words[i].length;
    }
  }
  return lengthiest;

}
var phrase = prompt("Enter a sentence and I'll tell you the longest word in it!");
LongestWord(phrase);
