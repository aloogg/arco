// =========================================
// DATOS DE LOS PAÍSES
// =========================================
const arCountries = {
    'francia': { 
        name: 'Francia', 
        nickname: 'Les Bleus',
        cups: 2,
        info: 'Conocidos por su fútbol dinámico, velocidad explosiva y una cantera inagotable de talento.', 
        curiousFact: 'Just Fontaine marcó 13 goles en un solo Mundial (1958). ¡Es un récord absoluto que nadie ha podido romper en más de 60 años!',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-playing-soccer-220/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/fr.png' 
    },
    'espana': { 
        name: 'España', 
        nickname: 'La Furia Roja',
        cups: 1,
        info: 'Los maestros del "Tiki-Taka", un estilo de juego basado en la posesión absoluta del balón.', 
        curiousFact: 'En 2010, España se convirtió en la primera (y única) selección en ganar un Mundial después de haber perdido su primer partido del torneo (contra Suiza).',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-soccer-practice-4528/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/es.png' 
    },
    'alemania': { 
        name: 'Alemania', 
        nickname: 'Die Mannschaft',
        cups: 4,
        info: 'La máquina europea. Famosos por su mentalidad ganadora, disciplina y eficiencia táctica.', 
        curiousFact: 'Alemania es la selección que más finales de Copa del Mundo ha jugado en la historia (8 finales) y la que más goles ha anotado en el torneo.',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-penalty-kick-226/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/de.png' 
    },
    'brasil': { 
        name: 'Brasil', 
        nickname: 'La Verdeamarela',
        cups: 5,
        info: 'La selección más exitosa en la historia y los creadores del "Jogo Bonito".', 
        curiousFact: 'Es el único país en todo el planeta que ha clasificado y participado en absolutamente todas las Copas del Mundo sin excepción.',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-juggling-a-soccer-ball-223/1080p.mp4',
        flag: 'https://flagcdn.com/w160/br.png' 
    },
    'argentina': { 
        name: 'Argentina', 
        nickname: 'La Albiceleste',
        cups: 3,
        info: 'Actuales campeones del mundo, un equipo que juega con el corazón y una pasión inigualable.', 
        curiousFact: 'En el Mundial de 1986, Diego Maradona anotó el infame gol de "La Mano de Dios" y el "Gol del Siglo" en el MISMO partido contra Inglaterra.',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-crowd-cheering-in-stadium-5538/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/ar.png' 
    },
    'mexico': { 
        name: 'México', 
        nickname: 'El Tri',
        cups: 0,
        info: 'Una selección con una afición incomparable que siempre hace vibrar los estadios del mundo.', 
        curiousFact: 'Con el torneo de 2026, México se convertirá en el primer país en toda la historia en organizar tres Copas del Mundo de la FIFA (1970, 1986 y 2026).',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-football-player-running-221/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/mx.png' 
    },
    'marruecos': { 
        name: 'Marruecos', 
        nickname: 'Leones del Atlas',
        cups: 0,
        info: 'Un equipo ordenado, con una defensa de hierro y contragolpes letales.', 
        curiousFact: 'En Qatar 2022, hicieron historia al convertirse en la primera nación africana y árabe en llegar a las Semifinales de un Mundial.',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-playing-soccer-220/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/ma.png' 
    },
    'uruguay': { 
        name: 'Uruguay', 
        nickname: 'La Celeste',
        cups: 2,
        info: 'Los creadores de la "Garra Charrúa". Un país pequeño pero un gigante en la historia del fútbol.', 
        curiousFact: 'Fueron los campeones del primer Mundial de la historia en 1930, y en 1950 protagonizaron el famoso "Maracanazo" al vencer a Brasil en su propia casa.',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-penalty-kick-226/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/uy.png' 
    },
    'inglaterra': { 
        name: 'Inglaterra', 
        nickname: 'The Three Lions',
        cups: 1,
        info: 'Los inventores del fútbol moderno. Juegan con intensidad y un gran poderío aéreo.', 
        curiousFact: 'A pesar de haber inventado el deporte en el siglo XIX, solo han podido ganar la Copa del Mundo una vez, cuando fueron anfitriones en 1966.',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-soccer-practice-4528/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/gb-eng.png' 
    },
    'corea': { 
        name: 'Corea del Sur', 
        nickname: 'Tigres de Asia',
        cups: 0,
        info: 'Destacan por su resistencia física inagotable, velocidad y disciplina táctica.', 
        curiousFact: 'Son la selección asiática más exitosa en los mundiales. En 2002, llegaron hasta las Semifinales tras eliminar a gigantes como Italia y España.',
        videoUrl: 'https://cdn.coverr.co/videos/coverr-football-player-running-221/1080p.mp4', 
        flag: 'https://flagcdn.com/w160/kr.png' 
    }
};

