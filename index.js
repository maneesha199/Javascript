//let name="Manisha";//string Literal
let IsApproved= false;//Boolens Literal
let FirstName=undefined;//undefined Literal
let LastName=null;//undefined Literal
//let FirstName="Manisha" camal form
//varible cannot be a reserved keywords
//shold me mearningfull names
//they cannot start with a number(1name)
//cannot contains a space or hyper(-)
//case sensitive
//const Age=20;//number Literal
let person ={name:"Manisha", age:20};
//person.name="Shanima";
person['name']="P_Manisha";
console.log(person.age);
console.log(person.name);
//Array in Javascript is an object which is collection of different data types
let selectionofcolors=['red', 'blue', '1'];
selectionofcolors[3]="green";
console.log(selectionofcolors);
console.log(selectionofcolors.length);
//functions declaration
function greet(){
    console.log("Hello World!!");
}
//function calling
greet();

//functions declaration with argumment
function gettingName(name){
    console.log("Hello "+ name);
}
//function calling
gettingName("Manisha");

function calsquare(number){
    result=number*number
    console.log("Result is "+ result);
}
//function calling
calsquare(4);

