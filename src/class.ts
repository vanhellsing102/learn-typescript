{



class Animal{
    name: string;
    species: string;
    sound: string;
    constructor(name: string, species: string, sound: string){
        this.name = name,
        this.species = species,
        this.sound = sound
    }
    makeSound(){
        return `The ${this.name} says ${this.sound}`;
    }
}
const dog = new Animal("Jarman Shepard", "Dog", "Ghew Ghew");
const cat = new Animal("Pershian", "Cat", "Meaw Meaw");
console.log(dog.makeSound())






}