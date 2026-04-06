// ==========================================
// 1. BASE DE DATOS MULTIMEDIA (ARCHIVOS LOCALES)
// ==========================================

// ==========================================
// 1. BASE DE DATOS MULTIMEDIA (ARCHIVOS LOCALES)
// ==========================================

// ==========================================
// 1. BASE DE DATOS MULTIMEDIA (ARCHIVOS LOCALES)
// ==========================================

const mediaDB = {
    espana: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/espana/espana_1.png', 
            title: 'Líderes del Mundo', 
            desc: 'España cierra el año en la cima de la Clasificación Mundial Masculina de la FIFA, superando a Argentina.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/espana/espana_2.png', 
            title: 'Reinas de Europa', 
            desc: 'La selección femenina sigue como líder mundial tras revalidar su título en la Liga de Naciones de la UEFA.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/espana/tiki_taka.mp4', 
            title: 'El Tiki-Taka', 
            desc: 'La base del estilo de posesión, control y toque rápido del fútbol español.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/espana/estadio_espana.mp4', 
            title: 'La Casa de la Roja', 
            desc: 'El imponente estadio y la afición que respalda a la selección española en cada encuentro.' 
        }
    ],
    francia: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/francia/francia_1.png', 
            title: 'Campeones FIFAe', 
            desc: 'Francia se coronó en la FIFAe World Cup de Rocket League en Riad, demostrando una coordinación excepcional.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/francia/francia_2.png', 
            title: 'Kylian Mbappé', 
            desc: 'La gran estrella, capitán y referente indiscutible del ataque explosivo de Les Bleus.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/francia/num_francia.mp4', 
            title: 'Leyendas de Les Bleus', 
            desc: 'Un repaso a los jugadores históricos que han portado los primeros 23 dorsales de la selección francesa.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/francia/gol_mbappe.mp4', 
            title: 'La Magia de Mbappé', 
            desc: 'Revive el espectacular golazo de Kylian Mbappé contra los Países Bajos en 2023. ¡Pura definición!' 
        }
    ],
    alemania: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/alemania/alemania_1.png', 
            title: 'Un Gesto Histórico', 
            desc: 'Protesta en Qatar 2022: Alemania se cubrió la boca ante la prohibición del gafete arcoíris, defendiendo la libertad de expresión.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/alemania/alemania_2.png', 
            title: 'Rumbo al 2026', 
            desc: 'Pese a las lesiones, la máquina alemana dominó el Grupo A y selló su boleto mundialista con un aplastante 6-0.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/alemania/gol_alemania.mp4', 
            title: 'Clase de Goretzka', 
            desc: 'Leon Goretzka haciendo su magia. Un recuerdo de su espectacular gol en la DFB Pokal.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/alemania/goretzk_alemania.mp4', 
            title: 'Olfato Goleador', 
            desc: 'La letalidad ofensiva de Alemania en su máxima expresión. Potencia y puntería implacable.' 
        }
    ],
    brasil: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/brasil/brasil_1.png', 
            title: 'Dominio Mundial', 
            desc: 'Brasil destaca en el Top 10 de la Clasificación Mundial en vísperas de las eliminatorias para el 2026.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/brasil/brasil_2.png', 
            title: 'Sede Femenina 2027', 
            desc: 'A 500 días de la Copa, Brasil presenta su increíble identidad visual para la gran fiesta del fútbol femenino.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/brasil/brasil_video1.mp4', 
            title: 'El Pentacampeón', 
            desc: 'Homenaje a Juninho Paulista, pieza clave para llevar a Brasil al tope del mundo y conseguir la 5ª estrella.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/brasil/brasil_video2.mp4', 
            title: 'Magia de Kaká', 
            desc: 'Revive el espectacular primer gol de Brasil anotado por Kaká en la Copa Mundial de 2006.' 
        }
    ],
    argentina: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/argentina/argentina_1.png', 
            title: 'El Rey del Fútbol', 
            desc: '¿De qué planeta viniste? Tras conquistarlo todo, Lionel Messi sigue demostrando que su talento es inagotable.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/argentina/argentina_2.png', 
            title: 'El Arquitecto', 
            desc: 'Lionel Scaloni lideró la renovación de la Albiceleste para conquistar la Copa América, la Finalissima y el Mundial 2022.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/argentina/argentina_video.mp4', 
            title: 'Forjando el Futuro', 
            desc: 'La cantera no descansa. Semana de intenso trabajo táctico para las nuevas generaciones de la Sub-16.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/argentina/argentina_mundial.mp4', 
            title: 'Gloria Eterna', 
            desc: '¡Nunca lo vamos a olvidar! La emocionante celebración de la histórica tercera estrella obtenida en Qatar 2022.' 
        }
    ],
    mexico: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/mexico/mexico_1.png', 
            title: 'Amistoso Internacional', 
            desc: 'La afición expectante por el duelo entre la Selección Mexicana e Islandia rumbo a sus próximos compromisos.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/mexico/mexico_2.png', 
            title: 'Cuenta Regresiva', 
            desc: 'Cada vez falta menos para que inicie la histórica Copa del Mundo 2026 en México, Estados Unidos y Canadá.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/mexico/estadio_mexico.mp4', 
            title: 'Renovación del Coloso', 
            desc: 'Con talento y manufactura nacional, avanza la instalación de butacas en el Estadio de la Ciudad de México.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/mexico/museo_mexico.mp4', 
            title: 'Cultura y Fútbol', 
            desc: 'El Museo Memoria y Tolerancia alista una exposición temporal para recibir a miles de visitantes durante el Mundial.' 
        }
    ],
    marruecos: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/marruecos/marruecos_1.png', 
            title: '¡Clasificados!', 
            desc: 'Marruecos hace historia como la primera selección africana en clasificar al Mundial 26, arrasando en el grupo E.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/marruecos/marruecos_2.png', 
            title: 'El Primer Paso', 
            desc: 'Un viaje a México 1970: La primera participación marroquí en un Mundial, dejando una huella imborrable.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/marruecos/entrenamiento_marruecos.mp4', 
            title: 'Energía Femenina', 
            desc: 'Ambiente inmejorable y máxima energía en la primera sesión de entrenamiento de la Selección Nacional Femenina.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/marruecos/estadio_marruecos.mp4', 
            title: 'Un Solo Corazón', 
            desc: 'Piel de gallina: El imponente rugido de la afición marroquí cantando su himno al unísono con orgullo.' 
        }
    ],

    // ... (aquí arriba debe estar Marruecos) ...
    uruguay: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/uruguay/uruguay_1.png', 
            title: 'El "Loco" Bielsa', 
            desc: 'Marcelo Bielsa, uno de los técnicos más influyentes del mundo, lidera a la Celeste hacia el Mundial 2026 tras una sólida eliminatoria.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/uruguay/uruguay_2.png', 
            title: 'Historia Charrúa', 
            desc: 'Bicampeones del mundo (1930 y 1950) y 15 clasificaciones históricas. Un país pequeño pero un gigante del fútbol mundial.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/uruguay/hit_uruguay.mp4', 
            title: 'Delantero de Época', 
            desc: 'Recopilación histórica de los mejores momentos y goles inolvidables del legendario 9 de la selección uruguaya.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/uruguay/speech_uruguay.mp4', 
            title: 'La Palabra del DT', 
            desc: 'Marcelo Bielsa en conferencia de prensa, analizando el rendimiento de la selección tras la intensa Fecha FIFA.' 
        }
    ],
    inglaterra: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/inglaterra/inglaterra_1.png', 
            title: 'Gloria en Casa (1966)', 
            desc: 'Bajo el mando de Alf Ramsey y con un histórico triplete de Geoff Hurst en la final contra Alemania, Inglaterra levantó su única Copa del Mundo.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/inglaterra/inglaterra_2.png', 
            title: 'El Trago Amargo (2022)', 
            desc: 'Tras una gran fase de grupos, el sueño inglés se desvaneció en cuartos de final ante Francia tras un penal fallado por Harry Kane.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/inglaterra/gol_inglaterra.mp4', 
            title: 'Hat-Trick de Sterling', 
            desc: 'Actuación de cinco estrellas. Un recuerdo del imponente 5-0 contra Chequia liderado por Raheem Sterling en 2019.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/inglaterra/pase_inglaterra.mp4', 
            title: 'Fútbol Champagne', 
            desc: 'Una jugada colectiva perfecta: Hendo, Kane, Shaw y la definición de Rashford para el primer gol de Inglaterra en la Nations League.' 
        }
    ],
    corea: [
        { 
            type: 'image', 
            src: 'Public/Imagenes/corea/corea_1.png', 
            title: 'Ejemplo a Seguir', 
            desc: 'El presidente de la FIFA elogia a Corea del Sur por la gestión y el desarrollo del nuevo Centro Nacional de Fútbol en Cheonan.' 
        },
        { 
            type: 'image', 
            src: 'Public/Imagenes/corea/corea_2.png', 
            title: 'El Regreso de Hong', 
            desc: 'Tras una década y grandes éxitos en la K-League, Hong Myung-bo vuelve a tomar las riendas de la selección nacional.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/corea/final_corea.mp4', 
            title: 'Rumbo a Semifinales', 
            desc: '¡Orgullo nacional! La afición coreana ondeando su bandera y apoyando a la selección U-23 antes de su gran duelo asiático.' 
        },
        { 
            type: 'video', 
            src: 'Public/Imagenes/corea/video_corea.mp4', 
            title: 'El Grito de Guerra', 
            desc: 'La selección U-23 demostrando unión, fuerza y energía en la previa de su crucial tercer partido de fase de grupos.' 
        }
    ]
};


