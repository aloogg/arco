// =========================================
// BASE DE DATOS DE EQUIPOS (JSON)
// =========================================
const teamData = {
    'francia': {
        name: 'Francia',
        flag: 'https://flagcdn.com/w320/fr.png',
        ranking: '#2',
        player: 'Kylian Mbappé',
        // Datos de Historia
        origin: 'Fundada en 1904. Fue uno de los miembros fundadores de la FIFA.',
        fifa_count: '16 Mundiales.',
        involved: 'Reino Unido (origen del deporte) y Bélgica (primer rival).',
        // Estadísticas de la Estrella
        star_stats: {
            'Velocidad': 97,
            'Tiro': 90,
            'Regate': 92,
            'Goles Intl': '46+'
        },
        // Alineación Titular (Formación 4-3-3)
        lineup: [
            'POR: Mike Maignan',
            'DEF: Koundé, Upamecano, Saliba, Theo Hernández',
            'MED: Kanté, Tchouaméni, Rabiot',
            'DEL: Dembélé, Mbappé, Barcola'
        ],
        stats: [
            'Estilo: Velocidad y potencia física',
            'Dato: Subcampeones del mundo en 2022'
        ]
    },
    'espana': {
        name: 'España',
        flag: 'https://flagcdn.com/w320/es.png',
        ranking: '#3',
        player: 'Lamine Yamal',
        origin: 'Creada en 1920 para disputar los Juegos Olímpicos de Amberes.',
        fifa_count: '16 Mundiales.',
        involved: 'Reino Unido y Dinamarca.',
        star_stats: {
            'Regate': 95,
            'Visión': 88,
            'Velocidad': 92,
            'Edad': '17 años'
        },
        lineup: [
            'POR: Unai Simón',
            'DEF: Carvajal, Le Normand, Laporte, Cucurella',
            'MED: Rodri, Fabián Ruiz, Dani Olmo',
            'DEL: Lamine Yamal, Morata, Nico Williams'
        ],
        stats: [
            'Estilo: Posesión (Tiki-Taka moderno)',
            'Dato: Campeones actuales de la Eurocopa'
        ]
    },
    'alemania': {
        name: 'Alemania',
        flag: 'https://flagcdn.com/w320/de.png',
        ranking: '#16',
        player: 'Jamal Musiala',
        origin: 'Fundada en 1900 para unificar los torneos regionales alemanes.',
        fifa_count: '20 Mundiales.',
        involved: 'Reino Unido y Suiza.',
        star_stats: {
            'Regate': 96,
            'Agilidad': 94,
            'Pase': 85,
            'Tiro': 82
        },
        lineup: [
            'POR: Ter Stegen',
            'DEF: Kimmich, Rüdiger, Tah, Mittelstädt',
            'MED: Andrich, Kroos (Ret), Gündoğan',
            'DEL: Musiala, Havertz, Wirtz'
        ],
        stats: [
            'Estilo: Presión Alta y Verticalidad',
            'Dato: 4 veces campeones del mundo'
        ]
    },
    'brasil': {
        name: 'Brasil',
        flag: 'https://flagcdn.com/w320/br.png',
        ranking: '#5',
        player: 'Vinícius Jr.',
        origin: 'Fundada en 1914 uniendo las ligas de Río y São Paulo.',
        fifa_count: '22 Mundiales (Asistencia Perfecta).',
        involved: 'Reino Unido y Argentina.',
        star_stats: {
            'Velocidad': 96,
            'Regate': 94,
            'Definición': 89,
            'Stamina': 90
        },
        lineup: [
            'POR: Alisson Becker',
            'DEF: Danilo, Marquinhos, Gabriel, Arana',
            'MED: Bruno Guimarães, Paquetá, João Gomes',
            'DEL: Raphinha, Rodrygo, Vinícius Jr.'
        ],
        stats: [
            'Estilo: Jogo Bonito y Regate',
            'Dato: Únicos pentacampeones'
        ]
    },
    'argentina': {
        name: 'Argentina',
        flag: 'https://flagcdn.com/w320/ar.png',
        ranking: '#1',
        player: 'Lionel Messi',
        origin: 'Fundada en 1893, una de las asociaciones más antiguas fuera de Europa.',
        fifa_count: '18 Mundiales.',
        involved: 'Reino Unido y Uruguay.',
        star_stats: {
            'Regate': 99,
            'Pase': 98,
            'Visión': 99,
            'Tiros Libres': 94
        },
        lineup: [
            'POR: E. Martínez (Dibu)',
            'DEF: Molina, Romero, Lisandro, Tagliafico',
            'MED: De Paul, Enzo Fernández, Mac Allister',
            'DEL: Messi, Julián Álvarez, Di María'
        ],
        stats: [
            'Estilo: Posesión y Talento',
            'Dato: Campeones del Mundo Vigentes'
        ]
    },
    'mexico': {
        name: 'México',
        flag: 'https://flagcdn.com/w320/mx.png',
        ranking: '#15',
        player: 'Edson Álvarez',
        origin: 'Formalizada en 1923 tras años de fútbol amateur influenciado por mineros ingleses.',
        fifa_count: '17 Mundiales.',
        involved: 'Reino Unido y Guatemala.',
        star_stats: {
            'Defensa': 86,
            'Físico': 88,
            'Pase': 80,
            'Liderazgo': 90
        },
        lineup: [
            'POR: Luis Malagón',
            'DEF: Jorge Sánchez, Montes, Johan Vásquez, Arteaga',
            'MED: Edson Álvarez, Luis Chávez, Erick Sánchez',
            'DEL: Antuna, Santiago Giménez, Quiñones'
        ],
        stats: [
            'Estilo: Intensidad y bandas',
            'Dato: Gigante de la CONCACAF'
        ]
    },
    'marruecos': {
        name: 'Marruecos',
        flag: 'https://flagcdn.com/w320/ma.png',
        ranking: '#13',
        player: 'Achraf Hakimi',
        origin: 'Creada en 1955 tras su independencia de Francia.',
        fifa_count: '6 Mundiales.',
        involved: 'Francia, España y Líbano.',
        star_stats: {
            'Velocidad': 95,
            'Defensa': 84,
            'Pase': 83,
            'Resistencia': 92
        },
        lineup: [
            'POR: Bounou',
            'DEF: Hakimi, Aguerd, Saïss, Mazraoui',
            'MED: Amrabat, Ounahi, Amallah',
            'DEL: Ziyech, En-Nesyri, Boufal'
        ],
        stats: [
            'Estilo: Contraataque sólido',
            'Dato: Semifinalistas en Qatar 2022'
        ]
    },
    'uruguay': {
        name: 'Uruguay',
        flag: 'https://flagcdn.com/w320/uy.png',
        ranking: '#11',
        player: 'Federico Valverde',
        origin: 'Fundada en 1900 para competir contra Argentina.',
        fifa_count: '14 Mundiales.',
        involved: 'Reino Unido y Argentina.',
        star_stats: {
            'Potencia': 92,
            'Pase Largo': 88,
            'Velocidad': 89,
            'Tiro': 86
        },
        lineup: [
            'POR: Rochet',
            'DEF: Nández, R. Araújo, Giménez, Viña',
            'MED: Ugarte, Valverde, De la Cruz',
            'DEL: Pellistri, Darwin Núñez, Maxi Araújo'
        ],
        stats: [
            'Estilo: Garra Charrúa',
            'Dato: Primer campeón mundial (1930)'
        ]
    },
    'inglaterra': {
        name: 'Inglaterra',
        flag: 'https://flagcdn.com/w320/gb-eng.png',
        ranking: '#4',
        player: 'Jude Bellingham',
        origin: 'Fundada en 1863. Son los inventores de las reglas modernas del fútbol.',
        fifa_count: '16 Mundiales.',
        involved: 'Ninguno (Ellos crearon el juego).',
        star_stats: {
            'Físico': 88,
            'Regate': 89,
            'Pase': 90,
            'Definición': 87
        },
        lineup: [
            'POR: Pickford',
            'DEF: Walker, Stones, Guéhi, Shaw',
            'MED: Rice, Mainoo, Bellingham',
            'DEL: Saka, Harry Kane, Foden'
        ],
        stats: [
            'Estilo: Técnico y Físico',
            'Dato: Dueños de la Premier League'
        ]
    },
    'corea': {
        name: 'Corea del Sur',
        flag: 'https://flagcdn.com/w320/kr.png',
        ranking: '#23',
        player: 'Son Heung-min',
        origin: 'Establecida en 1933 para promover el deporte nacionalmente.',
        fifa_count: '11 Mundiales.',
        involved: 'Reino Unido y México.',
        star_stats: {
            'Velocidad': 90,
            'Tiro': 91,
            'Pase': 84,
            'Ambidextro': 'Sí'
        },
        lineup: [
            'POR: Jo Hyeon-woo',
            'DEF: Seol, Kim Min-jae, Kwon, Kim Jin-su',
            'MED: Lee Kang-in, Hwang In-beom, Park',
            'DEL: Hwang Hee-chan, Cho Gue-sung, Son Heung-min'
        ],
        stats: [
            'Estilo: Velocidad y disciplina',
            'Dato: Semifinalistas en 2002'
        ]
    }
};

