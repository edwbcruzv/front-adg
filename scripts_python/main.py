from datetime import time
import time


def filtra_edad(edad:int)->str:

    if edad >= 0 and edad <= 5:
        return "Niño"
    elif edad >= 6 and edad <= 11:
        return "Infante"
    elif edad >= 12 and edad <= 26:
        return "Joven"
    elif edad >= 27 and edad <= 59:
        return "Adulto"
    if edad >= 60:
        return "Adulto Mayor"

def filtra_hora(hora:int,minuto:int)->str:
    if hora >= 0:#0:0
        if (hora < 6) or (hora == 6 and minuto == 0):#5:59 y 6:00
            return "Madrugada"
        elif hora >= 6:# 6:01
            if hora < 12 or (hora == 12 and minuto == 0):#11:59 y 12:00
                return "Mañana"
            elif hora >= 12:#12:01
                if hora < 18 or (hora == 18 and minuto == 0):#17:59 y 18:00
                    return "Tarde"
                elif hora >= 18:#18:01
                    if hora < 24: #23:59
                        return "Noche"
    
    print("\t\t\t",hora,":",minuto)

destino= open("Formateado.csv",'w',encoding="utf-8")


with open("manipular.csv",'r') as archivo:
    for linea in archivo.readlines():
        #formato esperado: numero,datetime
        aux_list=linea.split(',')
        # print("----------------------------\nLeido:",linea)
        # bandera=False

        try:
            edad=int(aux_list[0])
            str_edad=filtra_edad(edad)
        except Exception as e:
            #formato posible: NULL,datetime
            print("Error al detectar la edad:",e)
            str_edad=aux_list[0] # se deja el valor que esta por defecto
            # bandera=True

        try:
            hora=aux_list[1].replace('\n','') # "hora:min:segs"
            obj_time=time.strptime(hora,"%H:%M:%S")
            # print(edad,hora,obj_time.tm_hour,obj_time.tm_min,obj_time.tm_sec) # pruebas
            str_hora=filtra_hora(obj_time.tm_hour,obj_time.tm_min)
        except Exception as e:
            #formato posible: numero,NULL
            #formato posible: NULL,NULL
            print("Error al detectar la hora:",e)
            str_hora=aux_list[1].replace('\n','') # se deja el valor que esta por defecto
            # bandera=True

        nueva_linea=str_edad+","+str_hora+"\n"

        # if bandera:
        #     print("Falso Positivo:",nueva_linea)

        # print("Escrito:",nueva_linea)
        # time.sleep(1)
        destino.writelines(nueva_linea)

