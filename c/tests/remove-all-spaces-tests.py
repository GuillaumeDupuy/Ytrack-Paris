import unittest
import ctypes
import sys
import random
from utils import *

class TestRemoveSpacesFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestRemoveSpacesFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except: 
            print("Cannot find file remove-all-spaces.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "removeSpaces", None)
        if not callable(self.studentMethod):
            print("Cannot find func removeSpaces in student project")
            sys.exit(1)
        else:
            self.studentMethod.restype = ctypes.c_char_p

    def testHelloWorld(self):
        self.assertEqual(self.studentMethod(b"Hello World"), b"HelloWorld", "On removeSpaces(\"Hello World\")")
        
    def testRandomWords(self):
        global ALLOWED_CHARS
        for i in range(15):
            ALLOWED_CHARS += " "*40
            word = randomStringGenerator(random.randint(5, 15))
            answer = bytes("".join(word.split(" ")), encoding="utf-8")
            parameter = bytes(word, encoding="utf-8")
            self.assertEqual(self.studentMethod(parameter), answer, f"SUB-TEST {i+1}/15 - removeSpaces(\"{word}\")")
    
if __name__ == "__main__":
    unittest.main()