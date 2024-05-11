// Comentarios con dos barritas 
// ESTAS SON VARIABLES
// Variables del tipo string letra o alfanumericas 

let nombre = 'nacho'
//let apellido = 'Santarelli'
// let nombreCompleto = 'Santarelli Ignacio'

// variable del tipo numerico sin comillas
//let anioActual = 2024
//let anioNacimiento = 1998   

// variable calculada en base a otras variables 
//let edad = anioActual - anioNacimiento
// dato nulo = null
// & ampersund
// || operador or, puede no cumplirse una de las funciones
// CONDICIONALES
/*
let nombreCompleto= prompt ("ingrese su nombre completo")
let edad= prompt ("ingrese su edad")
if (nombreCompleto !== "" && edad !== "") {
    console.log ( "Bienvendi@:", nombreCompleto, ".Tu edad es:", edad)
} else {    
    console.warn ("Complete correctamente sus datos")
}
*/
// COMBINAMOS OPERADORES DE && || 
/*
let nombreCompleto= prompt ("ingrese su nombre completo")
let edad= prompt ("ingrese su edad")
if ((nombreCompleto !== null && edad !== null) && (nombreCompleto !== "" && edad !== "")) {
    console.log ( "Bienvendi@:", nombreCompleto, ".Tu edad es:", edad)
} else {    
    console.warn ("Complete correctamente sus datos")
}
*/


// herramienta para interactuar con datos //
// objt console.log(texto dinamico) o (texto estatico) 

//console.log("SANTARELLI")
//console.log("edad del usuario: " + edad)

//cuadros de dialogos
//console.warn("esto es un cuadro de dialogo de advertencia")

//console.error("esto es un cuadro de dialogo de error")


//console.info("esto es un cuadro de dialogo de informacion")



// parsInt retorna numero entero
//parsFloat retorna numero con decimales respetando todo


/*
    let es viariable
    var es variable
    const es una constante
*/
// option shift A . comenta en bloque

/* // if - else if - else
// precio valido > 2000
let oferta = parseInt(prompt('Vendo computadora 💻. ESCUCHO OFERTAS.:'))
 if(oferta < 1000) {
    console.error('No pa! Esforzate un poco mas')  
} else if(oferta < 1500) {
    console.warn('Estamos cerca')
} else if(oferta < 2000) {
    console.warn('Estas cerca')
}   else {
        console.log('✅Felicitaciones! Pasa a buscar tu computadora')
    } */

    function saludar () {
        let nombre = prompt('Ingrese su nombre')
        console.log ('Bienvenido:', nombre )

    }

    saludar ()