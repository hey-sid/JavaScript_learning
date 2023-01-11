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