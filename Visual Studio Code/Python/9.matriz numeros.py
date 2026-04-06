import random

matriz = [[random.randint (10,99) for _ in range(10)] for _ in range (10)]

#--------------------------------------------------------
print('\nMatriz 10x10: ')
for fila in matriz:
    for n in fila:
        print(f'{n:2d}', end=" ")
    print()
    
#--------------------------------------------------------
print('\nDiagonal Principal. ')
for i in range (10):
    print(" " * (i * 3),matriz[i][i])
    
#--------------------------------------------------------
print('\nDiagonal Inversa. ')
for i in range (10):
    print(" " * ((9 - i) * 3), matriz[i][9 - i])
#--------------------------------------------------------
print('\nTriángulo Superior:')
for i in range(10):
    for j in range(10):
        if j >= i:
            print(f"{matriz[i][j]:2d}", end=" ")
        else:
            print("  ", end=" ")
    print()
#--------------------------------------------------------
print('\nTriángulo Inferior:')
for i in range(10):
    for j in range(10):
        if j <= i:
            print(f"{matriz[i][j]:2d}", end=" ")
        else:
            print("  ", end=" ")
    print()
#--------------------------------------------------------
print('\nTriángulo Izquierdo:')
for i in range(10):
    for j in range(10):
        if i + j <= 9:   # condición diagonal secundaria
            print(f"{matriz[i][j]:2d}", end=" ")
        else:
            print("  ", end=" ")
    print()

#--------------------------------------------------------
print('\nTriángulo Derecho:')
for i in range(10):
    for j in range(10):
        if i + j >= 9:
            print(f"{matriz[i][j]:2d}", end=" ")
        else:
            print("  ", end=" ")
    print()