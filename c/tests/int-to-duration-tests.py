import subprocess
import unittest
import sys
from utils import *

FILENAME = "int-to-duration.c"

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
        
    def test1000s(self):
        self.process = subprocess.run([self.execname, "1000"], capture_output=True)
        answer = "0d 0h 16m 40s\n"
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")

    
    def test10000s(self):
        self.process = subprocess.run([self.execname, "10000"], capture_output=True)
        answer = "0d 2h 46m 40s\n"
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")

    def test200000s(self):
        self.process = subprocess.run([self.execname, "200000"], capture_output=True)
        answer = "2d 7h 33m 20s\n"
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")

if __name__ == "__main__":
    unittest.main()