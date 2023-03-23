import { Negociacao } from '../models/negociacao.js';
import { ListaNegociacoes } from '../models/listaNegociacoes.js';
import { NegociacoesView } from '../views/negociacoesViews.js';

export class NegociacaoController {
    _data;
    _quantidade;
    _valor;
    _filtro; //vamos ver...

    _listaNegociacoes = new ListaNegociacoes();
    _negociacoesView = new NegociacoesView();


    constructor() {
        this._data = document.querySelector('#data');
        this._quantidade = document.querySelector('#quantidade');
        this._valor = document.querySelector('#valor');
        this.filtro = document.querySelector('#filtro-input');
    }

    criarNegociacao() {
        let data = new Date(this._data.value);
        let quantidade = parseInt(this._quantidade.value);
        let valor = parseFloat(this._valor.value);
        
        let negociacao = new Negociacao(data, quantidade, valor);

        this._listaNegociacoes.adicionar(negociacao);
        this._negociacoesView.adicionarNegociacoes(negociacao);
    }

    filtroNegociacoes() {
        let valorfiltro = this.filtro.value;
        console.log(valorfiltro);

        let negociacoesFiltradas = this._listaNegociacoes.filtroPorValor(valorfiltro);
        console.log(negociacoesFiltradas);

        this._negociacoesView.atualizarFiltro(negociacoesFiltradas);
        

    };
    
}