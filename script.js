function mostrarImagen(src) {
    document.getElementById("imagen-grande").src = src;
    document.getElementById("lightbox").style.display = "flex";
  }
  
  function cerrarImagen() {
    document.getElementById("lightbox").style.display = "none";
  }
  