(function() {
    emailjs.init("aJyTCmLApGXlxY3NO");
})();

function handleRegister(event) {
    event.preventDefault();

    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (!email) {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
        return;
    }

    console.log('Correo electrónico capturado:', email);

    const templateParams = {
        to_name: name,
        to_email: email,
        message: `
            Estimado(a) ${name},

            Nos complace confirmar que tu registro en nuestra plataforma ha sido exitoso. A partir de este momento, cuentas con acceso a todas las herramientas y servicios que CONTASOFT ofrece para optimizar la gestión de tu empresa.

            **Datos del Registro:**
            - Correo Electrónico: ${email}
            - Contraseña: ${password}

            Te recomendamos mantener esta información segura. En caso de que olvides tu contraseña, siempre podrás restablecerla desde nuestra página.

            Si tienes alguna consulta o necesitas asistencia adicional, no dudes en contactarnos a través de nuestros canales de soporte. Estamos a tu disposición para ayudarte a maximizar el uso de nuestra plataforma.

            Atentamente,
            El equipo de CONTASOFT
            www.contasoft.com

            Este correo fue enviado automáticamente. Por favor, no respondas a este mensaje.
        `
    };

    emailjs.send('service_ki14uwk', 'template_q72c6on', templateParams)
        .then((response) => {
            console.log('Correo enviado exitosamente!', response.status, response.text);
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            toggleForms();
        })
        .catch((error) => {
            console.error('Error al enviar el correo: ', error);
            alert('Hubo un error al enviar el correo. Intenta nuevamente.');
        });
}

function handleLogin(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    console.log("Inicio de sesión: ", { email, password });
    alert('Inicio de sesión exitoso. Redirigiendo al panel...');
    window.location.href = "panel.html";
}

function toggleForms() {
    const formContainer = document.getElementById('form-container');
    const switchContainer = document.querySelector('.switch-container');

    // Aplicamos la animación
    formContainer.style.opacity = '0'; 
    formContainer.style.transform = 'translateX(100px)';
    switchContainer.style.opacity = '0';
    switchContainer.style.transform = 'translateX(-100px)';

    setTimeout(() => {
        if (formContainer.innerHTML.includes("Iniciar Sesión")) {
            formContainer.innerHTML = `
                <h2>Crear Cuenta</h2>
                <form id="register-form">
                    <div class="input-group">
                        <label for="register-name">Nombre Completo</label>
                        <input type="text" id="register-name" required>
                    </div>
                    <div class="input-group">
                        <label for="register-email">Correo Electrónico</label>
                        <input type="email" id="register-email" required>
                    </div>
                    <div class="input-group">
                        <label for="register-password">Contraseña</label>
                        <input type="password" id="register-password" required>
                    </div>
                    <button type="submit">Registrarse</button>
                </form>
            `;

            const registerForm = document.getElementById('register-form');
            registerForm.addEventListener('submit', handleRegister);

            switchContainer.innerHTML = `
                <h2>¿Ya tienes una cuenta?</h2>
                <p>Inicia sesión para acceder a tu cuenta.</p>
                <button class="switch-btn" onclick="toggleForms()">Iniciar Sesión</button>
            `;
        } else {
            formContainer.innerHTML = `
                <h2>Iniciar Sesión</h2>
                <form id="login-form">
                    <div class="input-group">
                        <label for="login-email">Correo Electrónico</label>
                        <input type="email" id="login-email" required>
                    </div>
                    <div class="input-group">
                        <label for="login-password">Contraseña</label>
                        <input type="password" id="login-password" required>
                    </div>
                    <button type="submit">Iniciar Sesión</button>
                </form>
            `;

            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', handleLogin);

            switchContainer.innerHTML = `
                <h2>¿Nuevo por aquí?</h2>
                <p>Regístrate y descubre todas las funcionalidades que tenemos para ti.</p>
                <button class="switch-btn" onclick="toggleForms()">Crear Cuenta</button>
            `;
        }

        // Restauramos la visibilidad después de la animación
        formContainer.style.opacity = '1';
        formContainer.style.transform = 'translateX(0)';
        switchContainer.style.opacity = '1';
        switchContainer.style.transform = 'translateX(0)';
    }, 500);
}















