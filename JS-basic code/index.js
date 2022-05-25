//This is my first JS code
console.log("Hiiii");
//var is used as variable
//recently let use as standard
//let fname = "Yeamin";
//console.log(name);
//Rules of naming variable
//can't be a reserved word
//should be meaningfull
//can;t start with number
//can't contain a space/ hypen
//are case-sentitive

//modern best practice to declare variable
//let firstName = "Yeamin";
//let lastName = "Islam";
//console.log(firstName+lastName);


//use const to fix a variable

//const value = 544;
//console.log(value);

//Primitive types are string,Number,Boolean,undefined,Null
let name = "Yeamin"; //string literal
let age = 30; //Number literal
let isApproved = false; //Boolean literal
let firstName1 = undefined;
let lastName2 = null;

//Dynamic typing
//we can easily change variable data type in run time.





//Objects
//Referance types are Objects,Array,Function
//Object declarations
let person = {
    value1 : "Yeamin",
    value2 :30,
    eyecolor : 'Brown'
};
//Dot notation (use this for better programming)
person.value1 = 'Islam';

//Bracket notation
person['value2'] = 90;

console.log(person);
console.log(person.value1);
console.log(person.value2);


//Array (list of objects)
let colorlist = ['Red','white','Blue'];
colorlist[1] = "yellow";
console.log(colorlist);


//Functions
function greet(num,ageis){
    console.log("This is " + num +' '+ageis)
}

greet("Yeamin",89);
greet("Fahim",67);
