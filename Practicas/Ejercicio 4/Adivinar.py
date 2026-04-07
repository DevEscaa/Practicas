import random
num = random.randint(1, 30)
numeros = []

while True:
    adivina = int(input("Ingrese su numero: "))
    numeros.append(adivina)
    
    if adivina > num :
        print( " El numero adivinar es menor")
    elif adivina < num:
        print(" El numero adivinar es mayor")
    else:
        print("Usted adivino el numero")
        break
    
print(len(numeros))
print(numeros)