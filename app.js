var animals = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(animals);
var person = {
    name: "Ossian Igelberg",
    age: 31,
    student: true
};
console.log(person);
//Skriv en funktion som tar emot en sträng och returnerar en sträng. 
//Om funktionen tar emot strängen “X” ska den returnera strängen “hej X”. 
// Funktionen ska kunna ta emot vilken sträng som helst och skicka tillbaka en sträng med hej först.
function returnString(x) {
    if (x)
        return ("hej" + x);
}
console.log(returnString(" ossian igelberg, 31 år"));
// Loopa igenom arrayen av strängar och kör funktionen på varje sträng 
// och skriv ut till konsollen det du får från arrayen.
for (var i = 0; i < animals.length; i++) {
    var result = returnString(animals[i]);
    console.log(result);
}
//# sourceMappingURL=app.js.map