class Car {
    constructor(engineName, carModel, speed) {
        this.engineName = engineName;
        this.carModel = carModel;
        this.speed = speed;
    }
    displayDetails() {
        console.log("Engine Name:", this.engineName);
        console.log("Car Model:", this.carModel);
        console.log("Speed:", this.speed + " km/h");
    }
}

const car1 = new Car("V8", "BMW M4", 240);
car1.displayDetails();