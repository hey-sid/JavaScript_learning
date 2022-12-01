/////////////////////if CONDITION STATEMENT////////////////////////

document.write("<h1>If Conditions </h1>")

var a = 200;
var b = 40;

if (a > b) {
    document.write("a is grater <br>")
}



/// this condition is true a is greater than b




var a = 200;
var b = "200";

if (a === b) {
    document.write("a is grater")
}

/// this condition is false values are equal but data type is not equal so it will not print





/////////////LOGICAL OPERATORS/////////////////////

var age = 22;

if (age >= 18 && age <= 23) {
    document.write("yes you are eligible <br>")
}


// if the both conditions are true then it will run 



var age = 22;

if (age >= 23 || age <= 22) {
    document.write("yes you are eligible <br>")
}

// between both conditions if any one condition is true then it will run



var age = 22;

if (!(age >= 23)) {
    document.write("yes you are eligible <br>")
}



// if the condition is false then it will run


document.write("<h1>If Else Conditions </h1>")

var a = 400;
var b = "200";

if (!(a == b)) {
    document.write("a is equal to b <br>")
} else {
    document.write("b is not equal <br>")
}




// this condition is true cuz values and data type both are not equal



var name = "Alia"
var name2 = "Sid"
var gender = "male";

if (gender === "male") {
    document.write("Hello Mr." + name2 + "<br>");
} else {
    document.write("Hello Ms." + name + "<br>");
}


////////

var a = 9;
if (a % 2 != 0) {
    document.write(a + "is odd" + "<br>");
}
else {
    document.write(a + "is even" + "<br>");
}


///////////

var Num = 12;
var Num2 = 8
var String = "male";

if (String === "male") {
    document.write(String + Num2 + "<br>");  //Its called Concatination
}

//Concatination


//////////////IF ELSE IF //////////////////////

var per = 65;

if (per >= 80 && per <= 100) {
    document.write("You are in merit" + "<br>");
} else if (per >= 60 && per < 80) {
    document.write("You are in Ist Division" + "<br>");
} else if (per >= 40 && per <= 60) {
    document.write("You are in IInd Division" + "<br>");
} else if (per >= 35 && per <= 40) {
    document.write("You are in IIIrd Division" + "<br>");
} else if (per < 35) {
    document.write("You are fail Sorry" + "<br>");
} else {
    document.write("Please Enter Valid Percentage" + "<br>");
}




//////////////CONDITIONAL TERNARY OPERATOR //////////////////////

var x=100;
var z;

var a=20;
var b;

z=(x == 100)? "True": "False" + "<br>";  /// Short method
(a <= 10)? b ="True": b ="False" + "<br>";  /// Long method

document.write(z);
document.write(b);

