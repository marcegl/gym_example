// Datos de la rutina completa
const routineData = {
    lunes: {
        name: "Día 1 - Push (Fuerza)",
        exercises: [
            {
                id: 'lunes-1',
                name: "Press de banca con barra",
                series: 4,
                reps: "5-6 reps",
                rest: "2-3 min"
            },
            {
                id: 'lunes-2',
                name: "Press militar con barra",
                series: 4,
                reps: "6-8 reps",
                rest: "2-3 min"
            },
            {
                id: 'lunes-3',
                name: "Fondos en paralelas",
                series: 3,
                reps: "8-12 reps",
                rest: "60-90 seg"
            },
            {
                id: 'lunes-4',
                name: "Elevaciones laterales con mancuernas",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'lunes-5',
                name: "Extensión de tríceps en polea",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'lunes-6',
                name: "Pantorrillas en máquina de pie",
                series: 5,
                reps: "15-20 reps",
                rest: "45-60 seg"
            }
        ]
    },
    martes: {
        name: "Día 2 - Pull (Fuerza) + Abdomen",
        exercises: [
            {
                id: 'martes-1',
                name: "Dominadas lastradas",
                series: 4,
                reps: "5-6 reps",
                rest: "2-3 min"
            },
            {
                id: 'martes-2',
                name: "Remo con barra",
                series: 4,
                reps: "6-8 reps",
                rest: "2-3 min"
            },
            {
                id: 'martes-3',
                name: "Peso muerto rumano (RDL)",
                series: 3,
                reps: "8-10 reps",
                rest: "2 min"
            },
            {
                id: 'martes-4',
                name: "Curl de bíceps con barra",
                series: 3,
                reps: "8-12 reps",
                rest: "60-90 seg"
            },
            {
                id: 'martes-5',
                name: "Curl martillo",
                series: 3,
                reps: "10-12 reps",
                rest: "60-90 seg"
            },
            {
                id: 'martes-6',
                name: "Face Pull (deltoides posterior)",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'martes-7',
                name: "Pantorrillas en prensa inclinada",
                series: 5,
                reps: "15-20 reps",
                rest: "45-60 seg"
            },
            {
                id: 'martes-8',
                name: "Plancha (plank)",
                series: 3,
                reps: "30-45 seg",
                rest: "45-60 seg"
            },
            {
                id: 'martes-9',
                name: "Elevaciones de piernas colgado",
                series: 3,
                reps: "10-15 reps",
                rest: "45-60 seg"
            }
        ]
    },
    jueves: {
        name: "Día 3 - Piernas (Fuerza)",
        exercises: [
            {
                id: 'jueves-1',
                name: "Sentadilla profunda con barra",
                series: 4,
                reps: "5-6 reps",
                rest: "3 min"
            },
            {
                id: 'jueves-2',
                name: "Peso muerto sumo o convencional",
                series: 3,
                reps: "6-8 reps",
                rest: "3 min"
            },
            {
                id: 'jueves-3',
                name: "Prensa inclinada",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'jueves-4',
                name: "Curl femoral acostado",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'jueves-5',
                name: "Extensiones de cuádriceps",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'jueves-6',
                name: "Pantorrillas en máquina sentado",
                series: 6,
                reps: "12-20 reps",
                rest: "45-60 seg"
            }
        ]
    },
    viernes: {
        name: "Día 4 - Pecho/Espalda (Hipertrofia) + Abdomen",
        exercises: [
            {
                id: 'viernes-1',
                name: "Press inclinado con mancuernas",
                series: 3,
                reps: "8-10 reps",
                rest: "60-90 seg"
            },
            {
                id: 'viernes-2',
                name: "Remo con mancuerna (1 brazo)",
                series: 3,
                reps: "8-12 reps",
                rest: "60-90 seg"
            },
            {
                id: 'viernes-3',
                name: "Pull-over con mancuerna",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'viernes-4',
                name: "Peck deck o aperturas en polea",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'viernes-5',
                name: "Jalón en polea al pecho",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'viernes-6',
                name: "Pantorrillas en máquina de pie",
                series: 5,
                reps: "15-20 reps",
                rest: "45-60 seg"
            },
            {
                id: 'viernes-7',
                name: "Crunch en polea (cable crunch)",
                series: 3,
                reps: "12-15 reps",
                rest: "45-60 seg"
            },
            {
                id: 'viernes-8',
                name: "Plancha lateral (side plank)",
                series: 3,
                reps: "30-40 seg por lado",
                rest: "45-60 seg"
            }
        ]
    },
    sabado: {
        name: "Día 5 - Piernas (Hipertrofia, énfasis pantorrillas)",
        exercises: [
            {
                id: 'sabado-1',
                name: "Zancadas con mancuernas",
                series: 3,
                reps: "12 por pierna",
                rest: "60-90 seg"
            },
            {
                id: 'sabado-2',
                name: "Peso muerto rumano (RDL) moderado",
                series: 3,
                reps: "10-12 reps",
                rest: "60-90 seg"
            },
            {
                id: 'sabado-3',
                name: "Prensa inclinada",
                series: 3,
                reps: "12-15 reps",
                rest: "60-90 seg"
            },
            {
                id: 'sabado-4',
                name: "Hip Thrust (opcional)",
                series: 3,
                reps: "10-12 reps",
                rest: "60-90 seg"
            },
            {
                id: 'sabado-5',
                name: "Pantorrillas sentado",
                series: 4,
                reps: "15-20 reps",
                rest: "45-60 seg"
            },
            {
                id: 'sabado-6',
                name: "Pantorrillas de pie",
                series: 4,
                reps: "15-20 reps",
                rest: "45-60 seg"
            }
        ]
    },
    miercoles: {
        name: "Día de Descanso",
        description: "Cardio opcional suave (LISS 30-45 min o HIIT 15-20 min)",
        isRestDay: true
    },
    domingo: {
        name: "Día de Descanso",
        description: "Cardio moderado opcional (LISS 30-45 min o HIIT 15-20 min)",
        isRestDay: true
    }
};

