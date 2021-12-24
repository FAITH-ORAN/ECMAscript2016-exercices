/*Remplacer les fonctions par des arrow functions

function sayHello(name) {
    return 'Hello ' + name;
}

const addition = function(a, b) {
    return a + b;
}

console.log(sayHello('Kristen'))
console.log(addition(1, 2))*/

const sayHello=(name)=>"Hello "+name;
console.log(sayHello('Faiza'))
const addition=(a,b)=>a+b;
console.log(addition(1, 2));


//// Remplacer le prototype Calculator3000 par une classe nommée Calculator3001
/* Utilisez ensuite cette classe à la place de calculator 3000 en bas de cd fichier

function Calculator3000() {
    this.current = 0;
}

Calculator3000.prototype.reset = function() {
    this.current = 0
}

Calculator3000.prototype.add = function(number) {
    this.current += number;
}

Calculator3000.prototype.subtract = function(number) {
    this.current -= number;
}

Calculator3000.prototype.multiply = function(number) {
    this.current *= number;
}

Calculator3000.prototype.divide = function(number) {
    this.current  /= number; 
}

Calculator3000.prototype.result = function() {
    console.log(this.current);
}

const calc = new Calculator3000();

calc.add(14)
calc.subtract(4)
calc.multiply(10)
calc.divide(2)
calc.result() // Doit logger 50 normalement*/

class Calculator3001{
   constructor(number)
   {this.number=number}
}
//let num = new Calculator3001(0);
//console.log(num)

class Add extends Calculator3001{
    constructor(numberNew){
        super(0)
        this.numberNew=numberNew+this.number;
    }
}
const cal = new Add(14);
console.log(cal.numberNew);

class Substract extends Calculator3001{
    constructor(numberNew){
        //console.log(cal.numberNew)
        super(0)
        this.numberNew=cal.numberNew-numberNew;
    }
}

const cal2=new Substract(4);
console.log(cal2.numberNew);

class Multiply extends Calculator3001{
    constructor(numberNew){
        //console.log("/",cal2.numberNew)
        super(0)
        this.numberNew=cal2.numberNew*numberNew;
    }
}

const cal3=new Multiply(10);
console.log(cal3.numberNew);

class Divide extends Calculator3001{
    constructor(numberNew){
        //console.log("/",cal2.numberNew)
        super(0)
        this.numberNew=cal3.numberNew/numberNew;
    }
}
const cal4=new Divide(2);
console.log(cal4.numberNew)// ihvae the result 50

/* Remplacez les variables initalisées avec var par const ou let
var users = [
    'Rick Sanchez',
    'Morty Smith',
    'Xavier Dang'
]
var iteration = 0;

users.forEach(function(user) {
    iteration ++;
})

console.log(iteration);
*/

const users = [
    'Rick Sanchez',
    'Morty Smith',
    'Xavier Dang'
]
let iteration = 0;

users.forEach(function() {
    iteration ++;
    //console.log(val)
})

console.log("le nombre d'élèments' ",iteration);