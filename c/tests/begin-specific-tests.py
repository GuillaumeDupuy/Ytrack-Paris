import unittest
import ctypes
import sys
import random
from utils import *

class TestBeginFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestBeginFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except: 
            print("Cannot find file begin-specific.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "beginSpecific", None)
        if not callable(self.studentMethod):
            print("Cannot find func beginSpecific in student project")
            sys.exit(1)

    def testHelloWorld(self):
        self.assertEqual(bool(self.studentMethod(b"Hello World", b"Hello")), True, "On beginSpecific(\"Hello World\", \"Hello\")") 
        
    def testRandomWords(self):
        for i in range(20):
            word = randomStringGenerator(random.randint(5, 20))
            answer = random.random() > 0.5
            toFind = word[0 : random.randint(0, len(word))] if answer else randomStringGenerator(random.randint(5, 10))
            parameters = [bytes(word, encoding="utf-8"), bytes(toFind, encoding="utf-8")]
            self.assertEqual(bool(self.studentMethod(parameters[0], parameters[1])), answer, f"SUB-TEST {i+1}/20 - beginSpecific(\"{word}\", \"{toFind}\")")
    
if __name__ == "__main__":
    unittest.main()