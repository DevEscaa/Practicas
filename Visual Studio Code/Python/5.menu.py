"""
Practicas de algoritmos
y estructuras de programación
mostrando un menu
con python
17/10/2025
"""

import math #Para Usar Pi y fuciones matematicas

#------- FUNCIONES --------

def mostrarMenu():
    
    """Muestra el menú principal en pantalla."""    
    print()  # Esto se deba para dejar un espacio en el codigo para que se vea bonito
    print(' --- CALCULO DE AREAS Y VOLUMENES --- ')
    print('1. Area del Rectangulo')
    print('2. Area del triangulo')
    print('3. Volumen del Prisma')
    print('4. Volumen del cilindro')
    print('0. Terminar')


def seleccionarOpcion():
    
    """Pide al usuario que elija una opción del menú y la devuelve como texto."""    
    opc = input('Seleccionar una opción: ')
    return opc


def ingresarNumero(mensaje):
    """
    Pide al ususario que ingrese un numero.
    Se repite hasta que el usuario ingrese un valor numeri valido.
    """
    while True:
        try: 
            numero = float(input(mensaje + ": "))
            return numero
        except ValueError:
            print("Error: Debes ingresas un numero valido.")
            
    
def calcularRectangulo():
    print(' --- Area del Rectangulo --- ')
    
    a = float(input('Ingrese el lado A: '))
    b = ingresarNumero('Ingrese el lado B: ')
    area = a * b
    print()
    print(f'El área del rectangulo de lados {a} y {b} es {area:.1f}')


def calcularTriangulo():
    print(' --- Area del Triangulo --- ')
    
    base = ingresarNumero('Ingrese la base: ')
    altura = ingresarNumero('Ingrese la altura: ')
    area = (base * altura) / 2
    print()
    print(f'El area del Trinangulo de base {base} y altura {altura} es {area:.2f}')
    
def calcularPrisma():
    print(' --- Volumen del prisma --- ')
    
    largo = ingresarNumero('Ingrese el largo: ')
    ancho = ingresarNumero('Ingrese el ancho: ')
    altura = ingresarNumero('Ingrese la altura: ')
    
    volumen = largo * ancho * altura
    print()
    print(f'El volumen del Prisma es de {largo} * {ancho} * {altura} es {volumen:.2f}')
    
def calcularCilindro():
    print(' --- Volumen del Cilindro --- ')
    
    radio = ingresarNumero('Ingrese el radio: ')
    altura = ingresarNumero('Ingrese la altura: ')

    volumen = math.pi * (radio ** 2) * altura
    print()
    print(f'El volumen del cilindo es {radio} y altura {altura} es {volumen:.2f}')


#Inicio del programa

#bucle pinrcipal del menu
    
while True:          #mientras que opcion <> 0:
        
        mostrarMenu()
        opcion = seleccionarOpcion()     #Seleccionar Opción

        match opcion:          #calcular segun opcion
            case '1':
                calcularRectangulo()
            case '2':
                calcularTriangulo()
            case '3':
                calcularPrisma()
            case '4':
                calcularCilindro()
            case '0':
                break                

print('---- Programa Finalizado  ----')
