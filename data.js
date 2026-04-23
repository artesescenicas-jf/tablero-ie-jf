// Datos compartidos del tablero de anuncios
// Asignatura: Artes Escénicas (Teatro) + Audiovisual · Profesor Fabio
// Un tablero por grado (6°, 7°, 8°, 9°) de la IETI Julio Flórez
// En producción estos datos pueden venir de Google Sheets (ver README).

window.TABLERO_DATA = {
  escuela: "IETI-JF",
  escuelaNombreLargo: "Institución Educativa Técnico Industrial Julio Flórez",
  asignatura: "Artes Escénicas · Audiovisual",
  videoSemana: {
    titulo: "La cuarta pared — explicada en 4 minutos",
    subtitulo: "Por qué existe, cuándo romperla y por qué importa al actuar",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    dirigidoA: "Todos los grados"
  },
  faq: [
    { q: "¿Qué debo llevar a la clase?", a: "Ropa cómoda que permita moverse (sudadera, licra o pantaloneta), cuaderno de bitácora y termo de agua. Evitar joyería, accesorios que estorben y celulares en mano durante los ejercicios." },
    { q: "¿Dónde encuentro los libretos, tareas y planes de aula?", a: "Cada grado tiene su carpeta de Drive enlazada arriba del tablero (banner amarillo). Allí están los libretos, el plan de aula y las subcarpetas por periodo." },
    { q: "¿Cómo se entregan las tareas audiovisuales?", a: "En la carpeta de Drive del grado, en la subcarpeta de Entregas del periodo correspondiente. Nombrar el archivo así: Grado_Apellido_Tarea (ejemplo: 7B_Perez_Retrato.mp4)." },
    { q: "¿Las presentaciones y obras de fin de periodo son obligatorias?", a: "Sí, son la evaluación del periodo. Si hay una situación especial debidamente justificada, se acuerda con el profe una alternativa equivalente." }
  ],
  grados: [
    {
      id: "6",
      nombre: "Sexto Grado",
      numero: "6°",
      director: "Profesor Fabio",
      color: "#2B2A6E",
      colorAccent: "#2AA757",
      driveUrl: "https://drive.google.com/drive/folders/1Z4Bej8LJhpUPsdFU7CDHoLvJhJIWp5Y4",
      libretoUrl: "https://drive.google.com/drive/folders/17w3MvMPlwNsEr1FKeQRqKgz0HVQZCf12",
      libretoTitulo: "Unidad 4 — Del billete al blocking",
      unidad: "UD4 · P2 · 13 abr → 8 may",
      preguntaProblematizadora: "¿Cómo puedo registrar y planificar lo que hago en escena — usando el blocking como sistema de notación — para que mis acciones sean claras, organizadas y comunicables al público?",
      avisos: [
        { id: "s6-1", pin: true, tipo: "urgente", fecha: "22 abr", titulo: "Presentación del ejercicio del billete", cuerpo: "Retomamos la secuencia del billete de P1: la ensayan y la presentan en grupo. Llegar con el cuaderno y lápiz — vamos a dibujar el blocking que yo usé para enseñarla." },
        { id: "s6-2", pin: true, tipo: "tarea", fecha: "29 abr", titulo: "Entrega: blocking completo del billete en el cuaderno", cuerpo: "Dibujen el blocking completo del ejercicio del billete con numeración secuencial. Cada entrada de personaje o cada tanto de acciones → hoja nueva, manteniendo la numeración. Se revisa en clase." },
        { id: "s6-3", tipo: "noticia", fecha: "20 abr", titulo: "¿Qué es el blocking?", cuerpo: "El blocking o bloqueo escénico es la organización precisa y coreografiada de los movimientos, posiciones y entradas/salidas de los actores en el escenario. No es moverse al azar — es comunicar emociones y subtexto con el cuerpo, definir dónde se para un actor, hacia dónde se mueve y cuándo. Se registra en el cuaderno para mantener la secuencia en cada función." },
        { id: "s6-4", tipo: "evento", fecha: "20 abr", titulo: "Arranca Unidad 4: ‘Del billete al blocking’", cuerpo: "Vamos a formalizar la herramienta que yo usé para enseñarles el billete en P1. El blocking deja de ser algo que copian de mí para ser algo que ustedes saben leer, dibujar y usar." }
      ],
      tareas: [
        { materia: "Cuaderno", titulo: "Blocking completo del ejercicio del billete", fecha: "29 abr" },
        { materia: "Escena", titulo: "Presentar el billete con calidades de movimiento", fecha: "06 may" },
        { materia: "Coevaluación", titulo: "¿Se entendió la secuencia? (rúbrica pública)", fecha: "08 may" }
      ],
      links: [
        { titulo: "Carpeta Drive de Sexto", url: "https://drive.google.com/drive/folders/1Z4Bej8LJhpUPsdFU7CDHoLvJhJIWp5Y4", tipo: "drive" },
        { titulo: "Plan de Aula P2 — Sexto (PDF)", url: "#", tipo: "pdf" },
        { titulo: "Unidad 4 — Del billete al blocking (PDF)", url: "#", tipo: "pdf" },
        { titulo: "Formato de blocking para el cuaderno", url: "#", tipo: "form" }
      ],
      adjuntos: [
        { nombre: "Unidad_4_ArtesEscenicas_Teatro_FabioAlcalde_6.pdf", peso: "310 KB" },
        { nombre: "PlanAula_2P_ArtesEscenicas_Teatro_FabioAlcalde_6.pdf", peso: "280 KB" },
        { nombre: "Rubrica_blocking_billete.pdf", peso: "190 KB" }
      ],
      galeria: [
        { titulo: "Ejercicio del billete — ensayo", fecha: "20 abr" },
        { titulo: "Primer blocking dibujado", fecha: "15 abr" },
        { titulo: "Calidades del movimiento", fecha: "13 abr" }
      ],
      palabrasClave: ["blocking","secuencialidad","numeración","desplazamiento","acción escénica","calidades del movimiento","tensión","fluidez","pantomima"]
    },
    {
      id: "7",
      nombre: "Séptimo Grado",
      numero: "7°",
      director: "Profesor Fabio",
      color: "#2AA757",
      colorAccent: "#2B2A6E",
      driveUrl: "https://drive.google.com/drive/folders/1s8mKmOCGh2N-gFm0X9Tmzc5funZzRU_t?usp=drive_link",
      libretoUrl: "https://drive.google.com/drive/folders/17w3MvMPlwNsEr1FKeQRqKgz0HVQZCf12",
      libretoTitulo: "Unidad 4 — Puente: del personaje improvisado al guión",
      unidad: "UD4 · P2 · 13 abr → 8 may",
      preguntaProblematizadora: "¿Cómo mantengo vivo al personaje que descubrí en la improvisación cuando ahora tengo que seguir un guión — y cómo le doy vida a un muñeco para que el público crea en él?",
      avisos: [
        { id: "s7-1", pin: true, tipo: "urgente", fecha: "22 abr", titulo: "Dibujo del muñeco y ficha del personaje", cuerpo: "Cada estudiante dibuja su muñeco en el cuaderno y elabora la ficha del personaje inspirada en la improvisación de P1: cómo se comporta, qué quiere, cómo se mueve. Llegar con colores y el cuaderno de teatro." },
        { id: "s7-2", pin: true, tipo: "tarea", fecha: "29 abr", titulo: "Muñeco en soporte — primera escena", cuerpo: "Traer fotocopia del dibujo pegada en un soporte sencillo (borrador, tablita o palito desde arriba). Empezamos a actuar con él siguiendo el guión de la obra. Una escena por clase." },
        { id: "s7-3", tipo: "noticia", fecha: "20 abr", titulo: "¿Qué es darle vida a un muñeco?", cuerpo: "Darle vida no es mover el muñeco más rápido ni ponerle ropa. Es que el muñeco comunique intenciones y emociones al público: intención, dirección de la mirada, ritmo del movimiento, momentos donde habla con quien lo está viendo. Un muñeco muerto se desplaza; un muñeco vivo cuenta." },
        { id: "s7-4", tipo: "evento", fecha: "06 may", titulo: "Muestra 1 — presentación libre con muñecos", cuerpo: "Presentamos lo que llevamos de la obra con los muñecos. No se exige fidelidad al texto; lo que importa es que el muñeco tenga vida y que la historia se entienda para el público." }
      ],
      tareas: [
        { materia: "Cuaderno", titulo: "Ficha del personaje + dibujo del muñeco", fecha: "22 abr" },
        { materia: "Taller", titulo: "Muñeco en soporte listo para actuar", fecha: "29 abr" },
        { materia: "Escena", titulo: "Avanzar 3 escenas del guión con el muñeco", fecha: "06 may" },
        { materia: "Muestra 1", titulo: "Presentación libre grabada", fecha: "08 may" }
      ],
      links: [
        { titulo: "Carpeta Drive de Séptimo", url: "https://drive.google.com/drive/folders/1s8mKmOCGh2N-gFm0X9Tmzc5funZzRU_t?usp=drive_link", tipo: "drive" },
        { titulo: "Plan de Aula P2 — Séptimo (PDF)", url: "#", tipo: "pdf" },
        { titulo: "Unidad 4 — Del personaje improvisado al guión (PDF)", url: "#", tipo: "pdf" },
        { titulo: "Formato ficha del personaje", url: "#", tipo: "form" }
      ],
      adjuntos: [
        { nombre: "PlanAula_2P_ArtesEscenicas_Teatro_FabioAlcalde_7.pdf", peso: "280 KB" },
        { nombre: "Unidad_4_ArtesEscenicas_Teatro_FabioAlcalde_7.pdf", peso: "320 KB" },
        { nombre: "Ficha_personaje_formato.pdf", peso: "180 KB" },
        { nombre: "Rubrica_muneco_vida.pdf", peso: "210 KB" }
      ],
      galeria: [
        { titulo: "Primer muñeco en soporte", fecha: "22 abr" },
        { titulo: "Improvisación con personaje (P1)", fecha: "15 abr" },
        { titulo: "Lectura del guión", fecha: "13 abr" }
      ],
      palabrasClave: ["muñeco","personaje","ficha del personaje","improvisación","guión","andamiaje","soporte","vida del muñeco","público"]
    },
    {
      id: "8",
      nombre: "Octavo Grado",
      numero: "8°",
      director: "Profesor Fabio",
      color: "#4A4CA8",
      colorAccent: "#2AA757",
      driveUrl: "https://drive.google.com/drive/folders/1k-YhHSlqeEcWvTI4NzAyixrwct__ztAc?usp=drive_link",
      libretoUrl: "https://drive.google.com/drive/folders/17w3MvMPlwNsEr1FKeQRqKgz0HVQZCf12",
      libretoTitulo: "Unidad 4 — El monólogo como puente hacia la obra",
      unidad: "UD4 · P2 · 13 abr → 8 may",
      preguntaProblematizadora: "¿Cómo aplico las herramientas del monólogo — dividir en ideas, encontrar el objetivo — para entender a los personajes de la obra, y cómo mejoro mi voz para que el público sienta lo que el personaje siente?",
      avisos: [
        { id: "s8-1", pin: true, tipo: "urgente", fecha: "22 abr", titulo: "Retomamos el monólogo de P1 — ahora en clave vocal", cuerpo: "Traer el monólogo que trabajaron en P1. Ya no lo analizamos (eso fue P1): ahora lo trabajamos en su dimensión vocal — ritmo, pausas, velocidad, intención. Celular cargado para grabar." },
        { id: "s8-2", pin: true, tipo: "tarea", fecha: "29 abr", titulo: "Análisis de un parlamento de la obra asignada", cuerpo: "Cada estudiante elige un parlamento de un personaje de la obra y le aplica el método del monólogo: dividir en ideas → parafrasear con palabras propias → encontrar el objetivo del personaje. Se entrega en el cuaderno." },
        { id: "s8-3", tipo: "noticia", fecha: "20 abr", titulo: "Obras asignadas para el periodo", cuerpo: "Trabajamos con: Dulcita y el burrito, Ánimas que ya amanezca, Le vendo la mula, La función que sale mal (8-3) y posiblemente El Principito. Durante la UD5 leemos completa y en UD6 montamos las primeras escenas." },
        { id: "s8-4", tipo: "evento", fecha: "06 may", titulo: "Primera grabación vocal — línea base del año", cuerpo: "Grabamos el monólogo con la mejora vocal trabajada. Esta grabación queda como línea base: al final del año la comparamos con la tercera y vemos cuánto mejoró la voz." }
      ],
      tareas: [
        { materia: "Cuaderno", titulo: "Análisis del parlamento (ideas + paráfrasis + objetivo)", fecha: "29 abr" },
        { materia: "Voz", titulo: "Ejercicios de ritmo, pausas e intención", fecha: "02 may" },
        { materia: "Grabación", titulo: "Monólogo vocal mejorado (línea base)", fecha: "06 may" },
        { materia: "Coevaluación", titulo: "¿Se nota la diferencia con P1? (escucha grupal)", fecha: "08 may" }
      ],
      links: [
        { titulo: "Carpeta Drive de Octavo", url: "https://drive.google.com/drive/folders/1k-YhHSlqeEcWvTI4NzAyixrwct__ztAc?usp=drive_link", tipo: "drive" },
        { titulo: "Plan de Aula P2 — Octavo (PDF)", url: "#", tipo: "pdf" },
        { titulo: "Unidad 4 — El monólogo como puente (PDF)", url: "#", tipo: "pdf" },
        { titulo: "Formato análisis de parlamento", url: "#", tipo: "form" }
      ],
      adjuntos: [
        { nombre: "Unidad_4_ArtesEscenicas_Teatro_FabioAlcalde_8.pdf", peso: "330 KB" },
        { nombre: "PlanAula_2P_ArtesEscenicas_Teatro_FabioAlcalde_8.pdf", peso: "280 KB" },
        { nombre: "Rubrica_monologo_vocal.pdf", peso: "210 KB" }
      ],
      galeria: [
        { titulo: "Ejercicio vocal — ritmo y pausas", fecha: "22 abr" },
        { titulo: "Lectura de la obra asignada", fecha: "15 abr" },
        { titulo: "Monólogos de P1 (archivo)", fecha: "13 abr" }
      ],
      palabrasClave: ["monólogo","pista vocal","ritmo","pausas","velocidad","intención vocal","línea base","parlamento","dividir en ideas","parafrasear","objetivo del personaje","obra asignada"]
    },
    {
      id: "9",
      nombre: "Noveno Grado",
      numero: "9°",
      director: "Profesor Fabio",
      color: "#1B6E3A",
      colorAccent: "#2B2A6E",
      driveUrl: "https://drive.google.com/drive/folders/1_kAids9W4LP-Lz2gOsZcsVL4YXVeNqWd?usp=drive_link",
      libretoUrl: "https://drive.google.com/drive/folders/17w3MvMPlwNsEr1FKeQRqKgz0HVQZCf12",
      libretoTitulo: "Unidad 4 — Retomar y evaluar: ¿dónde quedó cada grupo?",
      unidad: "UD4 · P2 · 13 abr → 8 may",
      preguntaProblematizadora: "¿Qué tengo después de P1 — un texto viable, un borrador con potencial, o nada — y cuál es mi ruta para llegar a una obra que funcione en escena?",
      avisos: [
        { id: "s9-1", pin: true, tipo: "urgente", fecha: "22 abr", titulo: "Presentación del estado del guion por grupo", cuerpo: "Cada grupo presenta lo que tiene: ¿hay conflicto? ¿Los personajes están definidos? ¿Hay inicio, desarrollo y desenlace? Vamos a evaluar juntos y decidir la ruta de P2 para cada grupo." },
        { id: "s9-2", pin: true, tipo: "tarea", fecha: "29 abr", titulo: "Primeras escenas en el espacio — la escena como laboratorio", cuerpo: "Cada grupo pone en escena al menos dos escenas de su texto (o de la obra asignada). La escena es la prueba de fuego: lo que suena bien en papel no siempre funciona actuado. Identificar y anotar problemas concretos." },
        { id: "s9-3", tipo: "noticia", fecha: "20 abr", titulo: "Rutas del periodo: dos caminos", cuerpo: "Grupos con texto viable → ruta de mejora por actuación (el texto se pule poniendo en escena). Grupos sin texto sólido → reciben obra asignada y siguen la misma ruta de exploración escénica." },
        { id: "s9-4", tipo: "evento", fecha: "06 may", titulo: "Retroalimentación grupal — ¿qué apareció al actuar?", cuerpo: "Sesión de retroalimentación: ¿qué problemas aparecieron al poner el texto en escena? ¿Qué sorpresas — cosas que funcionan mejor o peor de lo esperado? Cada grupo cierra UD4 con su ruta definida." }
      ],
      tareas: [
        { materia: "Cuaderno", titulo: "Estado del guion: qué hay / qué falta / problemas", fecha: "22 abr" },
        { materia: "Escena", titulo: "Poner en escena 2 escenas del texto", fecha: "29 abr" },
        { materia: "Portafolio", titulo: "Ruta asignada documentada", fecha: "02 may" },
        { materia: "Coevaluación", titulo: "¿Funciona la historia en escena? (rúbrica pública)", fecha: "08 may" }
      ],
      links: [
        { titulo: "Carpeta Drive de Noveno", url: "https://drive.google.com/drive/folders/1_kAids9W4LP-Lz2gOsZcsVL4YXVeNqWd?usp=drive_link", tipo: "drive" },
        { titulo: "Plan de Aula P2 — Noveno (PDF)", url: "#", tipo: "pdf" },
        { titulo: "Unidad 4 — Retomar y evaluar (PDF)", url: "#", tipo: "pdf" }
      ],
      adjuntos: [
        { nombre: "Unidad_4_ArtesEscenicas_Teatro_FabioAlcalde_9.pdf", peso: "330 KB" },
        { nombre: "PlanAula_2P_ArtesEscenicas_Teatro_FabioAlcalde_9.pdf", peso: "280 KB" },
        { nombre: "Rubrica_evaluacion_guion.pdf", peso: "220 KB" }
      ],
      galeria: [
        { titulo: "Primera lectura de guiones", fecha: "22 abr" },
        { titulo: "Exploración escénica — ruta viable", fecha: "15 abr" },
        { titulo: "Mesa de retroalimentación", fecha: "13 abr" }
      ],
      palabrasClave: ["evaluación","viabilidad","guion","texto","escena","conflicto","personajes","estructura narrativa","ruta","obra asignada","exploración escénica"]
    }
  ]
};
