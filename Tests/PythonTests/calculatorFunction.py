class Calculator:
	def __init__(self,fnum,snum):
		self.fnum = fnum
		self.snum = snum
	def add(self,num1,num2):
		return num1 + num2
	def subtr(self):
		return self.fnum - self.snum
	def divide(self):
		return self.fnum / self.snum
	def multiply(self):
		return self.fnum * self.snum