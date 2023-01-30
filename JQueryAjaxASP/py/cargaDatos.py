#!C:\Users\zx21student301\AppData\Local\Microsoft\WindowsApps\python

import mysql.connector
import json

#conectar a la base de datos
mydb = mysql.connector.connect(
  host='localhost',
  user='campeonatofutbol',
  password='campeonatofutbol',
  database='campeonatofutbol'
)

#insertar en la base de datos
mycursor = mydb.cursor()

sql="SELECT id, equipoLocal, equipoVisitante, golesLocal, golesVisitante FROM Resultados"
mycursor.execute(sql)

lp = mycursor.fetchall()

datos = []

for x in lp:
  datos += {
  "id" : x[0],
  "EquipLocal" : x[1],
  "EquipVisitante" : x[2],
  "golesLocal" : x[3],
  "golesVisitante" : x[4]
  },

#convertir el array a formato json
lpJson = json.dumps(datos)

print("Conten-type:text/plain\n")
print(lpJson)