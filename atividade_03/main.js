
// 1. Resolva os passos a seguir
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e lista de compras (um array que sempre terá exatamente três itens). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 
// "Olá, nome. Hoje seus itens prioritários na lista de comprar são ___, ____ e ____"

const compras = {
    nome: 'Amanda',
    listaCompras: ['abacate', 'feijão', 'suco']
}

const fucaoMensagem = (objMensage) => {
    console.log(`Olá, ${compras.nome}. Hoje seus itens prioritários na lista de comprar são ${objMensage.listaCompras[0]}, ${objMensage.listaCompras[1]} e ${objMensage.listaCompras[2]}.`)
}

fucaoMensagem(compras)


// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de itens. Depois, chame a função feita no item anterior passando como argumento o novo objeto.

const compras2 = {
    ...compras,
    listaCompras: ['refrigerante', 'arroz', 'morango']
}

fucaoMensagem(compras2)

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const pessoa1 = {
    nome: 'Bia',
    idade: 17,
    profissao: 'Psicóloga'
}
const pessoa2 = {
    nome: 'Amanda',
    idade: 17,
    profissao: 'Programandora'
}
    
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

const funcaoPessoas = (objP1, objP2) => {
    const arrayPessoas = [objP1.nome, objP1.nome.length, objP1.idade, objP1.profissao, objP1.profissao.length, objP2.nome, objP2.nome.length, objP2.idade, objP2.profissao, objP2.profissao.length]
    return arrayPessoas
}

console.log(funcaoPessoas(pessoa1, pessoa2))

// 3. Resolva os passos a seguir: 
    
//     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []
    
//     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: 'Manga',
    disponivel: true
}
const fruta2 = {
    nome: 'Abacaxi',
    disponivel: true
}
const fruta3 = {
    nome: 'Pera',
    disponivel: true
}
    
//     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 
    
//     - 💡  Dica
        
//       Aqui você deve usar o método **push()**
        
const funcaoCarrinho = (fru1, fru2, fru3) => {
    carrinho.push(fru1, fru2, fru3)
    return carrinho
}

console.log(funcaoCarrinho(fruta1, fruta2, fruta3))

//     d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

console.log(carrinho)

// Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

const fucaoUser = (nameU, age, profession) => {
    const objUser = {
        nome: nameU,
        idade: age,
        profisao: profession
    }
    return objUser
}

const nomeUsuario = prompt("Digite seu nome:")
const idadeUsuario = Number(prompt("Digite sua idade:"))
const profUsuario = prompt("Digite sua profisão:")

console.log(fucaoUser(nomeUsuario, idadeUsuario, profUsuario))



