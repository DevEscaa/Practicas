
function sumar (){
    n1 = parseInt(document.getElementById("n1").value)
    n2 = parseInt(document.getElementById("n2").value)
    suma = n1+n2
    document.getElementById("resultado").value=suma
    texto = document.getElementById("resultexto").textContent
    document.getElementById("resultexto").textContent=texto+suma
}

//Ejercicio 1
function calcular(){
    compra = parseInt(document.getElementById("compra").value)
    iva = parseFloat(document.getElementById("iva").value)
    total= (compra*iva)/100
    totaltotal = total+compra

    document.getElementById("total").value=totaltotal
    op = document.getElementById("total1").textContent
    document.getElementById("total1").textContent=op+totaltotal
}
//Ejercicio 2
function cuadrado(){
    lado = parseFloat(document.getElementById("lado").value)
    area = Math.pow(lado,2)
    perimetro = lado * 4

    document.getElementById("area").value = area
    ope = document.getElementById("area1").textContent
    document.getElementById("area1").textContent=ope+area

    document.getElementById("perimetro").value = perimetro
    ope1 = document.getElementById("perimetro1").textContent
    document.getElementById("perimetro1").textContent =  ope1 + perimetro
}
//Ejercicio 3
function num(){
    numero = parseInt(document.getElementById("numero").value)
    unidades = numero%10
    decenas = Math.floor(numero/10)

    document.getElementById("unidades").value = unidades
    op1 = document.getElementById("unidades1").textContent
    document.getElementById("unidades1").textContent=op1+unidades

    document.getElementById("decenas").value = decenas
    op2 = document.getElementById("decenas1").textContent
    document.getElementById("decenas1").textContent=op2+decenas
    
}
//Ejercicio 4
function tortilla(){
    let comensales = parseInt(document.getElementById("comensales").value);

    let patatas = comensales * 200
    let huevos = (patatas / 1000)  * 5;
    let cebolla = (patatas / 1000) * 300;

    document.getElementById("patatas").value = patatas
    document.getElementById("huevos").value = huevos
    document.getElementById("cebolla").value = cebolla

    let opera1 = document.getElementById("patatas1").textContent
    document.getElementById("patatas1").textContent = opera1 + patatas + "g "

    let  opera2 = document.getElementById("huevos1").textContent
    document.getElementById("huevos1").textContent = opera2 + huevos + " "

    let opera3 = document.getElementById("cebolla1").textContent
    document.getElementById("cebolla1").textContent = opera3 + cebolla + "g "
}

let numeroSecreto = Math.floor(Math.random() * 101)
let  intentos = 0
let numerosIngresados  = ""
//Ejercicio 5
function iniciarJuego(){
    numeroSecreto = Math.floor(Math.random() * 101)
    intentos =  0
    numerosIngresados = ""

    document.getElementById("pista").value = ""
    document.getElementById("intentos1").textContent = "Intentos: "
    document.getElementById("numeros1").textContent =  "Numeros ingresados: "
    document.getElementById("numeros5").value = " "
}

