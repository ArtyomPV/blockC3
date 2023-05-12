function ElectricDevice(name, power) {
    this.name = name;
    this.power = power;
    this.isOn = false;
}

// метод, который определяет прибор как включенный в розетку
ElectricDevice.prototype.turnOn = function() {
    console.log(this.name + " is on!");
    this.isOn = true;
};

// метод, который определяет прибор как выключеный из розетки
ElectricDevice.prototype.turnOff = function() {
    console.log(this.name + " is off!");
    this.isOn = false;
};

// Прибор 1
function Lamp(name, brand, power, color) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.color = color;
    this.isOn = true;
}

Lamp.prototype = new ElectricDevice();

// Прибор 2
function Computer(name, brand, power, type, functionality) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.functionality = functionality;
    this.isOn = false;
}

Computer.prototype = new ElectricDevice();

// экземпляр лампы
const tableLamp = new Lamp("Desk lamp", "Honor", 5, "White");

// экземпляр компьютера
const homePC = new Computer("Home PC", "Intel", 120, "stationary", "for work");

// отключить лампу из розетки
tableLamp.turnOff();

// включить homePC в розетку
homePC.turnOn();

// результат
console.log(homePC)
console.log(tableLamp)