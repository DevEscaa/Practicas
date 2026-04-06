
print("--- Tablas de multiplicar ---")

for tabla in range (1, 11):
    print(f" La tabla de {tabla}")
    
    for numero in range (1, 11):
        print(f" {tabla} * {numero} es {tabla * numero}: ")
    input("Presiona ENTER para ver la sigueinte tabla") 
    
print(" Fin del programa")