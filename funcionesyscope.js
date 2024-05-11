// FUNCIONES Y SCOPE
/* let nombre = ''

function saludar () {
    nombre = prompt ('Ingrese su nombre:')
    // validacion
    console.log('bienvenido:', nombre)
}

function obtenerNombreUsuario () {
    console.log(nombre)

}

saludar () // llamado de funcion para que se ejecute
 */

let nombre = ''

function IngresarNombre () {
    nombre = prompt('Ingresa tu nombre de usuario:')
    saludar(nombre)
}
function saludar (nombreUsuario) {
    if (nombreUsuario === undefined) {
        console.warn('Ingresa un parametro correcto!')
    } else { console.log('👋🏼✅Bienvenido:', nombreUsuario)
    }
}

let importe = 0

function IngresarImporte(){
    importe = parseFloat(prompt('Ingrese el valor del producto'))
    calcularImporteFinal (importe, IVA)

}

function calcularImporteFinal (importe, Impuesto) {
    console.log('💵El importe final es de:', importe * Impuesto)

}

function concatenarNombre (nombre, apellido) {
    return nombre + '' + apellido

}

// SCOPE UTILIZA UNA UNICA FUNCION UNA VEZ Y LA BORRA DE LA MEMORIA

/* let resultado = 0
function sumar (a, b) {
    const resultado = a + b // SI SACAMOS EL LET O CONST AFECTAMOS AL RESULTADO GLOBAL
    return resultado
} */
function restar (a, b) {
    const resultado = a - b
    return resultado
}

const sumar = function (a,b) { //funciones anonimas
    console.log(a + b)

}

// CALCULADORA PORCENTAJE
function calcularPorcentaje() {
    var numero = parseFloat(document.getElementById('numero').value);
    var porcentaje = parseFloat(document.getElementById('porcentaje').value);
    if (!isNaN(numero) && !isNaN(porcentaje)) {
      var resultado = numero * (porcentaje / 100);
      document.getElementById('resultado').innerHTML = "El " + porcentaje + "% de " + numero + " es: " + resultado.toFixed(2);
      // Actualizar el gráfico de barras
      document.getElementById('barraPorcentaje').style.width = porcentaje + "%";
      document.getElementById('barraPorcentaje').setAttribute('aria-valuenow', porcentaje);
    } else {
      alert('Por favor ingrese números válidos.');
    }
  }
  


  //ejemplo de fx constructora MSAPVNSAPNFA
  const IVA = 1.21 // Impuesto iva


class Producto {
    constructor(id, nombre, importe, stock) {
        this.id = id
        this.nombre = nombre
        this.importe = importe
        this.stock = stock
    }


    PrecioConIva () {
        return this.importe * IVA
    }

    descontarStock (unidadesVendidas) {
        if (unidadesVendidas > 0 && unidadesVendidas <= this.stock) {
            this.stock = this.stock - unidadesVendidas
        } else {
            console.error(" Debes informar un valor optimo para las unidades vendidas")
    }
    }
}
const producto1 = new Producto (1, "Lampara Sillon", 80, 10)
const producto2 = new Producto (2, "Kit Triadas", 10, 50)
const producto3 = new Producto (3, "Cavit", 59, 30)
