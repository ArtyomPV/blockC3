class ElectricDevice {
    constructor(name, power) {
        this.name = name;
        this.power = power;
        this.isOn = false;
    }

    turnOn() {
        console.log(this.name + " is on!");
        this.isOn = true;
    }
    turnOff() {
        console.log(this.name + " is off!");
        this.isOn = false;
    }
}

class Lamp extends ElectricDevice {
    constructor(name, brand, power, color) {
        super(name, power);
        this.brand = brand;
        this.color = color;
        this.isOn = true;
    }
}

class Computer extends ElectricDevice {
    constructor(name, brand, power, type, functionality) {
        super(name, power);
        this.brand = brand;
        this.type = type;
        this.functionality = functionality;
        this.isOn = false;
    }
}

const deskLamp = new Lamp("Desk lamp", "Honor", 5, "White");
const homePC = new Computer("Home PC", "Intel", 120, "stationary", "for work");

deskLamp.turnOff();
homePC.turnOn();


console.log(homePC)
console.log(deskLamp)
