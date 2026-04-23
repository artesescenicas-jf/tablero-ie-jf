// Lector de Google Sheets (publicadas como CSV).
// Si window.TABLERO_SHEETS existe con URLs, este módulo lee esas hojas
// y mezcla el resultado en window.TABLERO_DATA antes de renderizar.
//
// Formato esperado por hoja:
//   pestañas "6","7","8","9" → columnas: tipo,pin,fecha,titulo,cuerpo
//   pestaña "tareas_6" (opcional) → columnas: materia,titulo,fecha
//   pestaña "links" → columnas: grado,titulo,url,tipo
//   pestaña "meta_6" (opcional) → columnas: campo,valor  (driveUrl, libretoUrl, libretoTitulo)
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

      // Tareas
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

      // Meta (drive, libreto)
      if (sheets[`meta_${gid}`]) {
        const rows = await fetchSheet(sheets[`meta_${gid}`]);
        if (rows) {
          rows.forEach(r => {
            if (r.campo && r.valor) grado[r.campo] = r.valor;
          });
        }
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
