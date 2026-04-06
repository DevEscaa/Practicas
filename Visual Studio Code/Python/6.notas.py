#Titulo
print(" --- Promedio Estudiante --- ")

#Informacion Personal
ID = input(" Ingresar Identificación: ")
N = input(" Ingresar Nombres: ")
A = input(" Ingresar Apellidos: ")

#Funcion para validar que las notas esten entre 1 y 5
def pedir_nota (mensaje): # Muestra el mensaje que le pasas
    while True: #Bucle que repite hasta que ingrese una nota correcta
        nota = float(input(mensaje)) # Muestra el mensaje que le pasas
        if nota >= 1.0 and nota <= 5.0: #Validacion de la nota
            return nota
        else:
            print("Nota invalida, Ingrese un valor entre 1.0 y 5.0. ") #Mensaje del Error

#Informacion de notas
C1 = pedir_nota (" Ingrese su calificacion 1: ");
C2 = pedir_nota (" Ingrese su calificacion 2: ");
C3 = pedir_nota (" Ingrese su calificacion 3: ");
C4 = pedir_nota (" Ingrese su calificacion del examen final: ");

#Operacion/Proceso
promedio = (C1+C2+C3+C4)/4

#Resultados
print("Identificacion", ID)
print("Nombres y apellidos",N, A)
print("Promedio final:", promedio)

#Evaluacion del desempeño
#1.0 - 3.5
#3.6 - 4.0
#4.1 - 4.5
#4.6 - 5.0
if promedio <=3.5:
    print("Desempeño Bajo. ")
elif promedio <= 4.0:
    print("Desempeño Regular. ")
elif promedio <= 4.5:
    print("Desempeño Aceptable. ")
else:
    print("Desempeño Excelente. ")