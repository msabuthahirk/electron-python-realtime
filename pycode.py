import sys
import time
import threading
from threading import Thread


def add(a,b):
	try:
		print(str(int(a)+int(b)))
	except ValueError:
		print(str(float(a)+float(b)))
	sys.stdout.flush()

def sub(a,b):
	try:
		print(str(int(a)-int(b)))
	except ValueError:
		print(str(float(a)-float(b)))
	sys.stdout.flush()

def mul(a,b):
	try:
		print(str(int(a)*int(b)))
	except ValueError:
		print(str(float(a)*float(b)))
	sys.stdout.flush()

def div(a,b):
	print(str(float(a)/float(b)))
	sys.stdout.flush()

def getInput():
	message = raw_input()
	messageArray = message.split(' ')
	command = messageArray[0]
	operand1 = messageArray[1]
	operand2 = messageArray[2]
	if(command=='add'):
		Thread(target = add(operand1,operand2)).start()
	if(command=='sub'):
		Thread(target = sub(operand1,operand2)).start()
	if(command=='mul'):
		Thread(target = mul(operand1,operand2)).start()
	if(command=='div'):
		Thread(target = div(operand1,operand2)).start()
	getInput()
if __name__ == '__main__':
    Thread(target = getInput).start()