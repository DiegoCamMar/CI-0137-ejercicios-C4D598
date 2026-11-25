import { Router } from "express";
import { recibirContacto } from "../controllers/contacto.controller.js";

const router = Router();

// POST /contacto → recibe el formulario de contacto
router.post("/", recibirContacto);

export default router;
