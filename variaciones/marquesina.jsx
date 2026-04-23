// Variación 1 — MARQUESINA DE TEATRO
// Cartelera iluminada con bombillos, cortina roja, tipografía de póster.
// Tabs por grado (6° / 7° / 8° / 9°) como actos de una obra.

const Marquesina = ({ data }) => {
  const [gradoIdx, setGradoIdx] = React.useState(0);
  const [seccion, setSeccion] = React.useState('avisos'); // avisos | tareas | links | galeria
  const [buscar, setBuscar] = React.useState('');
  const grado = data.grados[gradoIdx];

  const avisosFiltrados = grado.avisos
    .filter(a => !buscar || (a.titulo + ' ' + a.cuerpo).toLowerCase().includes(buscar.toLowerCase()))
    .sort((a, b) => (b.pin ? 1 : 0) - (a.pin ? 1 : 0));

  const marqueeStyle = {
    background: 'radial-gradient(ellipse at top, #5a0a18 0%, #2a0008 100%)',
    color: '#fff3d4',
    fontFamily: '"Playfair Display", "Didot", Georgia, serif',
    minHeight: '100%',
    position: 'relative',
    overflow: 'hidden',
  };

  return (
    <div style={marqueeStyle}>
      {/* Bombillos perimetrales */}
      <BombilloBorder />

      {/* Cortina lateral izquierda */}
      <Cortina side="left" />
      <Cortina side="right" />

      <div style={{ position: 'relative', zIndex: 2, padding: '28px 60px 40px' }}>
        {/* Marquesina header */}
        <header style={{ textAlign: 'center', marginBottom: 22 }}>
          <div style={{
            fontFamily: '"Courier Prime", "Courier New", monospace',
            fontSize: 11, letterSpacing: '0.4em', color: '#f4b400',
            textTransform: 'uppercase', marginBottom: 6
          }}>
            ★ {data.escuela} presenta ★
          </div>
          <h1 style={{
            fontSize: 54, margin: 0, fontWeight: 900, letterSpacing: '-0.02em',
            fontStyle: 'italic', lineHeight: 1,
            textShadow: '0 0 20px rgba(244,180,0,0.5), 0 0 40px rgba(244,180,0,0.3)',
            color: '#fff3d4'
          }}>
            Tablero de Anuncios
          </h1>
          <div style={{
            fontFamily: '"Courier Prime", monospace',
            fontSize: 10, letterSpacing: '0.3em', color: '#c89b4a',
            marginTop: 8, textTransform: 'uppercase'
          }}>
            — Temporada 2026 · Función en cartelera —
          </div>
        </header>

        {/* Tabs por grado — estilo actos */}
        <nav style={{ display: 'flex', gap: 0, justifyContent: 'center', marginBottom: 28, flexWrap: 'wrap' }}>
          {data.grados.map((g, i) => (
            <button
              key={g.id}
              onClick={() => setGradoIdx(i)}
              style={{
                background: i === gradoIdx ? 'linear-gradient(180deg, #f4b400 0%, #c89b4a 100%)' : 'transparent',
                color: i === gradoIdx ? '#2a0008' : '#f4b400',
                border: '1px solid #c89b4a',
                borderRight: i < data.grados.length - 1 ? 'none' : '1px solid #c89b4a',
                padding: '10px 22px',
                fontFamily: '"Playfair Display", serif',
                fontStyle: 'italic',
                fontSize: 16,
                fontWeight: 700,
                cursor: 'pointer',
                letterSpacing: '0.05em',
                transition: 'all .2s',
                boxShadow: i === gradoIdx ? '0 0 20px rgba(244,180,0,0.4)' : 'none'
              }}
            >
              <span style={{ fontSize: 11, display: 'block', letterSpacing: '0.3em', opacity: 0.7 }}>
                ACTO {['I','II','III','IV'][i]}
              </span>
              {g.numero} Grado
            </button>
          ))}
        </nav>

        {/* Placa del director y banner grado */}
        <div style={{
          background: 'rgba(0,0,0,0.35)',
          border: '1px solid rgba(244,180,0,0.3)',
          padding: '14px 22px',
          marginBottom: 20,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12
        }}>
          <div>
            <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 10, letterSpacing: '0.3em', color: '#c89b4a', textTransform: 'uppercase' }}>
              Director de grupo
            </div>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 22, fontStyle: 'italic' }}>
              {grado.director}
            </div>
          </div>
          <input
            type="text"
            placeholder="Buscar en cartelera..."
            value={buscar}
            onChange={e => setBuscar(e.target.value)}
            style={{
              background: 'rgba(0,0,0,0.5)',
              border: '1px solid rgba(244,180,0,0.4)',
              color: '#fff3d4',
              padding: '8px 14px',
              fontFamily: '"Courier Prime", monospace',
              fontSize: 12,
              width: 220,
              outline: 'none',
              letterSpacing: '0.05em'
            }}
          />
        </div>

        {/* Sub-nav secciones */}
        <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: '1px solid rgba(244,180,0,0.25)' }}>
          {[
            { id: 'avisos', label: 'En Escena', icon: '★' },
            { id: 'tareas', label: 'Próximos llamados', icon: '◆' },
            { id: 'links', label: 'Tras bambalinas', icon: '◇' },
            { id: 'galeria', label: 'Archivo fotográfico', icon: '❐' },
          ].map(s => (
            <button
              key={s.id}
              onClick={() => setSeccion(s.id)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: seccion === s.id ? '3px solid #f4b400' : '3px solid transparent',
                color: seccion === s.id ? '#f4b400' : '#c89b4a',
                padding: '10px 16px',
                fontFamily: '"Playfair Display", serif',
                fontSize: 14,
                fontStyle: 'italic',
                cursor: 'pointer',
                marginBottom: -1
              }}
            >
              <span style={{ marginRight: 6, fontSize: 10 }}>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Contenido */}
        {seccion === 'avisos' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 18 }}>
            {avisosFiltrados.map(a => (
              <AvisoMarquesina key={a.id} aviso={a} />
            ))}
            {avisosFiltrados.length === 0 && (
              <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 40, fontStyle: 'italic', color: '#c89b4a' }}>
                — Sin resultados en esta función —
              </div>
            )}
          </div>
        )}

        {seccion === 'tareas' && <TareasMarquesina tareas={grado.tareas} adjuntos={grado.adjuntos} />}
        {seccion === 'links' && <LinksMarquesina links={grado.links} />}
        {seccion === 'galeria' && <GaleriaMarquesina galeria={grado.galeria} grado={grado} />}

        {/* Footer tipo programa de mano */}
        <footer style={{
          marginTop: 40, paddingTop: 20,
          borderTop: '1px dashed rgba(244,180,0,0.3)',
          textAlign: 'center',
          fontFamily: '"Courier Prime", monospace',
          fontSize: 10, letterSpacing: '0.3em',
          color: '#c89b4a', textTransform: 'uppercase'
        }}>
          — Telón · {data.escuela} · Temporada 2026 · Actualizado hoy —
        </footer>
      </div>
    </div>
  );
};

