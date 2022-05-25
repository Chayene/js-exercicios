let l1 = parseInt(prompt("Digite o primeiro lado")); 
let l2 = parseInt(prompt("Digite o segundo lado")); 
let l3 = parseInt(prompt("Digite o terceiro lado")); 

if (l1===l2 && l1===l3) {
    alert ("TRIÂNGULO EQUILÁTERO")
}

else if (l1===l2||l1==l3||l2===l3){
    alert ("TRIÂNGULO ISÓSCELES")
}
else {
    alert ("TRIÂNGULO ESCALENO")
}
