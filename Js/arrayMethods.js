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
    document.write("12). " + "Sorry its not an Array" + "<br><br>")
}




// Array indexOf() Method
//eg:1

var a =["Sid", "Avi", "Shubham", "Vijay", "Avi"];

document.write("13). " + a + "<br>");/// Sid,Avi,Shubham,Vijay,Avi // Initial Output

var b = a.indexOf("Avi", 2);
document.write("13). " + b + "<br><br>"); // Output  4 



// Array lastindexOf() Method
//eg:1

var a =["Sid", "Avi", "Shubham", "Vijay", "Avi"];

document.write("14). " + a + "<br>");/// Sid,Avi,Shubham,Vijay,Avi // Initial Output

var b = a.lastIndexOf("Avi", 3)
document.write("14). " + b + "<br><br>"); // Output 1




// Array includes() Method
//eg:1

var a=["Rahul", "Avi", "Aman"];

document.write("15). " + a + "<br>");/// Rahul,Avi,Aman // Initial Output

var b = a.includes("Rahul");
document.write("15). " + b + "<br><br>"); /// True rahul exist in Array




// Array some() Method
//eg:1

var age = [10, 12, 14, 18, 20];
document.write("16). " + age + "<br>"); /// 10,12,14,18,20  Initial Output

var b = age.some(adultCheck);
document.write("16). " + b + "<br><br>"); // 18 and 20 passed the test so the answer is true

function  adultCheck(age){
    return age >= 18;
}



// Array every() Method
//eg:1

var age = [10, 12, 19, 18, 20];
document.write("17). " + age + "<br>"); /// 10,12,19,18,20  Initial Output

var b = age.every(adultCheck);
document.write("17). " + b + "<br><br>"); // 10 is not passed the test so the answer is false every value should pass the test
function  adultCheck(age){
    return age >= 18;
}




// Array find() Method
//eg:1

var age = [10, 12, 19, 18, 20];
document.write("18). " + age + "<br>"); /// 10,12,19,18,20  Initial Output

var b = age.find(adultAge);

function adultAge(age){
    return age >= 11;
}
document.write("18)." + b + "<br><br>")// 12 passes the test so output is 12



// Array findIndex() Method
//eg:1

var age = [10, 12, 19, 18, 20];
document.write("19). " + age + "<br>"); /// 10,12,19,18,20  Initial Output

var b = age.findIndex(adultAge);

function adultAge(age){
    return age >= 11;
}
document.write("19). " + b + "<br><br>")// 12 passes the test so the index is 1