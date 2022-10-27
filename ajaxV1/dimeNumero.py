#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import cgi

args = cgi.parse()

n = int(args['num'][0])

print("Conten-Type: text/text\n")

print("hola..",n*2)
