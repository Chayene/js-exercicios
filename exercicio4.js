
let qtdeNumeros= parseFloat(prompt("Quantos números deseja digitar?"));
let valores=[];

for (let i=0;i<qtdeNumeros;i++){

    let valor=parseFloat(prompt(`Digite o ${i+1} numero`));
    valores.push(valor)
}
/*----------------------------------------------------------------------------------------*/
let soma=0;

for (let valorSoma of valores){
    soma+=valorSoma ; 
}
/*----------------------------------------------------------------------------------------*/
const media= soma/qtdeNumeros

/*----------------------------------------------------------------------------------------*/
let potencia =valores.map(function(pot){
    return pot**2;
})
/*----------------------------------------------------------------------------------------*/
var raizQuadrada=valores.map(function(quad){
    return (quad**(1/2)).toFixed(2);
})

var raizCubica=valores.map(function(cubico){
    return (cubico**(1/3)).toFixed(2);
   
})


/*----------------------------------------------------------------------------------------*/
document.write ("os <strong> números </strong> são: " + valores + "<br>" )
document.write ("o valor da <strong> soma </strong> é: " + soma + "<br>" )
document.write ("o valor da <strong> média </strong> é: " + media + "<br>" )
document.write ("o valor da <strong> potência </strong> é: " + potencia + "<br>" )
document.write ("o valor da <strong> raiz quadrada </strong> é: " + raizQuadrada + "<br>" )
document.write ("o valor da <strong> raiz cúbica </strong> é: " + raizCubica + "<br>" )


 