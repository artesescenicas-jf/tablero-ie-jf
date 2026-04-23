// Variación 2 — TIRA DE PELÍCULA / CINE
// Perforaciones de film, claqueta, estética de proyección, grano de película.

const Cinema = ({ data }) => {
  const [gradoIdx, setGradoIdx] = React.useState(0);
  const grado = data.grados[gradoIdx];

  const avisosOrdenados = [...grado.avisos].sort((a, b) => (b.pin ? 1 : 0) - (a.pin ? 1 : 0));

  return (
    <div style={{
      background: '#0d0d0d',
      color: '#e8e4d0',
      minHeight: '100%',
      fontFamily: '"Inter", system-ui, sans-serif',
      position: 'relative',
    }}>
      {/* Grano de película overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
        opacity: 0.08, mixBlendMode: 'overlay', zIndex: 10
      }} />

      <div style={{ padding: '32px 40px 0' }}>
        {/* Claqueta header */}
        <div style={{
          background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)',
          border: '2px solid #e8e4d0',
          padding: '0',
          marginBottom: 32,
          position: 'relative'
        }}>
          {/* Barras blancas y negras de la claqueta */}
          <div style={{ display: 'flex', height: 24 }}>
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{
                flex: 1,
                background: i % 2 === 0 ? '#e8e4d0' : '#0d0d0d',
                transform: 'skewX(-20deg)',
                margin: '-2px -1px'
              }} />
            ))}
          </div>
          <div style={{ padding: '20px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 20 }}>
            <div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 10, letterSpacing: '0.3em', color: '#888',
                textTransform: 'uppercase', marginBottom: 4
              }}>
                SCENE · TAKE · DATE
              </div>
              <h1 style={{
                fontSize: 42, margin: 0, fontWeight: 800,
                fontFamily: '"Bebas Neue", "Oswald", Impact, sans-serif',
                letterSpacing: '0.05em', color: '#e8e4d0'
              }}>
                TABLERO · {data.escuela.toUpperCase()}
              </h1>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
                letterSpacing: '0.3em', color: '#888', marginBottom: 2
              }}>
                PRODUCCIÓN
              </div>
              <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 20, color: '#f4b400' }}>
                2026 · T1
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', height: 24 }}>
            {[...Array(12)].map((_, i) => (
              <div key={i} style={{
                flex: 1,
                background: i % 2 === 0 ? '#0d0d0d' : '#e8e4d0',
                transform: 'skewX(-20deg)',
                margin: '-2px -1px'
              }} />
            ))}
          </div>
        </div>

        {/* Navegación de grados como carretes */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
          {data.grados.map((g, i) => (
            <button key={g.id} onClick={() => setGradoIdx(i)} style={{
              background: i === gradoIdx ? g.color : 'transparent',
              border: `2px solid ${i === gradoIdx ? g.color : '#333'}`,
              color: i === gradoIdx ? '#fff' : '#888',
              padding: '14px 18px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all .2s',
              fontFamily: '"Inter", sans-serif'
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
                letterSpacing: '0.2em', opacity: 0.7, marginBottom: 4
              }}>
                REEL 0{i+1}
              </div>
              <div style={{
                fontFamily: '"Bebas Neue", "Oswald", Impact, sans-serif',
                fontSize: 28, letterSpacing: '0.03em', lineHeight: 1
              }}>
                {g.nombre.toUpperCase()}
              </div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
                opacity: 0.6, marginTop: 4
              }}>
                {g.avisos.length} SCENES · {g.director}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tira de película con los avisos */}
      <FilmStrip avisos={avisosOrdenados} grado={grado} />

      {/* Dos columnas: próximas escenas (tareas) + créditos (links) */}
      <div style={{
        padding: '40px 40px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 40,
        background: '#080808',
        borderTop: '1px solid #222'
      }}>
        <section>
          <SectionHeader num="02" label="PRÓXIMAS ESCENAS" sub="Fechas de entrega" />
          {grado.tareas.map((t, i) => (
            <div key={i} style={{
              display: 'grid', gridTemplateColumns: '70px 1fr auto',
              padding: '16px 0', borderBottom: '1px solid #1f1f1f',
              alignItems: 'center', gap: 16
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11, color: grado.color,
                letterSpacing: '0.15em'
              }}>
                SC·{String(i+1).padStart(3, '0')}
              </div>
              <div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.2em', color: '#888', textTransform: 'uppercase' }}>
                  {t.materia}
                </div>
                <div style={{ fontSize: 16, marginTop: 3 }}>{t.titulo}</div>
              </div>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 11, color: '#f4b400',
                border: '1px solid #f4b400',
                padding: '4px 10px', letterSpacing: '0.15em'
              }}>
                {t.fecha.toUpperCase()}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 24 }}>
            <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.25em', color: '#666', marginBottom: 10, textTransform: 'uppercase' }}>
              MATERIAL DE RODAJE
            </div>
            {grado.adjuntos.map((a, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 0', color: '#e8e4d0', textDecoration: 'none',
                borderBottom: '1px dashed #222',
                fontFamily: '"JetBrains Mono", monospace', fontSize: 12
              }}>
                <span style={{ color: grado.color, fontSize: 14 }}>▼</span>
                <span style={{ flex: 1 }}>{a.nombre}</span>
                <span style={{ color: '#666', fontSize: 10 }}>{a.peso}</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader num="03" label="CRÉDITOS" sub="Enlaces y recursos" />
          <div style={{ display: 'grid', gap: 10 }}>
            {grado.links.map((l, i) => (
              <a key={i} href={l.url} target="_blank" rel="noopener" style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 16px',
                border: '1px solid #1f1f1f',
                color: '#e8e4d0', textDecoration: 'none',
                transition: 'all .2s',
                background: '#0f0f0f'
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = grado.color; e.currentTarget.style.background = '#151515'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#1f1f1f'; e.currentTarget.style.background = '#0f0f0f'; }}
              >
                <div style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 10, color: '#666', letterSpacing: '0.2em',
                  width: 32
                }}>
                  {String(i+1).padStart(2,'0')}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15 }}>{l.titulo}</div>
                  <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, color: '#666', letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 3 }}>
                    {l.tipo}
                  </div>
                </div>
                <span style={{ color: grado.color, fontSize: 14 }}>↗</span>
              </a>
            ))}
          </div>

          <div style={{ marginTop: 32 }}>
            <SectionHeader num="04" label="STILLS" sub="Galería fotográfica" />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {grado.galeria.map((g, i) => (
                <div key={i} style={{
                  aspectRatio: '1/1',
                  background: '#1a1a1a',
                  border: '1px solid #2a2a2a',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: `repeating-linear-gradient(45deg, ${grado.color}33, ${grado.color}33 6px, transparent 6px, transparent 12px)`
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0,
                    padding: '6px 8px',
                    background: 'linear-gradient(180deg, transparent, rgba(0,0,0,0.9))',
                    fontFamily: '"JetBrains Mono", monospace', fontSize: 9,
                    letterSpacing: '0.15em'
                  }}>
                    <div style={{ color: '#e8e4d0' }}>{g.titulo.toUpperCase()}</div>
                    <div style={{ color: '#666' }}>{g.fecha}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer style={{
        borderTop: '2px solid #1a1a1a',
        padding: '16px 40px',
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10, letterSpacing: '0.3em', color: '#555',
        textTransform: 'uppercase',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 10
      }}>
        <span>◉ REC · {data.escuela}</span>
        <span>ROLL {gradoIdx+1}/{data.grados.length}</span>
        <span>END OF REEL · 24 FPS</span>
      </footer>
    </div>
  );
};

const SectionHeader = ({ num, label, sub }) => (
  <div style={{ marginBottom: 18, display: 'flex', alignItems: 'baseline', gap: 14 }}>
    <div style={{
      fontFamily: '"Bebas Neue", "Oswald", Impact, sans-serif',
      fontSize: 48, color: '#333', lineHeight: 0.8
    }}>
      {num}
    </div>
    <div>
      <div style={{
        fontFamily: '"Bebas Neue", "Oswald", Impact, sans-serif',
        fontSize: 22, letterSpacing: '0.08em', color: '#e8e4d0'
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: '"JetBrains Mono", monospace', fontSize: 10,
        letterSpacing: '0.25em', color: '#666', textTransform: 'uppercase'
      }}>
        — {sub}
      </div>
    </div>
  </div>
);

const FilmStrip = ({ avisos, grado }) => {
  // Tira horizontal con scroll, cada "frame" es un aviso
  const [idx, setIdx] = React.useState(0);
  const current = avisos[idx];
  if (!current) return null;
  return (
    <div style={{ background: '#0a0a0a', padding: '0 0 32px' }}>
      {/* Perforaciones superior */}
      <Perforations />

      <div style={{ padding: '24px 40px' }}>
        <div style={{ marginBottom: 14 }}>
          <SectionHeader num="01" label="EN PROYECCIÓN" sub={`Aviso ${idx+1} de ${avisos.length} · ${grado.nombre}`} />
        </div>

        {/* Frame principal */}
        <article style={{
          background: 'linear-gradient(180deg, #141414, #0a0a0a)',
          border: `2px solid ${current.pin ? '#f4b400' : '#222'}`,
          padding: '28px 32px',
          display: 'grid',
          gridTemplateColumns: '120px 1fr auto',
          gap: 28,
          alignItems: 'start',
          minHeight: 180
        }}>
          <div>
            <div style={{
              fontFamily: '"Bebas Neue", "Oswald", Impact, sans-serif',
              fontSize: 72, color: grado.color, lineHeight: 0.85
            }}>
              {current.fecha.split(' ')[0]}
            </div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 11, letterSpacing: '0.25em', color: '#888',
              textTransform: 'uppercase'
            }}>
              {current.fecha.split(' ')[1]} · 2026
            </div>
          </div>

          <div>
            <div style={{
              display: 'inline-block',
              background: TIPO_CINE[current.tipo].bg,
              color: TIPO_CINE[current.tipo].fg,
              padding: '3px 10px',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: 10, letterSpacing: '0.25em',
              marginBottom: 14
            }}>
              {current.pin && '★ '}{TIPO_CINE[current.tipo].label}
            </div>
            <h2 style={{
              margin: 0,
              fontFamily: '"Bebas Neue", "Oswald", Impact, sans-serif',
              fontSize: 40, lineHeight: 1, letterSpacing: '0.02em',
              color: '#e8e4d0'
            }}>
              {current.titulo}
            </h2>
            <p style={{
              marginTop: 14, marginBottom: 0, fontSize: 15, lineHeight: 1.55,
              color: '#b8b4a0', maxWidth: 680
            }}>
              {current.cuerpo}
            </p>
          </div>

          <div style={{ textAlign: 'right', color: '#444', fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: '0.2em' }}>
            <div>FRAME</div>
            <div style={{ fontSize: 24, color: grado.color, margin: '4px 0' }}>
              {String(idx+1).padStart(3, '0')}
            </div>
            <div>/ {String(avisos.length).padStart(3, '0')}</div>
          </div>
        </article>

        {/* Strip de miniaturas */}
        <div style={{
          display: 'flex', gap: 6, marginTop: 18, overflowX: 'auto', paddingBottom: 6
        }}>
          {avisos.map((a, i) => (
            <button key={a.id} onClick={() => setIdx(i)} style={{
              flex: '0 0 auto',
              width: 140, padding: '10px 12px',
              background: i === idx ? '#1a1a1a' : 'transparent',
              border: `1px solid ${i === idx ? grado.color : '#222'}`,
              color: '#ccc', cursor: 'pointer', textAlign: 'left',
              fontFamily: '"Inter", sans-serif'
            }}>
              <div style={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: 9, letterSpacing: '0.2em',
                color: a.pin ? '#f4b400' : '#666', marginBottom: 4
              }}>
                {a.pin ? '★ ' : ''}{String(i+1).padStart(3,'0')} · {a.fecha}
              </div>
              <div style={{
                fontSize: 11, lineHeight: 1.3,
                display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}>
                {a.titulo}
              </div>
            </button>
          ))}
        </div>

        {/* Controles */}
        <div style={{
          marginTop: 16, display: 'flex', gap: 8, justifyContent: 'center',
          fontFamily: '"JetBrains Mono", monospace'
        }}>
          <button onClick={() => setIdx(Math.max(0, idx-1))} disabled={idx === 0}
            style={ctrlBtn(idx === 0)}>◀◀ PREV</button>
          <button onClick={() => setIdx(Math.min(avisos.length-1, idx+1))} disabled={idx === avisos.length-1}
            style={ctrlBtn(idx === avisos.length-1)}>NEXT ▶▶</button>
        </div>
      </div>

      <Perforations />
    </div>
  );
};