// Variables globales
let currentDay = '';
let timer = {
    isRunning: false,
    seconds: 0,
    interval: null,
    targetSeconds: 0,
    minSeconds: 0,
    maxSeconds: 0,
    currentPhase: 'waiting' // 'waiting', 'active', 'optimal', 'exceeded'
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado, inicializando aplicación...');
    console.log('Datos de rutina disponibles:', Object.keys(routineData));
    testElements();
    initializeApp();
    setupEventListeners();
    updateClock();
    setInterval(updateClock, 1000);
    loadProgressFromStorage();
    console.log('Aplicación inicializada');
});

function initializeApp() {
    // Obtener el día actual y resaltarlo
    const days = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];
    const todayNumber = new Date().getDay(); // 0 = domingo, 1 = lunes, etc.
    const todayName = days[todayNumber];
    
    console.log('Día actual:', todayNumber, '->', todayName);
    
    // Resaltar el día actual automáticamente
    const todayBtn = document.querySelector(`[data-day="${todayName}"]`);
    if (todayBtn) {
        todayBtn.style.border = '3px solid var(--accent-orange)';
        todayBtn.style.boxShadow = '0 0 15px rgba(255, 107, 53, 0.3)';
        console.log('Día actual resaltado:', todayName);
    } else {
        console.log('No se encontró el botón para el día:', todayName);
    }
}

function setupEventListeners() {
    // Selectores de día
    const dayButtons = document.querySelectorAll('.day-btn');
    console.log('Botones de día encontrados:', dayButtons.length);
    
    dayButtons.forEach(btn => {
        console.log('Agregando listener para:', btn.dataset.day);
        btn.addEventListener('click', () => selectDay(btn.dataset.day));
    });

    // Controles del timer
    document.getElementById('startTimer').addEventListener('click', startTimer);
    document.getElementById('pauseTimer').addEventListener('click', pauseTimer);
    document.getElementById('resetTimer').addEventListener('click', resetTimer);

    // Presets del timer
    document.querySelectorAll('.preset-btn').forEach(btn => {
        btn.addEventListener('click', () => setTimerPreset(parseInt(btn.dataset.time)));
    });
}

