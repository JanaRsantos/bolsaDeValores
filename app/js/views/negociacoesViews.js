export class NegociacoesView {

    constructor(){
        this.tabela = document.querySelector('.tabela');
    }

    adicionarNegociacoes(negociacao){
        const tr = document.createElement('tr');

        const tdData = document.createElement('td');
        tdData.textContent = negociacao.data;

        const tdQuantidade = document.createElement('td');
        tdQuantidade.textContent = negociacao.quantidade;

        const tdValor = document.createElement('td');
        tdValor.textContent = negociacao.valor;

        tr.appendChild(tdData);
        tr.appendChild(tdQuantidade);
        tr.appendChild(tdValor);

        this.tabela.appendChild(tr);

    }

    atualizarFiltro(listaNegociacao) {
        
        this.tabela.innerHTML = '';

        listaNegociacao.forEach(negociacao => {
            const tr = document.createElement('tr');

            const tdData = document.createElement('td');
            tdData.textContent = negociacao.data;

            const tdQuantidade = document.createElement('td');
            tdQuantidade.textContent = negociacao.quantidade;

            const tdValor = document.createElement('td');
            tdValor.textContent = negociacao.valor;
            
            tr.appendChild(tdData);
            tr.appendChild(tdQuantidade);
            tr.appendChild(tdValor);
            
            this.tabela.appendChild(tr);
        });
    }

}