// Lista de países para generar el menú
const countries = [
    { key: 'francia', flag: 'https://flagcdn.com/w160/fr.png' },
    { key: 'espana', flag: 'https://flagcdn.com/w160/es.png' },
    { key: 'alemania', flag: 'https://flagcdn.com/w160/de.png' },
    { key: 'brasil', flag: 'https://flagcdn.com/w160/br.png' },
    { key: 'argentina', flag: 'https://flagcdn.com/w160/ar.png' },
    { key: 'mexico', flag: 'https://flagcdn.com/w160/mx.png' },
    { key: 'marruecos', flag: 'https://flagcdn.com/w160/ma.png' },
    { key: 'uruguay', flag: 'https://flagcdn.com/w160/uy.png' },
    { key: 'inglaterra', flag: 'https://flagcdn.com/w160/gb-eng.png' },
    { key: 'corea', flag: 'https://flagcdn.com/w160/kr.png' }
];

// Elementos DOM
const countrySelector = document.getElementById('countrySelector');
const mediaGrid = document.getElementById('mediaGrid');

// ==========================================
// 2. INICIALIZAR
// ==========================================
function initGallery() {
    // 1. Crear botones de banderas
    countries.forEach(country => {
        const btn = document.createElement('button');
        btn.className = 'flag-btn';
        btn.innerHTML = `<img src="${country.flag}" alt="${country.key}">`;
        btn.onclick = () => loadCountryMedia(country.key, btn);
        countrySelector.appendChild(btn);
    });
}

