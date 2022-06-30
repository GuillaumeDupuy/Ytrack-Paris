import subprocess
import unittest
import sys

class TestStringMethods(unittest.TestCase):
    def __init__(self, *args, **kwargs):
        super(TestStringMethods, self).__init__(*args, **kwargs)
        srcname = "/jail/student/helloworld.c"
        execname = "/jail/pythonOuput.o"
        cmd = ["gcc", srcname, "-o", execname];  
        p = subprocess.Popen(cmd);  
        p.wait();  
        try:
            self.process = subprocess.run([execname], capture_output=True)
        except:
            print("Cannot find file helloworld.c in student repository")  
            sys.exit(1)
        
    
    def testHelloWorld(self):
        output = self.process.stdout.decode("UTF-8")  
        self.assertEqual(output, "Hello World !")
        
        

if __name__ == "__main__":
    unittest.main()