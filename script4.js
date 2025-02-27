const bottone2 = document.getElementById("bottone4");

bottone2.addEventListener("click", ()=> {
    const stringa1 = String(document.getElementById("stringa1").value);
    const risultato = document.getElementById("risultato4");

    if (stringa1.startsWith("Los") || stringa1.startsWith("New")) {
        risultato.innerText = `La parola è: ${stringa1}`;
    } else {
        risultato.innerText = "Il risultato è : false"
    }
})