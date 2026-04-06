function sumar (){
    n1 = parseInt(document.getElementById("n1").value)
    n2 = parseInt(document.getElementById("n2").value)
    suma = n1+n2
    //mostrar en input
    document.getElementById("resultado").value=suma
    //mostrar en h1
    texto = document.getElementById("resultexto").textContent
    document.getElementById("resultexto").textContent=texto+suma
}
//
function calcular(){
    compra = parseInt(document.getElementById("compra").value)
    iva = parseFloat(document.getElementById("iva").value)
    total= (compra*iva)/100
    totaltotal = total+compra

    document.getElementById("total").value=totaltotal
    op = document.getElementById("total1").textContent
    document.getElementById("total1").textContent=op+totaltotal
}

function cuadrado(){
    lado = parseFloat(document.getElementById("lado").value)
    area = Math.pow(lado,2)
    perimetro = lado * 4

    document.getElementById("area").value = area
    ope = document.getElementById("area1").textContent
    document.getElementById("area1").textContent=ope+area

    document.getElementById("perimetro").value = perimetro
    ope1 = document.getElementById("perimetro1").textContent
    document.getElementById("perimetro1").textContent=ope1+perimetro
    
}

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