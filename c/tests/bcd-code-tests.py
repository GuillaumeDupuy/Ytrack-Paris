import subprocess
import unittest
import sys
from utils import *

FILENAME = "bcd-code.c"

class TestStringMethods(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestStringMethods, self).__init__(*args, **kwargs)
        srcname = f"/jail/main.c"
        execname = "/jail/pythonOuput.o"
        cmd = ["gcc", srcname, "-o", execname];  
        p = subprocess.Popen(cmd);  
        p.wait();  
        try:
            self.process = subprocess.run([execname], capture_output=True)
        except:
            print(f"Cannot find file {FILENAME} in student repository")  
            sys.exit(1)
        
    def testCheats(self):
        if containsInFile(readFile(f"/jail/student/{FILENAME}"), "| 0 | 0 | 0 | 0 |"):
            print(f"You are NOT allowed to print \"| 0 | 0 | 0 | 0 |\" all at once, you must use a FOR LOOP for that")
            sys.exit(1)
    
    def testCharacters(self):
        answer = """| 0 | 0 | 0 | 0 |
| 0 | 0 | 0 | 1 |
| 0 | 0 | 1 | 0 |
| 0 | 0 | 1 | 1 |
| 0 | 1 | 0 | 0 |
| 0 | 1 | 0 | 1 |
| 0 | 1 | 1 | 0 |
| 0 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 1 |
"""
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")
        
        

if __name__ == "__main__":
    unittest.main()