let random1 = Math.random() * 100; 
let random2 = Math.random() * 100; 


let random3 = Math.random() * 100;
let motorradführerschein = true;
let probezeit = false; 

let random4 = Math.random() * 100;
let elternteil = true;

let random5 = Math.random() * 10;
let codingCampus = true;

let random6 = Math.random() * 10;
let masterAbschluss = true;
let Leumundszeugnis = true;

if(random1 < random2 && random1 < 50){
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini");
}
else if(random1 < 30 || random2 < 30){
    console.log("Eine der beiden ist kleiner als 30")
}
else if(random1 < 50 && random2 != 50){
    console.log("Erste Zahl klein, zweite kein 50iger")
}

if(random3 > 24 || (motorradführerschein && !probezeit)){
    console.log("Er darf Motorrad fahren.")
}else{
    console.log("Er darf nicht Motorrad fahren.")
}

if(random4 > 14 || elternteil){
    console.log("Das Kind darf den Film sehen.")
}else{
    console.log("Das Kind darf den Film nicht sehen.")
}

if(random4 > 2 || codingCampus){
    console.log("Ich darf den Kurs besuchen.")
}else{
    console.log("Ich darf den Kurs nicht besuchen.")
}

if( (Leumundszeugnis && masterAbschluss) || (random6 > 5 && Leumundszeugnis)){
    console.log("Der Bewerber hat eine Chance auf eine Anstellung.")
}else{
    console.log("Der Bewerber hat keine Chance auf eine Anstellung.")
}