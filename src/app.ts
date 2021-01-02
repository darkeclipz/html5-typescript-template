import { Car, CarColor } from "./car";

export class App {
    constructor() {
        const car = new Car("BMW", CarColor.Blue);
        car.info();
    }
}

new App();