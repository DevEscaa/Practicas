for i in range (6):
    nota = float(input("ingrese su calificacion: "))
    if nota <0 and nota >= 5:
        notas = nota / 5
        break
    if nota >= 3:
        print("usted aprobo")
    else:
        print("usted reprobo")
print("su promedio final fue: " + nota)