#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import cgi
import mysql.connector

form = cgi.FieldStorage()

idFila = int(form['idFila'].value)

#conectar a la base de datos
mydb = mysql.connector.connect(
  host='localhost',
  user='campeonatofutbol',
  password='campeonatofutbol',
  database='campeonatofutbol'
)

#insertar en la base de datos
mycursor = mydb.cursor()
sql = "DELETE FROM Resultados WHERE id LIKE %s"
val = (idFila,)
mycursor.execute(sql,val)
mydb.commit()

print("Conten-type:text/plain\n")
print("correcto")