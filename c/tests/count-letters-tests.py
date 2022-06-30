import unittest
import ctypes
import sys
import random
from utils import *

class TestCountFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestCountFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except: 
            print("Cannot find file count-letters.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "countLetters", None)
        if not callable(self.studentMethod):
            print("Cannot find func countLetters in student project")
            sys.exit(1)

    def testHelloWorld(self):
        self.assertEqual(self.studentMethod(b"Hello World", b"o"), 2, "countLetters(\"Hello World\", \"o\") is supposed to return 2") 
        
    def testRandomWords(self):
        for i in range(20):
            word = randomStringGenerator(30)
            toFind = randomStringGenerator(1)
            parameters = (bytes(word, encoding="utf-8"), bytes(toFind, encoding="utf-8"))
            answer = word.count(toFind)
            self.assertEqual(self.studentMethod(parameters[0], parameters[1]), answer, f"SUB-TEST {i+1}/20 - countLetters(\"{word}\", \"{toFind}\") is supposed to return {answer}")
    
if __name__ == "__main__":
    unittest.main()