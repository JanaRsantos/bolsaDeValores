export class Negociacao {
    _data;
    _quantidade;
    _valor;

    constructor(data, quantidade, valor) {
        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() { 
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return this._data.toLocaleDateString('pt-BR', options);  
    }

    calculoValorTotal(){
        return this._quantidade*this._valor;
}

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}
