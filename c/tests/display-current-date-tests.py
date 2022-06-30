import subprocess
import unittest
import sys
import datetime
from utils import *

FILENAME = "display-current-date.c"

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
        
    
    def testToday(self):
        answer = datetime.datetime.now().strftime("%H:%M:%S %d/%m/%Y\n")
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, answer, f"\nYou printed \n\n{showHiddenChars(output)}\nThe expected output was \n{showHiddenChars(answer)}\n")
        
        

if __name__ == "__main__":
    unittest.main()