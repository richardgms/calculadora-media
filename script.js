function calcular(){

    let n1 = parseFloat(document.querySelector("#n1").value)
    let n2 = parseFloat(document.querySelector("#n2").value)
    let n3 = parseFloat(document.querySelector("#n3").value)
    let media = document.querySelector("#media")
    let sit = document.querySelector("#situacao")
    let nMedia = (n1 + n2 + n3) / 3;

    media.textContent = "Sua média é: " + nMedia.toFixed(1)

    if (nMedia >= 7) {
        sit.textContent = "Aprovado!"
    } 
    
    else if (nMedia >= 5){
        sit.textContent = "Final."
    }

    else {
        sit.textContent = "Reprovado."
    }
}
