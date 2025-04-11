export function rotacionIcono(clase_icono) {
  const d = document;

  d.addEventListener("mouseover", (e) => {
    if (e.target.matches && e.target.matches(clase_icono)) {
      e.target.style.color = "goldenrod";
      e.target.style.transform = "rotate(180deg)";
    }
  });

  d.addEventListener("mouseout", (e) => {
    if (e.target.matches && e.target.matches(clase_icono)) {
      e.target.style.color = "";
      e.target.style.transform = "rotate(0deg)";
    }
  });
}
