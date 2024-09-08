"use strict";
/*Creating a class Device*/
class Device {
    constructor(height, length, weight, screenSize) {
        this.state = false;
        this.height = height;
        this.length = length;
        this.weight = weight;
        this.screenSize = screenSize;
    }
    ;
    turnOn() { }
    ;
    turnOff() { }
    ;
}
;
/*Creating a class Picture*/
class Picture {
    constructor(ppi, weight) {
        this.ppi = ppi;
        this.weight = weight;
    }
}
/*Creating a class Camera*/
class Camera {
    constructor(mx, my, type) {
        this.pictures = [];
        this.state = false;
        this.mx = mx;
        this.my = my;
        this.type = type;
    }
    openCamera() {
        this.state = true;
    }
    closeCamera() {
        this.state = false;
    }
    get getState() {
        return this.state;
    }
    shoot(ppi) {
        let weight = ppi * this.mx * this.my / 1024;
        this.pictures.push(new Picture(ppi, weight));
    }
    deletePictures() {
        this.pictures = [];
    }
}
/*Creating a class Laptop, which extends the class Device*/
class Laptop extends Device {
    constructor(height, length, weight, screenSize, hasTouchScreen, screenAngle, resolutionX, resolutionY, type) {
        super(height, length, weight, screenSize);
        this.hasTouchScreen = hasTouchScreen;
        this.screenAngle = screenAngle;
        this.camera = new Camera(resolutionX, resolutionY, type);
    }
    ;
    turnOn() {
        this.state = true;
    }
    turnOff() {
        this.state = false;
    }
}
/*Creating a class Smartphone, which extends the class Device*/
class Smartphone extends Device {
    constructor(height, length, weight, screenSize) {
        super(height, length, weight, screenSize);
        this.cameras = [];
        this.phoneNumber = "+3736" + Math.ceil(Math.random() * 8999999 + 1000000);
    }
    ;
    turnOn() {
        this.state = true;
    }
    turnOff() {
        this.state = false;
    }
    get getPhoneNumber() {
        return this.phoneNumber;
    }
    call(phone) {
        console.log("You (" + this.getPhoneNumber + ") call (" + phone.getPhoneNumber + ")");
    }
    addCamera(resolutionX, resolutionY, type) {
        this.cameras.push(new Camera(resolutionX, resolutionY, type));
    }
    ;
}
let phoneArray = [
    new Smartphone(1024, 512, 157, 16),
    new Smartphone(1024, 512, 157, 16),
    new Smartphone(1024, 512, 157, 16),
    new Smartphone(1024, 512, 157, 16),
];
phoneArray.forEach((phone) => { console.log(phone.getPhoneNumber); });
phoneArray[0].call(phoneArray[3]);
//Abstract class Animal
class Animal {
}
class Ratoon extends Animal {
    produceNoise() {
        console.log("SHHHHHH");
        ;
    }
    eat() {
        console.log("CHRUM");
        ;
    }
    sleep() {
        console.log("SHHHH");
    }
    play() {
        console.log("Play with a ball");
    }
}
