import unittest
import ctypes
import sys
import random
from utils import *

class TestOperationsFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestOperationsFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except Exception as e: 
            print(e)
            print("Cannot find file binary-operations.c in student repository")
            sys.exit(1)
        self.add2binaries = getattr(studentLibrary, "add2binaries", None)
        self.productBinary2 = getattr(studentLibrary, "productBinary2", None)
        if not callable(self.add2binaries):
            print("Cannot find func add2binaries in student project")
            sys.exit(1)
        if not callable(self.productBinary2):
            print("Cannot find func productBinary2 in student project")
            sys.exit(1)
        
        self.add2binaries.restype = ctypes.c_char_p
        self.productBinary2.restype = ctypes.c_char_p

    def testValuePlus1(self):
        self.assertEqual(self.add2binaries(int('0b101', 2), int('0b1010', 2)), b"1111", "On add2binaries(0b101, 0b1010)")
    
    def testValuePlus2(self):
        self.assertEqual(self.add2binaries(int('0b111000', 2), int('0b10111', 2)), b"1001111", "On add2binaries(0b111000, 0b10111)")
    
    def testValuePlus3(self):
        self.assertEqual(self.add2binaries(int('0b1101010011', 2), int('0b10001110', 2)), b"1111100001", "On add2binaries(0b1101010011, 0b10001110)")
        
    def testValueProduct1(self):
        self.assertEqual(self.productBinary2(int('0b10', 2)), b"100", "On productBinary2(0b10)")
        
    def testValueProduct2(self):
        self.assertEqual(self.productBinary2(int('0b10110', 2)), b"101100", "On productBinary2(0b10110)")
        
    def testValueProduct3(self):
        self.assertEqual(self.productBinary2(int('0b11001011', 2)), b"110010110", "On productBinary2(0b11001011)")
    
        
if __name__ == "__main__":
    unittest.main()