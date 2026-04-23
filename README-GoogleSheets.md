# Editar el tablero desde Google Sheets (sin tocar código)

Con esto vos (o cualquier profe) edita una Google Sheet y el tablero se actualiza solo. No hay que volver a subir nada a GitHub.

## 1 · Crear la hoja

Creá una Google Sheet nueva con estas pestañas (nombres exactos en minúscula):

### Pestañas `6`, `7`, `8`, `9` — avisos de cada grado

| tipo | pin | fecha | titulo | cuerpo |
|---|---|---|---|---|
| urgente | TRUE | 24 abr | Ensayo general | Traigan ropa cómoda... |
| tarea | FALSE | 28 abr | Retrato sonoro | Graben 1 minuto de audio... |
| noticia | FALSE | 20 abr | Bienvenida | Aquí van los avisos... |
| evento | FALSE | 02 may | Salida al teatro | Función matinée... |

- `tipo`: `urgente`, `tarea`, `noticia`, `evento`
- `pin`: `TRUE` (sube el aviso a la parte de arriba con ★ FIJADO) o vacío

### Pestañas `tareas_6`, `tareas_7`, `tareas_8`, `tareas_9` — hoja de llamados

| materia | titulo | fecha |
|---|---|---|
| Expresión corporal | Diario de 5 gestos | 25 abr |

### Pestaña `links` — todos los enlaces en una sola tabla

| grado | titulo | url | tipo |
|---|---|---|---|
| 6 | Drive de sexto | https://drive.google.com/... | drive |
| 6 | Guía respiración | https://... | pdf |
| 7 | Drive de séptimo | https://... | drive |

- `tipo`: `drive`, `pdf`, `form`, `web`, `classroom`

### Pestañas `meta_6`, `meta_7`, `meta_8`, `meta_9` — los banners grandes

| campo | valor |
|---|---|
| driveUrl | https://drive.google.com/drive/folders/XXXX |
| libretoUrl | https://docs.google.com/... |
| libretoTitulo | Libreto obra de cierre · v3 |

## 2 · Publicar cada pestaña como CSV

Para **cada pestaña**, una por una:

1. En la Sheet → **Archivo → Compartir → Publicar en la web**
2. En *Contenido publicado*: selecciona la pestaña
3. Formato: **CSV**
4. Clic en **Publicar**
5. Copia la URL. Se ve así:
   `https://docs.google.com/spreadsheets/d/e/XXXXX/pub?gid=0&single=true&output=csv`

Anota cada URL con su nombre de pestaña.

## 3 · Pegar las URLs en el HTML

Abre `data.js` y al **final del archivo** (después del `};` de cierre) agregá:

```js
window.TABLERO_SHEETS = {
  "6":        "https://docs.google.com/.../pub?gid=0&output=csv",
  "7":        "https://docs.google.com/.../pub?gid=111&output=csv",
  "8":        "https://docs.google.com/.../pub?gid=222&output=csv",
  "9":        "https://docs.google.com/.../pub?gid=333&output=csv",
  "tareas_6": "https://docs.google.com/.../pub?gid=444&output=csv",
  "tareas_7": "https://docs.google.com/.../pub?gid=555&output=csv",
  "tareas_8": "https://docs.google.com/.../pub?gid=666&output=csv",
  "tareas_9": "https://docs.google.com/.../pub?gid=777&output=csv",
  "meta_6":   "https://docs.google.com/.../pub?gid=888&output=csv",
  "meta_7":   "https://docs.google.com/.../pub?gid=999&output=csv",
  "meta_8":   "https://docs.google.com/.../pub?gid=1010&output=csv",
  "meta_9":   "https://docs.google.com/.../pub?gid=1111&output=csv",
  "links":    "https://docs.google.com/.../pub?gid=1212&output=csv"
};
```

Solo necesitas las pestañas que vas a usar — las que no incluyas se quedan con los datos de `data.js`.

Subí `data.js` a GitHub (botón del lápiz en el repo → pegás → Commit).

## 4 · El flujo diario

1. Abrís tu Google Sheet.
2. Editás, agregás filas, cambiás la columna `pin`.
3. **Los cambios se publican solos** (Google republica automáticamente cuando tenés la hoja en modo "Publicar en la web").
4. Recargás Google Sites y ya están los cambios.

No necesitás volver a tocar GitHub para editar contenido — solo para cambiar el diseño.

## Insertar el tablero en Google Sites

1. En Google Sites editando la página:
2. **Insertar → Insertar código → Insertar por URL**
3. Pegá la URL de GitHub Pages: `https://tu-usuario.github.io/tablero-ie-jf/Tablero%20de%20Anuncios.html`
4. Ajustá el marco: ancho completo, alto ~1500 px.

Listo.
