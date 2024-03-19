$(document).ready(function() {
  // Función para mostrar más información al hacer clic en "Ver más"
  $(".card a").click(function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    // Aquí podrías implementar la lógica para mostrar más detalles del curso
    alert("Más información sobre el curso");
  });

  // Función para registrar usuarios al hacer clic en "Registrarse"
  $(".seccion-registro a").click(function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    // Aquí podrías implementar la lógica para redirigir al usuario a la página de registro
    window.location.href = "signup.html";
  });

  // Función para mostrar más información sobre la política de privacidad
  $(".seccion-enlaces a[href='politica-privacidad.html']").click(function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    // Aquí podrías implementar la lógica para mostrar más detalles sobre la política de privacidad
    alert("Política de privacidad");
  });

  // Función para mostrar más información sobre cómo contactar
  $(".seccion-enlaces a[href='contacto.html']").click(function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    // Aquí podrías implementar la lógica para mostrar más detalles sobre cómo contactar
    alert("Información de contacto");
  });

  // Función para redirigir a las redes sociales al hacer clic en los iconos
  $(".seccion-redes-sociales a").click(function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    var url = $(this).attr("href"); // Obtener la URL del enlace
    // Abrir la URL en una nueva pestaña
    window.open(url, "_blank");
  });

  $(document).ready(function() {
    $('#carouselExample').carousel();
  });
  


});

