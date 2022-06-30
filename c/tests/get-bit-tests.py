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
            print("Cannot find file get-bit.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "getBit", None)
        if not callable(self.studentMethod):
            print("Cannot find func getBit in student project")
            sys.exit(1)

    def testGet1(self):
        self.assertEqual(self.studentMethod(int('0b11', 2), 1), 1, "On getBit(0b11, 1)")
        
    def testGet2(self):
        self.assertEqual(self.studentMethod(int('0b110101', 2), 4), 0, "On getBit(0b110101, 4)")
    
    def testGet3(self):
        self.assertEqual(self.studentMethod(int('0b10110010', 2), 8), 1, "On getBit(0b10110010, 8)")
        
    def testGetOver(self):
        self.assertEqual(self.studentMethod(int('0b10110010', 2), 10), 0, "On getBit(0b10110010, 10)")
        
if __name__ == "__main__":
    unittest.main()