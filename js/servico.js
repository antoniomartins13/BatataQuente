//importa a lista de palavras
import { listaDePalavras } from "./dados.js";

//Faz a lista do alfabeto sem o k,w,y
const alfabeto = 'abcdefghijlmnopqrstuvxz'.split('')

//pega os elementos html
const letraHtml = document.querySelector('.letra-aleatoria')
const inputHtml = document.querySelector('#input-palavra')
const bodyHtml = document.querySelector('body')
const tempoHtml = document.querySelector('.tempo')
const listaPalavrasUsadasHTML = document.querySelector('.palavras-usadas')

//Lista com palavras que ja saíram
const listaDePalavrasUsadas = []

const adicionarPalavraUsada = (palavra) =>{
    listaDePalavrasUsadas.push(palavra)
}

//Adiciona letra aleatoria na bomba
const adicionarLetraAleatoria = () => {
    const letraAleatoria = alfabeto[Math.floor(Math.random() * alfabeto.length)]
    letraHtml.innerHTML = letraAleatoria
    reniciarTempo()
}

//renicia o tempo 
const reniciarTempo = () => {
    tempoHtml.innerHTML = '00:10'
}

//chama a função adicionarLetraAleatoria
adicionarLetraAleatoria()

const verificarPalavra = () => {
    //pega a palavra escrita no input
    const palavra = inputHtml.value.toLowerCase().trim().split('')
    const palavraIniciaCerto = palavra[0] == letraHtml.innerHTML
    //Trata ascentos de palavra
    const palavraTratada = palavra.map((item) => {
        if(item == 'á' || item == 'à' || item == 'ã'){
            return 'a'
        } else if(item == 'é' || item == 'ê'){
            return 'e'
        } else if(item == 'í'){
            return 'i'
        } else if(item == 'ô' || item == 'ó' || item == 'õ'){
            return 'o'
        } else {
            return item
        }
    }).reduce((acc, item) => acc + item,'')

    //Verifica se a palavra inicia certo
    if(palavraIniciaCerto){
        //verifica se ja usou essa palavra
        if(listaDePalavrasUsadas.includes(palavraTratada)){
            bodyHtml.style.backgroundColor = '#6a3135'
        }else{
            //Verifica se a palavra ta no dicionario
            if(listaDePalavras.includes(palavraTratada)){
                bodyHtml.style.backgroundColor = 'green'
                adicionarLetraAleatoria()
                adicionarPalavraUsada(palavraTratada)
                inputHtml.value = ''
                criarListaPalavrasUsadasEmHtml()
                return
            } else {
                bodyHtml.style.backgroundColor = '#6a3135'
                return
            }
        }
    } else {
        bodyHtml.style.backgroundColor = '#6a3135'
        return
    }
}

//Coloca o enter para fazaer a função verificar palavra
bodyHtml.addEventListener('keydown',(e) => {
    if(e.key == 'Enter'){
    //e.preventDefault() não deixa da enter com o input vazio
     e.preventDefault()
     verificarPalavra()
    }
})

const criarListaPalavrasUsadasEmHtml = () => {
    console.log(listaDePalavrasUsadas);
    listaPalavrasUsadasHTML.innerHTML = listaDePalavrasUsadas.reduce((acc,item) => acc + ' ' +item,'')
}