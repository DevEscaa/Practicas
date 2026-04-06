function numeros(n,t){
    for(let i = 1; i <= t; i++){
        resultado = n * i

    if(resultado %2 == 0)
        console.log(n,"x",i,"=",resultado,"Par")
    else
        console.log(n,"x",i,"=",resultado,"Impar")


}}



numero = parseInt(prompt("Desea saber la tabla del: "))
tabla = parseFloat(prompt("Hasta que muntiplicador: "))

numeros(numero, tabla)