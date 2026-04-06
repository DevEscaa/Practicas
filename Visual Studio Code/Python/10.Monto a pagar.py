import math

print(" Monto a pgar en estacionamiento. ")

def pedir_hora(mensaje):
    while True:
        try:
            valor = int(input(mensaje))
            if valor < 0 or valor > 23:
                print("Numero invalido, coloque la hora bien (0-23). ")
            else:
                return valor
        except:
            print("Entrada invalida, debe ser un entero. ")

#----------------------------------------------------------------------------

def pedir_minutos(mensaje):
    while True:
        try:
            valor = int(input(mensaje))
            if valor < 0 or valor > 59:
                print("Numero invalido, coloque los minutos bien (0-59). ")
            else:
                return valor
        except:
            print("Entrada invalida, debe ser un entero. ")

#----------------------------------------------------------------------------

hora_entrada = pedir_hora("Ingrese la hora de entrada (0-23): ")
min_entrada = pedir_minutos("Ingrese minutos de entrada (0-59): ")
hora_salida = pedir_hora("Ingrese la hora de salida (0-23): ")
min_salida = pedir_minutos ("Ingrese minutos de salida (0-59): ")


min_entrada = hora_entrada * 60 + min_entrada
min_salida = hora_salida * 60 + min_salida

if min_salida < min_entrada:
    min_salida += 24 * 60

duracion_horas = (min_salida - min_entrada) / 60

horas_cobradas = math.ceil(duracion_horas)

if horas_cobradas == 1:
    total = 1000
else:
    total = 1000 + (horas_cobradas - 1) * 600

print("\nHoras cobradas: ",horas_cobradas)
print("El total a pagar es: $ ", total)