import subprocess
import unittest
import sys
import datetime
from utils import *

FILENAME = "add-seconds-to-date.c"

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
        
    
    def testTodayPlus100(self):
        answer = datetime.datetime.now() + datetime.timedelta(seconds=100)
        answer = answer.strftime("%H:%M:%S %d/%m/%Y\n")
        
        self.process = subprocess.run([self.execname, "100"], capture_output=True)
        output = self.process.stdout.decode("UTF-8")
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")
    
    def testTodayPlus2000(self):
        answer = datetime.datetime.now() + datetime.timedelta(seconds=2000)
        answer = answer.strftime("%H:%M:%S %d/%m/%Y\n")
        
        self.process = subprocess.run([self.execname, "2000"], capture_output=True)
        output = self.process.stdout.decode("UTF-8")
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")
        
    def testTodayPlus52(self):
        answer = datetime.datetime.now() + datetime.timedelta(seconds=52)
        answer = answer.strftime("%H:%M:%S %d/%m/%Y\n")
        
        self.process = subprocess.run([self.execname, "52"], capture_output=True)
        output = self.process.stdout.decode("UTF-8")
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n(* '•' correspond to a space and '$' correspond to a newline '\\n')")
  

if __name__ == "__main__":
    unittest.main()