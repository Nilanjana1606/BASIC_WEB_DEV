console.log("i am nilanjana");//print statement
console.log("starting to learn javascript");


//VARIABLES

//variables- decimal,integer,strings,null,undefined,boolean

//we can store any kind of data in any variable no need to give int float etc etc
//it is dynamically typed programming language
//variables are case sensitive
//only a letter ,undescore,or a dollar should be 1st chracter
//reserved words cant be variable names

//VARIABLE DECLARATION

//var : variable can be re declared and updated. a global scope variable.
//let: variable cant be re declared but can be updated. a block scope variable.
//const: variable cant be re declared or updated. a block scope variable.



let name_1="tony";


name_1="oreo";
console.log(name_1);


let price=340;
console.log(price);


//if u declare a variable with let and dont give value , it will not show error
let a;
a=10;
console.log(a);


//if u declare a variable with const u have to give a value, or it will show error





const p=10; //applying const will make it constant


//we dont use var to declare our variables since 2015 due to ES6 which is a new set of rules....which states that use let and const

//operators: =

//keywords: 

age=24
age
name="Tony"
y=undefined;
x=null;
console.log(x);
console.log(y);


pass=true;
console.log(pass);
typeof pass;

name="antara"
console.log(name);

// DATATYPES - PRIMITIVE AND NON-PRIMITIVE
//PRIMITIVE : NUMERICAL(POSITIVE OR NEGATIVE), string, boolean, undefined, null( it is an object....it is the absence of an object),BigInt, Symbol

let kk=Symbol("Hello !")
console.log(kk)
//NON PRIMITIVE: objcets ( arrays and functions)


//creating object
const student={
    fullName: "Nilanjana Dey",
    age:20,
    cgpa:7.9,
    isPass:true

};

student["age"]=student["age"]+10
console.log(student["age"]);

//practice

const product={
    title:"Ball pen",
    rating:4,
    offer:5,
    price:270
};


//string concatenation is different.....no double quote required



//OPERATORS
//operators : arithmatic (+ - * /),modulus(%),exponentiation(**),increment(++),decrement(--)

let w=2;
let g=4;
console.log("a+b =",w+g);

//unary operator : 
w=w+1;
console.log(w);

//comparison operators : ==, !=, ===(equal to and type), !==(not equal to and type),>,<,<=,>=

console.log(w==g)
console.log(w!=g)
console.log(w===g)//strict version : also checks datatypes , same with !==

//logical operators: && || !

let r1=6;
let r2=8;
let cond1=r1>r2;
let cond2=r1===r2;
console.log(cond1 && cond2);


//CONDITIONAL STATEMENTS : to implement some condition in the code
// if  ,if-else ,else if
let Age=90;

if (Age>18)
{
    console.log("you can vote");
}

//Ternary operators : condition ? true output : false output

result=age>=18?"adult":"not adult"

alert("Enter a number : ")

store=prompt("hello!")
console.log(store);

//LOOPS

for(let i=1;i<=5;i++)
{
    console.log("*");
}

let k=1;
while(k<=10)
{
    console.log("college");
    k++;
}

//for-of and for-in

//for-of for arrays and strings
//for(let val of strVar)

let str="gol";
let size=0;
for (let i of str) //i will contain the characters
{
    console.log("i=",i);
    size++;
}

console.log("size of string :",size);


let student_1={
    name_2:"esha",
    age_1:23,
    cgpa:7.9,
    isPass:true
};

for (let key in student)
{
    console.log(key,student[key]);
}


//STRINGS

let str1="nilanjana";
let str2='nilnjana'; //both are valid

//there are in-built functions for strings which we call methods

l1=str1.length;
// strings behave like objects.......object.key 

p1=str1[0];//to find the position of each character

//template literals : a way to have embedded expressions in strings 

let str3=`template literal ${1+2+3}`;//this is a special string

let obj={
    item:'pen',
    price:'10'

};

console.log("cost of ",obj.item," is ",obj.price);


console.log("nilanjana \ndey"); //to print in the next line

//  \t for tab space


//STRING METHODS

//str.toUpperCase()
//str.toLowerCase()
// str.trim() //removes whitespaces from starting and end
//str.slice(start,end?) returns part of string
//str1.concat(str2)
//str.replace(searchVal,newVal) and str.replaceAll("lo","p") it will replace all the characters
//str.charAt(idx)

//the string methods does not change the real value....it creates a new string with a new value

//ARRAY 
let heroes=["ironman","hulk","thor","batman"];
let marks=[96,75,68,34,55];

let info=["rahul",86,"marks"];

// we cant change the strings inside the array, strings are immutable

console.log(heroes[0]);

idx=0
for(let idx=0; idx< heroes.length; idx++ )
{
    console.log(heroes[idx]);
}

for(let hero of heroes)
{
   console.log(hero);
}


// ARRAY METHODS

//push
let items=["potato","apple","litchi","tomato"];
items.push("chips");
console.log(items);

//pop deletes from the end
let d=items.pop()
console.log(p)


//toString()
console.log(items.toString())

//concat

t=["carrot","eggs"];
console.log(items.concat(t));
console.log(items.concat(t,heroes));

//unshift : adds elements from the beginning

console.log(heroes.unshift("thor"));

//shift : delete from the start
console.log(heroes.shift("thor"));


//slice(): returns a piece of the array

console.log(items.slice(1,));

//splice() : change original array ( add, remove, replace)  splice(startindex,delCount,newElements to add (optional))


items.splice(2,0,"tie");


//FUNCTIONS: block of code that performs a specific task, can be invoked whenever needed

function myFunction() //parameter -> input
{
    console.log("welcome to apna college ");
    console.log("we are learning js ");
}

myFunction();

function sum(a,b)
{
    console.log(a+b);
}

sum(20,45);

function sum1(x,y)
{
    s=x+y ;
    return s;
    console.log("after return"); //this will never be reachable
}

ans=sum(8,9);
console.log(ans);

//ARROW FUNCTIONS

//modern js
//arrowSum is a function
const arrowSum=(a,b) => {
    console.log(a+b);
}

const arrowMul = (a,b) => {
    console.log(a*b);
};


const printHello = () =>
{
    console.log("hello !");
}









//forEach Loop is arrays

//arr.forEach( callBackFunction )

//callBackFunction :  it is a function to execute for each element in the array

// a callback is a function passed as an argument to another function.
function abc(){

    console.log("hello");
}

function myFunc(abc)
{
   return abc;
}

// a callback is a function passed as an argument to another function


let arr=[1,2,3,4,5,6,7,8,9];

arr.forEach(function printVal(val) // each value at each index
{
   console.log(val);
}
);


arr.forEach((val) =>
{
  console.log(val);
});

//HIGHER ORDER FUNCTIONS : forEach
arr.forEach((num) =>
{
    console.log(num*num);  //num**2
});



//MAP METHOD : creates a new array with the results of some operation. The value its callback returns are used to form new array

//arr.map(callbackFnx(value,index,array))

/*arr.map((val) =>
{
    console.log(val);
});
*/

let op=arr.map((val) =>
{
    return val**2;
});

console.log(op)

// FILTER METHOD: creates a new array of elements that give true for a condition/filter.eg: all even element


let n1= arr.filter((val) => {

    return val%2==0;

})

console.log(n1)

// REDUCE METHOD : performs some operations and reduces the array to a single value. It returns that sigle value.





