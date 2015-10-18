// It is important to note that we can only set prototypes on a function
// one time using this method. After that, you must use the previous method
//  Object.prototype.method = function(){ ... }
// (otherwise it will delete all of your previous prototypes)
function Cat(name){
	this.name = name;
}
Cat.prototype = {
	species:  'Cat',
	talk:     function(){ alert('Meow!'); },
	callOver: function(){ alert(this.name+' ignores you'); },
	pet:      function(){ alert('Pet!'); }
}

// ORRR...
// This way allows you to add as many more prototypes as needed w/out 
// overriding original Cat function.
function Cat(name){
	this.name = name;
}
Cat.prototype.species  = 'Cat';
Cat.prototype.talk     = function(){ alert('Meow!'); };
Cat.prototype.callOver = function(){ alert(this.name+' ignores you'); };
Cat.prototype.pet      = function(){ alert('Purr!'); };

// Invoke the kitties!
var felix = new Cat('Felix');
var sam   = new Cat('Sam');
var patty = new Cat('Patty');

felix.pet();          // alerts 'Purr!'
sam.callOver();       // alerts 'Sam ignores you'.  Just like a cat!
alert(patty.species); // alerts 'cat'
