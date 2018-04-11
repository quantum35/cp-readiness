import unittest
from calculatorFunction import calculator as calc

class KnownValues(unittest.TestCase):
    #convenctional way of writing Tests in Py is
    #test_FunctionName_TestDescription
     def test_calculateAddition_forTwoValues(self):
         #capture the results of the functions

        results = calc.calculateAddition(1,2)
        expected = 3;
        #Check for the Expected output
        self.assertEqual(expected,results)

#run the test
if __name__  == '__main__':
    unittest.main()