const BombilloBorder = () => {
  const bombillos = [];
  // top
  for (let i = 0; i < 24; i++) bombillos.push(
    <span key={'t'+i} style={{ position: 'absolute', top: 12, left: `${(i+0.5)*(100/24)}%`, ...bombilloStyle(i) }} />
  );
  // bottom
  for (let i = 0; i < 24; i++) bombillos.push(
    <span key={'b'+i} style={{ position: 'absolute', bottom: 12, left: `${(i+0.5)*(100/24)}%`, ...bombilloStyle(i+12) }} />
  );
  return <>{bombillos}</>;
};

const bombilloStyle = (i) => ({
  width: 8, height: 8, borderRadius: '50%',
  background: 'radial-gradient(circle at 30% 30%, #fff5b0, #f4b400 60%, #8a6000)',
  boxShadow: '0 0 8px rgba(244,180,0,0.9), 0 0 16px rgba(244,180,0,0.5)',
  animation: `blink 2s ${(i%4)*0.2}s infinite`,
  zIndex: 3,
});

const Cortina = ({ side }) => (
  <div style={{
    position: 'absolute',
    top: 0, bottom: 0,
    [side]: 0,
    width: 46,
    background: `linear-gradient(${side === 'left' ? '90deg' : '270deg'}, #6a0012 0%, #8a0818 30%, #5a0010 60%, #3a0008 100%)`,
    backgroundSize: '16px 100%',
    backgroundImage: `repeating-linear-gradient(${side === 'left' ? '90deg' : '270deg'}, #5a0010, #8a0818 8px, #6a0012 16px)`,
    zIndex: 1,
    boxShadow: side === 'left' ? 'inset -8px 0 16px rgba(0,0,0,0.6)' : 'inset 8px 0 16px rgba(0,0,0,0.6)',
  }} />
);

