{

class Parant{
    name: string;
    age: number;
    address: string;
    constructor(name: string, age: number, address: string){
        this.name = name,
        this.age = age,
        this.address = address
    }
    getSleep(sleepHours: number){
        return `${this.name} will sleep for ${sleepHours} hours`
    }
}
class Student extends Parant{
    constructor(name: string, age: number, address: string){
        super(name, age, address);
    }
}
const student1 = new Student("murad", 20, "panchangarh");
// console.log(student1.age);
class Teacher extends Parant{
    role: string;
    constructor(name: string, age: number, address: string, role: string){
        super(name, age, address);
        this.role = role
    }
    classTime(time: number){
        return `${this.name} take class ${time} hours`;
    }
}
const teacher1 = new Teacher("murad teacher", 23, "thakurgaon", "proffesor");
console.log(teacher1.getSleep(2));








}