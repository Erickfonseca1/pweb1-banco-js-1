const c1 = new Conta('1', 100);
const c2 = new ContaBonificada('2', 10);
const c3 = new Poupanca('3', 1000, '13-10-2002')

const contaController = new ContaController();
contaController.adicionarConta(c1);
contaController.adicionarConta(c2);
contaController.listar();

const contaBonificada = new ContaBonificada('10', 100);
contaBonificada.creditar(10);
console.log(contaBonificada.saldo);

const repContas = new RepositorioContas();

// const c1 = new Conta('1', 100);
// const c2 = new Conta('2');

repContas.adicionar(c1);
repContas.adicionar(c2);
repContas.adicionar(c3);

repContas.getContas().forEach(conta => console.log(conta))

// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c1.saldo = 200;
//
// c1.debitar(50);
// c2.creditar(1000);
// console.log(c1.saldo)
// console.log(c2.saldo)
//
// c2.transferir(c1, 500);
// console.log(c1.saldo)
// console.log(c2.saldo)