function adivinar(){
    if(intentos >= 15){
        document.getElementById("pista").value = "Se acabaron los intentos"
        return
    }
    let nume = parseInt(document.getElementById("numero5").value)
    intentos++
    numerosIngresados = numerosIngresados + nume + " "

    document.getElementById("intentos1").textContent = "Intentos: " + intentos
    document.getElementById("numeros1").textContent =  "Numeros ingresados: " + numerosIngresados;

    if(nume === numeroSecreto){
        document.getElementById("pista").value = "Bien el numero es: " + numeroSecreto;
    } else if (intentos >= 15){
        document.getElementById("pista").value = "Perdiste el numero era: " + numeroSecreto;
    } else if (nume < numeroSecreto){
        document.getElementById("pista").value = "El numero es MAYOR"
    } else{
        document.getElementById("pista").value = "El numero es MENOR"
    }
}
//Ejercicio 6
function fibonacci(){
    let cantidad = parseInt(document.getElementById("cantidad").value)
    let a = 0
    let b = 1
    let serie = "0, 1"

    for(let i = 2; i < cantidad; i++){
        let siguiente = a + b
        serie = serie + ", " + siguiente
        a = b
        b = siguiente
    }

    document.getElementById("resultado6").textContent = "Serie: " + serie
}
//Ejercicio 7
function mayor(){
    let num1 = parseFloat(document.getElementById("num7a").value)
    let num2 = parseFloat(document.getElementById("num7b").value)

    if(num1 > num2){
        document.getElementById("resultado7").textContent ="Resultado: El número " + num1 + " es MAYOR"

    } else if(num2 > num1){
        document.getElementById("resultado7").textContent ="Resultado: El número " + num2 + " es MAYOR"

    } else {
        document.getElementById("resultado7").textContent ="Resultado: Los dos números son IGUALES"
    }
}
//Ejercicio 8
function factorial(){
    let numero = parseInt(document.getElementById("num8").value)
    if(numero < 0){
        document.getElementById("resultado8").textContent ="Factorial:  No existe factorial de números negativos"
        return
    }
    if(numero === 0){
        document.getElementById("resultado8").textContent = "Factorial: 1"
        return
    }
    let resultado = 1;  0
    for(let i = 1; i <= numero; i++){
        resultado = resultado * i
    }
    document.getElementById("resultado8").textContent =
        "Factorial de " + numero + " = " + resultado
}
//Ejercicio 9
function multiplosSeis(){
    let num1 = parseInt(document.getElementById("num9a").value)
    let num2 = parseInt(document.getElementById("num9b").value)

    let multiplos = ""

    for(let i = num1; i <= num2; i++){
        if(i % 6 === 0){
            multiplos = multiplos + i + "  "
        }
    }
    if(multiplos === ""){
        multiplos = "No hay múltiplos de 6 en ese rango"
    }
    document.getElementById("resultado9").textContent ="Múltiplos de 6: " + multiplos
}
//Ejercicio 10
function arreglo10(){
    let numeros = []
    let pares = []
    let impares = []

    for(let i = 0; i < 20; i++){
        let aleatorio = Math.floor(Math.random() * 101)
        numeros.push(aleatorio)
    }
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] % 2 === 0){
            pares.push(numeros[i])
        } else {
            impares.push(numeros[i])
        }
    }
    document.getElementById("todos10").textContent ="Todos: " + numeros
    document.getElementById("pares10").textContent ="Pares: " + pares
    document.getElementById("impares10").textContent ="Impares: " + impares
}
//Ejercicio 11
function arreglo11(){
    let numeros = []

    for(let i = 0; i < 10; i++){
        let aleatorio = Math.floor(Math.random() * 11) + 10
        numeros.push(aleatorio)
    }
    document.getElementById("original11").textContent ="Arreglo original: " + numeros

    let sinMultiplos = numeros.filter(function(num){
        return num % 3 !== 0
    })

    document.getElementById("modificado11").textContent = "Sin múltiplos de 3: " + sinMultiplos
}
//Ejercicio 12
function triangulo(){
    let a = parseFloat(document.getElementById("ladoA").value)
    let b = parseFloat(document.getElementById("ladoB").value)
    let c = parseFloat(document.getElementById("ladoC").value)

    if((a + b <= c) || (a + c <= b) || (b + c <= a)){
        document.getElementById("area12").textContent ="Esos lados no forman un triángulo válido"
        document.getElementById("tipo12").textContent = ""
        return
    }

    let s = (a + b + c) / 2
    let area = Math.sqrt(s * (s-a) * (s-b) * (s-c))
    let tipo = ""
    if(a === b && b === c){
        tipo = "Equilátero  (los 3 lados son iguales)"
    } else if(a === b || b === c || a === c){
        tipo = "Isósceles  (2 lados son iguales)"
    } else {
        tipo = "Escaleno  (los 3 lados son diferentes)"
    }
    document.getElementById("area12").textContent ="Área: " + area.toFixed(2)
    document.getElementById("tipo12").textContent ="Tipo: " + tipo
}
//Ejercicio 13
function prepararPalabras(){
    let cantidad = parseInt(document.getElementById("cantPalabras").value)
    let contenedor = document.getElementById("inputsPalabras")
    contenedor.innerHTML = ""
    for(let i = 0; i < cantidad; i++){
        contenedor.innerHTML = contenedor.innerHTML +
            "<br><label>Palabra " + (i+1) + ": </label>" +
            "<input type='text' id='palabra" + i + "' placeholder='Palabra " + (i+1) + "'><br>"
    }
    document.getElementById("btnCalcular").style.display = "inline";
}

function calcularPalabras(){
    let cantidad = parseInt(document.getElementById("cantPalabras").value)
    let palabras = []
    let caracteres = []
    let totalCaracteres = 0

    for(let i = 0; i < cantidad; i++){
        let palabra = document.getElementById("palabra" + i).value
        palabras.push(palabra)
        caracteres.push(palabra.length)
        totalCaracteres = totalCaracteres + palabra.length
    }

    let totalConEspacios = totalCaracteres + (cantidad - 1)

    document.getElementById("palabras13").textContent ="Palabras: " + palabras;
    document.getElementById("caracteres13").textContent ="Caracteres por palabra: " + caracteres;
    document.getElementById("total13").textContent ="Total caracteres oración: " + totalConEspacios;
}
//Ejercicio 14
function invertir(){
    let original = [];

    for(let i = 0; i < 10; i++){
        let aleatorio = Math.floor(Math.random() * 101);
        original.push(aleatorio);
    }

    let invertidoFor = [];

    for(let i = original.length - 1; i >= 0; i--){
        invertidoFor.push(original[i]);
    }

    let invertidoReverse = [...original].reverse();
    document.getElementById("original14").textContent ="Original: " + original
    document.getElementById("algoritmo14").textContent ="Invertido : " + invertidoFor
    document.getElementById("reverse14").textContent ="Invertido : " + invertidoReverse
}
//Ejercicio 15
function calcular15(){
    let num1 = parseFloat(document.getElementById("calc1").value)
    let num2 = parseFloat(document.getElementById("calc2").value)
    let radios = document.getElementsByName("operacion")
    let operacion = ""

    for(let i = 0; i < radios.length; i++){
        if(radios[i].checked){
            operacion = radios[i].value
        }
    }
    if(operacion === ""){
        document.getElementById("resultado15").textContent ="Selecciona una operación"
        return
    }
    let resultado = 0
    if(operacion === "suma"){
        resultado = num1 + num2
        document.getElementById("resultado15").textContent =num1 + " + " + num2 + " = " + resultado
    } else if(operacion === "resta"){
        resultado = num1 - num2
        document.getElementById("resultado15").textContent =num1 + " - " + num2 + " = " + resultado
    } else if(operacion === "multiplicacion"){
        resultado = num1 * num2
        document.getElementById("resultado15").textContent =num1 + " × " + num2 + " = " + resultado
    } else if(operacion === "division"){

        if(num2 === 0){
            document.getElementById("resultado15").textContent ="No se puede dividir entre 0"
            return
        }
        resultado = num1 / num2
        document.getElementById("resultado15").textContent =num1 + " ÷ " + num2 + " = " + resultado.toFixed(2)
    }
}