// =========================================
// ELEMENTOS DOM
// =========================================
const startBtn = document.getElementById('start-ra-btn');
const sceneContainer = document.getElementById('ar-scene-container');
const closeBtn = document.getElementById('close-camera');
const mainWrapper = document.querySelector('.ra-wrapper'); 
const foundContainer = document.getElementById('found-btn-container');
const detectedLabel = document.getElementById('detected-label');
const viewInfoBtn = document.getElementById('view-info-btn');
const arCard = document.getElementById('ar-info-card');

// Elementos para Animación 3D
const animControls = document.getElementById('anim-controls');
const toggleAnimBtn = document.getElementById('toggle-anim-btn');
const brazilIdle = document.getElementById('brazil-idle');
const brazilDance = document.getElementById('brazil-dance');

// Variables de Estado
let currentDetectedCountry = null;
let currentCountryKey = null; // Para saber qué país está activo
let isDancing = false;

// =========================================
// INICIAR AR
// =========================================
// =========================================
// INICIAR AR
// =========================================
startBtn.addEventListener('click', () => {
    mainWrapper.style.display = 'none'; // Ocultar botón RA
    sceneContainer.style.display = 'block'; // Mostrar escena
    
    // Forzamos a la pantalla a recalcularse
    window.dispatchEvent(new Event('resize'));

    setTimeout(() => {
        const scene = document.querySelector('a-scene');
        const arSystem = scene.systems['mindar-image-system'];
        
        if (arSystem) {
            // PARCHE ANTI-CRASH: Creamos un objeto UI falso si MindAR olvidó hacerlo
            if (!arSystem.ui) {
                arSystem.ui = {
                    showLoading: () => {},
                    hideLoading: () => {},
                    showCompatibility: () => {},
                    showScanning: () => {},
                    hideScanning: () => {}
                };
            }
            
            // Ahora sí, prendemos la cámara con seguridad
            arSystem.start();
        }
    }, 500);
});

// =========================================
// CERRAR AR
// =========================================
closeBtn.addEventListener('click', () => {
    location.reload(); 
});

// =========================================
// CAMBIAR TEXTURAS
// =========================================

function changeShirtTexture(modelEl, countryKey){

    const mesh = modelEl.getObject3D('mesh');
    if(!mesh) return;

    const loader = new THREE.TextureLoader();
    const texture = loader.load(`Public/Modelos/${countryKey}/Shirt_diffuse.png`);

    texture.flipY = false;
    texture.colorSpace = THREE.SRGBColorSpace;

    mesh.traverse((node)=>{
        if(node.isMesh){
            if(node.material.name === "Ch38_body"){
            node.material = node.material.clone();

            node.material.map = texture;

            node.material.needsUpdate = true;
            }
        }
    });


}

