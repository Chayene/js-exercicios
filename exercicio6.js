/* let binario= parseFloat(prompt("Digite o número binário?"));
let decimal = 0;
for (let i = 0; i < binario.length; i++) {
decimal += Math.pow(2, i) * binario[binario.length - i - 1];
}
/* document.write(`o número decimal é: ${decimal}`) */

let binario = '1010';
let decimal = 0;
for (let i = 0; i < binario.length; i++) {
decimal += Math.pow(2, i) * binario[binario.length - i - 1];
} 
console.log(decimal);
