class Automobile {
    constructor (name, model, color, type){
        this.name = "Car";
        this.model = 2022;
        this.color = "Grey";
        this.type = "Automatic";
    }
    move (a,b,c,d){
        this.a = a
        this.b = b
        this.c = c
        this.d = d
    }
}

const car = new Automobile ("Car, 2022, Grey, Automatic");

console.log(car);