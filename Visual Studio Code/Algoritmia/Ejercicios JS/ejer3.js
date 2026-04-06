function numeros (l){
    t = 0
    for(let i = 0; i < l ; i++) {
        nota = parseFloat(prompt("Ingrese nota: "+i))
        t+=nota
        console.log("Nota ingresada: "+nota)
    }
    console.log("La nota definitava es: "+(t/l))
}

n = parseInt(prompt("Cuantas notas desea Ingresar: ") )
numeros(n);

