{




class Animal{
    name: string;
    species: string;
    constructor(name: string, species: string){
        this.name = name,
        this.species = species
    }
    makeSound(){
        console.log("I am making sound");
    }
}
class Dog extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    soundBark(){
        console.log("Dog is barking");
    }
}
class Cat extends Animal{
    constructor(name: string, species: string){
        super(name, species);
    }
    soundMeaw(){
        console.log("Cat is meawing");
    }
}
const dog = new Dog("Dog vai", "dog");
const cat = new Cat("Cat vai", "cat");
// smart way instance----
const isDog = (animal: Animal): animal is Dog =>{
    return animal instanceof Dog;
}
const isCat = (animal: Animal): animal is Cat =>{
    return animal instanceof Cat;
}

const getAnimalSound = (animal: Animal) =>{
    if(isDog(animal)){
        animal.soundBark();
    }
    else if(isCat(animal)){
        animal.soundMeaw();
    }
    else{
        animal.makeSound();
    }
}
getAnimalSound(dog);














}