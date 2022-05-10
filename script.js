/* PRODUCTOS */

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

const producto1 = new Producto ("agenda aguacates", 2500)
const producto2 = new Producto ("agenda puntos", 5500)
const producto3 = new Producto ("washitape lineas", 2600)
const producto4 = new Producto ("washitape cactus", 3000)
const producto5 = new Producto ("sticker corazones", 1500)
const producto6 = new Producto ("sticker caritas", 1500)

let productos = [producto1, producto2, producto3, producto4, producto5, producto6]


/* DECLARACION DE VARIABLES */

const formulario = document.getElementById('formulario')
const boton = document.getElementById('boton')
const resultado = document.getElementById('resultado')

/* FUNCION PARA FILTRAR PRODUCTOS */

const filtrar = () =>{
    resultado.innerHTML = ""
    const texto = formulario.value.toLowerCase()
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase()
        if(nombre.indexOf(texto) !== -1){
            resultado.innerHTML += 
            `<li> <a href="#"> ${producto.nombre} - precio: ${producto.precio} </a></li>`

        }
    }

    if(resultado.innerHTML == ""){
        resultado.innerHTML += `<li>Producto no encontrado</li>`
    }

}


boton.addEventListener('click', filtrar)



/* ¿¿¿COMO PODRIA REINICIAR EL BUSCADOR???  */