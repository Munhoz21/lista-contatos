const form = document.getElementById("form-atividade")
const nomes = []
const numeros = []
let linhas = ''


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
})


function adicionaLinha(){
    const inputNome = document.getElementById("nome-contato");
    const inputNumero = document.getElementById("numero-contato");

    if(nomes.includes(inputNome.value)){
        alert (`O contato ${inputNome.value} já existe.`)
    } else{
        nomes.push(inputNome.value)
        numeros.push(inputNumero.value)

        let linha = '<tr>';
        linha += `<td> ${inputNome.value} </td>`
        linha += `<td> ${inputNumero.value} </td>`
        linha += '</tr>'

        linhas += linha
    }

    inputNome.value = ''
    inputNumero.value = ''

}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}