function selectDay(day) {
    console.log('Día seleccionado:', day);
    currentDay = day;
    
    // Actualizar botones activos
    document.querySelectorAll('.day-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-day="${day}"]`).classList.add('active');

    // Mostrar contenido apropiado
    if (routineData[day].isRestDay) {
        console.log('Mostrando día de descanso');
        showRestDay(day);
    } else {
        console.log('Mostrando rutina de entrenamiento');
        showWorkout(day);
    }
}

function showRestDay(day) {
    document.getElementById('timerSection').style.display = 'none';
    document.getElementById('workoutSection').style.display = 'none';
    document.getElementById('restDaySection').style.display = 'block';
    
    document.getElementById('restDayDescription').textContent = routineData[day].description;
}

function showWorkout(day) {
    document.getElementById('restDaySection').style.display = 'none';
    document.getElementById('timerSection').style.display = 'block';
    document.getElementById('workoutSection').style.display = 'block';
    
    document.getElementById('workoutTitle').textContent = routineData[day].name;
    renderExercises(day);
    updateProgress(day);
}

function renderExercises(day) {
    console.log('Renderizando ejercicios para:', day);
    const container = document.getElementById('exercisesContainer');
    const exercises = routineData[day].exercises;
    
    console.log('Número de ejercicios:', exercises.length);
    container.innerHTML = '';
    
    exercises.forEach((exercise, index) => {
        const exerciseCard = createExerciseCard(exercise, index);
        container.appendChild(exerciseCard);
    });
    console.log('Ejercicios renderizados correctamente');
}

function createExerciseCard(exercise, index) {
    const card = document.createElement('div');
    card.className = 'exercise-card';
    card.dataset.exerciseId = exercise.id;
    
    // Obtener estado guardado
    const savedState = getExerciseState(exercise.id);
    const isCompleted = savedState.completed;
    const currentSeries = savedState.series;
    
    if (isCompleted) {
        card.classList.add('completed');
    }
    
    card.innerHTML = `
        <div class="exercise-header">
            <div class="exercise-title">${exercise.name}</div>
        </div>
        <div class="exercise-details">
            <strong>Series:</strong> ${exercise.series} • 
            <strong>Repeticiones:</strong> ${exercise.reps} • 
            <strong>Descanso:</strong> ${exercise.rest}
        </div>
        <div class="exercise-controls">
            <div class="series-counter">
                <button class="counter-btn decrease" data-exercise-id="${exercise.id}">-</button>
                <span class="counter-display" id="series-${exercise.id}">${currentSeries}/${exercise.series}</span>
                <button class="counter-btn increase" data-exercise-id="${exercise.id}">+</button>
            </div>
            <button class="rest-timer-btn" data-rest-time="${exercise.rest}">
                <i class="fas fa-clock"></i>
                Descanso
            </button>
            <button class="complete-btn ${isCompleted ? 'completed' : ''}" data-exercise-id="${exercise.id}">
                <i class="fas ${isCompleted ? 'fa-check-circle' : 'fa-circle'}"></i>
                ${isCompleted ? 'Completado' : 'Marcar'}
            </button>
        </div>
    `;
    
    // Agregar event listeners
    setupExerciseEventListeners(card, exercise);
    
    return card;
}

function setupExerciseEventListeners(card, exercise) {
    // Event listeners para contadores de series
    const decreaseBtn = card.querySelector('.counter-btn.decrease');
    const increaseBtn = card.querySelector('.counter-btn.increase');
    const restBtn = card.querySelector('.rest-timer-btn');
    const completeBtn = card.querySelector('.complete-btn');
    
    decreaseBtn.addEventListener('click', () => adjustSeries(exercise.id, -1));
    increaseBtn.addEventListener('click', () => adjustSeries(exercise.id, 1));
    restBtn.addEventListener('click', () => startRestTimer(exercise.rest));
    completeBtn.addEventListener('click', () => toggleExerciseComplete(exercise.id));
}

function adjustSeries(exerciseId, adjustment) {
    const state = getExerciseState(exerciseId);
    const newSeries = Math.max(0, state.series + adjustment);
    
    // Encontrar el ejercicio para obtener el máximo
    const exercise = findExerciseById(exerciseId);
    if (exercise && newSeries <= exercise.series) {
        state.series = newSeries;
        saveExerciseState(exerciseId, state);
        
        // Actualizar display
        document.getElementById(`series-${exerciseId}`).textContent = `${newSeries}/${exercise.series}`;
        
        // Auto-completar si se alcanzan todas las series
        if (newSeries === exercise.series && !state.completed) {
            toggleExerciseComplete(exerciseId);
        }
        
        updateProgress(currentDay);
    }
}

function toggleExerciseComplete(exerciseId) {
    const state = getExerciseState(exerciseId);
    state.completed = !state.completed;
    saveExerciseState(exerciseId, state);
    
    // Actualizar UI
    const card = document.querySelector(`[data-exercise-id="${exerciseId}"]`);
    const btn = card.querySelector('.complete-btn');
    const icon = btn.querySelector('i');
    
    if (state.completed) {
        card.classList.add('completed');
        btn.classList.add('completed');
        icon.className = 'fas fa-check-circle';
        btn.innerHTML = '<i class="fas fa-check-circle"></i> Completado';
    } else {
        card.classList.remove('completed');
        btn.classList.remove('completed');
        icon.className = 'fas fa-circle';
        btn.innerHTML = '<i class="fas fa-circle"></i> Marcar';
    }
    
    updateProgress(currentDay);
}

function startRestTimer(restTime) {
    // Parsear tiempo de descanso
    const timeMatch = restTime.match(/(\d+)(?:-(\d+))?\s*(min|seg)/);
    if (!timeMatch) return;
    
    const minTime = parseInt(timeMatch[1]);
    const maxTime = timeMatch[2] ? parseInt(timeMatch[2]) : minTime;
    const unit = timeMatch[3];
    
    // Convertir a segundos
    const minSeconds = unit === 'min' ? minTime * 60 : minTime;
    const maxSeconds = unit === 'min' ? maxTime * 60 : maxTime;
    
    // Configurar timer con rangos
    setTimerWithRange(minSeconds, maxSeconds, restTime);
    startTimer();
    
    document.getElementById('timerLabel').textContent = `Descanso - ${restTime}`;
}

function setTimerPreset(seconds) {
    timer.seconds = seconds;
    timer.targetSeconds = seconds;
    timer.minSeconds = 0;
    timer.maxSeconds = seconds;
    timer.currentPhase = 'waiting';
    updateTimerDisplay();
    updateTimerColors();
    showTimerProgress(false);
}

function setTimerWithRange(minSeconds, maxSeconds, restTimeText) {
    timer.seconds = 0; // Comenzar desde 0 (cronómetro ascendente)
    timer.minSeconds = minSeconds;
    timer.maxSeconds = maxSeconds;
    timer.targetSeconds = maxSeconds;
    timer.currentPhase = 'active';
    updateTimerDisplay();
    updateTimerPhaseDisplay(restTimeText);
    updateTimerColors();
    showTimerProgress(true);
    updateTimerProgress();
}

function startTimer() {
    if (timer.isRunning) return;
    
    timer.isRunning = true;
    timer.interval = setInterval(() => {
        timer.seconds++;
        updateTimerDisplay();
        updateTimerProgress();
        updateTimerPhase();
    }, 1000);
    
    updateTimerButtons();
}

function updateTimerPhase() {
    let newPhase = timer.currentPhase;
    
    if (timer.minSeconds > 0) { // Solo si tenemos rangos definidos
        if (timer.seconds >= timer.minSeconds && timer.seconds < timer.maxSeconds && timer.currentPhase === 'active') {
            newPhase = 'optimal';
            playNotificationSound();
            showPhaseNotification('¡Tiempo mínimo alcanzado! Ya puedes continuar', 'success');
        } else if (timer.seconds >= timer.maxSeconds && timer.currentPhase === 'optimal') {
            newPhase = 'exceeded';
            playNotificationSound();
            showPhaseNotification('Tiempo máximo alcanzado', 'warning');
        }
    } else {
        // Timer tradicional descendente
        if (timer.targetSeconds > 0 && timer.seconds >= timer.targetSeconds) {
            pauseTimer();
            playNotificationSound();
            showTimerNotification();
            return;
        }
    }
    
    if (newPhase !== timer.currentPhase) {
        timer.currentPhase = newPhase;
        updateTimerColors();
    }
}

function pauseTimer() {
    timer.isRunning = false;
    if (timer.interval) {
        clearInterval(timer.interval);
        timer.interval = null;
    }
    updateTimerButtons();
}

function resetTimer() {
    pauseTimer();
    if (timer.minSeconds > 0) {
        // Timer con rangos - reiniciar a 0
        timer.seconds = 0;
        timer.currentPhase = 'active';
    } else {
        // Timer tradicional - reiniciar al tiempo objetivo
        timer.seconds = timer.targetSeconds;
        timer.currentPhase = 'waiting';
    }
    updateTimerDisplay();
    updateTimerColors();
    updateTimerProgress();
    document.getElementById('timerLabel').textContent = 'Tiempo de Descanso';
}

function updateTimerDisplay() {
    let displaySeconds = timer.seconds;
    
    // Para timer tradicional (descendente), mostrar tiempo restante
    if (timer.minSeconds === 0 && timer.targetSeconds > 0) {
        displaySeconds = Math.max(0, timer.targetSeconds - timer.seconds);
    }
    
    const minutes = Math.floor(displaySeconds / 60);
    const seconds = displaySeconds % 60;
    const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('timerDisplay').textContent = display;
}

function updateTimerColors() {
    const timerDisplay = document.getElementById('timerDisplay');
    const timerContainer = document.querySelector('.timer-container');
    
    // Remover clases anteriores
    timerDisplay.classList.remove('timer-active', 'timer-optimal', 'timer-exceeded');
    timerContainer.classList.remove('timer-active', 'timer-optimal', 'timer-exceeded');
    
    // Agregar clase según la fase actual
    timerDisplay.classList.add(`timer-${timer.currentPhase}`);
    timerContainer.classList.add(`timer-${timer.currentPhase}`);
}

function updateTimerPhaseDisplay(restTimeText) {
    const label = document.getElementById('timerLabel');
    const minMinutes = Math.floor(timer.minSeconds / 60);
    const maxMinutes = Math.floor(timer.maxSeconds / 60);
    
    if (timer.minSeconds === timer.maxSeconds) {
        label.textContent = `Descanso - ${restTimeText}`;
    } else {
        label.textContent = `Descanso - ${restTimeText} (Min: ${minMinutes}min, Max: ${maxMinutes}min)`;
    }
}

function showPhaseNotification(message, type) {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'var(--success-color)' : 'var(--warning-color)';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-triangle';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `;
    notification.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 4000);
}

