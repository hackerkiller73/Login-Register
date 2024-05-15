document.getElementById("btn__registrarse").addEventListener("click", function() {
    var contenedorLoginRegister = document.querySelector(".contenedor__login-register");
    var formularioLogin = document.querySelector(".formulario__login");
    var formularioRegister = document.querySelector(".formulario__register");

    // Mostrar el formulario de registro y ocultar el formulario de inicio de sesión
    formularioRegister.style.display = "block";
    formularioLogin.style.display = "none";

    // Desplazar el contenedor hacia la derecha para mostrar el formulario de registro
    contenedorLoginRegister.style.left = "410px";
});

document.querySelector(".formulario__login").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    // Obtener los valores de correo electrónico y contraseña ingresados por el usuario
    var email = document.getElementById("loginEmail").value;
    var password = document.getElementById("loginPassword").value;

    // Validar las credenciales
    if (email === "barakiller73@gmail.com" && password === "Barakiller73") {
        // Mostrar mensaje de inicio de sesión exitoso
        alert("Inicio de Sesión Exitoso");
    } else {
        // Mostrar mensaje de credenciales incorrectas
        alert("Credenciales Incorrectas");
    }

    // Limpiar los campos de entrada después de enviar el formulario
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
});







