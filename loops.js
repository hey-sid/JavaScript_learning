//////////// WHILE LOOP ///////////

var a=1;
document.write("<ul>")

while (a <= 10) {
    document.write("<li> "+ a +" While Loop</li>");

    a= a+1;  /////Or you can write like this also a++
}

document.write("</ul>")


//////////// DO / WHILE LOOP ///////////

var a= 20;

do{
    document.write(a + " Do While Loop <br>");
    a--;
}while(a >= 10);


document.write("<br>")


//////////// FOR LOOP ///////////

for (var a=1; a <= 10; a++) {
    document.write(a + "This is for Loop<br>");
}

document.write("<br>")




//////////// CONTINUE / BREAK ///////////

for (var a=1; a <= 10; a++) {
    if(a==4){
        document.write("Number " + a + " is Conditional" + "<br>");
        // continue;
        break;
    }
    
    document.write(a + "This is for Loop<br>");
}


document.write("<br>")


//////////// EVEN / ODD ///////////

for (var a=1; a <= 10; a++) {
    if(a % 2 == 0){       
        document.write(a + "<br>")
    }   
} ////////EVEN

document.write("<br>")

for (var a=1; a <= 10; a++) {
    if(a % 2 != 0){       
        document.write(a + "<br>")
    }
} ////////ODD



////////////////////////////
//////////// NESTED LOOP ///////////

// eg:1
for(var a=1; a <= 100; a= a+10){
    for(var b=a; b < a+10; b++){
        document.write(b + " ");
    }  
    document.write("<br>")
}


// eg:2
for (var a=1; a<=5; a++){
    for (var b=1; b<=a; b++){
        document.write(a + " ")
    }
    document.write("<br>")
}