function showTimerProgress(show) {
    const progressElement = document.getElementById('timerProgress');
    progressElement.style.display = show ? 'block' : 'none';
}

function updateTimerProgress() {
    const progressBar = document.getElementById('timerProgressBar');
    
    if (timer.minSeconds > 0) { // Timer con rangos
        let percentage = 0;
        let progressClass = '';
        
        if (timer.seconds <= timer.minSeconds) {
            // Fase activa (0% - 50%)
            percentage = (timer.seconds / timer.minSeconds) * 50;
            progressClass = '';
        } else if (timer.seconds <= timer.maxSeconds) {
            // Fase óptima (50% - 100%)
            percentage = 50 + ((timer.seconds - timer.minSeconds) / (timer.maxSeconds - timer.minSeconds)) * 50;
            progressClass = 'optimal';
        } else {
            // Fase excedida (100%+)
            percentage = 100;
            progressClass = 'exceeded';
        }
        
        progressBar.style.width = `${Math.min(percentage, 100)}%`;
        progressBar.className = `timer-progress-bar ${progressClass}`;
    }
}

function updateTimerButtons() {
    const startBtn = document.getElementById('startTimer');
    const pauseBtn = document.getElementById('pauseTimer');
    
    if (timer.isRunning) {
        startBtn.style.opacity = '0.5';
        pauseBtn.style.opacity = '1';
    } else {
        startBtn.style.opacity = '1';
        pauseBtn.style.opacity = '0.5';
    }
}

