while (true){
let nombre = prompt('Por favor, ingrese su nombre')
let cantidad = pedirNum('Ingrese la cantidad de productos que desea comprar')
let valor = 0
let total = 0

for (let i=0; i < cantidad; i++){
    let producto = prompt('Ingrese el nombre del producto')
    valor = pedirNum('Ingrese el valor de ' + '(' + producto + ')')
    total += valor
}
    alert('El valor total de su compra es: ' + total)

let monto = prompt('¿Desea abonar en EFECTIVO o TARJETA?').toUpperCase() 
if (monto == 'EFECTIVO'){
    alert('Muchas gracias ' + nombre + ' por abonar en efectivo, pase por el local')
} else if (monto == 'TARJETA'){
    alert('Muchas gracias ' + nombre + ' por abonar con tarjeta, le enviaremos un link de pago')
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