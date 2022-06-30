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
            print("Cannot find file set-bit.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "setBit", None)
        if not callable(self.studentMethod):
            print("Cannot find func setBit in student project")
            sys.exit(1)
        else:
            self.studentMethod.restype = ctypes.c_char_p

    def testSet1(self):
        self.assertEqual(self.studentMethod(int('0b10', 2), 1), b"11", "On setBit(0b10, 1)")
        
    def testSet2(self):
        self.assertEqual(self.studentMethod(int('0b110101', 2), 3), b"110101", "On setBit(0b110101, 3)")
    
    def testSet3(self):
        self.assertEqual(self.studentMethod(int('0b10110010', 2), 7), b"11110010", "On setBit(0b10110010, 7)")
        
    def testSetOver(self):
        self.assertEqual(self.studentMethod(int('0b10110010', 2), 10), b"1010110010", "On setBit(0b10110010, 10)")
        
if __name__ == "__main__":
    unittest.main()