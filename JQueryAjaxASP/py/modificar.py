#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import cgi
import mysql.connector
import json

form = cgi.FieldStorage()

idFila = int(form['idFila'].value)
el = form['EquipLocal'].value
ev = form['EquipVisitante'].value
gl = int(form['golesLocal'].value)
gv = int(form['golesVisitante'].value)

#conectar a la base de datos
mydb = mysql.connector.connect(
  host='localhost',
  user='campeonatofutbol',
  password='campeonatofutbol',
  database='campeonatofutbol'
)

#insertar en la base de datos
mycursor = mydb.cursor()
sql = "UPDATE resultados SET equipoLocal = %s, equipoVisitante = %s, golesLocal = %s, golesVisitante = %s WHERE id LIKE %s"
val = (el,ev,gl,gv,idFila)
mycursor.execute(sql,val)
mydb.commit()

sql2="SELECT equipoLocal, equipoVisitante, golesLocal, golesVisitante FROM Resultados WHERE id like %s"
val = (idFila,)
mycursor.execute(sql2,val)

lpJson = json.dumps(mycursor.fetchall())

print("Conten-type:text/plain\n")
print(lpJson)