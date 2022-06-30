import unittest
from ctypes import *
import sys
import random
from utils import *

class TestOddFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestOddFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = CDLL(so_file)
        except: 
            print("Cannot find file number-is-odd.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "isOdd", None)
        if not callable(self.studentMethod):
            print("Cannot find func isOdd in student project")
            sys.exit(1)
    
    def testOdd5(self):
        self.assertEqual(self.studentMethod(5), 1, "On isOdd(5)")
    def testOdd10(self):
        self.assertEqual(self.studentMethod(10), 0, "On isOdd(10)")
    def testOdd1234(self):
        self.assertEqual(self.studentMethod(1234), 0, "On isOdd(1234)")
    def testOdd91487(self):
        self.assertEqual(self.studentMethod(91487), 1, "On isOdd(91487)")
        
        
if __name__ == "__main__":
    unittest.main()