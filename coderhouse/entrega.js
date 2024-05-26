const notasPermitidas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let alumnos = []

function Alumno(nombre, apellido, id) {
    this.nombre = nombre
    this.apellido = apellido
    this.id = id
    this.notas = []
    this.promedio = 0
}

function NotasParciales(alumno) {
    let notasIngresadas = 0

    for (let i = 1; i <= 4; i++) {
        let nota = prompt(`Ingrese la nota del parcial ${i} de ${alumno.nombre} ${alumno.apellido}`)
        if (nota === null) {
            console.error("El ingreso de notas fue cancelado por el alumno.")
            return
        } else if (nota === "") {
            console.warn("El alumno no ingresó una nota.")
            nota = "0"
        }

        nota = parseFloat(nota)
        if (isNaN(nota) || !validarNota(nota)) {
            console.error("El valor ingresado no es válido. Se tomará como 0.")
            nota = 0
        }

        alumno.notas.push(nota)
        notasIngresadas++
    }

    if (notasIngresadas === 0) {
        console.warn("El alumno no completó ninguna nota.")
        return
    }

    alumno.promedio = alumno.notas.reduce((total, nota) => total + nota, 0) / notasIngresadas
    let resultado = aprobadoOdesaprobado(alumno.promedio)
    console.log(`${alumno.nombre} ${alumno.apellido}, tu promedio en este cuatrimestre es: ${alumno.promedio}`)
    console.log(resultado.message)

    if (resultado.message === "Aprobaste🤙🏼" || resultado.message === "Promocionaste✅🤓") {
        console.log("¡Felicidades! Aquí están las fechas de final: 24/4 y 30/4 🤞🏼")

    } else if (resultado.message === "Desaprobado❌😭") {
        let volverAnotarse = prompt("¿Te gustaría volver a anotarte para rendir en la próxima fecha? (si/no)")
        if (volverAnotarse.toLowerCase() === "si") {
            console.log("¡Genial! Aquí están las fechas de inscripción: 17/5 o 19/5!!")
        } else if (volverAnotarse.toLowerCase() === "no") {
            console.log("¡Te vamos a extrañar!😭 ")
        } else {
            console.log("Respuesta inválida. Por favor, responde 'si' o 'no'.")
        }
    }
}

function validarNota(nota) {
    return notasPermitidas.includes(nota)
}

function aprobadoOdesaprobado(promedio) {
    let resultado = {}

    if (promedio >= 7) {
        resultado.message = "Promocionaste✅🤓"
    } else if (promedio >= 4) {
        resultado.message = "Aprobaste🤙🏼"
    } else {
        resultado.message = "Desaprobado❌😭"
    }

    return resultado
}

function solicitarDatosAlumno() {
    let nombre = prompt("Ingrese el nombre del alumno:")
    if (nombre === null) {
        console.error("El ingreso fue cancelado por el alumno.")
        return
    } 
    let apellido = prompt("Ingrese el apellido del alumno:")
    if (apellido === null) {
        console.error("El ingreso fue cancelado por el alumno.")
        return
    } 
    let id = prompt("Ingrese el número de identificación del alumno:")
    if (id === null) {
            console.error("El ingreso fue cancelado por el alumno.")
            return
        } 
    return new Alumno(nombre, apellido, id)
    
}

function ArrancaProceso() {
    let alumno = solicitarDatosAlumno()
    NotasParciales(alumno)
    alumnos.push(alumno)
}

