// Manejadores para rutas no encontradas (404) y errores del servidor (500).

export function noEncontrado(req, res) {
    res.status(404).render("404", {
        titulo: "Página no encontrada",
        ruta: req.originalUrl
    });
}

// Express reconoce un manejador de errores porque recibe 4 parámetros
export function errorServidor(err, req, res, next) {
    console.error(err);
    if (res.headersSent) return next(err);
    res.status(500).send("Ocurrió un error en el servidor.");
}
