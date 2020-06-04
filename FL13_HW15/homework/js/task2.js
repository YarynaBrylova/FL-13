function Vehicle(color, engine) {
    this.color = color,
    this.engine = engine, 
    this.maxSpeed = 70,
    this.isDriving = false,
    this.isStopping = true,
    this.currentSpeed = 0;
    this.driveIndex = 0;
    this.maxCuurentSpeed = this.currentSpeed;


    this.showStopMassage = function() {
        console.log(`Vehicle is stopped. Maximum speed during the drive was ${this.maxCuurentSpeed}`);
    }
}

function Car(model, color, engine) {
    Vehicle.call(this, color, engine);

    this.model = model;
    this.maxSpeed = 80;

    this.showStopMassage = function() {
        console.log(`Car ${this.model} is stopped. Maximum speed during the drive was ${this.maxCuurentSpeed}`);
    }
}

function Motorcycle(model, color, engin) {
    Vehicle.call(this, color, engin);

    this.model = model;
    this.maxSpeed = 90;

    this.showStopMassage = function() {
        console.log(`Motorcycle ${this.model} is stopped. Good drive`);
    }
}

Car.prototype = Object.create(Vehicle.prototype);
Object.defineProperty(Car.prototype, 'constructor', {
    value: Car,
    enumerable: false,
    writable: true
});

Motorcycle.prototype = Object.create(Car.prototype);
Object.defineProperty(Motorcycle.prototype, 'constructor', {
    value: Motorcycle,
    enumerable: false,
    writable: true
});



Vehicle.prototype.getInfo = function() {
    return `color: ${this.color}, engine: ${this.engine}, maxSpeed: ${this.maxSpeed}`
}

Vehicle.prototype.upgradeEngine = function(newEngine, newMaxSpeed) {
    if (this.currentSpeed) {
        console.log(`Can't be upgrade during moving`);
    } else {
        this.engine = newEngine;
        this.maxSpeed = newMaxSpeed;
    }
}

Vehicle.prototype.drive = function() {
    if (!this.isDriving) {
        this.isDriving = true;
        this.isStopping = false;
        this.driveIndex = setInterval(() => {
            this.currentSpeed += 20;
            console.log(this.currentSpeed);
            if (this.currentSpeed > this.maxSpeed) {
                console.log('Speed is too high, SLOW DOWN!');
            } 
        }, 2000); 
    }else {
        console.log('Already driving');
    }
} 

Vehicle.prototype.stop = function() {
    if (!this.isStopping) {
        this.isDriving = false;
        clearInterval(this.driveIndex);
        this.isStopping = true;
        this.maxCuurentSpeed = this.currentSpeed;
        let stopIndex = setInterval(() => {
            this.currentSpeed -= 20;
            if(this.currentSpeed <= 0) {
                this.showStopMassage();
                clearInterval(stopIndex);
                return;
            }
            console.log(this.currentSpeed);
        }, 1500); 
    }else {
        console.log('Already slows down');
    }
}


Car.prototype.getInfo = function() {
    return `model: ${this.model}, color: ${this.color}, engine: ${this.engine}, maxSpeed: ${this.maxSpeed}`
}

Motorcycle.prototype.getInfo = Car.prototype.getInfo;

Car.prototype.changeColor = function(newColor) {
    if (newColor !== this.color) {
        this.color = newColor;
    } else {
        console.log('The selected color is the same as a previous, please choose anotherone');
    }
}





let v = new Vehicle('black', 'v4');
let c = new Car('audi', 'red', 'v5');
let m = new Motorcycle('Suzuki', 'yellow', 'v8')