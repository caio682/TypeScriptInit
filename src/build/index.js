"use strict";
// type heroi =  {
//     name: string;
//     vulgo: string;
const bot1 = {
    id: 1,
    name: "Caio",
};
const bot2 = {
    id: 1,
    name: "Caio",
    sayHello: function () {
        throw new Error("Function not implemented.");
    }
};
// console.log(bot1);
// console.log(bot2);
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello I'm ${this.name}`;
    }
}
const p = new Pessoa(1, "Caio");
console.log(p.sayHello());
