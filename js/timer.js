const tempoHtml = document.querySelector('.tempo')
const letraHtml = document.querySelector('.letra-aleatoria')
const inputHtml = document.querySelector('#input-palavra')
const scoreHtml = document.querySelector('.score')
const listaPalavrasUsadasHTML = document.querySelector('.palavras-usadas')
const bodyHtml = document.querySelector('body')


setInterval(()=>{
    const listaDePalavrasUsadas = listaPalavrasUsadasHTML.innerHTML.split(' ')
    let tempo = parseInt(tempoHtml.innerHTML.slice(3))
    if(tempo>0){
        tempo--
        tempoHtml.innerHTML = `00:0${tempo}`
        scoreHtml.innerHTML = `score: ${listaDePalavrasUsadas.length -1}`
    } else {
        inputHtml.style.display = 'none'
        letraHtml.style.left = '30%'
        letraHtml.innerHTML = 'Perdeu'
        scoreHtml.innerHTML = `Seu score foi: ${listaDePalavrasUsadas.length -1}`
    }
},1000)