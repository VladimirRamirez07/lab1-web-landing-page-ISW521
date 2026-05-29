// =========================================
// DARK / LIGHT MODE — localStorage
// =========================================

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Al cargar la página, revisar si hay preferencia guardada
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = 'Light';
} else {
    themeToggle.textContent = 'Dark';
}

// Al hacer click, cambiar y guardar en localStorage
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
        themeToggle.textContent = 'Light';
    } else {
        localStorage.setItem('theme', 'dark');
        themeToggle.textContent = 'Dark';
    }
});

// =========================================
// NAVBAR MOVIL — Toggle menu
// =========================================

const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
    navToggle.textContent = isOpen ? 'Cerrar' : 'Menu';
});

// Cerrar menú al hacer click en un enlace
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', false);
        navToggle.textContent = 'Menu';
    });
});

// =========================================
// FORMULARIO — Guardar nombre en localStorage
// =========================================

const nombreInput = document.getElementById('nombre');

// Recuperar nombre guardado si existe
const savedNombre = localStorage.getItem('contactNombre');
if (savedNombre) {
    nombreInput.value = savedNombre;
}

// Guardar nombre mientras el usuario escribe
nombreInput.addEventListener('input', () => {
    localStorage.setItem('contactNombre', nombreInput.value);
});

// Manejar envío del formulario
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if (!nombre || !correo) {
        alert('Por favor completa los campos obligatorios: Nombre y Correo.');
        return;
    }

    localStorage.removeItem('contactNombre');
    abrirModal(nombre);
    contactForm.reset();
});
// =========================================
// BARRA DE PROGRESO DE SCROLL
// =========================================

const progressBar = document.getElementById('progressBar');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
});
// =========================================
// CONTADOR ANIMADO — BENEFICIOS
// =========================================

const contadores = document.querySelectorAll('.beneficio-numero');
let contadorActivado = false;

function animarContador(elemento) {
    const texto = elemento.textContent.trim();
    const numero = parseFloat(texto.replace(/[^0-9.]/g, ''));
    const prefijo = texto.match(/^[^0-9]*/)[0];
    const sufijo = texto.match(/[^0-9.]*$/)[0];
    const duracion = 2000;
    const pasos = 60;
    const incremento = numero / pasos;
    let actual = 0;
    let paso = 0;

    const intervalo = setInterval(() => {
        paso++;
        actual += incremento;
        if (paso >= pasos) {
            actual = numero;
            clearInterval(intervalo);
        }
        const valor = Number.isInteger(numero) ? Math.floor(actual) : actual.toFixed(1);
        elemento.textContent = prefijo + valor + sufijo;
    }, duracion / pasos);
}

const observadorContador = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting && !contadorActivado) {
            contadorActivado = true;
            contadores.forEach(contador => animarContador(contador));
        }
    });
}, { threshold: 0.5 });

const seccionBeneficios = document.getElementById('beneficios');
if (seccionBeneficios) {
    observadorContador.observe(seccionBeneficios);
}
// =========================================
// ANIMACIONES DE ENTRADA AL SCROLL
// =========================================

const elementosFadeIn = document.querySelectorAll('.fade-in');

const observadorFade = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add('visible');
        }
    });
}, { threshold: 0.15 });

elementosFadeIn.forEach(elemento => {
    observadorFade.observe(elemento);
});
// =========================================
// MODAL DE CONFIRMACION
// =========================================

const modalOverlay = document.getElementById('modalOverlay');
const modalMensaje = document.getElementById('modal-mensaje');
const modalClose = document.getElementById('modalClose');

function abrirModal(nombre) {
    modalMensaje.textContent = 'Gracias ' + nombre + ', tu solicitud fue enviada. Uno de nuestros especialistas te contactará en menos de 24 horas.';
    modalOverlay.classList.add('active');
    modalOverlay.setAttribute('aria-hidden', 'false');
    modalClose.focus();
}

function cerrarModal() {
    modalOverlay.classList.remove('active');
    modalOverlay.setAttribute('aria-hidden', 'true');
}

modalClose.addEventListener('click', cerrarModal);

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) cerrarModal();
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') cerrarModal();
});
// =========================================
// NAVBAR — RESALTADO DE ENLACE ACTIVO
// =========================================

const secciones = document.querySelectorAll('main section[id]');
const enlaces = document.querySelectorAll('.nav-links a');

const observadorNav = new IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            enlaces.forEach(enlace => enlace.classList.remove('activo'));
            const enlaceActivo = document.querySelector(
                '.nav-links a[href="#' + entrada.target.id + '"]'
            );
            if (enlaceActivo) enlaceActivo.classList.add('activo');
        }
    });
}, { threshold: 0.4 });

secciones.forEach(seccion => observadorNav.observe(seccion));