
("--- Promedio Estatura Empleados ---")

sumah = 0
sumam = 0
conth = 0
contm = 0

for i in range (1, 10):
    print(f"\nEmpleados {i}")
    
    Estatura = float(input("Ingrese la estatura: "))
    Sexo = input (" Ingrese el sexo (M/H): ").upper()
    
    if Sexo == "H":
        sumah += Estatura
        conth += 1
    elif Sexo == "M":
        sumam += Estatura
        contm += 1 
    else:
        print("Sexo invalido. Este registro no se contara. ")
        
if conth > 0:
    print("\nEl promedio  de la estatura de los hombres es de: ",sumah / conth)
else:
    print("\nNo se registaron Hombres. ")
    
if contm > 0:
    print("\nEl promedio de estatura de las mujeres es de: ", sumam / contm)
else:
    print("\nNo se registaron Mujeres. ")