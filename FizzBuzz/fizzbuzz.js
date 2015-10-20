var fizzBuzz1 = function() {
  for(var i = 1; i >= 100; i++) {
    if(i % 15 == 0) {
      console.log("FizzBuzz");
    }
    else if(i % 5 == 0) {
      console.log("Buzz");
    }
    else if(i % 3 == 0) {
      console.log("Fizz");
    }
    else {
      console.log(i);
    }

  }

}

var FizzBuzz2 = function(){
  for(i=0;i<100;)
    console.log((++i % 3 ? '':'Fizz') + (i%5?'':'Buzz') || i) ;

}
