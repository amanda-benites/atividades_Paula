//---------------------------------------- ATIVIDADES SEM LIGAÇÃO COM O HTML ----------------------------------------


// ---------- Exercício 1 ----------
// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
    
//     a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
    
//     b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
    
//     c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

const idadeUsuario = Number(prompt('Digite sua idade:'))

if (idadeUsuario >= 18) {
    console.log('Você pode dirigir')
    alert('Você pode dirigir')
} else {
    console.log('Você não pode dirigir')
    alert('Você não pode dirigir')
}



// ---------- Exercício 2 ----------
// 2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

const turnoAluno = prompt('Digite para indicar o período que você estuda: \n M - matutino \n V - vespertino \n N - noturno').toUpperCase()

if (turnoAluno === 'M') {
    console.log('Bom Dia!')
    alert('Bom Dia!')
} else if (turnoAluno === 'V') {
    console.log('Boa Tarde!')
    alert('Boa Tarde!')
} else if (turnoAluno === 'N') {
    console.log('Boa Noite!')
    alert('Boa Noite!')
} else {
    console.log('Turno não encontrado')
    alert('Turno não encontrado')
}



// ---------- Exercício 3 ----------
// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

const turnoAlunoS = prompt('Digite para indicar o período que você estuda: \n M - matutino \n V - vespertino \n N - noturno').toUpperCase()

switch (turnoAlunoS) {
    case 'M':
        console.log('Bom Dia!')
        alert('Bom Dia!')
        break;
    case 'V':
        console.log('Boa Tarde!')
        alert('Boa Tarde!')
        break;
    case 'N':
        console.log('Boa Noite!')
        alert('Boa Noite!')
        break;

    default:
        console.log('Turno não encontrado')
        alert('Turno não encontrado')
        break;
}



// ---------- Exercício 4 ----------
// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso estiver abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

const generoFilme = prompt('Qual o gênero do filme vocês vão assistir?').toLowerCase()
const valorFilme = Number(prompt('Qual o valor do ingresso do filme que vocês vão assistir?'))

if (generoFilme === 'fantasia' && valorFilme <= 15) {
    console.log('Bom filme!')
    alert('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
    alert('Escolha outro filme :(')
}



// ---------- Exercício 5 ----------
// 5. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário colocou no input.

const generoFilme2 = prompt('Qual o gênero do filme vocês vão assistir?').toLowerCase()
const valorFilme2 = Number(prompt('Qual o valor do ingresso do filme que vocês vão assistir?'))

if (generoFilme2 === 'fantasia' && valorFilme2 <= 15) {
    const lanchinho = prompt('Qual lanchinho vocês vão comprar?')
    console.log(`Bom filme! Aproveite seu(s) ${lanchinho}`)
    alert(`Bom filme! Aproveite seu(s) ${lanchinho}`)
} else {
    console.log('Escolha outro filme :(')
    alert('Escolha outro filme :(')
}