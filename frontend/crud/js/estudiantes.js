console.log("prueba")
document.getElementById("carrera").value = "000"

let estudiantes=[]

function obtenerEstudiante(){
    let id = document.getElementById("id").value
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido").value
    let edad = document.getElementById("edad").value
    let email = document.getElementById("email").value
    let carrera = document.getElementById("carrera").value
    console.log(id,nombre,apellido,edad,email,carrera)

    /** Crear JSON primera forma
    let miEstudiante = {}
    miEstudiante.id = id
    miEstudiante.nombre = nombre
    miEstudiante.apellido = apellido
    */

    //Crear JSON segunda forma
    let miEstudiante = {id, nombre, apellido, edad, email, carrera}
    
    return miEstudiante
}

function crearEstudiante(){
    let estudiante = obtenerEstudiante()
    estudiantes.push(estudiante)
    console.log(estudiantes)
}