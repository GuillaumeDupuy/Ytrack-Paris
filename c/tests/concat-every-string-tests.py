import unittest
import ctypes
import sys
import random
from utils import *

class TestConcatFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestConcatFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except: 
            print("Cannot find file concat-every-string.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "concatEveryString", None)
        if not callable(self.studentMethod):
            print("Cannot find func concatEveryString in student project")
            sys.exit(1)
        else:
            self.studentMethod.restype = ctypes.c_char_p

    def testHelloWorld(self):
        self.assertEqual(self.studentMethod(b"Hello", b"World"), b"HelloWorld", "On concatEveryString(\"Hello\", \"World\")")
        
    def testRandomWords(self):
        for i in range(15):
            word1 = bytes(randomStringGenerator(random.randint(5, 10)), encoding="utf-8")
            word2 = bytes(randomStringGenerator(random.randint(5, 10)), encoding="utf-8")
            self.assertEqual(self.studentMethod(word1, word2), word1+word2, f"SUB-TEST {i+1}/15 - concatEveryString(\"{word1}\", \"{word2}\")")
    
if __name__ == "__main__":
    unittest.main()