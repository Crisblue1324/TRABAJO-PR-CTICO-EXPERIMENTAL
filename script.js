document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registroForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevenir envío normal del formulario

        const nombre = document.getElementById('nombre').value.trim();
        const correo = document.getElementById('correo').value.trim();
        const contraseña = document.getElementById('contraseña').value;

        let hayErrores = false;

        limpiarErrores();

        // Validar nombre
        if (nombre === '') {
            mostrarError('nombre', 'El nombre es obligatorio');
            hayErrores = true;
        }

        // Validar correo - no vacío y formato correcto
        if (correo === '') {
            mostrarError('correo', 'El correo es obligatorio');
            hayErrores = true;
        } else if (!validarFormatoCorreo(correo)) {
            mostrarError('correo', 'El formato del correo no es válido');
            hayErrores = true;
        }

        // Validar contraseña - mínimo 8 caracteres
        if (contraseña === '') {
            mostrarError('contraseña', 'La contraseña es obligatoria');
            hayErrores = true;
        } else if (contraseña.length < 8) {
            mostrarError('contraseña', 'La contraseña debe tener mínimo 8 caracteres');
            hayErrores = true;
        }

        // Mostrar resultado con alert()
        if (!hayErrores) {
            alert('¡Registro exitoso!\nNombre: ' + nombre + '\nCorreo: ' + correo);
            form.reset(); // Limpiar formulario
        } else {
            alert('Error: Por favor corrige los campos marcados en rojo');
        }
    });
});

// Función para validar formato de correo electrónico
function validarFormatoCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// Función para mostrar errores
function mostrarError(campo, mensaje) {
    const input = document.getElementById(campo);
    const errorDiv = document.getElementById('error' + campo.charAt(0).toUpperCase() + campo.slice(1));

    // Agregar clase de error al input
    input.classList.add('error');

    // Mostrar mensaje de error
    if (errorDiv) {
        errorDiv.textContent = mensaje;
        errorDiv.style.display = 'block';
    }
}

// Función para limpiar todos los errores
function limpiarErrores() {
    // Limpiar clases de error de todos los inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error');
    });

    // Ocultar todos los mensajes de error
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => {
        error.style.display = 'none';
        error.textContent = '';
    });
}