export function leyendaImagen(carrusel_dom, caja_imagen) {
  const d = document;
  const $carrusel = d.querySelector(carrusel_dom);
  const $listaCajas = d.querySelectorAll(`${carrusel_dom} ${caja_imagen}`);

  console.log("Carrusel seleccionado:", $carrusel);
  console.log("Lista de cajas de imagen:", $listaCajas);

  $listaCajas.forEach((img, index) => {
    const $leyenda = d.createElement("div");
    $leyenda.id = `leyenda_${index}`;
    $leyenda.textContent = `Leyenda de la imagen ${index + 1}`;
    $leyenda.classList.add("leyenda");
    img.style.position = "relative";
    img.appendChild($leyenda);

    console.log(`Leyenda añadida a la imagen ${index + 1}:`, $leyenda);
  });

  $carrusel.addEventListener("click", (e) => {
    console.log("Evento de clic activado.");
    if (e.target && e.target.tagName === "IMG") {
      const $imagenSeleccionada = e.target;
      const index = Array.from($listaCajas).indexOf(
        $imagenSeleccionada.parentElement
      );
      console.log("Índice de la imagen seleccionada:", index);
      const $leyendaImagen = d.getElementById(`leyenda_${index}`);
      console.log("Leyenda seleccionada:", $leyendaImagen);

      if ($leyendaImagen) {
        $leyendaImagen.classList.remove("hidden");
        $leyendaImagen.style.display = "block";
        $leyendaImagen.style.backgroundColor =
          $leyendaImagen.style.backgroundColor === "red"
            ? "rgba(0, 0, 0, 0.6)"
            : "red";
        $leyendaImagen.style.zIndex = "10";
        console.log("Leyenda de color:", $leyendaImagen.style.backgroundColor);

        setTimeout(() => {
          $leyendaImagen.style.display = "none";
        }, 10000);
      } else {
        console.warn(`No se encontró la leyenda con ID: leyenda_${index}`);
      }
    }
  });
}
