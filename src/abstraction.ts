{
// use interface in abstraction----------
interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
}
class Car implements Vehicle1{
    startEngine(): void{
        console.log("start car engine");
    }
    stopEngine(): void {
        console.log("stop car engine");
    }
    move(): void {
        console.log("move the car");
    }
    test(){
        console.log("test car engine")
    }
}
const toyotaCar = new Car();
// toyotaCar.startEngine();
// toyotaCar.move();
// toyotaCar.test();


// use abstract class-----------------------------------------------
abstract class Vehicle2{
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract moveEngine(): void;
    test(){
        console.log("test bike engine");
    }
}
class Bike extends Vehicle2{
    startEngine(): void {
        console.log("start bike engine")
    }
    stopEngine(): void {
        console.log("stop bike engine");
    }
    moveEngine(): void {
        console.log("move bike engine");
    }
    // test(){
    //     console.log("test bike engine");
    // }
}
const bike = new Bike();
bike.moveEngine();
bike.test();











}