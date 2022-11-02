#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import json
import cgi

args = cgi.parse()

i = int(args['inicio'][0])
f = int(args['final'][0])

fibo = [1,1,2,3,5,8,13,21,34,55]

print("Conten-Type: text/plain\n")

if 0<i<f<10:
	print(json.dumps(fibo[i-1:f]))
else:
	print(json.dumps(-1))