// Array sort() Method
//====================

var a=["Avi", 25, 45, "Sid"];

document.write("1). " + a + "<br>");/// Avi, 25, 45, Sid // Initial Output

a.sort();
document.write("1). " + a + "<br><br>"); /// 25, 45, Avi, Sid // It arrages in alphabetical order


// Array reverse() Method
//====================

var a=["Avi", 25, 45, "Sid"];

document.write("2). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

a.reverse();
document.write("2). " + a + "<br><br>"); /// Sid, 45, 25, Avi // It will print the value in reverse 


// Array pop() Method
//====================

var a=["Avi", 25, 45, "Sid"];

document.write("3). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

a.pop();
document.write("3). " + a + "<br><br>"); /// 25, 45, Avi // It delets the value from last


// Array push() Method
//====================

var a=["Avi", 25, 45, "Sid"];

document.write("4). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

a.push("Manasa");
document.write("4). " + a + "<br><br>"); /// 25, 45, Avi, Sid, Manasa // It adds the value from last


// Array shift() Method
//====================

var a=["Avi", 25, 45, "Sid"];

document.write("5). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

a.shift();
document.write("5). " + a + "<br><br>"); ///  25, 45, Sid // It delets the value from the start


// Array unshift() Method
//====================

var a=["Avi", 25, 45, "Sid"];

document.write("6). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

a.unshift(37);
document.write("6). " + a + "<br><br>"); /// 37, Avi, 25, 45, Sid // It adds the value from the start



// Array concat() Method
//====================
//eg:1

var a=["Avi", 25, 45, "Sid"];

document.write("7). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

var b= a.concat(37);
document.write("7). " + b + "<br><br>"); /// Avi, 25, 45, Sid, 37 // It merge the new variable value at the last


//eg:2

var a=["Avi", 25, 45, "Sid"];
var b=["Manish", 55];
var c=["Supriya", 75];

document.write("8). " + a + "<br>");/// Avi, 25, 45, Sid // Initial Output
document.write("8). " + b + "<br>");/// Manish, 55 // Initial Output
document.write("8). " + c + "<br>");/// Supriya, 75 // Initial Output
var d= a.concat(b,c);
document.write("8). " + d + "<br><br>"); /// Avi, 25, 45, Sid, Manish, 55, Supriya, 75 // It merge the new variable value at the last


// Array join() Method
//====================
//eg:1

var a=["Avi", 25, 45, "Sid"];

document.write("9). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

var b= a.join(" ");
document.write("9). " + b + "<br><br>"); /// Avi 25 45 Sid // It makes single value 


// Array slice() Method
//====================
//eg:1

var a=["Avi", 25, 45, "Sid"];

document.write("10). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

var b= a.slice(1, 3);
document.write("10). " + b + "<br>"); /// 25 45 // It will slice the value whichever you want 


//eg:2

var a=["Avi", 25, 45, "Sid"];

document.write("10). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

var b= a.slice(-2);
document.write("10). " + b + "<br><br>"); /// 45, Sid// It will slice the value whichever you want 


// Array splice() Method
//====================
//eg:1

var a=["Avi", 25, 45, "Sid"];

document.write("11). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

a.splice(2, 1, 70, 80);
document.write("11). " + a + "<br><br>"); /// Avi, 25, 70, 80, Sid // It will add the value wherever you want 


//eg:2

var a=["Avi", 25, 45, "Sid"];

document.write("11). " + a + "<br>"); /// Avi, 25, 45, Sid // Initial Output

a.splice(-2, 2, 70, 80);
document.write("11). " + a + "<br><br>"); /// Avi, 25, 70, 80 // It will add the value wherever you want 



// Array isArray() Method
//eg:1 //basic Example

var a =["Sid", 20, "Madutha"];

document.write("12). " + a + "<br>");/// Sid, 20, Madutha // Initial Output

var b = Array.isArray(a);
document.write("12). " + b + "<br>");// True


//eg:2 //basic Example

//var a =["Sid", 20, "Madutha"];
var a ="Sid";

document.write("12). " + a + "<br>");/// Sid, 20, Madutha // Initial Output

if(Array.isArray(a)){
    document.write("12). " + "Yes its an Array")
}else{
    document.write("12). " + "Sorry its not an Array")
}

 