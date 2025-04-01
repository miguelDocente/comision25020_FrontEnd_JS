### Conceptos Básicos de HTML

1. **Introducción a HTML: Etiquetas básicas y atributos**\
   HTML es un lenguaje de marcado que estructura el contenido de una página web mediante **etiquetas**. Estas pueden tener **atributos**, que proporcionan información adicional.

   ```html
   <img src="imagen.jpg" alt="Descripción">
   ```

   - `src`: Especifica la fuente de la imagen.
   - `alt`: Describe la imagen para accesibilidad.

2. **Estructura básica de un documento HTML**

   ```html
   <!DOCTYPE html>
   <html>
   <head>
       <title>Mi Página</title>
   </head>
   <body>
       <h1>Hola Mundo</h1>
   </body>
   </html>
   ```

   - `<!DOCTYPE html>`: Indica que se usa HTML5.
   - `<html>`: Contiene todo el código HTML.
   - `<head>`: Contiene metadatos y enlaces a hojas de estilo.
   - `<body>`: Contiene el contenido visible.

3. **Etiquetas básicas más comunes**

   - `<h1>`, `<h2>`: Encabezados de distintos niveles.
   - `<p>`: Párrafos de texto.
   - `<b>`: Texto en **negrita** (sin significado semántico).
   - `<strong>`: Texto en **negrita**, indicando importancia.
   - `<i>`: Texto en *cursiva* (sin significado semántico).

4. **Enlaces e imágenes**

   - `<a href="url">`: Crea un hipervínculo.
   - `<img src="imagen.jpg" alt="Descripción">`: Inserta imágenes.

5. **Etiquetas semánticas más comunes**\
   HTML5 introdujo etiquetas que describen mejor el contenido y su significado dentro de la estructura del documento. Estas etiquetas mejoran la accesibilidad, el SEO y la mantenibilidad del código.

   - `<header>`: Representa el encabezado de la página o de una sección. Suele contener logotipos, títulos y navegación principal.
   - `<nav>`: Se utiliza para bloques de navegación principales (menús). No todos los grupos de enlaces deben ir en `<nav>`, solo los principales.
   - `<main>`: Contiene el contenido principal único de la página. Solo debe haber uno por documento.
   - `<footer>`: Pie de página o de sección, normalmente con información de contacto, derechos de autor, etc.
   - `<section>`: Agrupa contenido temáticamente relacionado. Debe tener generalmente un encabezado.
   - `<article>`: Representa contenido independiente y autónomo (como una noticia, blog post o comentario).
   - `<aside>`: Contiene contenido relacionado pero no esencial (como barras laterales, glosarios o publicidad).
   - `<figure>` y `<figcaption>`: Para imágenes, diagramas o código con su descripción.
   - `<time>`: Para representar fechas y horas de forma semántica.
   - `<mark>`: Resalta texto relevante en un contexto particular.

   **Ventajas del HTML semántico:**
   - Mejor accesibilidad para lectores de pantalla
   - Mayor legibilidad del código
   - Mejor posicionamiento SEO
   - Más fácil mantenimiento
   - Mejor adaptación a futuros estándares

6. **Cómo dividir una página HTML con etiquetas semánticas**

   ```html
   <header>
       <h1>Mi Sitio Web</h1>
   </header>
   <nav>
       <a href="#">Inicio</a>
       <a href="#">Sobre mí</a>
   </nav>
   <main>
       <section>
           <article>
               <h2>Artículo 1</h2>
               <p>Contenido del artículo.</p>
           </article>
       </section>
       <aside>
           <p>Publicidad o enlaces relacionados.</p>
       </aside>
   </main>
   <footer>
       <p>Derechos reservados.</p>
   </footer>
   ```

### Lectura adicional

[Descubriendo el HTML Semántico - Un recorrido práctico](https://paulogalarza.com/descubriendo-el-html-semantico-un-recorrido-practico/)

[HTML Semántico: Qué es y cómo utilizarlo correctamente - Semrush](https://es.semrush.com/blog/html-semantico/)