const form = document.getElementById('Forms');
const AttNome = [];
const NúmeroT = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarLinha();
    atualizaT();
    atualizaM();
});

function adicionarLinha() {
    const inputNome = document.getElementById('AttNome');
    const inputValor = document.getElementById('NúmeroT');

    if(NúmeroT.includes(inputValor.value)){
        alert(`O número ${inputValor.value} já existe.`);
    } else{
    NúmeroT.push(inputValor.value);
    NúmeroT.push(parseFloat(inputValor.value));

    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputValor.value}</td>`;
    linha += '</tr>';

    linhas += linha

    inputNome.value = '';
    inputValor.value = '';
    }
}

function atualizaT() {
    const corpot = document.querySelector('tbody');
    corpot.innerHTML = linhas;
}