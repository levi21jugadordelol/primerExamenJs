export function cambiandoColor(tituloSelector) {
  const d = document;
  const titulo = d.querySelector(tituloSelector);

  function coloresTitulo() {
    const r = Math.floor(Math.random() * 156);
    const g = Math.floor(Math.random() * 156);
    const b = Math.floor(Math.random() * 156);

    return `rgb(${r}, ${g}, ${b})`;
  }

  setInterval(() => {
    const color = coloresTitulo();

    titulo.style.color = color;
  }, 1000);
}
