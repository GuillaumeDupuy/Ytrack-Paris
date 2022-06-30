import unittest
from ctypes import *
import sys
import random

class TestAddFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestAddFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = CDLL(so_file)
        except: 
            print("Cannot find file add-two-int.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "addTwoInt", None)
        if not callable(self.studentMethod):
            print("Cannot find func addTwoInt in student project")
            sys.exit(1)
    
    def testAdd5Plus10(self): 
        studentOutput = self.studentMethod(5, 10)
        self.assertEqual(studentOutput, 15, "on addTwoInt(5, 10)")
        
    def testRandomsAdd(self): 
        for _ in range(10):
            a, b = random.randint(0, 100), random.randint(0, 100)
            studentOutput = self.studentMethod(a, b)
            self.assertEqual(studentOutput, a + b, f"on addTwoInt({a}, {b})")
        
if __name__ == "__main__":
    unittest.main()