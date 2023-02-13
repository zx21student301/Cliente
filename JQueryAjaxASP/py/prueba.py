#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import cgi

form = cgi.FieldStorage()
num = int(form['numero'].value)

print("Conten-type:text/plain\n")
print(num * 2)