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
/*Creating a class Laptop, which extends the class Device*/
class Laptop extends Device {
    constructor(height, length, weight, screenSize, hasTouchScreen, screenAngle) {
        super(height, length, weight, screenSize);
        this.hasTouchScreen = hasTouchScreen;
        this.screenAngle = screenAngle;
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
}
let phoneArray = [
    new Smartphone(1024, 512, 157, 16),
    new Smartphone(1024, 512, 157, 16),
    new Smartphone(1024, 512, 157, 16),
    new Smartphone(1024, 512, 157, 16),
];
phoneArray.forEach((phone) => { console.log(phone.getPhoneNumber); });
phoneArray[0].call(phoneArray[3]);
