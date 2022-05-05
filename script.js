// let agregar = document.querySelector("#agregar-receta");
// agregar.onclick = () =>{nuevaReceta()};
// let hoy = new Date();

// let yo = "Lucho";
// const agregarReceta = () =>{
//     Swal.fire({
//         title: '¡Felicitaciones!',
//         text: 'Agregaste una nueva receta',
//         icon: 'success',
//         confirmButtonText: 'Aceptar'
//     })
//     let fecha = document.querySelector("#fecha");
//     localStorage.setItem("Fecha", fecha.value);
//     let nombre = document.querySelector("#nombre");
//     localStorage.setItem("Nombre", nombre.value);
//     let foto = document.querySelector("#foto");
//     localStorage.setItem("Foto", foto.value);
//     let dificultad = document.querySelector("#dificultad");
//     localStorage.setItem("Dificultad", dificultad.value);
//     let ingredientes = document.querySelector("#ingredientes");
//     localStorage.setItem("Ingredientes", ingredientes.value);
//     let preparacion = document.querySelector("#preparacion");
//     localStorage.setItem("Preparacion", preparacion.value);
//     return false;
// }

// const nuevaReceta = () =>{
//     let parrafo = document.createElement("form");
//     parrafo.innerHTML = `
//         <form class="p-5 formulario-receta" >
//             <label for="nombre" class="form-label">Fecha</label>
//             <input type="date" id="fecha" name="fecha" class="form-control">
//             <label for="nombre" class="form-label">Nombre</label>
//             <input type="text" id="nombre" name="nombre" class="form-control">
//             <label for="foto" class="form-label">Foto</label>
//             <input type="file" id="foto" name="foto" class="form-control">
//             <label for="dificultad" class="form-label">Dificultad</label>
//             <input type="text" id="dificultad" name="dificultad" class="form-control">
//             <label for="ingredientes" class="form-label">Ingredientes</label>
//             <input type="text" id="ingredientes" name="ingredientes" class="form-control">
//             <label for="preparacion" class="form-label">Preparacion</label>
//             <input type="text" id="preparacion" name="preparacion" class="form-control">
//             <button onclick="agregarReceta(); return false" type="submit" class="btn btn-primary">Agregar</button>
//         </form>
//     `; 
//     document.body.appendChild(parrafo);
//     agregar.remove();
// }
// const lista = document.querySelector('#listado')
const lista = document.querySelector('#listado')


const pedirClaringrilla = () =>{
    fetch('/datos.json ')
        .then( (res) => res.json())
        .then( (data) => {
    
            data.forEach((item) => {
                const li = document.createElement('li')
                li.innerHTML = `
                    <h4>${item.consigna}</h4>
                    <p>${item.letras}</p>
                    <p>Claringrilla: ${item.claringrilla}</p>
                    <hr/>
                    <p>${item.respuesta}</p>
                `
                lista.append(li)
            })
        })
}



