document.addEventListener('DOMContentLoaded', function () {
    const formularioContacto = document.getElementById('formularioContacto');
    const tuNombre = document.getElementById('tuNombre');
    const tuCorreo = document.getElementById('tuCorreo');
    const asunto = document.getElementById('asunto');
    const tuMensaje = document.getElementById('tuMensaje');

    // Función para manejar la visibilidad y el texto de error
    const mostrarEstadoCampo = (elementoInput, esValido, mensaje = '') => {
        const divPadre = elementoInput.parentNode;
        const textoError = divPadre.querySelector('.texto-error');

        if (esValido) {
            divPadre.classList.remove('error');
            textoError.innerText = '';
        } else {
            divPadre.classList.add('error');
            textoError.innerText = mensaje;
        }
    };

    // mostrarEstadoCampo(asunto,false,'mensaje a agregar')


    // Función para validar el formato de correo electrónico
    const esCorreoValido = (correo) => {
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };
    // console.log(esCorreoValido('miguel@miguel.com'))

    // Función para validar un campo individual
    const validarCampo = (campo, mensajeVacio, mensajeInvalido = '') => {
        const valor = campo.value.trim();
        if (valor === '') {
            mostrarEstadoCampo(campo, false, mensajeVacio);
            return false;
        } else if (campo.id === 'tuCorreo' && !esCorreoValido(valor)) {
            mostrarEstadoCampo(campo, false, mensajeInvalido);
            return false;
        } else {
            mostrarEstadoCampo(campo, true);
            return true;
        }
    };
    // validarCampo(tuNombre, 'Por favor, ingresa tu nombre.')

    // Agrega el evento 'change' a tuCorreo
    tuCorreo.addEventListener('change', () => {
        validarCampo(tuCorreo, 'El correo electrónico es obligatorio', 'Ingresa un correo electrónico válido.');
    });

   
    // agrega el evento 'change' a todos los campos
    [tuNombre, tuCorreo, asunto, tuMensaje].forEach(campo => {
        campo.addEventListener('change', () => {
            if (campo.id === 'tuCorreo') {
                validarCampo(tuCorreo, 'El correo electrónico es obligatorio', 'Ingresa un correo electrónico válido.');
            } else if (campo.id === 'tuNombre') {
                validarCampo(tuNombre, 'Por favor, ingresa tu nombre.');
            } else if (campo.id === 'asunto') {
                validarCampo(asunto, 'Por favor, ingresa un asunto.');
            } else if (campo.id === 'tuMensaje') {
                validarCampo(tuMensaje, 'Por favor, ingresa tu mensaje.');
            }
        });

    });



    // Escuchador de evento 'submit' del formulario
    formularioContacto.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Evita el envío del formulario por defecto

        // Define los campos que necesitas validar en un array
        const camposAValidar = [
            { elemento: tuNombre, mensajeVacio: 'Por favor, ingresa tu nombre.' },
            { elemento: tuCorreo, mensajeVacio: 'El correo electrónico es obligatorio', mensajeInvalido: 'Ingresa un correo electrónico válido.' },
            { elemento: asunto, mensajeVacio: 'Por favor, ingresa un asunto.' },
            { elemento: tuMensaje, mensajeVacio: 'Por favor, ingresa tu mensaje.' }
        ];

        let formularioEsValido = true; // Asumimos que es válido al principio

        // Itera sobre cada campo y ejecuta la validación
        // Si 'validarCampo' retorna false, significa que hay un error y actualizamos formularioEsValido
        camposAValidar.forEach(campoInfo => {
            // La función validarCampo se encarga de mostrar/ocultar el error.
            // Si esCampoValido es falso, significa que hubo un error en ese campo.
            const esCampoValido = validarCampo(campoInfo.elemento, campoInfo.mensajeVacio, campoInfo.mensajeInvalido);
            if (!esCampoValido) {
                formularioEsValido = false; // Marcamos el formulario como inválido si al menos un campo falla
            }
        });

        if (formularioEsValido) {
            console.log('¡Formulario enviado con éxito!');
            // Aquí puedes añadir la lógica para enviar el formulario (por ejemplo, con fetch API)
            formularioContacto.reset(); // Resetea el formulario
        } else {
            console.log('El formulario no es válido. Por favor, revisa los campos.');
        }
    });

});