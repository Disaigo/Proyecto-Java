while (true){
let nombre = prompt('Por favor, ingrese su nombre')
let cantidad = pedirNum('Ingrese la cantidad de productos que desea comprar')
let valor = 0
let total = 0
let id = 0
    class Producto {
        constructor(nombre, precio){
            this.nombre = nombre
            this.precio = precio
            this.id = id++
        }
    }
    let productos = []

for (let i=0; i < cantidad; i++){
    let producto = prompt('Ingrese el nombre del producto')
    valor = pedirNum('Ingrese el valor de ' + '(' + producto + ')')
    total += valor
    productos.push(new Producto(producto, valor)) 
}
let lista_productos = ''
let cont = 1
    productos.forEach((elm)=>{
        lista_productos += cont + ' - ' + elm.nombre + ': $' + elm.precio + '\n'
        cont++
    })
    
alert(lista_productos + '\n' + 'El valor total de su compra es: $' + total)

let monto = prompt('¿De qué forma va a abonar? (Seleccione la opción utilizando "1, 2 o 3"). \n 1- En EFECTIVO  \n 2- En TARJETA \n 3- No tengo el dinero suficiente').toUpperCase() 
if (monto == 'EFECTIVO' || monto == '1'){
    alert('Muchas gracias ' + nombre + ' por abonar en efectivo, pase por el local')
} else if (monto == 'TARJETA' || monto == '2'){
    alert('Muchas gracias ' + nombre + ' por abonar con tarjeta, le enviaremos un link de pago')
} else if(monto == '3' || monto == 'No tengo el dinero suficiente'){
    alert('Vuelva a realizar la compra cuando tenga el dinero suficiente')
} else {alert('Ingrese una opción correcta')
}

}

function pedirNum(str){
    let num = Number(prompt(str))
    while (isNaN(num)){
        num = Number(prompt(str))
    }
    return num
}