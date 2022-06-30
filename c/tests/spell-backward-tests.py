import unittest
import ctypes
import sys
import random
from utils import *

class TestBackwardFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestBackwardFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except: 
            print("Cannot find file spell-it-backward.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "spellItBackward", None)
        if not callable(self.studentMethod):
            print("Cannot find func spellItBackward in student project")
            sys.exit(1)
        else:
            self.studentMethod.restype = ctypes.c_char_p

    def testHelloWorld(self):
        self.assertEqual(self.studentMethod(b"Hello World"), b"dlroW olleH", "On spellItBackward(\"Hello World\")") 
        
    def testRandomWords(self):
        for i in range(20):
            word = randomStringGenerator(random.randint(5, 20))
            answer = bytes(word[::-1], encoding="utf-8")
            parameter = bytes(word, encoding="utf-8")
            self.assertEqual(self.studentMethod(parameter), answer, f"SUB-TEST {i+1}/20 - spellItBackward(\"{word}\")")
    
if __name__ == "__main__":
    unittest.main()