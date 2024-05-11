function NotasParciales() {
    let promedio = 0

    for (let i = 1; i <= 4; i++) {
        let nota = parseFloat(prompt(`Ingrese la nota del parcial ${i}`))
        promedio += nota
    }

    promedio = promedio / 4
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

