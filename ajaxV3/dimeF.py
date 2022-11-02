#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import json
import cgi

args = cgi.parse()

n = int(args['num'][0])

fibo = [1,1,2,3,5,8,13,21,34,55]

print("Conten-Type: text/plain\n")

if n>10:
	print(json.dumps(-1))
else:
	print(json.dumps(fibo[:n]))