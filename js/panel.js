function init() {
    document.getElementById("inicio-btn").addEventListener("click", mostrarInicio);
    document.getElementById("ingresos-btn").addEventListener("click", mostrarIngresos);
    document.getElementById("facturas-btn").addEventListener("click", mostrarFacturas);
    document.getElementById("gastos-btn").addEventListener("click", mostrarGastos);
    document.getElementById("contactos-btn").addEventListener("click", mostrarContactos);
    document.getElementById("inventario-btn").addEventListener("click", mostrarInventario);
    document.getElementById("reportes-btn").addEventListener("click", mostrarReportes);
    document.getElementById("configuracion-btn").addEventListener("click", mostrarConfiguracion);
    document.getElementById("guardar-config").addEventListener("click", guardarConfiguracion);
    document.getElementById("volver-inicio").addEventListener("click", mostrarInicio);
    document.getElementById("logout-btn").addEventListener("click", cerrarSesion);

    mostrarInicio();
}

function mostrarInicio() {
    ocultarTodo();
    document.getElementById("contenido-inicio").style.display = "block";
}

function mostrarIngresos() {
    ocultarTodo();
    document.getElementById("contenido-ingresos").style.display = "block";
}

function mostrarFacturas() {
    ocultarTodo();
    document.getElementById("contenido-facturas").style.display = "block";
}

function mostrarGastos() {
    ocultarTodo();
    document.getElementById("contenido-gastos").style.display = "block";
}

function mostrarContactos() {
    ocultarTodo();
    document.getElementById("contenido-contactos").style.display = "block";
}

function mostrarInventario() {
    ocultarTodo();
    document.getElementById("contenido-inventario").style.display = "block";
}


function mostrarReportes() {
    ocultarTodo();
    document.getElementById("contenido-reportes").style.display = "block";
}


function mostrarConfiguracion() {
    ocultarTodo();
    document.getElementById("configuracion").style.display = "block";
}

function ocultarTodo() {
    const secciones = ["contenido-inicio", "contenido-ingresos", "contenido-facturas", "contenido-gastos", "contenido-contactos", "contenido-inventario", "contenido-reportes", "configuracion"];
    secciones.forEach(function (seccion) {
        document.getElementById(seccion).style.display = "none"; 
    });
}

function guardarConfiguracion() {
    alert("Configuración guardada.");
}

function cerrarSesion() {

    window.location.href = "index.html";
}

window.onload = init;
























