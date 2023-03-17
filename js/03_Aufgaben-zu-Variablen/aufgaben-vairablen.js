let banana = "Banane";
let apple = "Apfel"; 

let bananaPriceKilo = 2.14;
let applePriceKilo = 3.43; 

let avgAppleWeight = 0.34;
let avgBananaWeight = 0.22;

console.log(1/avgAppleWeight + " apples per kg, " +1/avgBananaWeight + " bananas per kg")
console.log(applePriceKilo*avgAppleWeight + " price per apple, " + bananaPriceKilo*avgBananaWeight + " price per banana")

console.log("cost of 8 apples: " + 8*avgAppleWeight*applePriceKilo)
console.log("cost of 17 bananas: " + 17*avgBananaWeight*bananaPriceKilo)

console.log("cost of 1 tonne of apples: " + applePriceKilo * 1000)
console.log("cost of 1 tonne of bananas: " + bananaPriceKilo * 1000)