import { NegociacaoController } from "../controllers/negociacaoController.js";

const negociacaoController = new NegociacaoController();
const btnEnviar = document.querySelector('#enviar');
const btnFiltro = document.querySelector('#filtro');

btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    negociacaoController.criarNegociacao();

});

btnFiltro.addEventListener('click', (event) => {
    event.preventDefault();
    negociacaoController.filtroNegociacoes();
});

const quantidade = document.querySelector('#quantidade');
quantidade.addEventListener('input', () => {
    const quantidadeDigitado = parseInt(quantidade.value);
    if (quantidadeDigitado < 1) {
        quantidade.value = 1;

    } if(quantidadeDigitado > 100){
        quantidade.value = 100;
    }
});

const valor = document.getElementById('valor');
valor.addEventListener('input', () => {
    if (valor.value > 1000000.00) {
        alert("O valor não pode ser maior que R$: 1000000.00.");
        valor.value = "";
    }
    }
)
