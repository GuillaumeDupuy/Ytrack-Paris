import subprocess
import unittest
import sys
from utils import *

FILENAME = "twenty-counter.c"

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
        
        self.answer = " ".join([str(x) for x in range(1, 21)]) + "\n"
        

    def testCheats(self):
        if containsInFile(readFile(f"/jail/student/{FILENAME}"), self.answer[:-1]):
            print(f"You are NOT allowed to print {self.answer[:-1]} all at once, you must use a FOR LOOP for that")
            sys.exit(1)
        
    
    def testOutput(self):
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, self.answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(self.answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")
    
        

if __name__ == "__main__":
    unittest.main()