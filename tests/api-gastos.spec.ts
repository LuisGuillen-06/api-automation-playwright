import { test, expect } from '@playwright/test';
import 'dotenv/config';

const BASE_URL = 'https://gastoscorporativosapi-2025-bwesgqemdychftej.eastus2-01.azurewebsites.net/api';

test.describe('Suite de Pruebas API - Gastos Corporativos', () => {

  // Configuramos el Header con la Key que encontraste
  const authHeaders = {
    'API-KEY': process.env.API_KEY_GASTOS || '',
    'Content-Type': 'application/json'
  };

  test('Validar creación de Empleado y Status 200', async ({ request }) => {
    const nuevoEmpleado = {
      nombre: "Luis",
      apellido: "Guillen",
      email: `test_${Date.now()}@patagonia.com.ar`
    };

    const response = await request.post(`${BASE_URL}/Empleado`, {
      headers: authHeaders,
      data: nuevoEmpleado
    });

    // Se valida el Status Code
    expect(response.status()).toBe(200);
    
    // Se valida que la respuesta en el payload no sea nula
    const body = await response.json();
    console.log('Respuesta de la API:', body);
  });

  test('Validar error 401 si la API Key es incorrecta', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/Empleado`, {
      headers: { 'X-Api-Key': 'ClaveFalsa' },
      data: {}
    });

    expect(response.status()).toBe(401);
  });
});