// Controlador del currículum: toma los datos y los pasa a la vista.
import * as cv from "../data/curriculum.js";

// Datos que necesita la vista index.ejs. Se reutiliza al volver a mostrar
// el formulario con errores, para no duplicar la preparación de datos.
export function datosCurriculum(extra = {}) {
    return {
        titulo: `${cv.perfil.nombre} — Currículum`,
        perfil: cv.perfil,
        experiencia: cv.experiencia,
        formacion: cv.formacion,
        habilidadesTecnicas: cv.habilidades.filter((h) => h.tipo === "tecnica"),
        habilidadesBlandas: cv.habilidades.filter((h) => h.tipo === "blanda"),
        idiomas: cv.idiomas,
        cursos: cv.cursos,
        enlaces: cv.enlaces,
        formulario: { nombre: "", correo: "", mensaje: "" },
        errores: [],
        ...extra
    };
}

export function mostrarCurriculum(req, res) {
    res.render("index", datosCurriculum());
}
