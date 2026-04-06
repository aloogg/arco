// ==========================================
// 1. BANCO DE PREGUNTAS POR CATEGORÍAS
// ==========================================
const questionPool = {
    mundiales: [
        { question: "¿Qué país ha ganado más Copas del Mundo?", options: ["Alemania", "Italia", "Brasil", "Argentina"], answer: 2 },
        { question: "¿En qué año ganó España su mundial?", options: ["2006", "2010", "2014", "2002"], answer: 1 },
        { question: "¿Dónde será el Mundial 2026?", options: ["Europa", "Sudamérica", "Norteamérica", "Asia"], answer: 2 },
        { question: "¿Qué país ganó el primer mundial en 1930?", options: ["Brasil", "Argentina", "Uruguay", "Italia"], answer: 2 },
        { question: "¿Quién ganó el mundial de Qatar 2022?", options: ["Francia", "Croacia", "Argentina", "Marruecos"], answer: 2 },
        { question: "¿Cómo se llama la mascota del Mundial México 86?", options: ["Pique", "Naranjito", "Juanito", "Gauchito"], answer: 0 }
    ],
    jugadores: [
        { question: "¿Quién es conocido como 'El Rey' del fútbol?", options: ["Pelé", "Maradona", "Messi", "CR7"], answer: 0 },
        { question: "¿Qué jugador tiene más Balones de Oro?", options: ["Cristiano Ronaldo", "Zidane", "Messi", "Platini"], answer: 2 },
        { question: "¿Quién metió el famoso gol de 'La Mano de Dios'?", options: ["Pelé", "Maradona", "Messi", "Kempes"], answer: 1 },
        { question: "¿Quién es el máximo goleador histórico de los mundiales?", options: ["Ronaldo Nazário", "Miroslav Klose", "Pelé", "Messi"], answer: 1 },
        { question: "¿Qué jugador mordió a Chiellini en el mundial 2014?", options: ["Pepe", "Luis Suárez", "Diego Costa", "Sergio Ramos"], answer: 1 }
    ],
    equipos: [
        { question: "¿Qué selección es conocida como 'La Naranja Mecánica'?", options: ["Holanda (Países Bajos)", "Costa de Marfil", "Chile", "Suecia"], answer: 0 },
        { question: "¿Cuál es el estadio más grande de México?", options: ["Estadio Akron", "Estadio BBVA", "Estadio Azteca", "Estadio Olímpico"], answer: 2 },
        { question: "¿Qué equipo ha ganado más Champions League?", options: ["Barcelona", "Milan", "Liverpool", "Real Madrid"], answer: 3 },
        { question: "¿En qué equipo jugaba Messi antes del PSG?", options: ["Newell's", "Manchester City", "Barcelona", "Inter Miami"], answer: 2 }
    ]
};

// Variables de Estado
let currentCategory = "mundiales"; // Categoría por defecto
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0; 
let redCards = 0; 

// Elementos DOM
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");
const scoreCounter = document.getElementById("scoreCounter");
const resultModal = document.getElementById("resultModal");
const modalTitle = document.getElementById("modalTitle");
const modalMessage = document.getElementById("modalMessage");
const finalScore = document.getElementById("finalScore");
const categoryButtons = document.querySelectorAll(".cat-btn");

// ==========================================
// 2. LÓGICA DE CATEGORÍAS
// ==========================================
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Quitar clase active a todos
        categoryButtons.forEach(b => b.classList.remove('active'));
        // Agregar active al clickeado
        btn.classList.add('active');
        
        // Cambiar categoría y reiniciar el juego
        currentCategory = btn.getAttribute('data-category');
        initGame();
    });
});

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// ==========================================
// 3. MOTOR DEL JUEGO
// ==========================================
function initGame() {
    currentQuestionIndex = 0;
    score = 0;
    redCards = 0;
    scoreCounter.innerText = "0";
    
    // Limpiar tarjetas rojas
    document.getElementById("card1").className = "red-card empty";
    document.getElementById("card2").className = "red-card empty";
    document.getElementById("card3").className = "red-card empty";
    
    resultModal.style.display = "none";
    
    // Cargar y mezclar las preguntas de la categoría seleccionada
    let allQuestions = [...questionPool[currentCategory]]; 
    shuffleArray(allQuestions);
    currentQuestions = allQuestions;
    
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= currentQuestions.length) {
        showGameOver(true);
        return;
    }

    const currentQ = currentQuestions[currentQuestionIndex];
    questionText.innerText = currentQ.question;
    optionsContainer.innerHTML = ""; 

    currentQ.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.classList.add("option-btn");
        btn.onclick = () => checkAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    const correctIndex = currentQuestions[currentQuestionIndex].answer;
    const allBtns = optionsContainer.querySelectorAll("button");
    
    // Bloquear botones
    allBtns.forEach(btn => btn.disabled = true);

    if (selectedIndex === correctIndex) {
        btnElement.classList.add("correct");
        score++;
        scoreCounter.innerText = score;
        
        setTimeout(() => {
            currentQuestionIndex++;
            loadQuestion();
        }, 1000);

    } else {
        btnElement.classList.add("wrong");
        allBtns[correctIndex].classList.add("correct"); // Mostrar cuál era la correcta

        redCards++;
        updateRedCardsUI();

        if (redCards >= 3) {
            setTimeout(() => showGameOver(false), 1000);
        } else {
            setTimeout(() => {
                currentQuestionIndex++;
                loadQuestion();
            }, 1500); 
        }
    }
}

function updateRedCardsUI() {
    if (redCards <= 3) {
        const cardToActivate = document.getElementById(`card${redCards}`);
        if (cardToActivate) {
            cardToActivate.classList.remove("empty");
            cardToActivate.classList.add("active");
        }
    }
}

function showGameOver(isWin) {
    resultModal.style.display = "flex";
    finalScore.innerText = score;

    if (isWin) {
        modalTitle.innerText = "¡CAMPEÓN! 🏆";
        modalTitle.style.color = "#4ade80"; 
        modalMessage.innerText = `Superaste todas las preguntas de la categoría: ${currentCategory.toUpperCase()}`;
    } else {
        modalTitle.innerText = "¡EXPULSADO! 🟥";
        modalTitle.style.color = "#ef4444"; 
        modalMessage.innerText = "Acumulaste 3 tarjetas rojas. Al vestuario.";
    }
}

function restartGame() {
    initGame();
}

// Iniciar el juego por primera vez (Carga 'mundiales' por defecto)
initGame();