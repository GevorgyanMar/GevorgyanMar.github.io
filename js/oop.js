// Javascript - OOP 3 (Prototypal Inheritance)

// const a = {
//     name: "Joh",
//     age: 5
// }
// const b = {
//     lastName: "Jakson"
// }
// const c = {
//     age: 19,
//     showAge() {
//         alert(this.age)
//     }
// }

/* vat ban
a.__proto__ = b;
b.__proto__ = c;



// a.showAge()
// delete a.age
// alert(b.name)
// a.showAge()
 */




/* //2
const b = {
    lastName: "Jakson"
}
const a = Object.create(b);
a.name = "Joh";
alert(a.lastName);*/

const b = {
    lastName: "Jakson"
}

function A() {
    this.name = "Joh";
}

function C() {
    this.name = "Varsik";
}
A.prototype = c;
// const a = new A();
const c = new C();
alert(c.lastName)
alert(c.name)