///////Switch Statement////////////////
var day = 0;

switch (day) {
    case 1:
        document.write("Today is Monday   <br>")
        break;
    case 2:
        document.write("Today is Tuesday  <br>")
        break;
    case 3:
        document.write("Today is Wednesday  <br>")
        break;
    case 4:
        document.write("Today is Thursday  <br>")
        break;
    case 5:
        document.write("Today is Friday  <br>")
        break;
    case 6:
        document.write("Today is Saturday  <br>")
        break;
    case 7:
        document.write("Today is Sunday  <br>")
        break;

    default:
        document.write("Please Enter Valid Week Day  <br>")
        break;
}

///Another Method ----> Single Statement for Multiple cases///

var day = 4;

switch (day) {
    case 1: case 2: case 3:
        document.write("Biceps and Triceps <br>")
        break;
    case 4: case 5:
        document.write("Chest an Back <br>")
        break;
    case 6:
        document.write("Legs only <br>")
        break;

    default:
        document.write("Please Enter Valid Age ")
        break;
}

/// Another Method Using Comparison Operator////

var age =65;

switch (true) {
    case (age >= 15 && age <= 17):
        document.write("Teenagers <br>");
        break;
    case (age >= 21 && age <= 30):
        document.write("Adult Age <br>")
        break;
    case (age >= 40 && age <= 60):
        document.write("Middle Age <br>")
        break;
    case (age >= 61):
        document.write("Old Age <br>")
        break;
    default:
        document.write("Please Enter Valid Age ")
        break;
}