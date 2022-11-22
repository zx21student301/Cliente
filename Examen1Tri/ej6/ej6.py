#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import cgi,json

form = cgi.FieldStorage()
n = int(form['numero'].value)

primos=[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

resultado=False

if n in primos:
    resultado=True

print("Content-Type: text/plain\n")
print(json.dumps(resultado)) 