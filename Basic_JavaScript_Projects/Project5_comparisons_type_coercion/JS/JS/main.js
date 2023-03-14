var x = true; //variable with Boolean data

document.write(typeof x); //printing the data type of variable x
document.write("<br>");

document.write("10" + 10); //combining a string and a number
document.write("<br>");

document.write(10 == 10); //using the == operator
document.write("<br>");

x=10; // using the === operator
y=10;
document.write(x === y);
document.write("<br>");

document.write(5 > 2 && 10 > 4); //using > and && operators
document.write("<br>");

document.write(5 < 10 || 10 < 4); //using < and || operators
document.write("<br>");


function not_Function(){  // using ! operator
    document.getElementsById("Not").innerHTML = !(20 > 10);
}