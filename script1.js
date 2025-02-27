const button = document.getElementById("bottone")
let risultato = (document.getElementById("risultato"));

button.addEventListener("click", () => {
let primo = Number(document.getElementById("primo").value);
let secondo = Number(document.getElementById("secondo").value);
    
if (primo === 50  || secondo === 50 || primo + secondo === 50) {
    risultato.innerText = "Il risultato è : true"
} else {
     risultato.innerText = "Il risultato è : false"
}

})

