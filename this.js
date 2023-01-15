//* New binding 
function Person(name){
    this.name = name
}

const p1 = new Person('Vishwas')
const p2 = new Person('Batman')

console.log(p1.name, p2.name);
person.sayMyName()

//* Explicit binding 
function saymyName(){
    console.log(`My name is ${this.name}`);
}

saymyName.call(person)

//* Implicit binding 
const person = {
    name : "Mauricio",
    sayMyName: function(){
        console.log(`My name is ${this.name}`);
    }
}

//* Default binding, if javascript don't find any of the other roules him find in the global scope, in this case how name
//* not exist in the global scoope, the result of the function is My name is undefined.

saymyName()

