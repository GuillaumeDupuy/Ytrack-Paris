import subprocess
import unittest
import sys
from utils import *

FILENAME = "ascii-code.c"

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
        self.answer = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~\n"
        
    
    def testCheats(self):
        if containsInFile(readFile(f"/jail/student/{FILENAME}"), self.answer[:-1]):
            print(f"You are NOT allowed to print {self.answer[:-1]} all at once, you must use a FOR LOOP for that")
            sys.exit(1)
    
    def testCharacters(self):
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, self.answer, f"\nYou printed \n\n{output}\nThe expected output was \n\n{self.answer}\n")
        
        

if __name__ == "__main__":
    unittest.main()