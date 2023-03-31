console.log(document.getElementById("operation").value)

function buttonClick(){
    console.log("clicked");
    let num1 = parseInt(document.getElementById("number1").value);
    let num2 = parseInt(document.getElementById("number2").value);
    let op = document.getElementById("operation").value;

    if(op == "+"){
        console.log(num1, num2, op);
        document.getElementById("result").innerHTML = "Das Ergebnis ist: " + (num1 + num2);
    }
    else if(op == "-"){
        console.log(num1, num2, op);
        document.getElementById("result").innerHTML = "Das Ergebnis ist: " + (num1 - num2);
    }
    else if(op == "*"){
        console.log(num1, num2, op);
        document.getElementById("result").innerHTML = "Das Ergebnis ist: " + (num1 * num2);
    }
    else if(op == "/"){
        console.log(num1, num2, op);
        document.getElementById("result").innerHTML = "Das Ergebnis ist: " + (num1 / num2);
    }
    else{
        document.getElementById("result").innerHTML = "Bitte gib richtiges Zeug ein";
    }
}