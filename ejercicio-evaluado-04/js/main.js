"use strict";

/* ============================================================
   1. Datos del currículum (arreglos de objetos)
   ============================================================ */

const experiencia = [
    {
        titulo: "Proyecto académico — Sistema de gestión clínica",
        lugar: "Universidad de Costa Rica",
        periodo: "de Marzo 2026 hasta Junio 2026",
        logros: [
            "Implementé junto con un equipo un servidor con servicios para la gestión de doctores y pacientes usando C y C++.",
            "Implementé consultas SQL para datos de los usuarios, doctores y pacientes en tiempo real.",
            "Diseñé la interfaz del cliente y de administración de nodos."
        ]
    },
    {
        titulo: "Competencia internacional — Desarrollo de videojuego BARRO",
        lugar: "GameJam+ 25/26",
        periodo: "de Octubre 2025 hasta Junio 2026",
        logros: [
            "Desarrollé junto con un equipo un precision platformer en GameMaker.",
            "Trabajé en música, arte, diseño y programación.",
            "Aprendí a trabajar en un entorno de desarrollo colaborativo en un cierto periodo de tiempo (tener un prototipo funcional en 48 horas, luego desarrollarlo por 8 meses.)",
            "Aprendí herramientas de emprendimiento y producción de videojuegos a nivel industrial."
        ]
    }
];

const formacion = [
    {
        titulo: "Ingeniería en Sistemas",
        institucion: "Universidad de Costa Rica",
        periodo: "2024 - presente",
        detalle: "Promedio general: 9.1"
    },
    {
        titulo: "Bachillerato en Educación Media",
        institucion: "Saint Anthony High School",
        periodo: "2019 - 2023"
    }
];

const habilidades = [
    { nombre: "HTML5 semántico", tipo: "tecnica" },
    { nombre: "Javascript", tipo: "tecnica" },
    { nombre: "CSS", tipo: "tecnica" },
    { nombre: "Python", tipo: "tecnica" },
    { nombre: "C", tipo: "tecnica" },
    { nombre: "C++", tipo: "tecnica" },
    { nombre: "C#", tipo: "tecnica" },
    { nombre: "Java", tipo: "tecnica" },
    { nombre: "SQL", tipo: "tecnica" },
    { nombre: "GameMaker", tipo: "tecnica" },
    { nombre: "Unity", tipo: "tecnica" },
    { nombre: "Git y GitHub", tipo: "tecnica" },
    { nombre: "Linux", tipo: "tecnica" },
    { nombre: "Trabajo en equipo", tipo: "blanda" },
    { nombre: "Comunicación efectiva", tipo: "blanda" },
    { nombre: "Resolución de problemas", tipo: "blanda" },
    { nombre: "Gestión del tiempo", tipo: "blanda" }
];

const idiomas = [
    { nombre: "Inglés" },
    { nombre: "Español" },
    { nombre: "Francés" }
];

const cursos = [
    { nombre: "Introducción a la Computación", institucion: "UCR", anio: 2024 },
    { nombre: "Programación 1", institucion: "UCR", anio: 2024 },
    { nombre: "Programación 2", institucion: "UCR", anio: 2025 },
    { nombre: "Programación Paralela y Concurrente", institucion: "UCR", anio: 2025 },
    { nombre: "Proyecto integrador de Sistemas Operativos y Redes de Comunicación y Datos", institucion: "UCR", anio: 2026 }
];

const enlaces = [
    { texto: "Mi perfil de GitHub", url: "https://github.com/DiegoCamMar" },
    { texto: "Mi perfil de LinkedIn", url: "https://www.linkedin.com/in/diegocamachomartinez" },
    { texto: "Documentación HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" }
];

/* ============================================================
   2. Funciones auxiliares para crear elementos con el DOM
   ============================================================ */

// Crea un elemento con texto (usa textContent, nunca innerHTML)
function crearElemento(etiqueta, texto) {
    const elemento = document.createElement(etiqueta);
    if (texto !== undefined) {
        elemento.textContent = texto;
    }
    return elemento;
}

// Agrega un <li> por cada texto al contenedor (<ul> u <ol>)
function pintarLista(contenedor, textos) {
    textos.forEach((texto) => {
        contenedor.appendChild(crearElemento("li", texto));
    });
}

/* ============================================================
   3. Pintar cada sección
   ============================================================ */

function pintarExperiencia() {
    const seccion = document.querySelector("#seccion-experiencia");

    experiencia.forEach((item) => {
        const articulo = crearElemento("article");
        articulo.appendChild(crearElemento("h3", item.titulo));

        const parrafo = crearElemento("p");
        parrafo.appendChild(crearElemento("em", `${item.lugar}, ${item.periodo}`));
        articulo.appendChild(parrafo);

        const lista = crearElemento("ul");
        pintarLista(lista, item.logros);
        articulo.appendChild(lista);

        seccion.appendChild(articulo);
    });
}

function pintarFormacion() {
    const seccion = document.querySelector("#seccion-formacion");

    formacion.forEach((item) => {
        const articulo = crearElemento("article");
        articulo.appendChild(crearElemento("h3", item.titulo));
        articulo.appendChild(crearElemento("p", `${item.institucion}, ${item.periodo}`));

        if (item.detalle) {
            articulo.appendChild(crearElemento("p", item.detalle));
        }

        seccion.appendChild(articulo);
    });
}

function pintarHabilidades() {
    const tecnicas = habilidades
        .filter((habilidad) => habilidad.tipo === "tecnica")
        .map((habilidad) => habilidad.nombre);

    const blandas = habilidades
        .filter((habilidad) => habilidad.tipo === "blanda")
        .map((habilidad) => habilidad.nombre);

    pintarLista(document.querySelector("#lista-habilidades-tecnicas"), tecnicas);
    pintarLista(document.querySelector("#lista-habilidades-blandas"), blandas);
}

function pintarIdiomas() {
    pintarLista(
        document.querySelector("#lista-idiomas"),
        idiomas.map((idioma) => idioma.nombre)
    );
}

function pintarCursos() {
    pintarLista(
        document.querySelector("#lista-cursos"),
        cursos.map((curso) => `${curso.nombre}, ${curso.institucion} - ${curso.anio}`)
    );
}

function pintarEnlaces() {
    const lista = document.querySelector("#lista-enlaces");

    enlaces.forEach((enlace) => {
        const li = crearElemento("li");
        const a = crearElemento("a", enlace.texto);
        a.href = enlace.url;
        a.target = "_blank";
        a.rel = "noopener";
        li.appendChild(a);
        lista.appendChild(li);
    });
}

/* ============================================================
   4. Modo claro / oscuro con localStorage
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
    boton.textContent = esOscuro ? "Modo claro" : "Modo oscuro";
    boton.setAttribute("aria-pressed", String(esOscuro));
}

function iniciarTema() {
    aplicarTema(obtenerTemaInicial());

    const boton = document.querySelector("#boton-tema");
    boton.addEventListener("click", () => {
        const nuevoTema = document.documentElement.dataset.tema === "oscuro" ? "claro" : "oscuro";
        aplicarTema(nuevoTema);
        guardarTema(nuevoTema);
    });
}

/* ============================================================
   5. Inicio (el script usa defer, así que el DOM ya existe)
   ============================================================ */

iniciarTema();
pintarExperiencia();
pintarFormacion();
pintarHabilidades();
pintarIdiomas();
pintarCursos();
pintarEnlaces();
