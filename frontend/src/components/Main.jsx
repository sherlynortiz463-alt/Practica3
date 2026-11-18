import React, { useState } from 'react';

export default function Main({ vista }) {
  const [cultivoSeleccionado, setCultivoSeleccionado] = useState('Jitomate');
  const [mesSeleccionado, setMesSeleccionado] = useState('Enero');

  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];

  const cultivosList = [
    { nombre: "Jitomate 🍅", desc: "Es una verdura muy utilizada en el area de gastronomia en todos lados." },
    { nombre: "Cebolla 🧅", desc: "Requiere sustratos livianos." },
    { nombre: "Lechuga 🥬", desc: "La lechuga requiere de muchos cuidados e igul es mjuy utilizada en la gastronimia." },
    { nombre: "Espinaca 🥬", desc: "Tiene densidad de nutriente aun que tarda un poco en dar frutos" },
    { nombre: "Fresa 🍓", desc: "Es una de las pocas frutas que se adapta a su entorno rrapidamente pero que necesita cuidados" },
    { nombre: "Albahaca 🌿", desc: "Es una planta aromática de rápido crecimiento" },
    { nombre: "Cilantro ☘️", desc: "Este es una planta muy utilizada ya que su crecimiento es veloz y que alcortarlo vuelve a crecer sin necesidad de sembrar de nuevo." },
    { nombre: "Acelga 🥬", desc: "Es una planta que crece muy rrapido." },
    { nombre: "Pimiento 🫑", desc: "Es una verdura con una gran y rapida produccion." },
    { nombre: "Rábano 🫜", desc: "Este tiene un ndesarrollo rrapido e igual es mumy utilizado en la gastronomia" }
  ];

  const gastosMateriales = [
    { material: "Botellas", cantidad: "15", costo: "$3 c/u = $45" },
    { material: "Desechos", cantidad: "Indefinida", costo: "$0" },
    { material: "Pulque", cantidad: "2L", costo: "$15" },
    { material: "Ceniza", cantidad: "1 Costal", costo: "$0" },
    { material: "Zacate molido", cantidad: "1 Costal", costo: "$50" },
    { material: "Lama", cantidad: "1 Costal", costo: "$0" }
  ];

  const tutoriales = [
    { titulo: "Cómo hacer un huerto vertical", url: "https://youtu.be/3YM-Hgmd1Qo?si=OqQ2dYEKs0Ygnd6t" },
    { titulo: "Sistema de Riego por Goteo para Cultivos Verticales", url: "https://www.youtube.com/embed/S2pT1nCj12s" },
    { titulo: "Guía de Hidroponía Vertical y Cuidado de Hortalizas", url: "https://www.youtube.com/embed/wX4NOnlK_-0" }
  ];

  const obtenerEventosCultivo = (cultivo, mesIndex) => {
    const offset = mesIndex % 3;
    const nombreLimpio = cultivo.split(" ")[0];
    switch (nombreLimpio) {
      case 'Jitomate': return { siembra: [1 + offset, 15], riego: [3, 6, 9, 12, 18, 21, 24, 27, 30], cosecha: [28] };
      case 'Cebolla': return { siembra: [2, 16], riego: [4, 7, 11, 14, 19, 22, 25, 29], cosecha: [30] };
      case 'Lechuga': return { siembra: [1, 10, 20], riego: [3, 6, 9, 12, 15, 18, 21, 24, 27], cosecha: [15, 28] };
      case 'Espinaca': return { siembra: [5, 20], riego: [2, 8, 13, 17, 23, 26], cosecha: [25] };
      case 'Fresa': return { siembra: [3, 18], riego: [1, 5, 8, 12, 15, 19, 22, 26, 29], cosecha: [27, 31] };
      case 'Albahaca': return { siembra: [4, 14], riego: [2, 6, 10, 13, 17, 21, 25, 28], cosecha: [26] };
      case 'Cilantro': return { siembra: [1, 12, 22], riego: [3, 7, 10, 15, 18, 24, 27], cosecha: [20] };
      case 'Acelga': return { siembra: [6, 21], riego: [2, 5, 9, 14, 16, 20, 25, 29], cosecha: [30] };
      case 'Pimiento': return { siembra: [2, 15], riego: [4, 8, 11, 13, 18, 22, 26, 30], cosecha: [29] };
      case 'Rábano': return { siembra: [1, 10, 20], riego: [2, 4, 7, 9, 12, 14, 17, 19, 22, 24, 27], cosecha: [25] };
      default: return { siembra: [1], riego: [3, 6], cosecha: [28] };
    }
  };

  const mesIndex = meses.indexOf(mesSeleccionado);
  const eventosActuales = obtenerEventosCultivo(cultivoSeleccionado, mesIndex);

  const contenedorFlex = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    alignItems: 'center'
  };

  const estiloImagen = {
    maxWidth: '280px',
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
  };

  return (
    <main>
      {vista === 'bienvenida' && (
        <div className="card">
          <div style={contenedorFlex}>
            <div style={{ flex: '1', minWidth: '250px' }}>
              <h2>Bienvenido(a) Cultivo Vertical</h2>
              <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
                Te damos la bienvenida a nuestro proyecto, que fue creado con el proposito de orientarte para que logres crear desde cero tu cultivo vertical en el cual tendras informacion de los cultivos, de sus fechas a regar, etc lo basico y lo que utilizaras. el estado de tus sensores, programar tareas clave en el calendario y revisar el balance de costos y beneficios para la comunidad.
              </p>
            </div>
            <img src="https://th.bing.com/th/id/OIP.TcNoK1Kc1CbVHQDh8URQgQHaE8?w=257&h=180&c=7&r=0&o=7&pid=1.7&rm=3" alt="Bienvenida Huerto" style={estiloImagen} />
          </div>
        </div>
      )}

      {vista === 'cultivos' && (
        <div className="card">
          <h2>Cultivos</h2>
          <div style={{ ...contenedorFlex, alignItems: 'flex-start', marginTop: '1rem' }}>
            <div className="grid-container" style={{ flex: '1', minWidth: '300px' }}>
              {cultivosList.map((c, index) => (
                <div key={index} className="crop-card">
                  <h3>{c.nombre}</h3>
                  <p style={{ marginTop: '0.5rem', color: '#1d1010' }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_GYLc213VAskfTYJgxZ1iJJ80zjVE59pAaBbNWAh6eg&s=10" alt="Cultivos Verticales" style={{ ...estiloImagen, alignSelf: 'center' }} />
          </div>
        </div>
      )}

      {vista === 'calendario' && (
        <div className="card">
          <h2>Calendario de cultivos</h2>
          <p>Selecciona un mes y un cultivo para consultar su informacion</p>
          
          <div style={{ margin: '1rem 0', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <div>
              <label style={{ fontWeight: 'bold', marginRight: '8px' }}>Mes:</label>
              <select value={mesSeleccionado} onChange={(e) => setMesSeleccionado(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}>
                {meses.map((m, index) => ( <option key={index} value={m}>{m}</option> ))}
              </select>
            </div>
            <div>
              <label style={{ fontWeight: 'bold', marginRight: '8px' }}>Cultivo:</label>
              <select value={cultivoSeleccionado} onChange={(e) => setCultivoSeleccionado(e.target.value)} style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1rem' }}>
                {cultivosList.map((c, index) => ( <option key={index} value={c.nombre}>{c.nombre}</option> ))}
              </select>
            </div>
          </div>

          <div style={{ margin: '1rem 0' }}>
            <span style={{ background: '#fff9c4', padding: '5px 10px', borderRadius: '4px', border: '1px solid #fbc02d' }}>🟡 Siembra</span>
            <span style={{ background: '#bbdefb', padding: '5px 10px', borderRadius: '4px', border: '1px solid #2196f3', marginLeft: '10px' }}>🔵 Riego</span>
            <span style={{ background: '#c8e6c9', padding: '5px 10px', borderRadius: '4px', border: '1px solid #4caf50', marginLeft: '10px' }}>🟢 Cosecha</span>
          </div>

          <div style={{ ...contenedorFlex, alignItems: 'flex-start' }}>
            <div className="calendar-grid" style={{ flex: '1', minWidth: '300px' }}>
              <div className="calendar-day-header">Dom</div>
              <div className="calendar-day-header">Lun</div>
              <div className="calendar-day-header">Mar</div>
              <div className="calendar-day-header">Mié</div>
              <div className="calendar-day-header">Jue</div>
              <div className="calendar-day-header">Vie</div>
              <div className="calendar-day-header">Sáb</div>
              {Array.from({ length: 31 }, (_, i) => i + 1).map(dia => {
                let clase = "";
                let badge = null;
                if (eventosActuales.siembra.includes(dia)) { clase = "event-siembra"; badge = <span className="badge">Siembra</span>; }
                else if (eventosActuales.riego.includes(dia)) { clase = "event-riego"; badge = <span className="badge">Riego</span>; }
                else if (eventosActuales.cosecha.includes(dia)) { clase = "event-cosecha"; badge = <span className="badge">Cosecha</span>; }
                return (
                  <div key={dia} className={`calendar-day ${clase}`}>
                    <strong>{dia}</strong> {badge}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {vista === 'gastos' && (
        <div className="card">
          <h2>Gastos y Materiales</h2>
          <p style={{ marginBottom: '1rem' }}>Relación de materiales requeridos cuyos materiales tienen un costo aprocimado, no exacto.</p>
          <div style={contenedorFlex}>
            <div style={{ flex: '1', minWidth: '300px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ backgroundColor: '#2e7d32', color: 'white' }}>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Material</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Cantidad</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Costo</th>
                  </tr>
                </thead>
                <tbody>
                  {gastosMateriales.map((item, index) => (
                    <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : 'white' }}>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.material}</td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.cantidad}</td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{item.costo}</td>
                    </tr>
                  ))}
                  <tr style={{ backgroundColor: '#e8f5e9', fontWeight: 'bold' }}>
                    <td colSpan="2" style={{ padding: '10px', border: '1px solid #ddd', textAlign: 'right' }}>Total:</td>
                    <td style={{ padding: '10px', border: '1px solid #ddd', color: '#2e7d32' }}>$110</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb2TOigfDIvdu8pYP1tpmlYPuNRJ5FOH77SK38RycqsA&s=10" alt="Materiales y costos" style={estiloImagen} />
          </div>
        </div>
      )}

      {vista === 'tutoriales' && (
        <div className="card">
          <h2>Tutoriales y Videos de Ayuda</h2>
          <p style={{ marginBottom: '1.5rem' }}>Aprende de forma visual cómo construir tu sistema de cultivo vertical:</p>
          <div style={contenedorFlex}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', flex: '1', minWidth: '300px' }}>
              {tutoriales.map((video, index) => (
                <div key={index} style={{ background: '#f5f5f5', borderRadius: '8px', overflow: 'hidden', padding: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
                  <iframe width="100%" height="180" src={video.url} title={video.titulo} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ borderRadius: '6px' }}></iframe>
                  <h4 style={{ marginTop: '10px', color: '#2e7d32' }}>{video.titulo}</h4>
                </div>
              ))}
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlbyZQQahure3KdAa_GsDnY3lGFv1Th7lubAah1kcOBQ&s=10" alt="Tutoriales de huertos" style={estiloImagen} />
          </div>
        </div>
      )}

      {vista === 'bitacora' && (
        <div className="card">
          <div style={contenedorFlex}>
            <div style={{ flex: '1', minWidth: '250px' }}>
              <h2>Bitacora de registro</h2>
              <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>
Aqui puedes ingresar los avances de tus cultivos.
              </p>
            </div>
            <img
              src="https://www.bing.com/th/id/OIP.yrHEoxfpl955Noi5NE2YWgHaE7?w=219&h=152&c=8&rs=1&qlt=90&o=6&pid=ImgAns&rm=2"
              alt="bitacora IoT"
              style={estiloImagen}
            />
          </div>

          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
              <input
                type="text"
                placeholder="Tu nombre"
                style={{
                  flex: '1',
                  minWidth: '200px',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '1rem'
                }}
              />
              <input
                type="date"
                style={{
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid #ccc',
                  fontSize: '1rem'
                }}
              />
            </div>

            <textarea
              rows="6"
              placeholder="Escribe aquí tu experiencia y tus avances" 
              style={{
                width: '100%',
                padding: '12px 15px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontFamily: 'inherit',
                fontSize: '1rem',
                lineHeight: '1.8rem',
                backgroundImage: 'linear-gradient(transparent, transparent 1.75rem, #e5e5e5 1.75rem)',
                backgroundSize: '100% 1.8rem',
                backgroundColor: '#ffffff',
                resize: 'vertical'
              }}
            />
          </div>
        </div>
      )}




      {vista === 'contacto' && (
        <div className="card">
          <div style={contenedorFlex}>
            <div style={{ flex: '1', minWidth: '250px' }}>
              <h2>Contacto de ayuda</h2>
              <p style={{ marginTop: '1rem' }}>Numero telefonico: 7122101834</p>
              <p style={{ marginTop: '0.5rem' }}>Correo electronico: sherlynortiz463@gmail.com</p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRks3aFwGbCBTLyST3cyl-EVqzZoMOdZTg_v9L4Bqyagg&s=10" alt="Contacto de ayuda" style={estiloImagen} />
          </div>
        </div>
      )}

      {vista === 'beneficios' && (
        <div className="card">
          <div style={contenedorFlex}>
            <div style={{ flex: '1', minWidth: '250px' }}>
              <h2>Beneficios para la Comunidad</h2>
              <p style={{ marginTop: '1rem', lineHeight: '1.6' }}>Los cultivos verticales son beneficio para todos, aprendemos al igual que con eso y de eso comemos es una forma de ganar, obviamente dependiendo de las personas, ya sea para comercio o consumo propio este, esta diseñado y enfocado en la economia ya que es un recurso que todos podemos emplear y recrear en un espacio sobrante de nuestro hogar en el que igual ahorramos hasta un 95% aprox. de agua .</p>
            </div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC9g5uq0ff7UbB25sJ70T0Cm1q5I56MIE8Axp2Tisx6g&s=10" alt="Comunidad sustentable" style={estiloImagen} />
          </div>
        </div>
      )}
    </main>
  );
}