// =========================================
// DETECCIÓN DE OBJETIVOS
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll('[mindar-image-target]');

    targets.forEach(target => {
        
        // IMAGEN ENCONTRADA
        target.addEventListener("targetFound", event => {
            const countryKey = target.getAttribute('data-country');
            const countryData = arCountries[countryKey];
            
            console.log("Encontrado: " + countryData.name);
            
            // UI General
            currentDetectedCountry = countryData;
            currentCountryKey = countryKey; // Guardamos la clave (ejemplo "mexico")
            
            detectedLabel.innerText = "¡" + countryData.name + " Detectado!";
            foundContainer.classList.remove('found-btn-hidden');
            foundContainer.classList.add('found-btn-visible');

            // LÓGICA 3D DINÁMICA
            animControls.style.display = 'block'; // Mostrar botón de baile
            isDancing = false;
            toggleAnimBtn.innerHTML = '<i class="fa-solid fa-person-walking"></i> <span>¡Bailar!</span>';
            
            // Buscar los modelos del país específico que acabas de escanear
            const idleModel = document.getElementById(`${countryKey}-idle`);
            const danceModel = document.getElementById(`${countryKey}-dance`);

            if(idleModel){
                idleModel.setAttribute('visible','true');
                if(idleModel.getObject3D('mesh')){
                    changeShirtTexture(idleModel, countryKey);
                }else{
                    idleModel.addEventListener("model-loaded", ()=>{
                        changeShirtTexture(idleModel, countryKey);
                    });
                }
            }
            
            if(danceModel){
                danceModel.setAttribute('visible','false');
                if(danceModel.getObject3D('mesh')){
                    changeShirtTexture(danceModel, countryKey);
                }else{
                    danceModel.addEventListener("model-loaded", ()=>{
                        changeShirtTexture(danceModel, countryKey);
                    });
                }
            }
            if(idleModel) idleModel.setAttribute('visible', 'true');
            if(danceModel) danceModel.setAttribute('visible', 'false');
        });

        // 2. EVENTO: IMAGEN PERDIDA
        target.addEventListener("targetLost", event => {
            console.log("Objetivo perdido");
            
            foundContainer.classList.remove('found-btn-visible');
            foundContainer.classList.add('found-btn-hidden');
            animControls.style.display = 'none'; // Ocultar botón de baile
        });
    });
});

// =========================================
// EVENTO: BOTÓN DE ANIMACIÓN (BAILAR/PARAR)
// =========================================
toggleAnimBtn.addEventListener('click', () => {
    if (!currentCountryKey) return; // Si no hay país, no hacer nada

    isDancing = !isDancing; // Invertir estado

    // Buscar los modelos del país que está actualmente en pantalla
    const idleModel = document.getElementById(`${currentCountryKey}-idle`);
    const danceModel = document.getElementById(`${currentCountryKey}-dance`);

    if (isDancing) {
        // Poner a bailar
        if(idleModel) idleModel.setAttribute('visible', 'false');
        if(danceModel) danceModel.setAttribute('visible', 'true');
        toggleAnimBtn.innerHTML = '<i class="fa-solid fa-person"></i> <span>Parar</span>';
    } else {
        // Volver a idle
        if(idleModel) idleModel.setAttribute('visible', 'true');
        if(danceModel) danceModel.setAttribute('visible', 'false');
        toggleAnimBtn.innerHTML = '<i class="fa-solid fa-person-walking"></i> <span>¡Bailar!</span>';
    }
});

// =========================================
// BOTÓN "VER INFORMACIÓN"
// =========================================
viewInfoBtn.addEventListener('click', () => {
    if (currentDetectedCountry) {
        
        // Datos básicos
        document.getElementById('ar-flag').src = currentDetectedCountry.flag;
        document.getElementById('ar-country-name').innerText = currentDetectedCountry.name;
        
        const arVideoContainer = document.getElementById('ar-video-container');
        const arVideo = document.getElementById('ar-video');
        const extraInfo = document.getElementById('ar-extra-info');
        
        if (currentDetectedCountry.videoUrl) {
            arVideo.src = currentDetectedCountry.videoUrl;
            arVideoContainer.style.display = 'block'; // Mostrar video
            
            // Llenar información extra con HTML
            extraInfo.innerHTML = `
                <div class="stats-grid">
                    <div class="stat-box">
                        <i class="fa-solid fa-trophy" style="color: var(--accent-gold);"></i>
                        <br><strong>${currentDetectedCountry.cups}</strong> Copas
                    </div>
                    <div class="stat-box">
                        <i class="fa-solid fa-star"></i>
                        <br>Apodo: <br><strong>${currentDetectedCountry.nickname}</strong>
                    </div>
                </div>
                <div class="curious-fact">
                    <strong><i class="fa-solid fa-lightbulb"></i> ¿Sabías que?</strong><br>
                    ${currentDetectedCountry.curiousFact}
                </div>
                <p class="main-info">${currentDetectedCountry.info}</p>
            `;
        } else {
            arVideoContainer.style.display = 'none'; 
            extraInfo.innerHTML = `<p class="main-info">${currentDetectedCountry.info}</p>`;
        }
        
        // Mostrar ficha
        arCard.classList.add('show');
        
        // Ocultar botón flotante para limpiar vista
        foundContainer.classList.remove('found-btn-visible');
        foundContainer.classList.add('found-btn-hidden');
    }
});

window.closeArCard = function() {
    arCard.classList.remove('show');
}
