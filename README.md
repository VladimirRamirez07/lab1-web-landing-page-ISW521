# CyberShield — Landing Page Responsiva

![CyberShield](https://vladimirramirez07.github.io/lab1-web-landing-page-ISW521/laboratorio-01/img/hero-shield.png)

Laboratorio #1 del curso **Programación en Ambiente Web I (ISW-521)** de la Universidad Técnica Nacional (UTN). Landing page responsiva para una startup ficticia de ciberseguridad, desarrollada con HTML5, CSS3 nativo y JavaScript vanilla.

**Sitio live:** [https://vladimirramirez07.github.io/lab1-web-landing-page-ISW521/laboratorio-01/](https://vladimirramirez07.github.io/lab1-web-landing-page-ISW521/laboratorio-01/)

---

## Tecnologías utilizadas

- **HTML5** — Estructura semántica validada por el W3C
- **CSS3 nativo** — Flexbox, CSS Grid Layout, Media Queries, Variables CSS, Animaciones
- **JavaScript vanilla** — Sin librerías ni frameworks externos
- **Web Storage API** — localStorage para persistencia de preferencias del usuario
- **GitHub Pages** — Hosting gratuito para el sitio en producción

---

## Funcionalidades implementadas

### Requerimientos técnicos obligatorios
- HTML5 semántico con etiquetas `header`, `nav`, `main`, `section`, `article`, `footer`
- Código validado en el W3C sin errores ni warnings
- Flexbox en navbar, hero, sección de beneficios, formulario de contacto y footer
- CSS Grid en sección de servicios y testimonios
- Diseño responsivo con dos breakpoints: 768px (tablet) y 480px (móvil)
- Sin frameworks CSS externos (sin Bootstrap, Tailwind, etc.)
- Atributos ARIA en elementos interactivos
- Imágenes con atributo `alt` descriptivo
- Contraste de texto 10.88:1 — supera el mínimo WCAG 2.1 de 4.5:1
- Navegación completa por teclado con foco visible
- localStorage para persistir modo oscuro/claro y nombre en formulario

### Funcionalidades extra
- Barra de progreso de scroll en la parte superior
- Contador animado en la sección de beneficios al hacer scroll
- Animaciones de entrada (fade-in) al llegar a cada sección
- Modal de confirmación al enviar el formulario
- Botón de WhatsApp en el modal con mensaje prellenado con los datos del formulario
- Resaltado de enlace activo en el navbar según la sección visible
- Imagen hero con efecto de desvanecido y animación flotante
- Logo SVG geométrico y favicon personalizado
- Botón flotante de WhatsApp en toda la página
- Modo oscuro / claro con persistencia en localStorage

---

## Estructura de carpetas
```
laboratorio-01/
│
├── index.html          # Documento principal
├── css/
│   └── styles.css      # Estilos CSS3 nativo
├── js/
│   └── app.js          # JavaScript vanilla
└── img/
└── hero-shield.png # Imagen principal del hero
```
---

## Instrucciones para correr localmente

### Opción 1 — Live Server (recomendado)
1. Clona el repositorio
```bash
git clone https://github.com/VladimirRamirez07/lab1-web-landing-page-ISW521.git
```
2. Abre la carpeta `laboratorio-01` en Visual Studio Code
3. Instala la extensión **Live Server**
4. Haz clic en **Go Live** en la barra inferior
5. El sitio abre en `http://localhost:5500`

### Opción 2 — Directo en el navegador
1. Clona el repositorio
2. Abre el archivo `laboratorio-01/index.html` directamente en tu navegador

> **Nota:** Para que el localStorage funcione correctamente, se recomienda usar Live Server en lugar de abrir el archivo directamente.

---

## Información del curso

| Campo | Detalle |
|---|---|
| Universidad | Universidad Técnica Nacional (UTN) |
| Curso | Programación en Ambiente Web I |
| Código | ISW-521 |
| Laboratorio | Laboratorio #1 - Landing Page Responsiva |
| Porcentaje | 15% de la nota final |
| Docente | Bladimir Arroyo Blanco |

---

*Desarrollado por Axel Vladimir Ramírez — 2026*