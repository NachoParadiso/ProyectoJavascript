// CICLOS DE INTERACCION  !!! BUCLES !!!!

// CICLO FOR 
// TRES PARAMETROS desde - hasta - incremento


/* for (let i = 0; i < 21; i++) {
    console.log("interaccion numero:", i)
} */

 const paises = ['Argentina', 'Uruguay', 'Brasil', 'Chile', 'Peru', 'Bolivia'] 

for (let i = 0; i < paises.length; i++) {
    if(paises[i] === 'Uruguay' || paises[i] === 'Argentina') {
        continue // saltea el valor de la iteracion
    }
    console.log(paises [i])
    if(paises[i] === 'Chile') {
        break // corta el ciclo
    }
} 
 
// BREAK Y CONTINUE

// WHILE 
/* let repetir = true;
while (repetir) {
    console.log('Al infinito y masd alla!!!!')
    repetir = confirm('Desea repetir?')
} */