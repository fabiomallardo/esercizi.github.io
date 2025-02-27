const bottone4 = document.getElementById("bottone6");

bottone4.addEventListener("click", () => {
    let decimo = Number(document.getElementById("decimo").value) 
    let undicesimo = Number(document.getElementById("undicesimo").value) 
    let dodicesimo = Number(document.getElementById("dodicesimo").value) 
    let tredicesimo = Number(document.getElementById("tredicesimo").value) 
    let quattordicesimo = Number(document.getElementById("quattordicesimo").value) 
    let risultato = document.getElementById("risultato6")

    let arr = [decimo, undicesimo, dodicesimo, tredicesimo, quattordicesimo];
    if (arr.some(num => num === 1 || num === 3)) {
        risultato.innerText=`Il risultato è: true`
    } else {
        risultato.innerText="Il risultato è: false"
    }
});