class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementoDataAniversario = document.querySelector('#data_aniversario').value
        let selectTipoConta = document.querySelector('#contas').value

        if (selectTipoConta == 'poupanca') {
            const conta = new Poupanca(elementoNumero.value,
                Number(elementoSaldo.value), elementoDataAniversario);
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
        }

        if (selectTipoConta == 'bonificada') {
            const conta = new ContaBonificada(elementoNumero.value,
                Number(elementoSaldo.value));
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
        }
        
        if (selectTipoConta == 'corrente') {
            const conta = new Conta(elementoNumero.value,
                Number(elementoSaldo.value));
            this.repositorioContas.adicionar(conta);
            this.inserirContaNoHTML(conta);
        }
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }

    exibirDataAniversario() {
        const elementoDataAniversario = document.querySelector('#dataAniversario')
        let selectTipoConta = document.querySelector('#contas').value
        elementoDataAniversario.style.display = "none"

        if (selectTipoConta === 'poupanca') {
            elementoDataAniversario.style.display = "block"
        }
    }
}
