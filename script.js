let consignas = [];
let contador = 0;
let respuestaCorrecta = "";
const pedirClaringrilla = () =>{
    fetch('/datos.json ')
        .then( (res) => res.json())
        .then( (data) => {
            for(let consigna of data){
                consignas.push(consigna);
            }
            consignas = shuffle(consignas);
            const boton = document.querySelector('#generador_claringrilla');
            boton.remove();
            
        }).then((res)=>{
            generarClaringrilla(contador);
            botonComparar();
        })
}


/* Función para mezclar arrays */
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    
        return array;
}

//Generador de boton comparar
const botonComparar = () =>{
    const comparar = document.createElement('div')
    comparar.innerHTML = `
    <button class="btn btn-primary btn-lg"  id="generador_claringrilla" onclick="siguienteClaringrilla(contador)">Comparar respuesta</button>
    `
    lista.append(comparar)
}

const lista = document.querySelector('#listado');
const generarClaringrilla = (pregunta) =>{
    const li = document.createElement('li')
    li.innerHTML = `
        <h4>${consignas[pregunta]['consigna']}</h4>
        <p>${consignas[pregunta]['letras']}<br>
        Claringrilla: ${consignas[pregunta]['claringrilla']}</p>
        <label for="respuesta">Respuesta</label>
        <input type="text" class="form-control" id="respuesta" placeholder="Respuesta">
        <hr/>
    `
    respuestaCorrecta = consignas[pregunta]['respuesta'];
    lista.append(li)
    contador++;
    if(contador == consignas.length){
        contador = 0;
    }
}
const siguienteClaringrilla = () =>{
    let respuestaUsuario = document.querySelector('#respuesta').value;
    respuestaUsuario = normalizar(respuestaUsuario);
    respuestaCorrecta = normalizar(respuestaCorrecta);
    if(respuestaUsuario == respuestaCorrecta){
        Swal.fire({
            title: '¡Felicitaciones!',
            text: 'Tu respuesta es correcta',
            icon: 'success',
            confirmButtonText: 'Aceptar'    
        })
    }else{
        Swal.fire({
            title: '¡Que pena!',
            text: 'Tu respuesta es incorrecta',
            icon: 'error',
            confirmButtonText: 'Aceptar'    
            })
    }
    const claringrilla = document.querySelector('li');
    const boton = document.querySelector('#generador_claringrilla');
    claringrilla.remove();
    boton.remove();
    generarClaringrilla(contador);
    botonComparar();
}

//Sacar acentos y pasar a minusculas
const normalizar = (str) =>{
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}