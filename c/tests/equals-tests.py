import unittest
from ctypes import *
import sys
import random
import math

class TestEqualsFunction(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestEqualsFunction, self).__init__(*args, **kwargs)
        so_file = "/jail/sharedFunctions.so"
        try:
            studentLibrary = CDLL(so_file)
        except: 
            print("Cannot find file equals.c in student repository")
            sys.exit(1)
        self.studentMethod = getattr(studentLibrary, "equals", None)
        if not callable(self.studentMethod):
            print("Cannot find func equals in student project")
            sys.exit(1)
    
    def testMaxValue(self): 
        
        arr1 = (c_int*5)(10, 14, 32, 8, 62)
        arr2 = (c_int*5)(10, 14, 40, 8, 62)
        studentOutput = self.studentMethod(arr1, arr1, 5)
        self.assertEqual(bool(studentOutput), True, f"arrays [{' '.join([str(i) for i in list(arr1)])}] and [{' '.join([str(i) for i in list(arr1)])}] are supposed to return true")
        studentOutput = self.studentMethod(arr1, arr2, 5)
        self.assertEqual(bool(studentOutput), False, f"arrays [{' '.join([str(i) for i in list(arr1)])}] and [{' '.join([str(i) for i in list(arr2)])}] are supposed to return true")
 
        
    def testRandomArray(self): 
        
        for _ in range(10):
            arr1 = (c_int*10)()
            for i in range(10):
                arr1[i] = random.randint(0, 20)
            if random.random() < 0.5:
                arr2 = arr1
                answer = True
            else:
                arr2 = (c_int*10)()
                for i in range(10):
                    arr2[i] = random.randint(0, 20)
                answer = False
            studentOutput = self.studentMethod(arr1, arr2, 10)
            self.assertEqual(bool(studentOutput), answer, f"arrays [{' '.join([str(i) for i in list(arr1)])}] and [{' '.join([str(i) for i in list(arr2)])}] are supposed to return {answer}")
if __name__ == "__main__":
    unittest.main()