let random = Math.random() * 1000; 
let randomAsInteger = Math.round(random);

if(randomAsInteger > 800){
    console.log("bigger than 800");
}
else if(randomAsInteger < 800 && randomAsInteger > 500){
    console.log("bigger than 500, smaller than ");
}
else{
    console.log("smaller than 500");
}