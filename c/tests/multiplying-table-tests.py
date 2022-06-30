import subprocess
import unittest
import sys
from utils import *

FILENAME = "multiplying-table.c"

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
        if containsInFile(readFile(f"/jail/student/{FILENAME}"), "12345678910"):
            print(f"You are NOT allowed to print \"  1  2  3  4  5  6  7  8  9 10\" all at once, you must use a FOR LOOP for that")
            sys.exit(1)
        
    
    def testCharacters(self):
        answer = """  1  2  3  4  5  6  7  8  9 10
  2  4  6  8 10 12 14 16 18 20
  3  6  9 12 15 18 21 24 27 30
  4  8 12 16 20 24 28 32 36 40
  5 10 15 20 25 30 35 40 45 50
  6 12 18 24 30 36 42 48 54 60
  7 14 21 28 35 42 49 56 63 70
  8 16 24 32 40 48 56 64 72 80
  9 18 27 36 45 54 63 72 81 90
 10 20 30 40 50 60 70 80 90100
"""
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n\"•\" correspond to a space and \"$\" correspond to a newline (\\n)")
        
        

if __name__ == "__main__":
    unittest.main()