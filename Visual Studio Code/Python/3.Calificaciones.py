
# Si el numero esta entre (19 y 20) es A
# Si el numero esta entre (16 y 18) es B
# Si el numero esta entre (13 y 15) es C
# Si el numero esta entre (10 y 12) es D
# Si es menor a 10 es E

print("--- Calificaciones ---")

def IngresarEntero():
    while True:
        try:
            nota = int(input(" Ingrese nota de 1 a 20: "))
            if nota > 20 or nota <0:
                print("Nota fuera de rango. Digite nuevamente ")
            else:
                break
        except:
            print(" No es un numero entero.")
    return nota
    
#-----------------------------------------------------------------------
def buscarLetra(nota):
    if nota > 18:
        letra = "A"
    elif nota > 15:
        letra = "B"
    elif nota > 12:
        letra = "C"
    elif nota > 9:
        letra = "D"
    else:
        letra = "E"

    return letra

#-----------------------------------------------------------------------

while True:
    numero = IngresarEntero()
    if numero == 0:
        print("Programa finalizado. ")
        break
    
    letra = buscarLetra(numero)
    print(f" La nota {numero} equivale a {letra}.")
