
let buttonText = document.getElementById('button-text')  //creem l'element per portar el button
buttonText.addEventListener("click", clicked)   //cridem l'element i introduim 2 paràmetres:
                                                //1.event "click"
                                                //2.funció que executarà "clicked" que definim a continuació

let text = document.getElementById('text') //creem l'element per portar el text
text.addEventListener("copy", copied) //cridem l'element i fiquem l'event entre cometes i el paràmetre que executarà després d'una coma.
text.addEventListener("click", clicked)   //un element pot tenir diversos listeners, podem repetir-los

let image = document.getElementById('image')
image.addEventListener("drag", dragged)

let input = document.getElementById('input')  //fem que porti l'input
input.addEventListener("keydown", textModified) //pot ser keydown, keypress o keyup

function clicked() {
    alert('You have clicked')
}

function copied() {
    alert('Copied text')
}

function dragged() {
    alert('You have dragged the element')
}

function textModified() {
    let inputText = document.getElementById('input-text')  //dins la funció portem l'input-text, el text per canviar.
    inputText.innerText = input.value // l'input text té un text interior que ha de ser com el nostre input (línea 14) i el seu valor
}

