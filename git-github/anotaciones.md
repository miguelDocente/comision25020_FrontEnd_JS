# Machete de Comandos Git (Básico para Principiantes)

Este machete te ayudará con los comandos esenciales de Git para el control de versiones.

## Inicialización y Configuración

* **`git init`**: Inicializa un nuevo repositorio Git en la carpeta actual. ¡Comienza a rastrear tus cambios aquí!
* **`git clone <URL_del_repositorio>`**: **Copia un repositorio Git existente desde una URL (por ejemplo, de GitHub) a tu computadora.**
* **`git config --global user.name "Tu Nombre"`**: Configura tu nombre de usuario para Git a nivel global (para todos tus proyectos).
* **`git config --global user.email "tu@email.com"`**: Configura tu correo electrónico para Git a nivel global.

## Trabajando con Cambios

* **`git status`**: Muestra el estado de tus archivos: cuáles han cambiado, cuáles están listos para ser guardados (stageados) y cuáles no están siendo rastreados.
* **`git add <archivo>`**: Agrega un archivo específico a la zona de "stage" (preparación) para el próximo commit.
* **`git add .`**: Agrega todos los archivos modificados y nuevos a la zona de "stage". ¡Ten cuidado con esto si no quieres agregar todo!
* **`git commit -m "Mensaje descriptivo de los cambios"`**: Guarda los cambios stageados en la historia del repositorio. ¡El mensaje es importante para saber qué hiciste!
* **`git log`**: Muestra el historial de commits, con información sobre quién hizo el cambio, cuándo y el mensaje.
* **`git log --oneline`**: Muestra el historial de commits de forma más compacta, con una sola línea por commit.
* **`git diff`**: Muestra los cambios entre tu directorio de trabajo y la última versión guardada (sin stagear).
* **`git diff --staged`**: Muestra los cambios que has agregado a la zona de "stage" pero aún no has guardado con `git commit`.

## Navegando por el Historial de Commits

* **`git log`**: (Ya incluido) Muestra el historial de commits con información detallada, incluyendo el `commit ID` (un código alfanumérico largo).
* **`git checkout <ID_del_commit>`**: **Te permite volver a un estado anterior del repositorio, al commit especificado por su ID.** Esto te pone en un estado de "detached HEAD", lo que significa que no estás en una rama.
* **`git checkout <nombre_de_la_rama>`**: (Ya incluido) Para volver a trabajar en una rama, usa `git checkout` seguido del nombre de la rama (por ejemplo, `git checkout main`).
* **`git checkout -`**: Vuelve a la rama en la que estabas antes de la última operación `checkout`.

## Ramas (Branches)

* **`git branch`**: Lista todas las ramas en tu repositorio local. La rama actual estará marcada con un asterisco `*`.
* **`git branch <nombre_de_la_rama>`**: Crea una nueva rama con el nombre especificado.
* **`git checkout <nombre_de_la_rama>`**: Cambia a la rama especificada. ¡Ahora trabajarás en esa rama!
* **`git checkout -b <nombre_de_la_nueva_rama>`**: Crea una nueva rama y cambia a ella inmediatamente.
* **`git merge <nombre_de_la_rama_a_fusionar>`**: Fusiona los cambios de la rama especificada a tu rama actual. ¡Útil para integrar cambios de otras ramas!
* **`git branch -d <nombre_de_la_rama_a_borrar>`**: Borra la rama especificada (solo si ya se ha fusionado).
* **`git branch -D <nombre_de_la_rama_a_borrar>`**: Borra la rama especificada, incluso si no se ha fusionado (¡úsalo con precaución!).

## Trabajando con Repositorios Remotos (GitHub)

* **`git remote add origin <URL_del_repositorio_remoto>`**: Conecta tu repositorio local con un repositorio remoto (generalmente llamado `origin`).
* **`git remote -v`**: Muestra los repositorios remotos configurados y sus URLs.
* **`git push origin <nombre_de_la_rama>`**: Envía tus commits de la rama local especificada al repositorio remoto (`origin`). La primera vez puede que necesites `-u` para establecer el seguimiento: `git push -u origin main` (o `master`).
* **`git pull origin <nombre_de_la_rama>`**: Descarga los cambios del repositorio remoto (`origin`) a tu rama local especificada y los fusiona. ¡Mantén tu repositorio local actualizado!
* **`git fetch origin`**: Descarga los cambios del repositorio remoto (`origin`) pero no los fusiona con tu rama local. Puedes ver los cambios con `git log origin/<nombre_de_la_rama>`.

## Deshaciendo Cambios (¡Con Cuidado!)

* **`git restore --staged <archivo>`**: Remueve un archivo de la zona de "stage" (deshace `git add`).
* **`git restore <archivo>`**: Descarta los cambios en el archivo de tu directorio de trabajo y lo devuelve a la última versión guardada (commit).
* **`git commit --amend -m "Nuevo mensaje"`**: Modifica el mensaje del último commit (si no lo has subido aún). También puedes agregar cambios stageados al último commit.
* **`git reset --hard <ID_del_commit>`**: ¡PELIGROSO! Deshace todos los commits después del commit especificado, eliminando los cambios de tu directorio de trabajo y la zona de "stage". **Úsalo con extrema precaución y solo si entiendes lo que estás haciendo.**

## `.gitignore` (Ignorar Archivos)

El archivo `.gitignore` se utiliza para especificar archivos y directorios que Git debe **ignorar** y no rastrear en tu repositorio.

**Sintaxis básica:**

* **`nombre_de_archivo`**: Ignora un archivo específico. Ejemplo: `archivo_temporal.txt`
* **`nombre_de_directorio/`**: Ignora un directorio completo (la barra al final es importante). Ejemplo: `node_modules/`
* **`*.extension`**: Ignora todos los archivos con una extensión específica. Ejemplo: `*.log` (ignora todos los archivos `.log`)
* **`patron*`**: Ignora archivos o directorios que coinciden con el patrón. Ejemplo: `build*` (ignora `build`, `build-1`, `build_output`, etc.)
* **`!nombre_de_archivo`**: Niega una regla anterior. Si un archivo fue ignorado por una regla general, puedes usar `!` para forzar su inclusión. Ejemplo: `!importante.log` (no ignores `importante.log` aunque `.log` esté en la lista).
* **`# comentario`**: Las líneas que comienzan con `#` son comentarios y Git las ignora.

## Ejemplo de archivo `.gitignore`

```gitignore
# Node modules
node_modules/

# Logs
*.log

# Archivos de entorno
.env

# Directorios de build
dist/
build/

# Configs de IDE
.vscode/
.idea/
