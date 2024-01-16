let animals: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"]
console.log(animals)

// Skapa ett objekt med tre egenskaper. En sträng, en siffra och en boolean. 
// Skriv ut objektet till console och testkör.

type Person = {
    name: string;
    age: number;
    student: boolean;
}

let person: Person = {
    name: "Ossian Igelberg",
    age: 31,
    student: true

}
console.log(person)

//Skriv en funktion som tar emot en sträng och returnerar en sträng. 
//Om funktionen tar emot strängen “X” ska den returnera strängen “hej X”. 
// Funktionen ska kunna ta emot vilken sträng som helst och skicka tillbaka en sträng med hej först.
function returnString (x: string) {
    
    if (x) return ("hej" + x)
}

console.log(returnString(" ossian igelberg, 31 år"))

// Loopa igenom arrayen av strängar och kör funktionen på varje sträng 
// och skriv ut till konsollen det du får från arrayen.
for (let i = 0; i < animals.length; i++) {
    const result = returnString(animals[i])
    console.log(result)
}