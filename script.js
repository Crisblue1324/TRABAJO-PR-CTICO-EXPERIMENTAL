document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contraseña = document.getElementById('contraseña').value;

    if (nombre === '') {
        alert('El nombre es obligatorio');
        return;
    }

    if (correo === '') {
        alert('El correo es obligatorio');
        return;
    }

    if (!correo.includes('@') || !correo.includes('.')) {
        alert('El formato del correo no es válido');
        return;
    }

    if (contraseña.length < 8) {
        alert('La contraseña debe tener mínimo 8 caracteres');
        return;
    }

    alert('¡Registro exitoso!');
    this.reset();
});