# Gastos Corporativos - API Automation

Este proyecto es una suite de pruebas automatizadas para mi API de **Gastos Corporativos**. La API está desarrollada en **.NET / C#** y corriendo actualmente en **Azure**. El objetivo de estos tests es asegurar que los flujos de empleados y gastos funcionen bien antes de cada despliegue.

## ¿Qué tecnologías usé?
* **Framework:** Playwright (para API Testing).
* **Lenguaje:** TypeScript / JavaScript.
* **Infraestructura:** La API está hosteada en Azure App Service.
* **Seguridad:** Autenticación por medio de API-Key.

## Tests implementados
* **Creación de Empleado:** Valida que el endpoint POST /Empleado responda con un 200 OK y procese bien los datos. Uso correos dinámicos para evitar conflictos de duplicados en la base de datos.
* **Validación de Seguridad:** Verifica que si se intenta usar la API sin la clave correcta (o con una falsa), el sistema responda con un error 401 (Unauthorized).
* **Check de Payload:** Controla que los datos que devuelve la API coincidan con lo que el frontend espera recibir.

## Cómo correrlo

1. Cloná el repo e instalá las dependencias:
```bash
npm install