const TIPO_AVISO = {
  urgente: { label: 'FUNCIÓN DE GALA', color: '#ff4d6d', icon: '★' },
  tarea: { label: 'PRÓXIMO LLAMADO', color: '#f4b400', icon: '◆' },
  noticia: { label: 'RESEÑA', color: '#8ec5ff', icon: '◇' },
  evento: { label: 'ESTRENO', color: '#b4e197', icon: '❖' },
};

const AvisoMarquesina = ({ aviso }) => {
  const tipo = TIPO_AVISO[aviso.tipo] || TIPO_AVISO.noticia;
  return (
    <article style={{
      background: aviso.pin
        ? 'linear-gradient(145deg, #fff3d4 0%, #f4e4b0 100%)'
        : 'linear-gradient(145deg, #f8e8c4 0%, #ead8a0 100%)',
      color: '#2a0008',
      padding: 20,
      position: 'relative',
      boxShadow: '0 4px 0 rgba(0,0,0,0.4), 0 10px 30px rgba(0,0,0,0.5)',
      border: '1px solid #8a6000',
      fontFamily: '"Playfair Display", Georgia, serif',
    }}>
      {aviso.pin && (
        <div style={{
          position: 'absolute', top: -10, right: 12,
          background: '#c8102e', color: '#fff3d4',
          fontFamily: '"Courier Prime", monospace', fontSize: 9,
          padding: '4px 10px', letterSpacing: '0.2em',
          boxShadow: '0 2px 6px rgba(0,0,0,0.4)'
        }}>
          ★ FIJADO
        </div>
      )}
      <div style={{
        fontFamily: '"Courier Prime", monospace',
        fontSize: 9, letterSpacing: '0.25em',
        color: tipo.color, filter: 'brightness(0.6)',
        marginBottom: 8
      }}>
        {tipo.icon} {tipo.label} · {aviso.fecha}
      </div>
      <h3 style={{
        fontSize: 22, margin: '0 0 10px', fontWeight: 900, fontStyle: 'italic',
        letterSpacing: '-0.01em', lineHeight: 1.15
      }}>
        {aviso.titulo}
      </h3>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, fontFamily: 'Georgia, serif' }}>
        {aviso.cuerpo}
      </p>
    </article>
  );
};

