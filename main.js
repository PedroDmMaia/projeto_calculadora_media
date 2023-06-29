const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emaji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste" />';
const atividade = [];
const nota = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMin = parseFloat(prompt('digite a nota mínima'));

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
    atualizaMedia();
});

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividade.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividade.push(inputNomeAtividade.value);
        nota.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMin ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>';

        linhas += linha;
    };

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMin ? spanAprovado : spanReprovado;
}

function calculaMediaFinal() {
    let somaNota = 0;

    for (let i = 0; i < nota.length; i++) {
        somaNota += nota[i];
    }

    return somaNota / nota.length;
}

