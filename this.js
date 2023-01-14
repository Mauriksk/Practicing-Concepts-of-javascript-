const person = {
    name : "Mauricio",
    sayMyName: function(){
        console.log(`My name is ${this.name}`);
    }
}
//* Implicit binding 
person.sayMyName()