from collections import deque
from datetime import datetime
import math

def save(word):
    stack.append(word)
    print("Word saved successfully. The stack has", len(stack), "items")
    print("Stack items:", stack)
    print("----------------------------")
    text = getTime() + ' Info: Guardar palabra - Entrada: ' + word + '. Valor obtenido: ' + str(len(stack)) + '\n'
    file.write(text)
    return

def checkLongestAndShortest():
    if (len(stack) == 0):
        print("Error. The stack has no items")
        print("----------------------------")
        text = getTime() + ' Info: Obtener palabra más larga y más corta - Opción  no válida, pila vacía' + '\n'
        file.write(text)
        return
    
    shortest = math.inf
    shortest_word = ''
    longest = -math.inf
    longest_word = ''
    for word in stack:
        if (len(word) < shortest):
            shortest = len(word)
            shortest_word = word
        
        if (len(word) > longest):
            longest = len(word)
            longest_word = word
            
    print("Task done successfully. The longest word in the stack is", longest_word, "and the shortest is", shortest_word)
    print("----------------------------")
    text = getTime() + ' Info: Obtener palabra más larga y más corta - Valor obtenido: Más larga: ' + longest_word + '. Más corta: ' + shortest_word + '\n'
    file.write(text)
    return

def checkSaved(index):
    print("Task done successfully. The requested item is", stack[index])
    print("----------------------------")
    text = getTime() + ' Info: Obtener palabra de la pila - Valor obtenido: ' + stack[index] + '\n'
    file.write(text)
    return

def compareLength(first, second):
    length_first = str(len(stack[first]))
    length_second = str(len(stack[second]))
    print("Task done successfully. The length of the first word is", length_first, "and the length of the second word is", length_second)
    print("----------------------------")
    text = getTime() + ' Info: Comparar longitud de dos palabras - Valor obtenido: Primera palabra: ' + length_first + '. Segunda palabra: ' + length_second + '\n'
    file.write(text)
    return

def getTime():
    now = datetime.now()
    current_time = now.strftime("%H:%M:%S")
    return str(current_time)
    

stack = deque()
option = 0
file = open("logs.txt", "w")

print("Welcome")
print("----------------------------")
while (option != 5):
    print("Select an option:\n1.Type and save a word\n2.Check longest and shortest saved word\n3.Check some saved word\n4.Compare length between two words\n5.Exit")
    print("----------------------------")
    option = input("Response: ")
    print("----------------------------")

    if (option.isdigit() or option == '-1'):
        option = int(option)

    if (option == 1):
        print("Type the word to save")
        print("----------------------------")
        word = input("Response: ")
        print("----------------------------")
        save(word)
        
    elif (option == 2):
        checkLongestAndShortest()
        
    elif (option == 3):
        index = -2
        stack_length = len(stack)
        
        while(index < 0 or index >= stack_length):
            print("Type the index in the stack of the word to check. The stack has", stack_length, "items. To go to main menu, type -1")
            print("----------------------------")
            aux_index = input("Response: ")
            print("----------------------------")

            if (aux_index.isdigit() or aux_index == '-1'):
                index = int(aux_index)
            
            if (index < 0 or index >= stack_length):
                if (index == -1):
                    break
                print("Error. Invalid input. Try again")
                print("----------------------------")
                text = getTime() + ' Info: Obtener palabra de la pila - Entrada:' + str(index) + ' no válida' + '\n'
                file.write(text)

            else:
                checkSaved(index)
        
    elif (option == 4):
        first = -2
        second = -2
        stack_length = len(stack)
        
        while(first < 0 or first >= stack_length or second < 0 or second >= stack_length):
            print("Type the index in the stack of the first word. The stack has", stack_length, "items. To go to main menu, type -1")
            print("----------------------------")
            aux_first = input("Response: ")
            print("----------------------------")

            if (aux_first.isdigit() or aux_first == '-1'):
                first = int(aux_first)

            if (first == -1):
                break
                
            print("Type the index in the stack of the second word. The stack has", stack_length, "items. To go to main menu, type -1")
            print("----------------------------")
            aux_second = input("Response: ")
            print("----------------------------")

            if (aux_second.isdigit() or aux_second == '-1'):
                second = int(aux_second)

            if (second == -1):
                break
            
            if (first < 0 or first >= stack_length or second < 0 or second >= stack_length):
                print("Error. Invalid input. Try again")
                print("----------------------------")
                text = getTime() + ' Info: Comparar longitud de dos palabras - Entrada: Primera entrada: ' + str(first) + ' . Segunda entrada: ' + str(second) + ' no válida' + '\n'
                file.write(text)

            else:
                compareLength(first, second)
                
    elif (option == 5):
        print("Good bye!")
        file.close()
        break
    
    else:
        print("Error. Invalid input. Try again")
        print("----------------------------")
        



    
