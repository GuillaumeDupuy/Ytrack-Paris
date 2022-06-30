import subprocess
import unittest
import sys
import random
from utils import *

FILENAME = "cut-decimals-tests.c"

class TestStringMethods(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestStringMethods, self).__init__(*args, **kwargs)
        srcname = f"/jail/main.c"
        self.execname = "/jail/pythonOuput.o"
        cmd = ["gcc", srcname, "-o", self.execname];  
        p = subprocess.Popen(cmd);  
        p.wait();  
        try:
            self.process = subprocess.run([self.execname], capture_output=True)
        except:
            print(f"Cannot find file {FILENAME} in student repository")  
            sys.exit(1)
        
    
    def testPi(self):
        self.process = subprocess.run([self.execname, "3.1415926535897932384626433832795"], capture_output=True)
        answer = "3.14159\n"
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}")

    def testRandomFloor(self):
        for i in range(10):
            param = str(random.randint(0, 9)) + "." + "".join([str(random.randint(0, 9)) for _ in range(5)]) + str(random.randint(0, 4))
            answer = str(round(float(param), 5))
            answer += "0.000000"[len(answer)+1:] + "\n"
            self.process = subprocess.run([self.execname, param], capture_output=True)
            output = self.process.stdout.decode("UTF-8")  
            self.assertEqual(output, answer, f"Input value : {param}\nYou printed \n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}")
    
    def testRandomCeiling(self):
        for i in range(10):
            param = str(random.randint(0, 9)) + "." + "".join([str(random.randint(0, 9)) for _ in range(5)]) + str(random.randint(6, 9))
            answer = str(round(float(param[:-1]) + 0.00001, 5))
            answer += "0.000000"[len(answer)+1:] + "\n"
            self.process = subprocess.run([self.execname, param], capture_output=True)
            output = self.process.stdout.decode("UTF-8")  
            self.assertEqual(output, answer, f"Input value : {param}\nYou printed \n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}")

if __name__ == "__main__":
    unittest.main()