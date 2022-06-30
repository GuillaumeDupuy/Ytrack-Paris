import unittest
from ctypes import *
import sys
import math

class TestFactorialFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestFactorialFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = CDLL(so_file)
        except: 
            print("Cannot find file factorial-number.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "factorialNumber", None)
        if not callable(self.studentMethod):
            print("Cannot find func factorialNumber in student project")
            sys.exit(1)
    
    def testFactorial5(self): 
        studentOutput = self.studentMethod(5)
        self.assertEqual(studentOutput, 120, "on factorialNumber(5)")
        
    def testNbrRange(self): 
        for nbr in range(8):
            studentOutput = self.studentMethod(nbr)
            self.assertEqual(studentOutput, math.factorial(nbr), f"on factorialNumber({nbr})")
        
if __name__ == "__main__":
    unittest.main()