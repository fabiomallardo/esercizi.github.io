const bottone3 = document.getElementById("bottone5");

bottone3.addEventListener("click", () => {
    let quinto = Number(document.getElementById("quinto").value)
    let sesto = Number(document.getElementById("sesto").value)
   let settimo = Number(document.getElementById("settimo").value)
   let ottavo = Number(document.getElementById("ottavo").value)
   let nono = Number(document.getElementById("nono").value)
   let risultato = document.getElementById("risultato5")

   let arr = [quinto, sesto, settimo, ottavo, nono];
   let somma = arr.reduce((ciao, ciao2) => ciao + ciao2)
    risultato.innerText = `La somma è: ${somma}`
})