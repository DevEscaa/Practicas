
num = parseInt(Math.random() * 117)
numeros = []

do{
    adivina = parseInt(prompt("Ingrese su numero: "))
    numeros.push(adivina)

    if (adivina > num){
        console.log("El numero adivninar es menor. ")
    }
    else if (adivina < num){
        console.log("El numero adivinar es mayor. ")
    }
    else{
        console.log("Usted adivino el numero. ")
    }
}
while(adivina !== num)

console.log(numeros.length)
console.log(numeros)