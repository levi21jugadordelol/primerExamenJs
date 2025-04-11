export function carruseImagenes(nombre_imagen, div_carrusel) {
  const d = document;
  const $imagenes = d.querySelectorAll(`${div_carrusel} ${nombre_imagen}`);
  const total = $imagenes.length;
  let startIndex = 0;

  function mostrarImagenes() {
    $imagenes.forEach((img, index) => {
      if (index >= startIndex && index < startIndex + 3) {
        img.style.display = "block";
      } else {
        img.style.display = "none";
      }
    });
    startIndex = (startIndex + 1) % total;

    if (startIndex > total - 3) {
      startIndex = 0;
    }
  }

  mostrarImagenes();
  setInterval(mostrarImagenes, 2000);
}
