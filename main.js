function Funcionarios(nome, telefone, cargo, salario ){
    this.nome = nome
    this.telefone = telefone
    this.cargo = cargo
    this.salario = salario
}

function OpCaixa(nome, telefone, cargo, salario ){
    Funcionarios.call(this, nome , telefone , "Oprerador de Caixa", 1500)

}
function Repositor(nome, telefone, cargo, salario ){
    Funcionarios.call(this, nome , telefone , "Repositor", 1200)

}
function Gerente(nome, telefone, cargo, salario ){
    Funcionarios.call(this, nome , telefone , "Gerente", 5000)

}



const Maria = new OpCaixa("Maria", 91127161)
const Jeoge = new Repositor("Jeoge", 98745214)
const Helena = new Gerente("Helena", 92321852)


console.log(Maria)
console.log(Jeoge)
console.log(Helena)