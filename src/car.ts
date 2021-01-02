export class Car {
    constructor(public name: string, public color: CarColor) { }
    info(){ 
        console.log(`Car ${this.name} is ${CarColor[this.color]}.`);
    }
}

export enum CarColor {
    Red,
    Blue,
    Green
}