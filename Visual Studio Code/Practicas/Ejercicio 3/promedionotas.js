for (let i = 0; i <  6; i++) {
    nota = parseFloat(prompt("Ingrese su calificacion: "))
    if (nota <0 && nota <= 5)
        notas = nota / 5
    if (nota >= 3)
        console.log("Usted aprobo. ")
    else
        console.log("Usted reprobo")
    }
console.log("Su promedio fue", nota)
