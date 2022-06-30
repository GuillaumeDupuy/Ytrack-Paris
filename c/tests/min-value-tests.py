import unittest
from ctypes import *
import sys
import random
import math

class TestMinValFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestMinValFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = CDLL(so_file)
        except: 
            print("Cannot find file min-value.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "minValue", None)
        if not callable(self.studentMethod):
            print("Cannot find func minValue in student project")
            sys.exit(1)
    
    def testMinValue(self): 
        
        dataTest = (c_int*5)()
        dataTest[0] = 5
        dataTest[1] = 2
        dataTest[2] = 23
        dataTest[3] = 12
        dataTest[4] = 35
        studentOutput = self.studentMethod(dataTest, 5)
        self.assertEqual(studentOutput, 2, f"array: [{' '.join([str(i) for i in list(dataTest)])}] is supposed to return {min(dataTest)}")
        
    def testRandomArray(self): 
        
        for _ in range(10):
            dataTest = (c_int*10)()
            for i in range(10):
                dataTest[i] = random.randint(0, 100)
            studentOutput = self.studentMethod(dataTest, 10)
            intList = [str(i) for i in list(dataTest)]
            self.assertEqual(studentOutput, min(dataTest), f"array : [{' '.join(intList)}] is supposed to return {min(dataTest)}")
        
if __name__ == "__main__":
    unittest.main()