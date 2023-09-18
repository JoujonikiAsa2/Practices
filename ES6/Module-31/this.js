class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    sleep(){
        console.log(`sleeping now ${this.name}`)
    }
}

const kodom = new Person('Kodom Ali', 21)
console.log(kodom)
const badam = new Person('Kacha Badam', 67)
console.log(badam)
kodom.sleep()
badam.sleep()