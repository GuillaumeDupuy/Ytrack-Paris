import unittest
import ctypes
import sys
import random
from utils import *

class TestOctalFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestOctalFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except: 
            print("Cannot find file octal-converter.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "octalConverter", None)
        if not callable(self.studentMethod):
            print("Cannot find func octalConverter in student project")
            sys.exit(1)
        else:
            self.studentMethod.restype = ctypes.c_char_p

    def testValue2(self):
        self.assertEqual(self.studentMethod(2), b"2", "On octalConverter(2)")
        
    def testValue10(self):
        self.assertEqual(self.studentMethod(10), b"12", "On octalConverter(10)")
    
    def testValue128(self):
        self.assertEqual(self.studentMethod(128), b"200", "On octalConverter(128)")
        
    def testValue1324(self):
        self.assertEqual(self.studentMethod(1324), b"2454", "On octalConverter(1324)")
    
    def testMaxValue(self):
        self.assertEqual(self.studentMethod(16777215), b"77777777", "On octalConverter(16777255)")
    
    def testSegFault(self):
        self.assertEqual(self.studentMethod(16777216), b"0", "On octalConverter(16777256)")
        
if __name__ == "__main__":
    unittest.main()