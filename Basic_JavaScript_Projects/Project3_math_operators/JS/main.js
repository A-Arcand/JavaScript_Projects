function addition() {  //Defining and namming the function
    var add = 2+2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + add //Prints result in HTML
}

function subtraction() {  //Defining and namming the function
    var subtract = 7-2;
    document.getElementById("Subtract").innerHTML = "7 - 2 = " + subtract //Prints result in HTML
}

function multiplication() {  //Defining and namming the function
    var multiply = 10*2;
    document.getElementById("Multiply").innerHTML = "10 * 2 = " + multiply //Prints result in HTML
}

function division() {  //Defining and namming the function
    var divide = 10/2;
    document.getElementById("Divide").innerHTML = "10 / 2 = " + divide //Prints result in HTML
}

function modulus_operator() {  //Defining and namming the function
    var modulus = 27 % 2;
    document.getElementById("Modulus").innerHTML = "27 % 2 = " + modulus //Prints result in HTML
}

function Increment() {  //Defining and namming the function
    var value = document.getElementById("Increment").innerHTML; //Saves the HTML element text to a variable

    value++; //Adds one to the value

    document.getElementById("Increment").innerHTML = value; //Prints result in HTML
}

function Decrement() {  //Defining and namming the function
    var value = document.getElementById("Decrement").innerHTML; //Saves the HTML element text to a variable

    value--; //Subtract one to from value

    document.getElementById("Decrement").innerHTML = value; //Prints result in HTML
}

function Random() {  //Defining and namming the function
    document.getElementById("Random").innerHTML = (Math.random()*100); //Prints result in HTML
}