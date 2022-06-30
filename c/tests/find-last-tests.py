import unittest
from ctypes import *
import sys
import random
import math

class TestFindFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestFindFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = CDLL(so_file)
        except: 
            print("Cannot find file find-last.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "findLast", None)
        if not callable(self.studentMethod):
            print("Cannot find func findLast in student project")
            sys.exit(1)
    
    def testMaxValue(self): 
        
        dataTest = (c_int*5)()
        dataTest[0] = 10
        dataTest[1] = 12
        dataTest[2] = 23
        dataTest[3] = 12
        dataTest[4] = 35
        studentOutput = self.studentMethod(dataTest, 12, 5)
        self.assertEqual(studentOutput, 3, f"finding {12} in array: [{' '.join([str(i) for i in list(dataTest)])}] is supposed to return 3")
        
    def testRandomArray(self): 
        
        for _ in range(10):
            dataTest = (c_int*10)()
            for i in range(10):
                dataTest[i] = random.randint(0, 20)
            toFind =  dataTest[random.randint(0, 9)] if random.random() < 0.95 else 21
            studentOutput = self.studentMethod(dataTest, toFind, 10)
            intList = [str(i) for i in list(dataTest)]
            try:
                answer = len(dataTest) - 1 - list(dataTest)[::-1].index(toFind)
            except:
                answer = -1
            self.assertEqual(studentOutput, answer, f"finding {toFind} in array [{' '.join(intList)}] is supposed to return {answer}")
if __name__ == "__main__":
    unittest.main()