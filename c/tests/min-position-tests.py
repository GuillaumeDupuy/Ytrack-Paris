import unittest
from ctypes import *
import sys
import random
import math

class TestMaxPositionFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestMaxPositionFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = CDLL(so_file)
        except: 
            print("Cannot find file min-position.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "minPosition", None)
        if not callable(self.studentMethod):
            print("Cannot find func minPosition in student project")
            sys.exit(1)
    
    def testMinValue(self): 
        
        dataTest = (c_int*5)()
        dataTest[0] = 25
        dataTest[1] = 35
        dataTest[2] = 10
        dataTest[3] = 10
        dataTest[4] = 35
        studentOutput = self.studentMethod(dataTest, 5)
        self.assertEqual(studentOutput, 2, f"array: [{' '.join([str(i) for i in list(dataTest)])}] is supposed to return 2")
        
    def testRandomArray(self): 
        
        for _ in range(10):
            dataTest = (c_int*10)()
            for i in range(10):
                dataTest[i] = random.randint(0, 20)
            studentOutput = self.studentMethod(dataTest, 10)
            intList = [str(i) for i in list(dataTest)]
            answer = list(dataTest).index(min(dataTest))
            self.assertEqual(studentOutput, answer, f"array [{' '.join(intList)}] is supposed to return {answer}")
        
if __name__ == "__main__":
    unittest.main()