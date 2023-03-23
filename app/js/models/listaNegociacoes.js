export class ListaNegociacoes {
    _negociacoes = [];

    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
        return negociacao
    }

    get negociacoes() {
        return [].concat(this._negociacoes);
    }

    filtroPorValor(valorMinimo) {
        return this._negociacoes.filter(negociacao => negociacao.valor >= valorMinimo);
    }
    



}