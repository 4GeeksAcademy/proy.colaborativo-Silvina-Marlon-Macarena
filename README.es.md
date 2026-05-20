# HTML Hello

El boilerplate más básico para cualquier estudiante de 4Geeks Academy, empieza tu primer sitio web desde cero.

> Tienes un video tutorial sobre [cómo usar esta plantilla para crear tu primer sitio web aquí](https://youtu.be/dfbDCMu_p-0).

## ¿Qué hacer a continuación?

Crea un archivo `index.html` con [la estructura básica de HTML](https://4geeks.com/es/lesson/what-is-html-learn-html-es#estructura-de-pgina) y ve el resultado en vivo corriendo un servidor web utilizando el siguiente comando:

```bash
$ pip3 install flask && python3 server.py
```

- Puedes crear tantos archivos HTML cómo desees.
- También puedes crear archivos CSS e importarlos en tu página web utilizando una etiqueta `<link>` ubicándola entre las etiquetas `<head></head>`, de la siguiente manera:

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```

- Si deseas usar Tailwind CSS, agrégalo de forma opcional mediante el CDN oficial de Tailwind CSS v4 dentro del mismo `<head>`:

```html
<head>
  ...
  <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
  <link rel="stylesheet" type="text/css" href="styles.css">
  ...
</head>
```


## Agradecimientos

Esta y otras plantillas son utilizadas para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp). 

Realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. 

Conoce más sobre nuestros [Cursos de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero/?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/desarrollador-full-stack/desarrollador-full-stack), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).

## Sistema de idiomas (fr/es)

Se implemento un sistema de traduccion reutilizable con JavaScript vanilla y sin duplicar HTML por idioma.

### Estructura recomendada

- `i18n.js`: diccionario de traducciones (`fr` y `es`), cambio de idioma en vivo, persistencia en `localStorage` y aplicacion de textos en DOM.
- `index.html`, `Catalogo.html`, `Vista-de-producto.html`, `Carrito.html`, `Formulario-de-pago.html`, `formulario-pago/index.html`: mantienen una sola version HTML y usan atributos `data-*` para marcar textos traducibles.

### Como marcar textos traducibles

- Texto interno:

```html
<h1 data-i18n="home.hero_title_line1">Style urbain sans effort</h1>
```

- Atributos (`placeholder`, `aria-label`, etc.):

```html
<input data-i18n-attr="placeholder:navbar.search_placeholder" placeholder="RECHERCHER">
```

### Selector de idioma

En cada navbar se agrega un selector:

```html
<select data-language-select>
  <option value="fr">FR</option>
  <option value="es">ES</option>
</select>
```

### Comportamiento

- Idioma por defecto: `fr`.
- Idioma secundario: `es`.
- Persistencia: `localStorage` con la clave `loop_language`.
- Cambio dinamico: los textos cambian sin recargar la pagina.

### Buenas practicas para escalar

- Reutilizar llaves semanticas (`navbar.*`, `home.*`, `catalog.*`, `footer.*`).
- Evitar hardcodear textos en scripts que renderizan HTML; usar `window.loopI18n.translateKey(...)`.
- Mantener nombres de archivos en minusculas para evitar problemas en Linux/Codespaces.
- Agregar nuevas traducciones primero al diccionario y luego marcar HTML con `data-i18n`.
