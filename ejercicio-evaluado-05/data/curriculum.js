// Datos del currículum (los mismos del ejercicio de JavaScript, ahora del lado del servidor).

export const perfil = {
    nombre: "Diego Camacho Martínez",
    carrera: "Bachillerato en Computación con varios énfasis",
    foto: "/assets/foto.jpg",
    fotoAlt: "Fotografía de perfil con fondo claro",
    resumen:
        "Estudiante de tercer año de la carrera Bachillerato en Computación con varios énfasis, con " +
        "interés en desarrollo web, videojuegos y bases de datos. Cuento con experiencia académica " +
        "desarrollando proyectos en C, C++, Python, Java, C#, HTML, CSS y JavaScript. He creado " +
        "proyectos en Unity y GameMaker y participado en competencias internacionales de videojuegos. " +
        "Busco aplicar mis conocimientos en un entorno profesional donde pueda seguir aprendiendo y aportando soluciones.",
    contacto: [
        { etiqueta: "Correo", texto: "diego.camacho.martinez26@gmail.com", url: "mailto:diego.camacho.martinez26@gmail.com" },
        { etiqueta: "Teléfono", texto: "+506 6057-7210", url: "tel:+50660577210" },
        { etiqueta: "LinkedIn", texto: "linkedin.com/in/diegocamachomartinez", url: "https://www.linkedin.com/in/diegocamachomartinez", externo: true },
        { etiqueta: "GitHub", texto: "github.com/DiegoCamMar", url: "https://github.com/DiegoCamMar", externo: true }
    ]
};

export const experiencia = [
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

export const formacion = [
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

export const habilidades = [
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
    { nombre: "Node.js y Express", tipo: "tecnica" },
    { nombre: "Trabajo en equipo", tipo: "blanda" },
    { nombre: "Comunicación efectiva", tipo: "blanda" },
    { nombre: "Resolución de problemas", tipo: "blanda" },
    { nombre: "Gestión del tiempo", tipo: "blanda" }
];

export const idiomas = [
    { nombre: "Inglés" },
    { nombre: "Español" },
    { nombre: "Francés" }
];

export const cursos = [
    { nombre: "Introducción a la Computación", institucion: "UCR", anio: 2024 },
    { nombre: "Programación 1", institucion: "UCR", anio: 2024 },
    { nombre: "Programación 2", institucion: "UCR", anio: 2025 },
    { nombre: "Programación Paralela y Concurrente", institucion: "UCR", anio: 2025 },
    { nombre: "Proyecto integrador de Sistemas Operativos y Redes de Comunicación y Datos", institucion: "UCR", anio: 2026 }
];

export const enlaces = [
    { texto: "Mi perfil de GitHub", url: "https://github.com/DiegoCamMar" },
    { texto: "Mi perfil de LinkedIn", url: "https://www.linkedin.com/in/diegocamachomartinez" },
    { texto: "Documentación HTML", url: "https://developer.mozilla.org/es/docs/Web/HTML" }
];
