function buttonClick(){
    let min = parseInt(document.getElementById("number1").value);
    let max = parseInt(document.getElementById("number2").value);

    if(min< max){

        let random = Math.random() * (max - min) + min;
        randomInt = parseInt(random);
        document.getElementById("output").innerHTML = randomInt;
    }else{
        document.getElementById("output").innerHTML = "please enter right stuff";
    }
}