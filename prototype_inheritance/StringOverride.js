// Prototypes can also be used to extend JavaScript's built-in objects. 
// We can implement a String.prototype.reverse function, for instance, that 
// will return the reverse of any string we create:

String.prototype.reverse = function(){
	var out = '';
	for(var i=this.length-1; i>=0; i--){
		out+=this.substr(i, 1);
	}
	return out;
}
alert('asdf'.reverse());
