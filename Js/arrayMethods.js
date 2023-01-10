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