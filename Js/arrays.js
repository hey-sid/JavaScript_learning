// eg:1 ==================

// var ary=[10, 20, 30, 40, 50];
// var sum =0;

// for(var a=0; a<=4; a++){
//     document.write(ary[a] + "<br>");
//     sum = sum + ary[a];
// }

// document.write("total sum:" + sum + "<br>")


// eg:2 ==================

// var ary=[10, "Sid", "Sam", true, null]; // can use multiple datatypes

// for(var a=0; a<=4; a++){
//     document.write(ary[a] + "<br>");
// }


// // eg:3 ==================
// var arry = new Array();
// arry[0]=10;
// arry[1]="Sid";
// arry[2]="Sunny";
// arry[3]=true;
// arry[4]=null;

// for(var a=0; a<5; a++){
//     document.write(arry[a] + "<br>")
// }


// eg:4 ================== how to get values from user by using promt box
// var arry = new Array();

// for(var g=0; g<6; g++){
//     arry[g] = prompt("enter the value");
// }

// for(var a=0; a<6; a++){ 
//     document.write(arry[a] + "<br>")
// }




// ========================================//
// MULTIDIMENSIONAL ARRAYS///////
// eg:1

// var ary = [
//     ["Avi", 18, "Male", "B.Com"],
//     ["Sid", 18, "Male", "BMS"],
//     ["Manasa", 18, "Male", "BSCIT"],
//     ["Supriya", 18, "Male", "M.Com"]
// ]

// document.write(ary[1][3]);//Output // It will print BMS


// // eg:2 ///////to print fixed data 

// var ary = [
//     ["Avi", 18, "Male", "B.Com"],
//     ["Sid", 18, "Male", "BMS"],
//     ["Manasa", 18, "Male", "BSCIT"],
//     ["Supriya", 18, "Male", "M.Com"]
// ];

// document.write("<table border='1px' cellspacing='0'>");
// for (var a = 0; a < 4; a++) {
//     document.write("<tr >");
//     for (var b = 0; b < 4; b++) {
//         document.write("<td >" + ary[a][b] + "</td>");
//     }
//     document.write("</tr>")
// }

// document.write("</table>");



// eg:3 /////// to print Unlimited data we use .length which means you can add unlimited data


// var ary = [
//     ["Avi", 18, "Male", "B.Com"],
//     ["Sid", 18, "Male", "BMS"],
//     ["Manasa", 18, "Male", "BSCIT"],
//     ["Vijay", 18, "Male", "M.Com"],
//     ["manisha", 18, "Male", "M.Com"],
//     ["Ronil", 18, "Male", "M.Com"],
//     ["Sai", 18, "Male", "M.Com"],
//     ["Kannya", 18, "Male", "M.Com"],
//     ["Vijay", 18, "Male", "M.Com"],
//     ["mandal", 18, "Male", "M.Com"],
//     ["Shubham", 18, "Male", "M.Com"]
// ];


// document.write("<table border='1px' cellspacing='0'>");
// for (var a = 0; a < ary.length; a++) {
//     document.write("<tr >");
//     for (var b = 0; b < ary[a].length; b++) {
//         document.write("<td >" + ary[a][b] + "</td>");
//     }
//     document.write("</tr>")
// }

// document.write("</table>");



// ========================================//
//MODIFY & DELETE ARRAYS///////
// eg:1 Modify Array

// var a = ["Sid", 22, "Madutha"];

// document.write(a + "<br>"); ///Sid, 22, Madutha

// a[1] = 20;
// document.write(a + "<br>");///Sid, 20, Madutha
// a[2] = "surname";

// document.write(a + "<br>");///Sid, 22, surname



// eg:2 Delete Array

// var a = ["Avi", 22, "jaiswal"];

// document.write(a + "<br>");

// delete a[2];
// document.write(a + "<br>"); // Avi, 22

// delete a[1];
// document.write(a + "<br>");// Avi

