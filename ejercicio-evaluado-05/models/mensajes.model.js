// "Modelo" de mensajes de contacto: se guardan en memoria (sin base de datos),
// así que se pierden cuando el servidor se reinicia.

const mensajes = [];

export function guardarMensaje({ nombre, correo, mensaje }) {
    const nuevo = { nombre, correo, mensaje, fecha: new Date() };
    mensajes.push(nuevo);
    return nuevo;
}

export function obtenerMensajes() {
    return [...mensajes];
}
