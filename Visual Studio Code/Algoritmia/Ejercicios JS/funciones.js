//El usuario digita 2 numeros y le decimos cual es mayor y cual es menor//

a = parseInt(prompt("Ingrese un primer numero: "))

function num (numero) {
    if  (numero > a)
        rta = "Mayor"
    else
        rta = ("Menor")
    return rta
}

b = parseInt(prompt("Ingrese un segundo numero: "))
console.log("El numero 2 es:",num(b))




