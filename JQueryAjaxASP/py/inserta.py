#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import cgi
import mysql.connector
import json

form = cgi.FieldStorage()

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
sql = "INSERT INTO Resultados(equipoLocal, equipoVisitante, golesLocal, golesVisitante) VALUES (%s,%s,%s,%s);"
val = (el,ev,gl,gv)
mycursor.execute(sql,val)
mydb.commit()

sqlId = "SELECT @@identity"
mycursor.execute(sqlId)
idShelf = json.dumps(mycursor.fetchall())

print("Conten-type:text/plain\n")
print(idShelf)