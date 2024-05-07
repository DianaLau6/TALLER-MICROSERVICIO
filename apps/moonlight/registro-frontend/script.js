document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const message = document.getElementById('message');

    registrationForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(registrationForm);
        const userData = {
            Name: formData.get('Name'),
            Email: formData.get('Email'),
            password: formData.get('password')
        };

        try {
            const response = await fetch('http://localhost:3001/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            const data = await response.json();

            if (response.ok) {
                if (data.user) {
                    message.textContent = `Usuario registrado exitosamente con ID: ${data.user.id}`;
                    registrationForm.reset();
                } else {
                    // Si no hay un objeto 'user', muestra un mensaje de error genérico
                    message.textContent = 'Error: El usuario ya existe o no se pudo registrar.';
                }
            } else {
                if (data.error) {
                    message.textContent = `Error: ${data.error}`;
                } else {
                    message.textContent = 'Error al procesar la solicitud';
                }
            }
        } catch (error) {
            // Manejo de errores de la promesa
            message.textContent = error.message;
        }
    });
});
