// Punto de entrada: configura Express y conecta las rutas.
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

import curriculumRoutes from "./routes/curriculum.routes.js";
import contactoRoutes from "./routes/contacto.routes.js";
import { noEncontrado, errorServidor } from "./controllers/errores.controller.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PUERTO = process.env.PORT ?? 3000;

// Motor de plantillas EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Archivos estáticos (CSS, JS del cliente, imágenes)
app.use(express.static(path.join(__dirname, "public")));

// Lee los datos de formularios (application/x-www-form-urlencoded) en req.body
app.use(express.urlencoded({ extended: false }));

// Rutas
app.use("/", curriculumRoutes);
app.use("/contacto", contactoRoutes);

// 404 (va después de todas las rutas) y errores
app.use(noEncontrado);
app.use(errorServidor);

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});
