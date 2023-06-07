type heroi =  {
    name: string;
    vulgo: string;
    
}
function printaObjeto (pessoa: heroi) {
    console.log(pessoa);
}
printaObjeto({
    name: "Caio",
    vulgo: "Irede"
});

console.log("olá mundo")