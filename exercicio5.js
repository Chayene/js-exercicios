

/* console:
let texto= "O HOMEM É O LOBO DO HOMEM";
console.log(texto.toLowerCase());
let texto2="O HOMEM É O LOBO DO HOMEM";
console.log(texto2.toLocaleUpperCase());
console.log(texto.split("")) */

let texto= prompt ("Digite o texto");
document.write (`Seu texto em letra maiúscula é: ${texto.toLocaleUpperCase()} <br>`)
document.write(`Seu texto em letra minúscula é: ${texto.toLowerCase()} <br>`)
document.write (`Seu texto em dividido é: ${texto.split("")}<br>`)

