from django.db import models

class Usuarios(models.Model):
    nombre = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    telefono = models.CharField(max_length=15, blank=True, null=True)
    nomusuario = models.CharField(max_length=50, unique=True)
    contrasena = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.nombre} ({self.nomusuario})"
