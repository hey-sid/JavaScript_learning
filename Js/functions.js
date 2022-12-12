//////Syntax Of Function///////

// function functionName(name) {
//     statement
// }

// functionName();


//=============================
// function Hello(){
//     document.write("Hello")
// }

// Hello();

// document.write("<br>")

// function SID(){
//     document.write("SID")
// }

// SID();





//////FUNCTIONS WITH PARAMETER///////
//////Syntax///////

// function functionName(parameter1, parameter2) {
//     statement
// }

// functionName(argument1,argument2)


//First Method
// function hello(fname, lname) {
//     document.write("Hello " + fname + " " + lname);
// }

// hello("SID" , "MADUTHA");

document.write("<br>");

//Second Method
// function Name(fname="SID", lname="MADUTHA") {
//     document.write("Hello " + fname + " " + lname);
// }

// Name();

document.write("<br>");

//Third Method  
// var fname = "SID";
// var lname ="MADUTHA"

// function hello(fname ,lname) {
//     document.write("Hello " + fname + " " + lname);
// }

// hello(fname, lname);




//////FUNCTIONS WITH RETURN VALUE///////
//////Syntax///////

// function functionName(parameter1, parameter2) {
//     statement

//     return value
// }

// var a= functionName(argument1, argument2);


//=============================
// function functionName(fname, lname) {
//     var a = fname + " " + lname;
//     console.log("Value of a is " + a)
//     return a;

// }


// var fn = functionName("Avi", "Sid");

// document.write(fn);




//=============================
// function sum (math, sci, eng){
//     var s= math + sci + eng;

//     return s;
// }

// function percentage(tt){
//     var per =tt/300*100

//     document.write(per);
    
// }

// var total= sum(65, 65, 65);
// percentage(total);

