const notasPermitidas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.addEventListener('DOMContentLoaded', () => {
    const notasForm = document.getElementById('notasForm');
    notasForm.addEventListener('submit', function(event) {
        event.preventDefault();
        calcularPromedio();
    });
});

function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);

    if (!validarNota(nota1) || !validarNota(nota2) || !validarNota(nota3) || !validarNota(nota4)) {
        alert('Las notas deben estar entre 0 y 10.');
        return;
    }

    const promedio = (nota1 + nota2 + nota3 + nota4) / 4;
    const alumno = {
        notas: [nota1, nota2, nota3, nota4],
        promedio: promedio.toFixed(2)
    };

    mostrarResultado(alumno);
    almacenarAlumno(alumno);
}

function validarNota(nota) {
    return notasPermitidas.includes(nota);
}

function mostrarResultado(alumno) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `
        <p>Promedio: ${alumno.promedio}</p>
        <p>${aprobadoOdesaprobado(alumno.promedio)}</p>
    `;
}

function aprobadoOdesaprobado(promedio) {
    if (promedio >= 7) {
        return "¡Promocionaste! 🎉";
    } else if (promedio >= 4) {
        return "¡Aprobaste! 👍";
    } else {
        return "¡Desaprobaste! 😔";
    }
}

function almacenarAlumno(alumno) {
    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];
    alumnos.push(alumno);
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
}
