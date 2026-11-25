// Controlador del formulario de contacto.
import { guardarMensaje } from "../models/mensajes.model.js";
import { datosCurriculum } from "./curriculum.controller.js";

const CORREO_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validar({ nombre, correo, mensaje }) {
    const errores = [];
    if (!nombre) errores.push("El nombre es obligatorio.");
    if (!correo) errores.push("El correo es obligatorio.");
    else if (!CORREO_VALIDO.test(correo)) errores.push("El correo no tiene un formato válido.");
    if (!mensaje) errores.push("El mensaje es obligatorio.");
    return errores;
}

export function recibirContacto(req, res) {
    // express.urlencoded() ya llenó req.body con los campos del formulario
    const formulario = {
        nombre: String(req.body?.nombre ?? "").trim(),
        correo: String(req.body?.correo ?? "").trim(),
        mensaje: String(req.body?.mensaje ?? "").trim()
    };

    const errores = validar(formulario);
    if (errores.length > 0) {
        // Se vuelve a mostrar el currículum con los errores y lo que ya se escribió
        return res.status(400).render("index", datosCurriculum({ formulario, errores }));
    }

    const guardado = guardarMensaje(formulario);
    console.log("Nuevo mensaje de contacto:", guardado);

    res.render("gracias", {
        titulo: "¡Gracias por escribir!",
        nombre: guardado.nombre
    });
}