// =========================================
// LÓGICA DEL MODAL
// =========================================

const modal = document.getElementById("teamModal");
const closeBtn = document.querySelector(".close-btn");
const modalTitle = document.getElementById("modalTitle");
const modalFlag = document.getElementById("modalFlag");
const modalRanking = document.getElementById("modalRanking");
const modalPlayer = document.getElementById("modalPlayer");
const modalStatsList = document.getElementById("modalStatsList");

function openModal(teamKey) {
    const data = teamData[teamKey];
    
    if(data) {
        // 1. Llenar datos básicos (Encabezado)
        modalTitle.innerText = data.name;
        modalFlag.src = data.flag;
        modalRanking.innerText = data.ranking;
        modalPlayer.innerText = data.player;
        
        // 2. Llenar la lista de estadísticas
        modalStatsList.innerHTML = "";
        
        // --- SECCIÓN A: Historia (Preguntas que pediste) ---
        addSectionTitle("📜 Historia y Origen", "#ffd700"); // Dorado
        addListItem(`¿Por qué?: ${data.origin}`);
        addListItem(`Historia FIFA: ${data.fifa_count}`);
        addListItem(`Involucrados: ${data.involved}`);

        // --- SECCIÓN B: Estadísticas de la Estrella (NUEVO) ---
        addSectionTitle(`⭐ Stats: ${data.player}`, "#ff6b6b"); // Rojo suave
        // Convertimos el objeto star_stats en texto
        let statsText = "";
        for (const [key, value] of Object.entries(data.star_stats)) {
            statsText += `${key}: ${value} | `;
        }
        // Quitamos la última barra vertical
        addListItem(statsText.slice(0, -3));

        // --- SECCIÓN C: Alineación (NUEVO) ---
        addSectionTitle("👕 Alineación Titular", "#4ade80"); // Verde claro
        data.lineup.forEach(player => {
            addListItem(player);
        });

        // --- SECCIÓN D: Datos Extra ---
        addSectionTitle("⚽ Datos Extra", "#60a5fa"); // Azul
        data.stats.forEach(stat => {
            addListItem(stat);
        });

        // 3. Mostrar el modal
        modal.style.display = "flex";
    } else {
        console.error("No se encontraron datos para: " + teamKey);
    }
}

// Función auxiliar para agregar títulos de sección
function addSectionTitle(text, color) {
    let h5 = document.createElement("h5");
    h5.innerText = text;
    h5.style.color = color;
    h5.style.marginTop = "15px";
    h5.style.marginBottom = "5px";
    h5.style.borderBottom = `1px solid ${color}`;
    modalStatsList.appendChild(h5);
}

// Función auxiliar para agregar items a la lista
function addListItem(text) {
    let li = document.createElement("li");
    li.innerText = text;
    li.style.marginBottom = "5px";
    modalStatsList.appendChild(li);
}

// =========================================
// EVENTOS PARA CERRAR
// =========================================
if (closeBtn) {
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
