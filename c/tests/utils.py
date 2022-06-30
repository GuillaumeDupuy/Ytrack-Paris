import random

ALLOWED_CHARS = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-_()[]%+=?! "

def randomStringGenerator(strSize):
    return ''.join(random.choice(ALLOWED_CHARS) for x in range(strSize))

def showHiddenChars(string):
    return string.replace("\n", "$\n").replace(" ", "•")

def readFile(string):
    with open(string,'r') as infile:
        table = [row.split("//")[0] for row in infile]
    return table

def containsInFile(file, string):
    for row in file:
        if row.replace(" ", "").find(string.replace(" ", "")) != -1:
            return True
        
    return False