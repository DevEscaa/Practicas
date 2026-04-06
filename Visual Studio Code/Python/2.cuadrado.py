
# En este codigo se va aprender a usar el( While, true, try, except, para no romper el codigo)

print ("---Calcular Cuadrado del Numero---")
while True:
            try:
                num = int(input("Ingrese un numero entero "))
                print("El numero que ingreso es:", num)
                break
            except ValueError:
                print("El numero que ingreso no es valido, intente de nuevo ")
                
cuadrado = num **2
print(f"El cuadrado de {num} es {cuadrado} ")