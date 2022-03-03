//Object enhancement in es6 --> you can add global scop and form them into Javascript object.
// var firstName = 'Duke';
// var color = 'Brown';
// var age = 5;


// You can create object methods with object literal enhancement, plus to that we can you this as well to access the object key
// var bark = function () {
//     console.log(`Woof Woof!, I am ${this.firstName} and I am a ${this.age} years old, ${this.color} coloured dog.
//     Woof Woof!`);
// }

// var dog = { firstName, color, age };
// console.log(dog)

// var anotherDog = { firstName, color, age, bark };
// anotherDog.bark();

//there is no necessary to use the function keyword.

const driver = {
    name: 'Moath',
    speed: 100,
    car: 'KIA RIO',
    speedUP(speedup) {
        this.speed = this.speed + speedup;
        console.log(`new speed = ${this.speed}`);
    }
}

driver.speedUP(90);
