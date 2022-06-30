import unittest
import ctypes
import sys
import random
from utils import *

class TestHexaFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestHexaFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except: 
            print("Cannot find file hexa-converter.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "hexaConverter", None)
        if not callable(self.studentMethod):
            print("Cannot find func hexaConverter in student project")
            sys.exit(1)
        else:
            self.studentMethod.restype = ctypes.c_char_p

    def testValue2(self):
        self.assertEqual(self.studentMethod(2), b"2", "On hexaConverter(2)")
        
    def testValue10(self):
        self.assertEqual(self.studentMethod(10), b"A", "On hexaConverter(10)")
    
    def testValue128(self):
        self.assertEqual(self.studentMethod(128), b"80", "On hexaConverter(128)")
        
    def testValue1324(self):
        self.assertEqual(self.studentMethod(1324), b"52C", "On hexaConverter(1324)")
        
if __name__ == "__main__":
    unittest.main()