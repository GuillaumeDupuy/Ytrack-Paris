import unittest
import ctypes
import sys
import random
from utils import *

class TestBinaryFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestBinaryFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except: 
            print("Cannot find file binary-converter.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "binaryConverter", None)
        if not callable(self.studentMethod):
            print("Cannot find func binaryConverter in student project")
            sys.exit(1)
        else:
            self.studentMethod.restype = ctypes.c_char_p

    def testValue2(self):
        self.assertEqual(self.studentMethod(2), b"10", "On binaryConverter(2)")
        
    def testValue10(self):
        self.assertEqual(self.studentMethod(10), b"1010", "On binaryConverter(10)")
    
    def testValue128(self):
        self.assertEqual(self.studentMethod(128), b"10000000", "On binaryConverter(128)")
        
    def testValue1324(self):
        self.assertEqual(self.studentMethod(1324), b"10100101100", "On binaryConverter(1324)")
        
    def testValue65536(self):
        self.assertEqual(self.studentMethod(65536), b"0", "On binaryConverter(65536)")
        
if __name__ == "__main__":
    unittest.main()