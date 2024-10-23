import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBIPc8UCPuoZAZWfrCR_hsAbTatU89429Y",
    authDomain: "contasoft-ac566.firebaseapp.com",
    projectId: "contasoft-ac566",
    storageBucket: "contasoft-ac566.appspot.com",
    messagingSenderId: "481934926943",
    appId: "1:481934926943:web:21aeb910dc5ab402e0e7ea",
    measurementId: "G-BLDNDQ6PLK"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


window.toggleForms = function() {
    const formContainer = document.getElementById('form-container');
    const switchContainer = document.querySelector('.switch-container');


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


        formContainer.style.opacity = '1';
        formContainer.style.transform = 'translateX(0)';
        switchContainer.style.opacity = '1';
        switchContainer.style.transform = 'translateX(0)';
    }, 500);
}


window.handleRegister = async function(event) {
    event.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        alert(`Usuario registrado: ${userCredential.user.email}`);
        

        window.location.href = "panel.html";

    } catch (error) {
        console.error("Error al registrar: ", error);
        alert(error.message);
    }
}


window.handleLogin = async function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        

        window.location.href = "panel.html";

    } catch (error) {
        console.error("Error al iniciar sesión: ", error);
        alert(error.message);
    }
}


auth.onAuthStateChanged(user => {
    if (user) {

    }
});

document.addEventListener('DOMContentLoaded', () => {
    const formContainer = document.getElementById('form-container');
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
});






























