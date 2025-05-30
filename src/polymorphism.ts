{
    
class Person{
    sleep(){
        console.log("Man sleeping 8 hours per day");
    }
}
class Student extends Person{
    sleep(){
        console.log("Student sleeping 7 hour per day");
    }
}
class Developer extends Person{
    sleep(){
        console.log("Developer sleep 5 hour per day");
    }
}

const getSleep = (params: Person) =>{
    return params.sleep();
}

// const person = new Person();
// const student = new Student();
// const developer = new Developer();

// getSleep(person);
// getSleep(student);
// getSleep(developer);

class Shape{
    getArea(): number{
        return 0;
    }
}
class Circle extends Shape{
    radius: number;
    constructor(radius: number){
        super();
        this.radius = radius;
    }
    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends  Shape{
    height: number;
    width: number;
    constructor(height: number, width: number){
        super();
        this.height = height,
        this.width = width
    }
    getArea(): number {
        return this.height * this.width;
    }
}

const getShapeArea = (params: Shape) =>{
    console.log(params.getArea());
}
const shape = new Shape();
const circle = new Circle(13);
const rectangle = new Rectangle(2, 4);
getShapeArea(shape);
getShapeArea(circle);
getShapeArea(rectangle);





}