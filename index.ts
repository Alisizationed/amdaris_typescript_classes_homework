/*Creating a class Device*/
class Device {
    state: boolean = false;
    height: number; 
    length: number;
    weight: number;
    screenSize: number;
    constructor(height: number, length: number, weight: number, screenSize: number){
        this.height = height;
        this.length = length;
        this.weight = weight;
        this.screenSize = screenSize;
    };
    public turnOn(): void{};
    public turnOff(): void{};
};

/*Creating a class Picture*/
class Picture {
    ppi: number;
    weight: number;
    constructor(ppi: number, weight: number){
        this.ppi = ppi;
        this.weight = weight;
    }
}

/*Creating a class Camera*/
class Camera {
    mx: number;
    my: number;
    type: string;
    private pictures: Array<Picture> = [];
    private state: boolean = false;
    constructor(mx: number,my: number,type: string) {
        this.mx = mx;
        this.my = my;
        this.type = type;
    }
    public openCamera() {
        this.state = true;
    }
    public closeCamera() {
        this.state = false;
    }
    get getState () {
        return this.state;
    }
    public shoot(ppi: number) {
        let weight: number = ppi * this.mx * this.my / 1024;
        this.pictures.push(new Picture(ppi, weight));
    }
    public deletePictures() {
        this.pictures = [];
    }
}

/*Creating a class Laptop, which extends the class Device*/
class Laptop extends Device{
    hasTouchScreen: boolean;
    screenAngle: number;
    camera: Camera;
    constructor(height: number, length: number, weight: number, screenSize: number, 
        hasTouchScreen: boolean, screenAngle: number,resolutionX: number,resolutionY: number,type: string) {
        super(height,length,weight,screenSize);
        this.hasTouchScreen = hasTouchScreen;
        this.screenAngle = screenAngle;
        this.camera = new Camera(resolutionX,resolutionY,type);
    };
    public turnOn(): void {
        this.state = true;
    }
    public turnOff(): void {
        this.state = false;
    }
}

/*Creating a class Smartphone, which extends the class Device*/
class Smartphone extends Device{
    private readonly phoneNumber: string;
    cameras: Array<Camera> = [];
    constructor(height: number, length: number, weight: number, screenSize: number) {
        super(height,length,weight,screenSize);
        this.phoneNumber = "+3736" + Math.ceil(Math.random() * 8999999 + 1000000);
    };
    public turnOn(): void {
        this.state = true;
    }
    public turnOff(): void {
        this.state = false;
    }
    public get getPhoneNumber(){
        return this.phoneNumber;
    }
    public call(phone: Smartphone): void {
        console.log("You ("+this.getPhoneNumber+") call ("+phone.getPhoneNumber+")");
    }
    public addCamera(resolutionX: number,resolutionY: number,type: string){
        this.cameras.push(new Camera(resolutionX,resolutionY,type));
    };
}

let phoneArray: Array<Smartphone> = [
    new Smartphone(1024,512,157,16),
    new Smartphone(1024,512,157,16),
    new Smartphone(1024,512,157,16),
    new Smartphone(1024,512,157,16),
];

phoneArray.forEach((phone) => {console.log(phone.getPhoneNumber)});

phoneArray[0].call(phoneArray[3]);


//Abstract class Animal

abstract class Animal {
    abstract name: string;
    abstract age: number;
    constructor(){};
    abstract produceNoise(): void;
    abstract eat(): void;
    abstract sleep(): void;
    abstract play(): void;
}

class Ratoon extends Animal {
    name: string;
    age: number;
    
    constructor(name: string, age: number) {
        super();
        this.name=name;
        this.age=age;
    }

    produceNoise(): void {
        console.log("SHHHHHH");;
    }
    eat(): void {
        console.log("CHRUM");;
    }
    sleep(): void {
        console.log("SHHHH");
    }
    play(): void {
        console.log("Play with a ball");
    }
}