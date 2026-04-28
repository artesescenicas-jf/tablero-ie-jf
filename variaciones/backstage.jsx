// Variación principal — BACKSTAGE EDITORIAL · IETI-JF
// Paleta basada en el escudo azul: navy #2B2A6E + verde engranaje #2AA757
// Sobre fondo crema papel #fff9ee. Estética de planilla editorial / libreto.

const IETI = {
  navy: '#2B2A6E',
  navyDark: '#1E1D55',
  navyLight: '#4A4CA8',
  green: '#2AA757',
  greenDark: '#1B6E3A',
  cream: '#fff9ee',
  creamDark: '#e8e1d3',
  ink: '#1a1612',
  muted: '#5a5244',
  rule: '#c8bfa8',
};

const Backstage = ({ data }) => {
  const [gradoIdx, setGradoIdx] = React.useState(0);
  const grado = data.grados[gradoIdx];
  const avisosOrdenados = [...grado.avisos].sort((a, b) => (b.pin ? 1 : 0) - (a.pin ? 1 : 0));

  return (
    <div style={{
      background: IETI.creamDark,
      backgroundImage: `
        repeating-linear-gradient(0deg, transparent 0, transparent 23px, rgba(43,42,110,0.05) 23px, rgba(43,42,110,0.05) 24px),
        radial-gradient(circle at 15% 8%, rgba(43,42,110,0.06), transparent 40%),
        radial-gradient(circle at 85% 85%, rgba(42,167,87,0.05), transparent 40%)
      `,
      color: IETI.ink,
      minHeight: '100%',
      fontFamily: '"Inter", system-ui, sans-serif',
      padding: '28px 40px 36px',
      position: 'relative'
    }}>
      {/* Header institucional con escudo */}
      <header style={{
        borderTop: `4px double ${IETI.navy}`,
        borderBottom: `1.5px solid ${IETI.navy}`,
        padding: '16px 0',
        marginBottom: 24,
        display: 'grid',
        gridTemplateColumns: '72px 1fr auto',
        alignItems: 'center',
        gap: 22
      }}>
        <img src="assets/escudo-azul.jpeg" alt="Escudo IETI-JF" style={{
          width: 68, height: 'auto', display: 'block',
          mixBlendMode: 'multiply'
        }} />
        <div>
          <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: IETI.navy }}>
            Institución Educativa Técnico Industrial
          </div>
          <h1 style={{
            margin: '2px 0 0',
            fontFamily: '"Playfair Display", "Didot", Georgia, serif',
            fontSize: 36, fontWeight: 900, letterSpacing: '-0.02em',
            lineHeight: 1, color: IETI.navy
          }}>
            Julio Flórez <em style={{ color: IETI.green, fontWeight: 700 }}>· Tablero</em>
          </h1>
          <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 14, color: IETI.muted, marginTop: 4 }}>
            Educación Artística · Artes Escénicas (Arte Dramático) — <span style={{ color: IETI.navy }}>con el profesor Fabio</span>
          </div>
        </div>
        <div style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
          letterSpacing: '0.25em', textTransform: 'uppercase',
          textAlign: 'right', color: IETI.muted, lineHeight: 1.6
        }}>
          Nº 04<br/>
          <span style={{ color: IETI.navy, fontSize: 13, letterSpacing: '0.1em' }}>2026 · T1</span>
        </div>
      </header>

      {/* Tabs grado tipo pestañas de carpeta */}
      <div style={{ display: 'flex', gap: 0, marginBottom: 0, alignItems: 'flex-end' }}>
        {data.grados.map((g, i) => (
          <button key={g.id} onClick={() => setGradoIdx(i)} style={{
            background: i === gradoIdx ? IETI.cream : '#d4ccba',
            color: i === gradoIdx ? g.color : IETI.muted,
            border: `1.5px solid ${IETI.navy}`,
            borderBottom: i === gradoIdx ? 'none' : `1.5px solid ${IETI.navy}`,
            padding: i === gradoIdx ? '14px 26px 16px' : '10px 24px 12px',
            marginRight: 4,
            marginBottom: i === gradoIdx ? -1 : 0,
            cursor: 'pointer',
            fontFamily: '"Playfair Display", serif',
            fontSize: 20, fontWeight: 700,
            position: 'relative',
            clipPath: 'polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)',
            transition: 'all .15s'
          }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.2em', fontWeight: 400, opacity: 0.7 }}>
              EXP · {String(i+1).padStart(2,'0')}
            </div>
            {g.numero} grado
          </button>
        ))}
      </div>

      {/* Panel de grado */}
      <div style={{
        background: IETI.cream,
        border: `1.5px solid ${IETI.navy}`,
        padding: '28px 32px',
        marginBottom: 24,
        position: 'relative'
      }}>
        {/* Encabezado grado */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          gap: 24,
          alignItems: 'center',
          paddingBottom: 18,
          marginBottom: 22,
          borderBottom: `1px dashed ${IETI.navy}`
        }}>
          <div style={{
            width: 84, height: 84,
            background: grado.color, color: IETI.cream,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            fontFamily: '"Playfair Display", serif',
            border: `1.5px solid ${IETI.navy}`,
            boxShadow: `4px 4px 0 ${IETI.navy}`
          }}>
            <div style={{ fontSize: 36, fontWeight: 900, lineHeight: 0.9, fontStyle: 'italic' }}>
              {grado.numero}
            </div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 8, letterSpacing: '0.2em', marginTop: 2 }}>
              GRADO
            </div>
          </div>
          <div>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', color: IETI.muted }}>
              Educación Artística · Artes Escénicas (Arte Dramático)
            </div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 30, fontStyle: 'italic', lineHeight: 1.1, marginTop: 4, color: IETI.navy }}>
              {grado.director}
            </div>
            <div style={{ fontSize: 13, color: IETI.muted, marginTop: 6 }}>
              {(grado.avisos||[]).length} anuncios · {(grado.tareas||[]).length} entregas pendientes · {(grado.links||[]).length} recursos
            </div>
          </div>
          <div style={{ textAlign: 'right', fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.2em', color: IETI.muted, textTransform: 'uppercase' }}>
            Actualizado<br/>
            <span style={{ color: IETI.navy, fontSize: 14, letterSpacing: 0 }}>22·abr·26</span>
          </div>
        </div>

        {/* Banner destacado: Drive + Libreto del grado */}
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14,
          marginBottom: 24
        }}>
          <a href={grado.driveUrl} target="_blank" rel="noopener" style={{
            background: '#F4B400',
            color: IETI.navy,
            border: `2px solid ${IETI.navy}`,
            boxShadow: `5px 5px 0 ${IETI.navy}`,
            padding: '20px 24px',
            textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 16,
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute', top: -10, left: 14,
              background: IETI.navy, color: '#F4B400',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 9, letterSpacing: '0.25em',
              padding: '3px 10px', textTransform: 'uppercase'
            }}>◉ descarga</div>
            <div style={{
              width: 54, height: 54, background: IETI.navy, color: '#F4B400',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 28, flexShrink: 0
            }}>⬇</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: IETI.navy, fontWeight: 700 }}>
                Carpeta oficial del grado
              </div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 24, fontWeight: 900, lineHeight: 1.05, marginTop: 3 }}>
                Drive de {grado.numero} grado
              </div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.15em', marginTop: 5, fontWeight: 600 }}>
                Entregas · materiales · archivos ⇗
              </div>
            </div>
          </a>
          <a href={grado.libretoUrl} target="_blank" rel="noopener" style={{
            background: '#F4B400',
            color: IETI.navy,
            border: `2px solid ${IETI.navy}`,
            boxShadow: `5px 5px 0 ${grado.color}`,
            padding: '20px 24px',
            textDecoration: 'none',
            display: 'flex', alignItems: 'center', gap: 16,
            position: 'relative'
          }}>
            <div style={{
              position: 'absolute', top: -10, left: 14,
              background: IETI.navy, color: '#F4B400',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 9, letterSpacing: '0.25em',
              padding: '3px 10px', textTransform: 'uppercase'
            }}>▤ libreto</div>
            <div style={{
              width: 54, height: 54, background: IETI.navy, color: '#F4B400',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 26, flexShrink: 0
            }}>▤</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: IETI.navy, fontWeight: 700 }}>
                Libreto de la semana
              </div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 20, fontWeight: 900, lineHeight: 1.1, marginTop: 3 }}>
                {grado.libretoTitulo}
              </div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.15em', marginTop: 5, fontWeight: 600 }}>
                Abrir documento ⇗
              </div>
            </div>
          </a>
        </div>

        {/* Grid: avisos (col grande) + tareas (col lateral) */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 32 }}>
          <div>
            <SectionTitleBS num="01" label="Anuncios del grado" color={grado.color} />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 22, marginTop: 18 }}>
              {avisosOrdenados.map((a, i) => (
                <NotaBS key={a.id} aviso={a} idx={i} gradoColor={grado.color} />
              ))}
            </div>
          </div>

          <aside>
            <SectionTitleBS num="02" label="Hoja de llamados" color={grado.color} />
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 14, fontSize: 12 }}>
              <thead>
                <tr style={{ borderBottom: `1.5px solid ${IETI.navy}` }}>
                  <th style={thBS}>#</th>
                  <th style={thBS}>Materia</th>
                  <th style={{...thBS, textAlign: 'right'}}>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {(grado.tareas||[]).map((t, i) => (
                  <tr key={i} style={{ borderBottom: `1px dashed ${IETI.rule}` }}>
                    <td style={{...tdBS, fontFamily: '"JetBrains Mono", monospace', color: IETI.muted, width: 28}}>
                      {String(i+1).padStart(2,'0')}
                    </td>
                    <td style={tdBS}>
                      <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.2em', color: grado.color, textTransform: 'uppercase' }}>
                        {t.materia}
                      </div>
                      <div style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 14 }}>
                        {t.titulo}
                      </div>
                    </td>
                    <td style={{...tdBS, textAlign: 'right', fontFamily: '"JetBrains Mono", monospace', fontSize: 11, whiteSpace: 'nowrap'}}>
                      {t.fecha}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ marginTop: 28 }}>
              <SectionTitleBS num="03" label="Recursos y enlaces" color={grado.color} />
              <div style={{ marginTop: 12 }}>
                {(grado.links||[]).map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener" style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    padding: '10px 0', borderBottom: `1px solid ${IETI.rule}`,
                    color: IETI.ink, textDecoration: 'none'
                  }}>
                    <span style={{
                      width: 22, height: 22, border: `1.5px solid ${grado.color}`,
                      color: grado.color, display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: 11,
                      fontFamily: '"JetBrains Mono", monospace'
                    }}>
                      {String(i+1).padStart(2,'0')}
                    </span>
                    <span style={{
                      flex: 1, fontFamily: '"Playfair Display", serif',
                      fontSize: 14, fontStyle: 'italic',
                      textDecoration: 'underline', textDecorationStyle: 'dotted',
                      textUnderlineOffset: 3
                    }}>
                      {l.titulo}
                    </span>
                    <span style={{ color: IETI.muted, fontSize: 12 }}>↗</span>
                  </a>
                ))}
              </div>
            </div>

            <div style={{ marginTop: 28 }}>
              <SectionTitleBS num="04" label="Descargas" color={grado.color} />
              <div style={{ marginTop: 12 }}>
                {(grado.adjuntos||[]).map((a, i) => {
                  const hasUrl = a.url && a.url !== '#';
                  return (
                    <a key={i}
                       href={hasUrl ? a.url : '#'}
                       target={hasUrl ? "_blank" : undefined}
                       rel={hasUrl ? "noopener" : undefined}
                       onClick={hasUrl ? undefined : (e => e.preventDefault())}
                       style={{
                         display: 'flex', alignItems: 'center', gap: 10,
                         padding: '10px 12px', marginBottom: 6,
                         background: '#f5ecd8',
                         border: `1px solid ${IETI.rule}`,
                         color: IETI.ink, textDecoration: 'none',
                         fontFamily: '"JetBrains Mono", monospace', fontSize: 11,
                         opacity: hasUrl ? 1 : 0.75,
                         cursor: hasUrl ? 'pointer' : 'default'
                       }}>
                      <span style={{ color: grado.color, fontSize: 14 }}>▾</span>
                      <span style={{ flex: 1 }}>{a.nombre}</span>
                      <span style={{ color: IETI.muted, fontSize: 10 }}>{a.peso}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>

        {/* Galería */}
        <div style={{ marginTop: 32, paddingTop: 24, borderTop: `1px dashed ${IETI.navy}` }}>
          <SectionTitleBS num="05" label="Bitácora visual" color={grado.color} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16, marginTop: 18 }}>
            {(grado.galeria||[]).map((g, i) => {
              const hasUrl = g.url && g.url !== '#';
              const Tag = hasUrl ? 'a' : 'div';
              const linkProps = hasUrl ? { href: g.url, target: '_blank', rel: 'noopener' } : {};
              return (
              <Tag key={i} {...linkProps} style={{
                background: IETI.cream,
                border: `1.5px solid ${IETI.navy}`,
                padding: 8,
                boxShadow: `3px 3px 0 ${IETI.navy}`,
                transform: `rotate(${(i % 3 - 1) * 0.6}deg)`,
                display: 'block',
                color: IETI.ink, textDecoration: 'none',
                cursor: hasUrl ? 'pointer' : 'default'
              }}>
                <div style={{
                  aspectRatio: '4/3',
                  background: `
                    repeating-linear-gradient(-45deg, ${grado.color}15 0 8px, ${grado.color}25 8px 16px)
                  `,
                  border: `1px solid ${IETI.navy}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 10, letterSpacing: '0.2em',
                  color: grado.color
                }}>
                  IMG · {String(i+1).padStart(3, '0')}
                </div>
                <div style={{ padding: '8px 4px 2px' }}>
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 13, fontStyle: 'italic', lineHeight: 1.2 }}>
                    {g.titulo}
                  </div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 9, letterSpacing: '0.2em', color: IETI.muted, textTransform: 'uppercase', marginTop: 3 }}>
                    {g.fecha}
                  </div>
                </div>
              </Tag>
              );
            })}
          </div>
        </div>
      </div>

      {/* Secciones globales: FAQ + Video de la semana */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 20, marginBottom: 24 }}>
        {/* Video de la semana */}
        {data.videoSemana && (
          <a href={data.videoSemana.url} target="_blank" rel="noopener" style={{
            background: IETI.navy, color: IETI.cream,
            border: `1.5px solid ${IETI.navy}`,
            padding: '22px 26px',
            textDecoration: 'none',
            position: 'relative',
            overflow: 'hidden',
            display: 'block'
          }}>
            <div style={{
              position: 'absolute', top: -30, right: -30,
              width: 180, height: 180, borderRadius: '50%',
              background: IETI.green, opacity: 0.18
            }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: IETI.green, marginBottom: 8 }}>
                ▷ Video recomendado de la semana
              </div>
              <div style={{
                fontFamily: '"Playfair Display", serif',
                fontSize: 26, fontStyle: 'italic', fontWeight: 700, lineHeight: 1.15
              }}>
                {data.videoSemana.titulo}
              </div>
              <div style={{ fontSize: 14, color: '#e8e1d3', marginTop: 8, lineHeight: 1.5 }}>
                {data.videoSemana.subtitulo}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: IETI.green }}>
                <span>⇗ Ver en YouTube</span>
                <span style={{ opacity: 0.7 }}>{data.videoSemana.dirigidoA}</span>
              </div>
            </div>
          </a>
        )}

        {/* FAQ */}
        {data.faq && (
          <div style={{
            background: IETI.cream,
            border: `1.5px solid ${IETI.navy}`,
            padding: '22px 26px'
          }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: IETI.green, marginBottom: 8 }}>
              ? Preguntas frecuentes
            </div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontStyle: 'italic', fontWeight: 700, color: IETI.navy, marginBottom: 14 }}>
              Lo que preguntan siempre
            </div>
            {data.faq.map((item, i) => <FAQItem key={i} item={item} />)}
          </div>
        )}
      </div>

      {/* Footer editorial */}
      <footer style={{
        borderTop: `4px double ${IETI.navy}`,
        paddingTop: 14,
        display: 'flex', justifyContent: 'space-between',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: IETI.muted, flexWrap: 'wrap', gap: 10
      }}>
        <span>IETI Julio Flórez · Depto. Comunicaciones</span>
        <span style={{ color: IETI.green }}>⚙ Técnico · Industrial</span>
        <span>Pág {gradoIdx+1} / {data.grados.length}</span>
      </footer>
    </div>
  );
};

const thBS = {
  textAlign: 'left', padding: '8px 4px',
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase',
  color: IETI.muted, fontWeight: 500
};
const tdBS = { padding: '10px 4px', verticalAlign: 'top' };

const SectionTitleBS = ({ num, label, color }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
    <span style={{
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: 10, letterSpacing: '0.3em',
      color: color, fontWeight: 700
    }}>
      § {num}
    </span>
    <span style={{
      flex: 1,
      fontFamily: '"Playfair Display", serif',
      fontSize: 20, fontStyle: 'italic', fontWeight: 700,
      borderBottom: `1.5px solid ${IETI.navy}`,
      paddingBottom: 4,
      color: IETI.navy
    }}>
      {label}
    </span>
  </div>
);

// Notas: fondo crema con un delgado filete de color del grado (más institucional
// que los post-its de colores saturados, conserva la sensación editorial)
const NotaBS = ({ aviso, idx, gradoColor }) => {
  const rot = ((idx * 37) % 7 - 3) * 0.35;
  const isPin = aviso.pin;
  return (
    <article style={{
      background: isPin ? '#fff3d4' : IETI.cream,
      padding: '26px 18px 16px',
      border: `1px solid ${isPin ? gradoColor : 'rgba(26,22,18,0.15)'}`,
      borderLeft: `4px solid ${gradoColor}`,
      boxShadow: `3px 4px 0 rgba(43,42,110,0.15), 0 8px 18px rgba(0,0,0,0.08)`,
      transform: `rotate(${rot}deg)`,
      position: 'relative',
      fontFamily: '"Inter", sans-serif'
    }}>
      {/* Cinta washi a rayas tipo engranaje */}
      <div style={{
        position: 'absolute',
        top: -8, left: '30%', width: '40%', height: 18,
        background: `repeating-linear-gradient(45deg, ${gradoColor}, ${gradoColor} 4px, ${gradoColor}aa 4px, ${gradoColor}aa 8px)`,
        opacity: 0.85,
        border: `1px solid ${IETI.navy}`
      }} />
      {isPin && (
        <div style={{
          position: 'absolute', top: -10, right: 10,
          background: IETI.navy, color: IETI.cream,
          fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
          padding: '3px 8px', letterSpacing: '0.2em',
          border: `1px solid ${IETI.navy}`
        }}>
          ★ FIJADO
        </div>
      )}
      <div style={{
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 9, letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: IETI.muted, marginBottom: 8,
        display: 'flex', justifyContent: 'space-between'
      }}>
        <span style={{ color: gradoColor }}>{(TIPO_BS[aviso.tipo] || TIPO_FALLBACK_BS).label}</span>
        <span>{aviso.fecha}</span>
      </div>
      <h3 style={{
        margin: '0 0 8px',
        fontFamily: '"Playfair Display", serif',
        fontSize: 19, fontStyle: 'italic',
        fontWeight: 700, lineHeight: 1.15,
        color: IETI.navy
      }}>
        {aviso.titulo}
      </h3>
      <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: '#2a2218' }}>
        {aviso.cuerpo}
      </p>
    </article>
  );
};

const TIPO_BS = {
  urgente: { label: '⚑ urgente' },
  tarea: { label: '◆ entrega' },
  noticia: { label: '◇ noticia' },
  evento: { label: '❖ evento' },
  concepto: { label: '◈ concepto' },
  'pregunta/respuesta': { label: '? pregunta' },
  pregunta: { label: '? pregunta' },
};
const TIPO_FALLBACK_BS = { label: '· aviso' };

const FAQItem = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div style={{
      borderBottom: `1px dashed ${IETI.rule}`,
      padding: '10px 0'
    }}>
      <button onClick={() => setOpen(!open)} style={{
        background: 'none', border: 'none', padding: 0, cursor: 'pointer',
        width: '100%', textAlign: 'left',
        display: 'flex', alignItems: 'center', gap: 10,
        color: IETI.navy, fontFamily: '"Playfair Display", serif',
        fontStyle: 'italic', fontSize: 15, fontWeight: 600
      }}>
        <span style={{
          fontFamily: '"JetBrains Mono", monospace', fontSize: 14,
          color: IETI.green, width: 16, textAlign: 'center'
        }}>{open ? '−' : '+'}</span>
        <span style={{ flex: 1 }}>{item.q}</span>
      </button>
      {open && (
        <div style={{
          marginTop: 8, marginLeft: 26,
          fontSize: 13, lineHeight: 1.55, color: IETI.ink
        }}>
          {item.a}
        </div>
      )}
    </div>
  );
};

window.Backstage = Backstage;
