let x=parseInt(prompt("Digite o número X"))
let y=parseInt(prompt("Digite o número Y"))

let troca =x
x=y
y=troca

/* alert("Antes X era: "+ x + " e o invertido é: "+y)
alert("Antes Y era: " +y+ " e o invertido é: "+x) */

document.write ("Antes X era: "+ y + " e o invertido é: "+x )
document.write (" , Antes Y era: "+ x + " e o invertido é: "+y)