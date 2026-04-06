

"""
📌 GUIA DE COMENTARIOS Y COMANDOS BÁSICOS EN PYTHON
Esta guía sirve como referencia rápida mientras programas en Visual Studio Code.
Puedes modificarla y agregar tus propios apuntes.
"""

# ---------------------------------------
# 🟡 COMENTARIOS
# ---------------------------------------
# Comentario de una sola línea → se usa con #
# Ejemplo:
# Esto es un comentario

"""
Comentario de varias líneas
Se usa entre triple comillas dobles o simples.
"""

# ---------------------------------------
# 🟡 FUNCIONES BÁSICAS
# ---------------------------------------

# def → Sirve para definir una función
# Ejemplo:
def saludar():
    print("Hola, esto es una función")

# Llamar a la función:
saludar()

# ---------------------------------------
# 🟡 TIPOS DE DATOS Y CONVERSIONES
# ---------------------------------------
# int()   → Convierte a número entero
# float() → Convierte a número decimal
# str()   → Convierte a cadena de texto
# input() → Pide datos al usuario (por defecto en texto)

# Ejemplo:
numero = int(input("Ingresa un número entero: "))
decimal = float(input("Ingresa un número decimal: "))
texto = str(123)  # Convierte el número 123 en texto

# ---------------------------------------
# 🟡 ESTRUCTURAS DE CONTROL
# ---------------------------------------

# if / elif / else  → Decisiones
x = 10
if x > 5:
    print("x es mayor que 5")
elif x == 5:
    print("x es igual a 5")
else:
    print("x es menor que 5")

# while → Bucle que se repite mientras la condición sea verdadera
contador = 0
while contador < 3:
    print("Contador:", contador)
    contador += 1  # += es un atajo para contador = contador + 1

# for → Recorre elementos de una secuencia
for i in range(5):   # range(5) genera 0,1,2,3,4
    print("i vale", i)

# match → Similar a switch en otros lenguajes (Python 3.10+)
opcion = '2'
match opcion:
    case '1':
        print("Opción 1")
    case '2':
        print("Opción 2")
    case _:
        print("Opción no válida")

# ---------------------------------------
# 🟡 FUNCIONES MATEMÁTICAS (math)
# ---------------------------------------
import math

# math.pi → Valor de π
# math.pow(a, b) → Potencia a^b
# math.sqrt(x) → Raíz cuadrada de x

print("Pi:", math.pi)
print("2 elevado a 3:", math.pow(2, 3))
print("Raíz cuadrada de 16:", math.sqrt(16))

# ---------------------------------------
# 🟡 FORMATEO DE STRINGS
# ---------------------------------------
nombre = "Juan"
edad = 20
print(f"Hola {nombre}, tienes {edad} años")        # f-string
print("Hola {}, tienes {} años".format(nombre, edad))  # format()

# Números con decimales formateados
pi = math.pi
print(f"Pi con 2 decimales: {pi:.2f}")  # 3.14
print(f"Pi con 4 decimales: {pi:.4f}")  # 3.1416

# ---------------------------------------
# 🟡 BLOQUE PRINCIPAL
# ---------------------------------------
# Esta parte se usa para que el código principal solo se ejecute
# cuando corres el archivo directamente, no cuando lo importas como módulo.

if __name__ == "__main__":
    print("Este es el bloque principal")
    saludar()