function playNotificationSound() {
    // Crear un sonido de notificación simple
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.setValueAtTime(600, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

function showTimerNotification() {
    // Crear notificación visual
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success-color);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 1000;
        font-weight: bold;
        animation: slideIn 0.3s ease;
    `;
    notification.innerHTML = '<i class="fas fa-check-circle"></i> ¡Tiempo de descanso terminado!';
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function updateProgress(day) {
    if (!routineData[day] || routineData[day].isRestDay) return;
    
    const exercises = routineData[day].exercises;
    const completed = exercises.filter(ex => getExerciseState(ex.id).completed).length;
    const total = exercises.length;
    const percentage = total > 0 ? (completed / total) * 100 : 0;
    
    document.getElementById('progressFill').style.width = `${percentage}%`;
    document.getElementById('progressText').textContent = `${completed}/${total} completados`;
}

function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-ES', { 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeString;
}

// Funciones de persistencia de datos
function getExerciseState(exerciseId) {
    const saved = localStorage.getItem(`exercise_${exerciseId}`);
    if (saved) {
        return JSON.parse(saved);
    }
    return { series: 0, completed: false };
}

function saveExerciseState(exerciseId, state) {
    localStorage.setItem(`exercise_${exerciseId}`, JSON.stringify(state));
}

function loadProgressFromStorage() {
    // Cargar el progreso guardado para el día actual si hay uno seleccionado
    if (currentDay && routineData[currentDay] && !routineData[currentDay].isRestDay) {
        updateProgress(currentDay);
    }
}

function findExerciseById(exerciseId) {
    for (const day in routineData) {
        if (routineData[day].exercises) {
            const exercise = routineData[day].exercises.find(ex => ex.id === exerciseId);
            if (exercise) return exercise;
        }
    }
    return null;
}

// Función para limpiar progreso (útil para testing)
function clearAllProgress() {
    if (confirm('¿Estás seguro de que quieres borrar todo el progreso?')) {
        for (const day in routineData) {
            if (routineData[day].exercises) {
                routineData[day].exercises.forEach(exercise => {
                    localStorage.removeItem(`exercise_${exercise.id}`);
                });
            }
        }
        if (currentDay) {
            showWorkout(currentDay);
        }
    }
}

// Función de prueba para verificar elementos
function testElements() {
    console.log('Timer section:', document.getElementById('timerSection'));
    console.log('Workout section:', document.getElementById('workoutSection'));
    console.log('Rest day section:', document.getElementById('restDaySection'));
    console.log('Exercises container:', document.getElementById('exercisesContainer'));
}

// Hacer las funciones accesibles globalmente para onclick
window.adjustSeries = adjustSeries;
window.toggleExerciseComplete = toggleExerciseComplete;
window.startRestTimer = startRestTimer;
window.clearAllProgress = clearAllProgress;
window.testElements = testElements;

// CSS para animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style); 