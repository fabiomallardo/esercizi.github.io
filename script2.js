const bottone = document.getElementById("bottone2");

bottone.addEventListener("click", () => {
    let stringa = String(document.getElementById("stringa").value);
    let risultato = document.getElementById("risultato2");
    
let dividiStringa = stringa.split("");
let rimuovereCarattere = dividiStringa.slice(2,8);
let unireStringa = rimuovereCarattere.join("");
risultato.innerText = `La nuova stringa è: ${unireStringa}`

});

