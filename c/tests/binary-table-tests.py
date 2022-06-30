import subprocess
import unittest
import sys
from utils import *

FILENAME = "binary-table.c"

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
        
    def testSize2(self):
        self.process = subprocess.run([self.execname, "2"], capture_output=True)
        answer = """| 0 | 0 |
| 0 | 1 |
| 1 | 0 |
| 1 | 1 |
"""
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")

    
    def testSize3(self):
        self.process = subprocess.run([self.execname, "3"], capture_output=True)
        answer = """| 0 | 0 | 0 |
| 0 | 0 | 1 |
| 0 | 1 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 0 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |
| 1 | 1 | 1 |
"""
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")

    def testSize5(self):
        self.process = subprocess.run([self.execname, "5"], capture_output=True)
        answer = """| 0 | 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 1 | 0 |
| 0 | 0 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 |
| 0 | 0 | 1 | 0 | 1 |
| 0 | 0 | 1 | 1 | 0 |
| 0 | 0 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 |
| 0 | 1 | 0 | 0 | 1 |
| 0 | 1 | 0 | 1 | 0 |
| 0 | 1 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 0 |
| 0 | 1 | 1 | 0 | 1 |
| 0 | 1 | 1 | 1 | 0 |
| 0 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 1 |
| 1 | 0 | 0 | 1 | 0 |
| 1 | 0 | 0 | 1 | 1 |
| 1 | 0 | 1 | 0 | 0 |
| 1 | 0 | 1 | 0 | 1 |
| 1 | 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 |
| 1 | 1 | 0 | 0 | 1 |
| 1 | 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 | 1 |
| 1 | 1 | 1 | 0 | 0 |
| 1 | 1 | 1 | 0 | 1 |
| 1 | 1 | 1 | 1 | 0 |
| 1 | 1 | 1 | 1 | 1 |
"""
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")

if __name__ == "__main__":
    unittest.main()