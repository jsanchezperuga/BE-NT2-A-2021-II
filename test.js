const elSpan = document.getElementById("elSpan");
const elUl = document.getElementById("elUl");
const spanCounter1 = document.getElementById("spanCounter")
const spanCounter2 = document.getElementById("spanOtroCounter")

let count = 0;

sumarCount(spanCounter1);

function testFuncion(){
console.log('esto anda');}

function createButton(){
    const boton = document.createElement('button');
    boton.innerHTML = "Boton de la victoria"
    boton.addEventListener("click", onButtonClick)
    elSpan.append(boton);
}

function crearElemento(msj){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const but = document.createElement('button');
    but.innerHTML = " X ";
    but.addEventListener("click",borrarItem)
    span.innerHTML = msj;
    li.appendChild(span);
    li.appendChild(but);

    return li;
}

function borrarItem(){
    const parent = this.parentElement;
    parent.remove();
    count--;
    spanCounter1.innerHTML = `${count}`
}

function sumarCount(counter){
    count++;
    counter.innerHTML = `${count}`
}

function onButtonClick(){
    const msj = prompt();
    if(msj){
        const elemento = crearElemento(msj);
        elUl.appendChild(elemento);
        sumarCount(spanCounter);
    }
   
}