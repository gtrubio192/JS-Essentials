function Cat(name, color){
	/*
	Constructor: any code in here is run when the object is created
	*/
	Cat.cats++;

	/*
	Private variables and functions - may only be accessed by private or privileged functions.

	Note that 'name' and 'color', passed into the Class, are already private variables.
	*/
	var age  = 0;
	var legs = 4;
	function growOlder(){
		age++;
	}

	/*
	Public variables - may be accessed publicly or privately
	*/
	this.weight = 1;
	this.length = 5;

	/*
	Privileged functions - may be accessed publicly or privately
	May access Private variables.

	Can NOT be changed, only replaced with public versions
	*/
	this.age = function(){
		if(age==0) this.length+=20;

		growOlder();
		this.weight++;
	}
}

/*
Prototyped Functions - may be accessed publicly
*/
Cat.prototype = {
	talk:     function(){ alert('Meow!'); },
	callOver: function(){ alert(this.name+' ignores you'); },
	pet:      function(){ alert('Pet!'); }
}

/*
Prototyped Variables - may be accessed publicly.
May not be overridden, only replaced with a public version
*/
Cat.prototype.species = 'Cat';

/*
Static variables and functions - may be accessed publicly
*/
Cat.cats = 0;