const TareasMarquesina = ({ tareas, adjuntos }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
    <div>
      <h3 style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 18, color: '#f4b400', marginTop: 0 }}>
        Cronograma de entregas
      </h3>
      <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tareas.map((t, i) => (
          <li key={i} style={{
            display: 'grid', gridTemplateColumns: '60px 1fr auto',
            padding: '14px 0', borderBottom: '1px dashed rgba(244,180,0,0.25)',
            alignItems: 'center', gap: 12
          }}>
            <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 28, fontStyle: 'italic', color: '#f4b400' }}>
              {String(i+1).padStart(2,'0')}
            </div>
            <div>
              <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 9, letterSpacing: '0.2em', color: '#c89b4a', textTransform: 'uppercase' }}>
                {t.materia}
              </div>
              <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 17, fontStyle: 'italic' }}>
                {t.titulo}
              </div>
            </div>
            <div style={{
              fontFamily: '"Courier Prime", monospace', fontSize: 11,
              border: '1px solid #f4b400', color: '#f4b400',
              padding: '4px 10px', letterSpacing: '0.15em', textTransform: 'uppercase'
            }}>
              {t.fecha}
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div>
      <h3 style={{ fontFamily: '"Playfair Display", serif', fontStyle: 'italic', fontSize: 18, color: '#f4b400', marginTop: 0 }}>
        Archivos del acto
      </h3>
      {adjuntos.map((a, i) => (
        <a key={i} href="#" onClick={e => e.preventDefault()} style={{
          display: 'flex', alignItems: 'center', gap: 12,
          padding: '12px 14px', marginBottom: 8,
          background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(244,180,0,0.3)',
          color: '#fff3d4', textDecoration: 'none',
          fontFamily: '"Courier Prime", monospace', fontSize: 12
        }}>
          <span style={{ fontSize: 20, color: '#f4b400' }}>⬇</span>
          <span style={{ flex: 1 }}>{a.nombre}</span>
          <span style={{ color: '#c89b4a', fontSize: 10, letterSpacing: '0.15em' }}>{a.peso}</span>
        </a>
      ))}
    </div>
  </div>
);

const LinksMarquesina = ({ links }) => {
  const iconMap = { drive: '▶', classroom: '◉', pdf: '▤', form: '▦', web: '◈' };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 14 }}>
      {links.map((l, i) => (
        <a key={i} href={l.url} target="_blank" rel="noopener" style={{
          background: 'rgba(0,0,0,0.35)',
          border: '1px solid rgba(244,180,0,0.3)',
          padding: '16px 18px',
          color: '#fff3d4', textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: 14,
          fontFamily: '"Playfair Display", serif',
          transition: 'all .2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(244,180,0,0.15)'; e.currentTarget.style.borderColor = '#f4b400'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.35)'; e.currentTarget.style.borderColor = 'rgba(244,180,0,0.3)'; }}
        >
          <div style={{
            width: 40, height: 40, border: '1px solid #f4b400',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#f4b400', fontSize: 18, flexShrink: 0
          }}>
            {iconMap[l.tipo] || '◆'}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontStyle: 'italic', fontSize: 16, lineHeight: 1.2 }}>{l.titulo}</div>
            <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 9, letterSpacing: '0.2em', color: '#c89b4a', textTransform: 'uppercase', marginTop: 2 }}>
              {l.tipo} · externo ↗
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

const GaleriaMarquesina = ({ galeria, grado }) => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 16 }}>
    {galeria.map((g, i) => (
      <div key={i} style={{
        background: '#f8e8c4', padding: 10,
        boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
        transform: `rotate(${(i % 2 === 0 ? -1 : 1) * 0.8}deg)`,
      }}>
        <div style={{
          aspectRatio: '4/3',
          background: `repeating-linear-gradient(45deg, ${grado.color}22, ${grado.color}22 10px, ${grado.color}44 10px, ${grado.color}44 20px)`,
          border: '1px solid rgba(0,0,0,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#2a0008', fontFamily: '"Courier Prime", monospace', fontSize: 10,
          letterSpacing: '0.2em'
        }}>
          [ FOTO {String(i+1).padStart(2,'0')} ]
        </div>
        <div style={{ color: '#2a0008', padding: '10px 4px 2px' }}>
          <div style={{ fontFamily: '"Playfair Display", serif', fontSize: 15, fontStyle: 'italic' }}>
            {g.titulo}
          </div>
          <div style={{ fontFamily: '"Courier Prime", monospace', fontSize: 9, letterSpacing: '0.2em', color: '#8a6000', textTransform: 'uppercase', marginTop: 2 }}>
            {g.fecha}
          </div>
        </div>
      </div>
    ))}
  </div>
);

window.Marquesina = Marquesina;
