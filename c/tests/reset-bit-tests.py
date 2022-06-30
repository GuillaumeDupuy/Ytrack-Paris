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
            print("Cannot find file reset-bit.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "resetBit", None)
        if not callable(self.studentMethod):
            print("Cannot find func resetBit in student project")
            sys.exit(1)
        else:
            self.studentMethod.restype = ctypes.c_char_p

    def testReset1(self):
        self.assertEqual(self.studentMethod(int('0b11', 2), 1), b"10", "On resetBit(0b11, 1)")
        
    def testReset2(self):
        self.assertEqual(self.studentMethod(int('0b110101', 2), 4), b"110101", "On resetBit(0b110101, 4)")
    
    def testReset3(self):
        self.assertEqual(self.studentMethod(int('0b10110010', 2), 6), b"10010010", "On resetBit(0b10110010, 6)")
        
    def testResetOver(self):
        self.assertEqual(self.studentMethod(int('0b10110010', 2), 8), b"110010", "On resetBit(0b10110010, 8)")
        
if __name__ == "__main__":
    unittest.main()