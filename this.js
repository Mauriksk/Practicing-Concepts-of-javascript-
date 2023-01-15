const person = {
    name : "Mauricio",
    sayMyName: function(){
        console.log(`My name is ${this.name}`);
    }
}
//* Implicit binding 
person.sayMyName()

//* Explicit binding 
function saymyName(){
    console.log(`My name is ${this.name}`);
}

saymyName.call(person)

//* New binding 
function Person(name){
    this.name = name
}

const p1 = new Person('Vishwas')
const p2 = new Person('Batman')

console.log(p1.name, p2.name);
//* Default binding 