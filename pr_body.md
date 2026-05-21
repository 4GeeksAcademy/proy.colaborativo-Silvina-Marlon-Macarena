## Resumen
Implementa el formulario de pago en `/formulario-pago/` con validaciones de entrada, cálculo dinámico del total y selección de método de pago (tarjeta, banco o efectivo).

## Cambios realizados
- Se crea la vista principal de checkout en `formulario-pago/index.html`.
- Se agregan secciones de:
  - Datos personales
  - Dirección
  - Método de pago
  - Resumen de compra
- Se implementa lógica JS para:
  - Cálculo de descuento del 15% en tarjeta
  - Cálculo del total con impuestos
  - Habilitar/deshabilitar campos según método seleccionado
  - Validación de número de tarjeta (16 dígitos), CVV (3-4) y vencimiento MM/AA
  - Validación de vencimiento con mes válido y fecha no expirada
  - Validación de banco seleccionado y redirección al banco elegido
- Se agregan atributos `name` en campos relevantes para envío de datos del formulario.
- Se elimina lógica redundante en la actualización de métodos de pago.
- Se agrega redirección en la raíz del proyecto hacia `/formulario-pago/`.

## Cómo probar
1. Abrir `/formulario-pago/`.
2. Verificar que por defecto esté seleccionado `Tarjeta` y se muestre descuento.
3. Probar tarjeta con datos inválidos y confirmar que marque errores.
4. Probar `Banco` sin seleccionar opción y validar error.
5. Probar `Banco` con opción válida y confirmar redirección.
6. Probar `Efectivo` y confirmar envío sin bloqueo.

## Checklist
- [x] Validaciones básicas implementadas
- [x] Cálculo de total y descuento funcionando
- [x] Flujo de métodos de pago validado
- [x] Rutas de assets funcionando en `/formulario-pago/`
