/*document.write("<i>Hello World</i> <br> ");
document.write(" <b> Hello World </b>"); */


////////////////VARIABLES OF JAVASCRIPT///////////////////

// var z="this is variable";
// document.write(z);

/*var z="hello world";

z = 84;
z = "hello again";
z = "hello again and  again";

document.write(z)*/

/*var first , second, third ;

first=50;
second="this is second variable value";

second="this is another value os second"

third=80


document.write(first , second, third)
document.write(second) */

//let first="Sid";

//let first="Sadish"; //You cant declar variables more than one in let

//document.write(first);


//const a="this is variable"

//const a="this is addition" // you cant declare variables twice and values as well it will through error

// document.write(a)



//////////////////DATA TYPES OF JAVASCRIPT/////////////////////


/*var x="this is string"; //String
x=5;        //Number
x=undefined   //Undefined
x=true      // boolean
x=["HTML", "CSS", "JS"] //Object  in other languages it will show Array but in JavaScript it will show object.
x = {                   // object
    name:"sid",
    Country:"India",
    clg:"BNN",
}

document.write(x)
document.write("<br>")
document.write(typeof x)*/


//////////////////ARITHMETIC OPERATORS//////////////////
// x=6;
// y=2;

// var a=10;
// var b=3;
// document.write(a+b);    //Noraml OP 13
// document.write(a-b);    //Noraml OP 7
// a++;    //a=a+1
// a--;    //a=a+1

//document.write(x+y);    //Addition       OP  8
//document.write(x-y);    //Substraction       OP 4
//document.write(x*y);    //Multiplication         OP 12
//document.write(x**y);    //Exponentiation         OP  6X6 = 36
//document.write(x/y);    //Division         OP 3
//document.write(x%y);    //Modulus (Remainder)         OP 0
// document.write(a+b);    //Increment   13+1 = OP 14
// document.write(a-b);    //Increment   7-1 = OP 6



//////////////////// ASIGNMENT OPERATOR//////////////////

// var a=10;
// var b=3;

//a+=b;       // a=a+b ----- OP 13
//a-=b;       // a=a-b ----- OP 7
//a*=b;       // a=a*b ----- OP 30
//a/=b;       // a=a/b ----- OP 30
//a%=b;       // a=a%b ----- OP 1
// a**=b;       // a=a**b ----- OP 1000


// document.write(a);



//////////////////CONSOLE COMMANDS/////////////////

// console.log();        It will print in console
// console.clear();     //this will clear your console
// console.warn("This is the first warning");     //You can provide warning message
// console.error("this is just error");  //you can see errors
// console.table([1,2,3]);  //you can see the table formate in console



//////////////////COMPARISON OPERATOR////////////////////
// var a=10;
// var b=10;

//document.write(a == b);  //this both values are equal    ==   OP: true 

// var a="10";
// var b="10";

//document.write(a === b);    //this both values are equal as well as datatypes   ===   OP: true



//document.write(2 != 3);    //first value is not equal to second value   ===   OP: true


//document.write(2 !== "3");    //both values are not equal and data types aso not equal   ===   OP: true


//document.write(5 > 4);    //first value is greater than second value    ===   OP: true

//document.write(50 >= 400);    //first value is not greater and equal to second value    ===   OP: false

//document.write(5 < 4);    //first value is not less than second value    ===   OP: false

//document.write(4 <= 4);    //first value is less or equal to second value    ===   OP: true



/////////////////////if CONDITION STATEMENT////////////////////////

// var a =200;
// var b= 40;

// if(a>b){
//     document.write("a is grater")
// }

// /// this condition is true a is greater than b



// var a =200;
// var b= "200";

// if(a===b){
//     document.write("a is grater")
// }

/// this condition is false values are equal but data type is not equal so it will not print



// var a =400;
// var b= "200";

// if(a !== b){
//     document.write("a is grater")
// }


// this condition is true cuz values and data type both are not equal



/////////////LOGICAL OPERATORS/////////////////////

// var age=22;

// if(age>=18 && age<=23){
//     document.write("yes you are eligible")
// }


// if the both conditions are true then it will run 


// var age=22;

// if(age>=23 || age<=22){
//     document.write("yes you are eligible")
// }

// between both conditions if any one condition is true then it will run


// var age=22;

// if (!(age >= 23 )){
//    document.write("yes you are eligible")
// }


// if the condition is false then it will run



// var name ="Manasa"
// var name ="Sid"
// var gender="male";

// if(gender==="male"){
//     document.write("Hello Mr." + name);
// }else{
//     document.write("Hello Ms." + name);
// }

// var a=9;
// if(a%2!=0){
//     document.write(a+ "is odd ");
// }
// else{
//     document.write(a+ "is even");
// }
// IF ELSE CONDITION