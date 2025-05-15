**`auto-fit` en CSS Grid (Resumen):**

```css
.contenedor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(ancho-minimo, 1fr));
  /* O para filas: */
  /* grid-template-rows: repeat(auto-fit, minmax(alto-minimo, auto)); */
}

```
* Palabra clave usada con `repeat()` en `grid-template-columns` o `grid-template-rows`.
* Crea automáticamente **tantas columnas (o filas) como quepan** en el contenedor.
* Funciona en conjunto con `minmax(ancho-mínimo, 1fr)` (o similar para filas).
    * `ancho-mínimo`: Ancho mínimo que cada columna debe tener.
    * `1fr`: El espacio restante se distribuye proporcionalmente entre las columnas.
* **Diferencia clave con `auto-fill`:**
    * **`auto-fit`:** Colapsa las pistas vacías. Las columnas ocupadas se expanden para llenar el espacio.
    * **`auto-fill`:** Intenta crear todas las pistas posibles, dejando espacios vacíos si no hay suficientes elementos.
* **Ideal para:**
    * Listados dinámicos de elementos.
    * Diseños responsivos que se adaptan al ancho del contenedor.

**Sintaxis típica:**

```css
.contenedor-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}