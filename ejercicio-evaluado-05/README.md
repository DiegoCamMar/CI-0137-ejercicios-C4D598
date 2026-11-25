# Ejercicio evaluado 05 — Servidor con Express

Currículum servido desde un servidor propio hecho con **Node.js + Express 5**, usando el motor de plantillas **EJS**. El HTML ya no se abre directamente en el navegador, sino que el servidor arma la página a partir de un módulo de datos y la envía al cliente.

## Requisitos

- Node.js 18.11 o superior (por `node --watch`)
- npm

## Instalación y ejecución

```bash
cd ejercicio-evaluado-05
npm install      # instala express y ejs (node_modules no se sube al repo)
npm start        # node server.js
```

Modo desarrollo (recarga cualquier cambio automáticamente):

```bash
npm run dev      # node --watch server.js
```

Luego abrir <http://localhost:3000>. El puerto se puede cambiar con la variable de entorno `PORT`.

## Estructura

```
ejercicio-evaluado-05/
├── server.js                      # Configura Express: EJS, estáticos, urlencoded, rutas, 404
├── package.json                   # "type": "module", scripts start y dev
├── data/
│   └── curriculum.js              # Datos del CV (perfil, experiencia, habilidades, cursos...)
├── models/
│   └── mensajes.model.js          # Guarda los mensajes de contacto en memoria
├── controllers/
│   ├── curriculum.controller.js   # Prepara los datos y renderiza index.ejs
│   ├── contacto.controller.js     # Lee req.body, valida y responde
│   └── errores.controller.js      # 404 y errores 500
├── routes/
│   ├── curriculum.routes.js       # GET /
│   └── contacto.routes.js         # POST /contacto
├── views/
│   ├── partials/head.ejs          # <head> compartido
│   ├── partials/footer.ejs        # Pie de página compartido
│   ├── index.ejs                  # Currículum + formulario de contacto
│   ├── gracias.ejs                # Página de agradecimiento
│   └── 404.ejs                    # Página no encontrada
└── public/                        # Servido con express.static
    ├── css/styles.css
    ├── js/main.js                 # Solo el modo claro/oscuro
    └── assets/                    # foto.jpg, favicon.ico
```

## Rutas

| Método | Ruta        | Descripción |
|--------|-------------|-------------|
| GET    | `/`         | Muestra el currículum renderizado con EJS a partir de `data/curriculum.js`. |
| POST   | `/contacto` | Recibe el formulario (`nombre`, `correo`, `mensaje`) mediante `express.urlencoded`. Si falta algún dato responde **400** y vuelve a mostrar el formulario con los errores; si todo está bien, guarda el mensaje en memoria, lo imprime en la consola del servidor y muestra una página de agradecimiento. |
| *      | cualquier otra | Responde **404** con su propia página. |

## Cambios con respecto a ejercicios anteriores

- Los datos del CV que antes estaban en `js/main.js` (ejercicio de JavaScript) ahora viven en `data/curriculum.js` del lado del servidor, y la plantilla `views/index.ejs` genera el HTML con ellos. El HTML estático `curriculum_html_semantico.html` se reemplazó por la plantilla.
- `public/js/main.js` solo conserva la lógica del botón de modo claro/oscuro.
- Se agregó una sección de **Contacto** con el formulario, y estilos para el formulario y las páginas de agradecimiento y 404.

## Restricciones cumplidas

- Sin base de datos: los datos están en un módulo de JavaScript y los mensajes se guardan en memoria (se pierden al reiniciar el servidor).
- Sin frameworks de frontend: el HTML se arma con EJS.
- `node_modules/` está excluido con `.gitignore`.

## Validación

1. `npm start` arranca sin errores y el currículum se ve en <http://localhost:3000>.
2. Enviar el formulario de contacto: la consola del servidor muestra el mensaje recibido y el navegador muestra la página de agradecimiento.
3. Visitar una dirección inexistente (por ejemplo <http://localhost:3000/no-existe>) muestra la página 404.
