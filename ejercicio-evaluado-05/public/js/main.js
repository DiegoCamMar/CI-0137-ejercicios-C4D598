"use strict";

/* ============================================================
   Modo claro / oscuro con localStorage.
   El contenido del currículum ya no se arma aquí: lo genera el
   servidor con la plantilla EJS (views/index.ejs) a partir de
   data/curriculum.js.
   ============================================================ */

const CLAVE_TEMA = "tema-curriculum";

// localStorage puede fallar (modo privado, almacenamiento bloqueado)
function leerTemaGuardado() {
    try {
        return localStorage.getItem(CLAVE_TEMA);
    } catch (error) {
        return null;
    }
}

function guardarTema(tema) {
    try {
        localStorage.setItem(CLAVE_TEMA, tema);
    } catch (error) {
        // Si no se puede guardar, el tema igual cambia en esta visita
    }
}

// Si no hay preferencia guardada, se usa la del sistema operativo
function obtenerTemaInicial() {
    const guardado = leerTemaGuardado();
    if (guardado === "claro" || guardado === "oscuro") {
        return guardado;
    }
    const prefiereOscuro = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefiereOscuro ? "oscuro" : "claro";
}

function aplicarTema(tema) {
    const esOscuro = tema === "oscuro";
    document.documentElement.dataset.tema = tema;

    const boton = document.querySelector("#boton-tema");
    if (boton) {
        boton.textContent = esOscuro ? "Modo claro" : "Modo oscuro";
        boton.setAttribute("aria-pressed", String(esOscuro));
    }
}

function iniciarTema() {
    aplicarTema(obtenerTemaInicial());

    const boton = document.querySelector("#boton-tema");
    if (!boton) return;

    boton.addEventListener("click", () => {
        const nuevoTema = document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
        aplicarTema(nuevoTema);
        guardarTema(nuevoTema);
    });
}

iniciarTema();
