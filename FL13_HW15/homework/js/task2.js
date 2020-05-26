function Vehicle (color, engine) {
    this.color = color,
    this.engine = engine, 
    this.maxSpeed = 70,
    this.isDriving = false,
    this.isStopping = true,
    this.currentSpeed = 0;
    this.driveIndex = 0;

    this.getInfo = function() {
        return `color: ${this.color}, engine: ${this.engine}, maxSpeed: ${this.maxSpeed}`
    }

    this.drive = function() {
        if (!this.isDriving) {
            this.isDriving = true;
            this.isStopping = false;
            const increaseSpeedTime = 2000;
            this.driveIndex = setInterval(() => {
                this.currentSpeed += 20;
                console.log(this.currentSpeed);
                if (this.currentSpeed > this.maxSpeed) {
                    console.log('Speed is too high, SLOW DOWN!')
                } 
            }, increaseSpeedTime); 
        }else {
            console.log('Already driving');
        }
    }  

    this.stop = function() {
        if (!this.isStopping) {
            let maxCuurentSpeed = this.currentSpeed;
            this.isDriving = false;
            clearInterval(this.driveIndex);
            this.isStopping = true;
            const decelerationTime = 1500;
            let stopIndex = setInterval(() => {
                this.currentSpeed -= 20;
                if(this.currentSpeed <= 0) {
                    console.log(`Vehicle is stopped. Maximum speed during the drive ${maxCuurentSpeed}`);
                    clearInterval(stopIndex);
                    return;
                }
                console.log(this.currentSpeed);
            }, decelerationTime); 
        }else {
            console.log('Already slows down');
        }
    }
}


function Car(model, color, engine) {
    this.model = model,
    this.color = color,
    this.engine = engine,
    this.maxSpeed = 80,
    this.isDriving = false,
    this.isStopping = true,
    this.currentSpeed = 0;
    this.driveIndex = 0;


    this.getInfo = function() {
        return `model: ${this.model}, color: ${this.color}, engine: ${this.engine}, maxSpeed: ${this.maxSpeed}`
    }

 
    this.drive = function() {
        if (!this.isDriving) {
            this.isDriving = true;
            this.isStopping = false;
            const increaseSpeedTime = 2000;
            this.driveIndex = setInterval(() => {
                this.currentSpeed += 20;
                console.log(this.currentSpeed);
                if (this.currentSpeed > this.maxSpeed) {
                    console.log('Speed is too high, SLOW DOWN!')
                } 
            }, increaseSpeedTime); 
        }else {
            console.log('Already driving');
        }
    }  

    this.stop = function() {
        if (!this.isStopping) {
            let maxCuurentSpeed = this.currentSpeed;
            this.isDriving = false;
            clearInterval(this.driveIndex);
            this.isStopping = true;
            const decelerationTime = 1500;
            let stopIndex = setInterval(() => {
                this.currentSpeed -= 20;
                if(this.currentSpeed <= 0) {
                    console.log(`Car ${this.model} is stopped. Maximum speed during the drive ${maxCuurentSpeed}`);
                    clearInterval(stopIndex);
                    return;
                }
                console.log(this.currentSpeed);
            }, decelerationTime); 
        }else {
            console.log('Already slows down');
        }
    }
    
    this.changeColor = function(newColor) {
        if (newColor !== this.color) {
            this.color = newColor;
        } else {
            console.log('The selected color is the same as a previous, please choose anotherone');
        }
    }
}


function Motorcycle( model, color, engine) {
    this.model = model,
    this.color = color,
    this.engine = engine,
    this.maxSpeed = 90,
    this.isDriving = false,
    this.isStopping = true,
    this.currentSpeed = 0;
    this.driveIndex = 0;


    this.getInfo = function() {
        return `model: ${this.model}, color: ${this.color}, engine: ${this.engine}, maxSpeed: ${this.maxSpeed}`
    }

    this.drive = function() {
        if (!this.isDriving) {
            this.isDriving = true;
            this.isStopping = false;
            const increaseSpeedTime = 2000;
            this.driveIndex = setInterval(() => {
                this.currentSpeed += 20;
                console.log(this.currentSpeed);
                if (this.currentSpeed > this.maxSpeed) {
                    console.log('Speed is too high, SLOW DOWN!')
                } 
            }, increaseSpeedTime); 
        }else {
            console.log('Already driving');
        }
    }  


    this.stop = function() {
        if (!this.isStopping) {
            this.isDriving = false;
            clearInterval(this.driveIndex);
            this.isStopping = true;
            const decelerationTime = 1500;
            let stopIndex = setInterval(() => {
                this.currentSpeed -= 20;
                if(this.currentSpeed <= 0) {
                    console.log(`Motorcycle ${this.model} is stopped. Good drive`);
                    clearInterval(stopIndex);
                    return;
                }
                console.log(this.currentSpeed);
            }, decelerationTime); 
        }else {
            console.log('Already slows down');
        }
    }    
}

let v = new Vehicle('green', 'v4');
let c = new Car('audi', 'red', 'v4');
let m = new Motorcycle('Yamaha', 'blue', 'v3');