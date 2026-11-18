from django.db import connection
from django.http import JsonResponse
from rest_framework.decorators import api_view

@api_view(['GET'])
def listar_cultivos(request):
    try:
        with connection.cursor() as cursor:
            cursor.execute("SELECT ide_cultivo, nombre, tipo, estado, fecha, ide_usuario FROM cultivos")
            rows = cursor.fetchall()
        for row in rows:
            lista_cultivos.append({
                "ide_cultivo": row[0],
                "nombre": row[1],
                "tipo": row[2],
                "estado": row[3],
                "fecha": str(row[4]), 
                "ide_usuario": row[5]
            })
            
        return JsonResponse(lista_cultivos, safe=False, status=200)
        
    except Exception as e:
        return JsonResponse({"error": f"Error al leer la tabla de MySQL: {str(e)}"}, status=500)
