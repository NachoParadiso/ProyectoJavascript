function NotasParciales() {
    let promedio = 0
    let notasIngresadas = 0

    for (let i = 1; i <= 4; i++) {
        let nota = prompt(`Ingrese la nota del parcial ${i}`)
        if (nota === null) {
            console.error("El ingreso de notas fue cancelado por el alumno.")
            return
        } else if (nota === "") {
            console.warn("El alumno no ingresó una nota.");
            nota = "0"
        }

        nota = parseFloat(nota)
        if (isNaN(nota)) {
            console.error("El valor ingresado no es válido. Se tomará como 0.")
            nota = 0
        }

        promedio += nota
        notasIngresadas++
    }

    if (notasIngresadas === 0) {
        console.warn("El alumno no completó ninguna nota.")
        return
    }

    promedio = promedio / notasIngresadas
    let resultado = aprobadoOdesaprobado(promedio)
    console.log("Tu promedio en este cuatrimestre es: " + promedio)
    console.log(resultado.message)
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

    resultado.promedio = promedio
    return resultado
}
