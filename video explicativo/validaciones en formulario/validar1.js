// todo se ejecuta cuando el DOM se carga completamente
document.addEventListener('DOMContentLoaded', () => {
    // selecciona el formulario del dom
    const formulario = document.querySelector('form');
    // --------------------------------------------------------------------
    // funcion mostrarError:
    // recibe un elemento e introduce el mensaje de error
    // const input = document.querySelector('#password')
    // const mensaje = "campo obligatorio"

    const mostrarError = (input, mensaje) => {
        // accedemos al div padre
        const divPadre = input.parentNode;
        // console.log(divPadre);
        // encuentra el elemento error-text
        const errorText = divPadre.querySelector('.error-text');
        // console.log(errorText)
        // agrega la clase de error al elemento padre
        divPadre.classList.add('error');
        // agrega mensaje de error
        errorText.innerText = mensaje;

    };
    // mostrarError(input, mensaje)

    // --------------------------------------------------------------
    //funcion eliminar mensaje de error (probar por consola)
    const eliminarError = input => {
        // encontrar el elemento padre del campo
        const divPadre = input.parentNode;
        //eliminar la clase de error del elemento padre
        divPadre.classList.remove('error');
        // encuentra el elemento error-text
        const errorText = divPadre.querySelector('.error-text');
        //establecemos el texto como vacio
        errorText.innerText = '';

    };

    // ---------------------------------------------------------------------
    //funcion para corroborar si los campos estan completos para quitar error
    formulario.querySelectorAll('input').forEach(input => {
        // se activa cuando el valor de un elemento del formulario cambia y se sale del elemento 
        input.addEventListener('change', () => {
            // obtenemos el valor del campo seleccionado
            const valor = input.value.trim();//elimina cualquier espacio en blanco al principio y al final del valor obtenido.
            // condicion para evaluar
            if (valor !== '') {
                eliminarError(input);
            }
        })
    })

    // -----------------------------------------------------------------------------
    // funcion validar campo(lo mismo que harcodeo de "mostrarError")

    function validarCampo(campoId, mensaje) {
        // console.log(typeof campoId);
        const campo = document.getElementById(campoId);
        // console.log(campo);
        const value = campo.value.trim();

        if (value == '') {
            mostrarError(campo, mensaje);
            return false;//indicamos que la validacion fallo
        } else {
            eliminarError(campo)
            return true;//indicamos que la validacion ha sido exitosa
        }
    }
    // validarCampo('password',mensaje)

    // Función para validar un correo electrónico utilizando una expresión regular
    function isEmail(email) {
        const expresionRegular = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return expresionRegular.test(email);//devuelve true si la cadena coincide con el patrón de la expresión regular
    }

    // funcion para validar el campo de email
    function validarEmail(campoId, mensaje) {
        // obtenemos elemento mediante id
        const campo = document.getElementById(campoId);
        const email = campo.value.trim();
        // si el campo esta vacio
        if (email === '') {
            //establecemos mensaje de error
            mostrarError(campo, 'el correo electronico es obligatorio');
            // indicamos que la validacion ha fallado
            return false
        } else if (!isEmail(email)) {
            //establecemos mensaje de error 
            mostrarError(campo, mensaje);
            // indicamos que la validacion ha fallado
            return false
        }else{
            // si es valido eliminamos cualquier error
            eliminarError(campo);
            // indicamos que la validacion es exitosa
            return true
        }
    }

    // --------------------------------------------------------------------------------
    // funcion para validar el formulario
    const validarFormulario = () => {
        let validar = true;

        // validar campo email
        validar = validarEmail('email', 'el correo electronico no es valido') && validar;
        // validar contraseña
        validar = validarCampo('password', 'la contraseña es obligatoria') && validar;

        return validar;

    }

    // -------------------------------------------------------------------------------------
    // agregar un evento de escucha para cuando se envia el formulario
    formulario.addEventListener('submit', event => {
        event.preventDefault();
        if (!validarFormulario()) {
            // mensaje no valido
            event.preventDefault()//evita que el formulario se envie
            console.log("El formulario no es valido");
        } else {
            event.preventDefault();
            console.log("El formulario es valido...");
        }
    })
})