const ctrlBtn = (disabled) => ({
  background: disabled ? '#0a0a0a' : '#1a1a1a',
  border: '1px solid #333',
  color: disabled ? '#333' : '#e8e4d0',
  padding: '8px 16px',
  fontSize: 11, letterSpacing: '0.2em',
  cursor: disabled ? 'not-allowed' : 'pointer',
  fontFamily: 'inherit'
});

const TIPO_CINE = {
  urgente: { label: 'URGENT · NOW PLAYING', bg: '#c8102e', fg: '#fff' },
  tarea: { label: 'ASSIGNMENT', bg: '#f4b400', fg: '#0a0a0a' },
  noticia: { label: 'NEWS REEL', bg: '#e8e4d0', fg: '#0a0a0a' },
  evento: { label: 'COMING SOON', bg: '#4a7c59', fg: '#fff' },
};

const Perforations = () => (
  <div style={{
    display: 'flex', gap: 8, padding: '10px 20px',
    background: '#0a0a0a',
    borderTop: '1px solid #1a1a1a',
    borderBottom: '1px solid #1a1a1a'
  }}>
    {[...Array(32)].map((_, i) => (
      <div key={i} style={{
        flex: 1,
        height: 14,
        background: '#000',
        borderRadius: 2,
        border: '1px solid #1a1a1a'
      }} />
    ))}
  </div>
);

window.Cinema = Cinema;