// ==========================================
// 3. CARGAR CONTENIDO
// ==========================================
function loadCountryMedia(key, activeBtn) {
    // Manejo de clase activa visual
    document.querySelectorAll('.flag-btn').forEach(b => b.classList.remove('active'));
    activeBtn.classList.add('active');

    // Limpiar grid
    mediaGrid.innerHTML = '';

    const mediaList = mediaDB[key];

    if (!mediaList || mediaList.length === 0) {
        mediaGrid.innerHTML = '<div class="empty-state">No hay contenido disponible aún 🚧</div>';
        return;
    }

    // Generar tarjetas
    mediaList.forEach(item => {
        const card = document.createElement('div');
        card.className = 'media-card';

        // Determinar si es video o imagen
        let mediaHTML = '';
        let controlsHTML = '';

        if (item.type === 'video') {
            // ID único para controlar este video específico
            const vidId = 'vid-' + Math.random().toString(36).substr(2, 9);
            
            mediaHTML = `
                <video id="${vidId}" src="${item.src}" loop muted autoplay playsinline></video>
            `;

            // Agregar controles SOLO si es video
            controlsHTML = `
                <div class="filter-toolbar">
                    <span class="filter-title">Filtros AR:</span>
                    <div class="filter-buttons">
                        <button class="filter-btn active" onclick="applyFilter('${vidId}', '', this)">Normal</button>
                        <button class="filter-btn" onclick="applyFilter('${vidId}', 'fx-thermal', this)">Térmica</button>
                        <button class="filter-btn" onclick="applyFilter('${vidId}', 'fx-pixel', this)">Pixel</button>
                        <button class="filter-btn" onclick="applyFilter('${vidId}', 'fx-blur', this)">Blur</button>
                        <button class="filter-btn" onclick="applyFilter('${vidId}', 'fx-adjust', this)">Color</button>
                        <button class="filter-btn" onclick="applyFilter('${vidId}', 'fx-pastel', this)">Pastel</button>
                    </div>
                </div>
            `;
        } else {
            mediaHTML = `<img src="${item.src}" alt="${item.title}">`;
        }

        card.innerHTML = `
            <div class="media-preview">
                ${mediaHTML}
            </div>
            ${controlsHTML}
            <div class="media-desc">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
            </div>
        `;

        mediaGrid.appendChild(card);
    });
}

// ==========================================
// 4. APLICAR FILTROS
// ==========================================
window.applyFilter = function(videoId, filterClass, btn) {
    const video = document.getElementById(videoId);
    
    // 1. Quitar todas las clases de filtro previas
    video.className = ''; 
    
    // 2. Agregar la nueva clase (si no es 'Normal')
    if (filterClass) {
        video.classList.add(filterClass);
    }

    // 3. Gestionar estado activo del botón
    const parent = btn.parentElement;
    const siblings = parent.querySelectorAll('.filter-btn');
    siblings.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
}

// Arrancar
initGallery();