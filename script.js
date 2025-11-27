//cambio de URL a /
//history.pushState({}, '', '/index');

// Espera a que cargue el DOM
document.addEventListener("DOMContentLoaded", function () {

    // === ELEMENTOS PRINCIPALES ===
    const botones = document.querySelectorAll('button[id^="btn"]');
    const recuadros = document.querySelectorAll(".recuadro");
    const contenidos = document.querySelectorAll(".contenido");
    const cerrarBtns = document.querySelectorAll(".btnC");
    const overlay = document.getElementById("overlay");

    // === FUNCIONES PARA EL OVERLAY ===
    function mostrarOverlay() {
        overlay.style.opacity = "1";
        overlay.style.pointerEvents = "auto"; // bloquea clics
    }

    function ocultarOverlay() {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
    }

    // === BOTONES PRINCIPALES ===
    botones.forEach((boton, index) => {
        boton.addEventListener("click", function () {
            const recuadro = recuadros[index];
            const contenido = contenidos[index];
            const estilo = window.getComputedStyle(recuadro);

            const altoActual = parseFloat(estilo.height);
            const anchoActual = parseFloat(estilo.width);

            // BTN4 → RECUADRO LATERAL
            if (boton.id === "btn4") {
                if (anchoActual <= 0) {
                    recuadro.style.width = "350px";
                    recuadro.style.height = "100vh";
                    mostrarOverlay();
                    setTimeout(() => (contenido.style.opacity = "1"), 300);
                } else {
                    contenido.style.opacity = "0";
                    setTimeout(() => (recuadro.style.width = "0px"), 300);
                    ocultarOverlay();
                }
            }

            // BTN1, BTN2, BTN3 → RECUADROS SUPERIORES
            else {
                if (altoActual <= 0) {
                    recuadro.style.height = "450px";
                    recuadro.style.width = "100%";
                    mostrarOverlay();
                    setTimeout(() => (contenido.style.opacity = "1"), 300);
                } else {
                    contenido.style.opacity = "0";
                    setTimeout(() => (recuadro.style.height = "0px"), 300);
                    ocultarOverlay();
                }
            }
        });
    });

    // === BOTONES DE CERRAR ===
    cerrarBtns.forEach((btn, index) => {
        btn.addEventListener("click", function () {
            const recuadro = recuadros[index];
            const contenido = contenidos[index];

            contenido.style.opacity = "0";

            if (recuadro.classList.contains("recuadro-lateral")) {
                recuadro.style.width = "0px";
            } else {
                recuadro.style.height = "0px";
            }

            ocultarOverlay();
        });
    });

    // === SLIDER AUTOMÁTICO ===
    const slides = document.querySelectorAll(".slider .slide");
    let index = 0;

    function cambiarSlide() {
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }

    setInterval(cambiarSlide, 5000);
});

document.addEventListener("DOMContentLoaded", function () {

    const sistemas = [
        {
            botones: document.querySelectorAll(".abajoP1, .abajoP12, .abajoP13, .abajoP14"),
            imagen: document.getElementById("img-terreno"),
            botonVerMas: document.getElementById("vermas-terreno")
        },
        {
            botones: document.querySelectorAll(".abajoP2, .abajoP21, .abajoP22, .abajoP23"),
            imagen: document.getElementById("img-bodega"),
            botonVerMas: document.getElementById("vermas-bodega")
        },
        {
            botones: document.querySelectorAll(".abajoP3, .abajoP31, .abajoP32, .abajoP33"),
            imagen: document.getElementById("img-otros"),
            botonVerMas: document.getElementById("vermas-otros")
        }
    ];

    // Ocultar imágenes y botones al inicio
    sistemas.forEach(g => {
        if (g.imagen) {
            g.imagen.style.display = "none";
            g.imagen.src = "";
        }
        if (g.botonVerMas) g.botonVerMas.style.display = "none";
    });

    sistemas.forEach(grupo => {

        grupo.botones.forEach(boton => {
            boton.addEventListener("click", () => {

                const ruta = boton.getAttribute("data-img");
                const url = boton.getAttribute("data-url");

                if (!ruta) return;

                // Ocultar todas las imágenes
                sistemas.forEach(g => {
                    if (g.imagen) {
                        g.imagen.style.display = "none";
                        g.imagen.src = "";
                    }
                    if (g.botonVerMas) g.botonVerMas.style.display = "none";
                });

                // Mostrar imagen obligatoriamente
                grupo.imagen.src = ruta;

                grupo.imagen.style.display = "block";
                grupo.imagen.style.opacity = "1";
                grupo.imagen.style.visibility = "visible";

                // Mostrar botón ver más
                if (grupo.botonVerMas) {
                    grupo.botonVerMas.style.display = "block";
                    grupo.botonVerMas.onclick = () => {
                        if (url) window.location.href = url;
                    };
                }

            });
        });

    });

});
function verificarOrientacion() {
    const mensaje = document.getElementById("rotarPantalla");
    if (window.matchMedia("(orientation: portrait)").matches) {
        mensaje.style.display = "flex";   // Mostrar bloqueo
    } else {
        mensaje.style.display = "none";   // Ocultar bloqueo
    }
}

window.addEventListener("orientationchange", verificarOrientacion);
window.addEventListener("resize", verificarOrientacion);
verificarOrientacion();
