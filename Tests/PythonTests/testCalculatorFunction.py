import unittest
from calculatorFunction import Calculator as calc

class TestCalculator(unittest.TestCase):
	def test_add_forCheckingAddition(self):
    	compute = calc.add(5,3)
		expected = 8
		self.assertEqual(expected,compute)


if __name__== '__main__':
	unittest.main()
