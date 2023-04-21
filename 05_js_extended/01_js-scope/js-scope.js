if(true){
    var varTest = "var Test"; // function scoped
}

console.log(varTest);

if(true){
    let letTest = "let Test"; // block scoped
    console.log(letTest);
}

const constTest = "const Test";
console.log(constTest);

//constTest = "const error"; // throws error

const constTest2 = {name: "Steven"};
console.log(constTest2.name);

constTest2.name = "Maria";
console.log(constTest2.name);