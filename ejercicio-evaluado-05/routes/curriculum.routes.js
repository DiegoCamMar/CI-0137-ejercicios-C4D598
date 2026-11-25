import { Router } from "express";
import { mostrarCurriculum } from "../controllers/curriculum.controller.js";

const router = Router();

// GET / → currículum renderizado con EJS
router.get("/", mostrarCurriculum);

export default router;
