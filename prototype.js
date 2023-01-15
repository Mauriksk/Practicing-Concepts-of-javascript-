function Person(fname, Lname) {
    this.firstName = fname
    this.lastName = Lname
}

const person1 = new Person('Mauricio', 'Torres')
const person2 = new Person('Alejandra','Perdomo')

//* If i do this just the person1 will get this metod 
// person1.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }
//* But if we call prototype we can add this metod to all persons
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

console.log(person2.getFullName());