
/* const divLigada = document.querySelector('div.ligada')
const btnAddRemover = document.querySelector('#acender_apagar')

btnAddRemover.addEventListener('click', () => {
    if (divLigada.classList.contains('desligada')) {
        divLigada.classList.remove('desligada') // remove classes css do elemento
    } else {
        divLigada.classList.add('desligada')
    }
})
 */

const divLigada = document.querySelector('div.ligada')
const btnAddRemover = document.querySelector('#acender_apagar')

btnAddRemover.addEventListener('click', () => {
   divLigada.classList.toggle('desligada')
})




