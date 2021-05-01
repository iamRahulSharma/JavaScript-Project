// Modules 

// import Vehicle from "./Vehicle";


// This JS file is dedicated to the ES6 fundamentals

// 1. var, let and const

// var -> function
// let -> block
// const -> block

// var example

function loop() {


        for (var index = 1; index < 5; index++) {
            // index is accessable in this block
            console.log(index);
        }

        // index is accessable outside the for loop block

        console.log(index);

    }

loop();


// Object

const person = {
    name: 'Rahul Sharma',
    walk: function () { },

    // In ES6, you can declare a function like talk () in a object
    talk() { }
}

person.talk();


// "this" keyword in JS 

const me = {
    name: 'Rahul Sharma',
    walk() {
        console.log(this);
    }
}

// this is a reference to the "me" object

me.walk();

const walk = me.walk;

// here, this is a reference to the "window" object

walk();

const walk_bind = me.walk.bind(me);

// Here, you have bind this reference to the "me" object not to the window object 

walk_bind();



// Arrow functions

// Before ES6 

/*
    const square = function (num) {
        return num * num;
    }


*/

const square = (num) => { return num * num; }

console.log(square(5));


// Arrow functions and this

const girl = {

    name: 'Girl 1',
    talk() {

        var self = this;
        setTimeout(function () {
            console.log('self', self);
        }, 1000);
    }

}


girl.talk();

// Object Destructing 

const address = {
    street: '1',
    city: 'delhi',
    country: 'delhi'
}

// if you want to assign the property of the address object, to a variable then

// const street = address.street
// const city = address.city
// const country = address.country

// but in ES6, you can do it by 

const { street: st, city: ct, country: cnty } = address;
console.log(st, ct, cnty);


// Spread Operator -> ... (three dot in a row)

const first = [1, 2, 3];
const second = [4, 5, 6];

// Let us suppose you want to add or concatnate above two array 

// const combined = first.concat(second);

// by using spread operator

let combined = [...first, ...second];

// The main use of the spread operator is given below

combined = [...first, 'a', ...second, 'b'];
console.log(combined);

// Now, you can combined object also

const obj1 = { name: 'Rahul' }
const obj2 = { job: 'Programmer' }

const objCombined = { ...obj1, ...obj2, country: 'India' }
console.log(objCombined);


// Classes


class Person {

    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log('walk');
    }
}

let personObj1 = new Person('Rahul')
personObj1.walk();


// Inheritance

class Teacher extends Person {
    teach() {
        console.log("teach");
    }
}

let teacherObj1 = new Teacher('')


// Inheritance Module

// class Car extends Vehicle {


// }

// let carObj1 = new Car('BWM');
// carObj1.moveRight();