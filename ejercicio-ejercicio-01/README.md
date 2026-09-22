<h1>Ejercicio 01</h1>
<p>En este ejercicio, se desarrolló un ambiente de desarrollo local que permite servir y visualizar, mediante un navegador web, los archivos de un repositorio de control de versiones.
Para esto, se instaló el servidor web <b>Caddy</b>, debido que, al investigar y probar las difrentes opciones brindadas, se consideró que Caddy es el más fácil de instalar y configurar, además de que tiene HTTPS automático, es decir, por defecto maneja los certificados TLS actualizados, y convierte de HTTP a HTTPS (secure) automáticamente.</p>

<p>Para poder configurar Caddy, se usó Docker Desktop para pullear la imagen de Caddy, esto debido a que Docker ya es una herramienta que se está usando en el curso de Bases de Datos y estoy aprendiendo a usarlo. Es de gran utilidad para crear contenedores y poder correr servidores sin preocuparse por la infrastructura, por lo que me pareció la manera más sencilla de instalar y levantar un servidor Caddy.</p>

Para instalar Docker Desktop, el curso de Bases de Datos provisionó un manual explicando además cómo configurar y levantar un servidor.

Para instalar Caddy, simplemente se usó el comando:

    docker pull caddy

Y para configurar y levantar el servidor:

    docker run -d -p 80:80 -v C:/Users/yo/la_ruta_a_esta_repo:/usr/share/caddy:ro --name servidor-web caddy

Aunque lo principal es que el comando <docker run> ya levanta un servidor creado para poder acceder al sitio, viene con configuración solicitada y que también servirá para el futuro. Se describen los más importantes:

- <code>-p 80:80</code> define el puerto a ser usado, en este caso 80; así se puede acceder al sitio con el URL http://localhost/).

- <code>-v C:/Users/yo/la_ruta_a_esta_repo</code> le dice a Docker que este repositorio es donde se encuentran los archivos a ser leídos y servidos (IMPORTANTE: la ruta dada fue al repo entero, no solo este directorio del ejercicio 1. La justificación se describe más adelante).

- <code>:/usr/share/caddy:ro</code> la ruta donde Caddy guarda esos archivos por defecto, básicamente diciendo que monte este repo ahí y que use nuestra repo como la ubicación de los archivos. el :ro indica que es <i>read-only</i>.

- Finalmente, se especifica el nombre del servidor y la imagen a ser usada (Caddy).

(La documentación detallada de los argumentos de <code>docker run</code> se puede encontrar aquí: https://docs.docker.com/reference/cli/docker/container/run/)

Una vez que se ejecuta esto (en mi caso desde el Windows Powershell), ya se puede ver en Docker Desktop el servidor corriendo, y se puede acceder al sitio web con el URL http://localhost/ en el puerto 80. La evidencia se encuentra en esta misma carpeta como capturas de pantalla.

La información mostrada se encuentra en el <code>index.html</code> fuera de esta carpeta en el directorio principal del repo; se guardó allí ya que se asume que futuros ejercicios necesitarán acceder también al mismo servidor web, y sería tedioso tener que referenciar ejercicio-01 todo el tiempo, o peor, recrearlo para cada carpeta de ejercicios. Sin embargo, si a futuro me percatara de que esta manera de organización fuera conveniente cambiarlo, pues así será.