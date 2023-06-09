// type heroi =  {
//     name: string;
//     vulgo: string;
    
// }
// function printaObjeto (pessoa: heroi) {
//     console.log(pessoa);
// }
// printaObjeto({
//     name: "Caio",
//     vulgo: "Irede"
// });

// function addNumber (x: number, y: number): number {
//     return x + y;
// }
// let soma: number = addNumber(4,7);
// console.log(soma);

// function addHello (name: string): string {
//     return `Hello {name} `;
// }
// console.log(addHello("Caio"))

// function CallToPhone(name: string, phone: number): string | number {
//     return phone;
// }
// async function getDatabase(id:number): Promise<string> {
//     return "Caio";
    
// }
type robot = {
   readonly id: number;
    name: string;
};

interface robot2  {
  readonly  id: string | number;
    name: string;
    sayHello(): string;
}
const bot1: robot = {
    id: 1,
    name: "Caio",
};
const bot2: robot2 = {
    id: 1,
    name: "Caio",
    sayHello: function (): string {
        throw new Error("Function not implemented.");
    }
};
console.log(bot1);
console.log(bot2);

class Pessoa implements robot2 {
    id: string | number;
    name: string;

    constructor(id: string | number , name: string){
        this.id = id;
        this.name = name;
    }
    sayHello(): string {
       return "Hello";
    }

}

const p = new Pessoa(1, "Caio");