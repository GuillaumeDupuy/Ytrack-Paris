import unittest
import ctypes
import sys
import random
from utils import *

class TestLogicFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestLogicFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = ctypes.CDLL(so_file)
        except Exception as e: 
            print(e)
            print("Cannot find file logic-gates.c in student repository")
            sys.exit(1)
        self.and2binaries = getattr(studentLibrary, "and2binaries", None)
        self.or2binaries = getattr(studentLibrary, "or2binaries", None)
        self.xor2binaries = getattr(studentLibrary, "xor2binaries", None)
        if not callable(self.and2binaries):
            print("Cannot find func and2binaries in student project")
            sys.exit(1)
        if not callable(self.or2binaries):
            print("Cannot find func or2binaries in student project")
            sys.exit(1)
        if not callable(self.xor2binaries):
            print("Cannot find func xor2binaries in student project")
            sys.exit(1)
        
        self.and2binaries.restype = ctypes.c_char_p
        self.or2binaries.restype = ctypes.c_char_p
        self.xor2binaries.restype = ctypes.c_char_p
        

    def testValueAND1(self):
        self.assertEqual(self.and2binaries(int('0b101', 2), int('0b1010', 2)), b"0", "On and2binaries(0b101, 0b1010)")
    def testValueAND2(self):
        self.assertEqual(self.and2binaries(int('0b110010', 2), int('0b101010', 2)), b"100010", "On and2binaries(0b110010, 0b101010)")
    def testValueAND3(self):
        self.assertEqual(self.and2binaries(int('0b10111010', 2), int('0b11100111', 2)), b"10100010", "On and2binaries(0b10111010, 0b11100111)")
        
    def testValueOR1(self):
        self.assertEqual(self.or2binaries(int('0b101', 2), int('0b1010', 2)), b"1111", "On or2binaries(0b101, 0b1010)")
    def testValueOR2(self):
        self.assertEqual(self.or2binaries(int('0b110010', 2), int('0b101010', 2)), b"111010", "On or2binaries(0b110010, 0b101010)")
    def testValueOR3(self):
        self.assertEqual(self.or2binaries(int('0b10111010', 2), int('0b11100111', 2)), b"11111111", "On or2binaries(0b10111010, 0b11100111)")
    
    def testValueXOR1(self):
        self.assertEqual(self.xor2binaries(int('0b101', 2), int('0b1010', 2)), b"1111", "On xor2binaries(0b101, 0b1010)")
    def testValueXOR2(self):
        self.assertEqual(self.xor2binaries(int('0b110010', 2), int('0b101010', 2)), b"11000", "On xor2binaries(0b110010, 0b101010)")
    def testValueXOR3(self):
        self.assertEqual(self.xor2binaries(int('0b10111010', 2), int('0b11100111', 2)), b"1011101", "On xor2binaries(0b10111010, 0b11100111)")

    
        
if __name__ == "__main__":
    unittest.main()