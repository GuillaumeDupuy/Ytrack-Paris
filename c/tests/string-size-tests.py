import unittest
from ctypes import *
import sys
import random
from utils import *

class TestSizeFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestSizeFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = CDLL(so_file)
        except: 
            print("Cannot find file get-string-size.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "getStringSize", None)
        if not callable(self.studentMethod):
            print("Cannot find func getStringSize in student project")
            sys.exit(1)

    def testHelloWorld(self):
        self.assertEqual(self.studentMethod(b"Hello World"), 11, "On getStringSize(\"Hello World\")")
        
    def testRandomWords(self):
        for _ in range(15):
            lengthToTest = random.randint(3, 20)
            wordToTest = bytes(randomStringGenerator(lengthToTest), encoding="utf-8")
            self.assertEqual(self.studentMethod(wordToTest), lengthToTest, f"On getStringSize({wordToTest})")
    
if __name__ == "__main__":
    unittest.main()