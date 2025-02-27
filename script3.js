const bottone1 = document.getElementById("bottone3");

bottone1.addEventListener("click", () => {
    const primo = Number(document.getElementById("terzo").value)
    const secondo = Number(document.getElementById("quarto").value)
    const risultato = document.getElementById("risultato3");

    if (primo > 40 && primo < 60 && secondo < 60 && secondo > 40 || primo < 100 && primo > 70 && secondo < 100 && secondo > 70) {
        risultato.innerText = "Il risultato è: true"
    } else {
        risultato.innerText = "Il risultato è: false"
    }
});