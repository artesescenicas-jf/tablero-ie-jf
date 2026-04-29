// Lector de Google Sheets (publicadas como CSV).
// Si window.TABLERO_SHEETS existe con URLs, este módulo lee esas hojas
// y mezcla el resultado en window.TABLERO_DATA antes de renderizar.
//
// Formato esperado por hoja:
//   pestañas "6","7","8","9" → columnas: tipo,pin,fecha,titulo,cuerpo
//   pestaña "tareas" → columnas: grado,materia,titulo,fecha
//   pestaña "links" → columnas: grado,titulo,url,tipo
//   pestaña "descargas" → columnas: grado,nombre,peso,url
//   pestaña "galeria" → columnas: grado,titulo,fecha,url
//   pestaña "meta" (opcional) → columnas: grado,campo,valor  (driveUrl, libretoTitulo, libretoSubtitulo)
//   pestaña "faq" (opcional) → columnas: pregunta,respuesta
//   pestaña "video" (opcional) → columnas: campo,valor (titulo, subtitulo, url, dirigidoA)
//
// Uso: incluir este script ANTES de backstage.jsx.
// Devuelve una promesa en window.TABLERO_READY.

(function(){
  if (!window.TABLERO_SHEETS) {
    window.TABLERO_READY = Promise.resolve(window.TABLERO_DATA);
    return;
  }

  const parseCSV = (text) => {
    // Parser CSV robusto: maneja comillas y comas dentro de campos
    const rows = [];
    let row = [], cur = '', inQ = false;
    for (let i = 0; i < text.length; i++) {
      const c = text[i], n = text[i+1];
      if (inQ) {
        if (c === '"' && n === '"') { cur += '"'; i++; }
        else if (c === '"') { inQ = false; }
        else cur += c;
      } else {
        if (c === '"') inQ = true;
        else if (c === ',') { row.push(cur); cur = ''; }
        else if (c === '\n') { row.push(cur); rows.push(row); row = []; cur = ''; }
        else if (c === '\r') { /* skip */ }
        else cur += c;
      }
    }
    if (cur.length || row.length) { row.push(cur); rows.push(row); }
    if (!rows.length) return [];
    const headers = rows[0].map(h => h.trim().toLowerCase());
    return rows.slice(1).filter(r => r.some(c => c && c.trim())).map(r => {
      const obj = {};
      headers.forEach((h, i) => { obj[h] = (r[i] || '').trim(); });
      return obj;
    });
  };

  const boolish = (v) => /^(true|verdadero|s[ií]|1|x)$/i.test(String(v).trim());

  async function fetchSheet(url) {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return parseCSV(await r.text());
    } catch (e) {
      console.warn('Error leyendo Sheet:', url, e);
      return null;
    }
  }

  async function hydrate() {
    const sheets = window.TABLERO_SHEETS;
    const data = window.TABLERO_DATA;

    // Leer links globales una sola vez
    let linksGlobal = null;
    if (sheets.links) {
      const rows = await fetchSheet(sheets.links);
      if (rows) linksGlobal = rows;
    }

    // Tareas globales (con columna grado)
    let tareasGlobal = null;
    if (sheets.tareas) {
      const rows = await fetchSheet(sheets.tareas);
      if (rows) tareasGlobal = rows;
    }

    // Descargas globales (con columna grado)
    let descargasGlobal = null;
    if (sheets.descargas) {
      const rows = await fetchSheet(sheets.descargas);
      if (rows) descargasGlobal = rows;
    }

    // Galería global (con columna grado)
    let galeriaGlobal = null;
    if (sheets.galeria) {
      const rows = await fetchSheet(sheets.galeria);
      if (rows) galeriaGlobal = rows;
    }

    // Meta global (con columna grado)
    let metaGlobal = null;
    if (sheets.meta) {
      const rows = await fetchSheet(sheets.meta);
      if (rows) metaGlobal = rows;
    }

    // Meta global (filas sin grado → campos del data raíz)
    if (metaGlobal) {
      metaGlobal.filter(r => !r.grado || !r.grado.trim()).forEach(r => {
        if (r.campo && r.valor) data[r.campo] = r.valor;
      });
    }

    // FAQ global
    if (sheets.faq) {
      const rows = await fetchSheet(sheets.faq);
      if (rows && rows.length) {
        data.faq = rows
          .filter(r => (r.pregunta || r.q) && (r.respuesta || r.a))
          .map(r => ({ q: r.pregunta || r.q, a: r.respuesta || r.a }));
      }
    }

    // Video de la semana
    if (sheets.video) {
      const rows = await fetchSheet(sheets.video);
      if (rows && rows.length) {
        data.videoSemana = data.videoSemana || {};
        rows.forEach(r => {
          if (r.campo && r.valor) data.videoSemana[r.campo] = r.valor;
        });
      }
    }

    for (const grado of data.grados) {
      const gid = grado.id;

      // Avisos
      if (sheets[gid]) {
        const rows = await fetchSheet(sheets[gid]);
        if (rows && rows.length) {
          grado.avisos = rows.map((r, i) => ({
            id: `s${gid}-sheet-${i}`,
            tipo: r.tipo || 'noticia',
            pin: boolish(r.pin),
            fecha: r.fecha || '',
            titulo: r.titulo || '',
            cuerpo: r.cuerpo || ''
          }));
        }
      }

      // Tareas (legacy por-grado: tareas_6, tareas_7…)
      if (sheets[`tareas_${gid}`]) {
        const rows = await fetchSheet(sheets[`tareas_${gid}`]);
        if (rows && rows.length) {
          grado.tareas = rows.map(r => ({
            materia: r.materia || '',
            titulo: r.titulo || '',
            fecha: r.fecha || ''
          }));
        }
      }

      // Tareas desde pestaña global "tareas" (columna grado)
      if (tareasGlobal) {
        const rows = tareasGlobal.filter(r => r.grado === gid);
        if (rows.length) {
          grado.tareas = rows.map(r => ({
            materia: r.materia || '',
            titulo: r.titulo || '',
            fecha: r.fecha || ''
          }));
        }
      }

      // Descargas desde pestaña global "descargas" (columna grado)
      if (descargasGlobal) {
        const rows = descargasGlobal.filter(r => r.grado === gid);
        if (rows.length) {
          grado.adjuntos = rows.map(r => ({
            nombre: r.nombre || '',
            peso: r.peso || '',
            url: r.url || ''
          }));
        }
      }

      // Galería desde pestaña global "galeria" (columna grado)
      if (galeriaGlobal) {
        const rows = galeriaGlobal.filter(r => r.grado === gid);
        if (rows.length) {
          grado.galeria = rows.map(r => ({
            titulo: r.titulo || '',
            fecha: r.fecha || '',
            url: r.url || ''
          }));
        }
      }

      // Meta por grado (legacy: meta_6, meta_7, ...)
      if (sheets[`meta_${gid}`]) {
        const rows = await fetchSheet(sheets[`meta_${gid}`]);
        if (rows) {
          rows.forEach(r => {
            if (r.campo && r.valor) grado[r.campo] = r.valor;
          });
        }
      }

      // Meta desde pestaña global "meta" (columna grado)
      if (metaGlobal) {
        metaGlobal.filter(r => r.grado === gid).forEach(r => {
          if (r.campo && r.valor) grado[r.campo] = r.valor;
        });
      }

      // Links filtrados por grado
      if (linksGlobal) {
        const links = linksGlobal.filter(l => l.grado === gid);
        if (links.length) {
          grado.links = links.map(l => ({
            titulo: l.titulo, url: l.url, tipo: l.tipo || 'web'
          }));
        }
      }
    }

    return data;
  }

  window.TABLERO_READY = hydrate();
})();
