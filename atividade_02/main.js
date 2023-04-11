// // Atividades

// // 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.
const funcaoArea = (altura, largura) => {
    return (altura * largura)
}

const a1 = Number(prompt("Digite o valor da altura:"))
const l1 = Number(prompt("Digite o valor da largura:"))
console.log(funcaoArea(a1, l1))

// // 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.
function funcaoIdade(atual, nasc) {
    idade = atual - nasc
    return idade
}

const v1 = Number(prompt("Digite o ano atual:"))
const v2 = Number(prompt("Digite o ano do seu nascimento:"))

console.log(funcaoIdade(v1, v2))

// // 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).
const funcaoImc = (peso, altura) => {
    imc = peso / (altura**2)
    return imc
}

const a = Number(prompt("Digite seu peso em kg:"))
const b = Number(prompt("Difite sua altura em metros:"))

console.log(funcaoImc(a, b))

// // 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.
function funcaoString(str1, str2) {
    return (str1.length === str2.length)
}

const x = prompt("Digite uma palavra:")
const y = prompt("Digite outra palavra:")

console.log(funcaoString(x, y))

// // 5. Escreva uma função que recebe um array e retorna o último elemento.
const ultimoElem = (array) => {
    return array.pop()
}

const elem = prompt("Digite vários elementos separados por vírgula e espaço:").split(', ')
console.log(ultimoElem(elem))


// // 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.
function funcaoIguais(m, n) {
    return m.toLowerCase() === n.toLowerCase()
}

const m1 = prompt("Digite uma palavra:")
const n1 = prompt("Digite outra palavra:")

console.log(funcaoIguais(m1, n1))

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

const funcaoIdent = (anoAtual, anoNasc, anoIdent) => {
    age = anoAtual - anoNasc
    renova = anoAtual - anoIdent
    if(age <= 20) {
        if(renova >= 5) {
            return true
        } else {
            return false
        };
    } else if(age > 20 && age <= 50) {
        if(renova >= 10) {
            return true
        } else {
            return false
        };
    } else if(age > 50) {
        if(renova >= 15) {
            return true
        } else {
            return false
        };
    }
}

atualAno = Number(prompt("Digite o ano atual:"))
nascAno = Number(prompt("Digite o seu ano de nascimento:"))
identAno = Number(prompt("Digite o ano em que foi emitida sua carteira de identidade:"))

console.log(funcaoIdent(atualAno, nascAno, identAno))