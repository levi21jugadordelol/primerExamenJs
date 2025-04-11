export function relojDIgital(id_reloj, div_reloj, id_fecha, div_fecha) {
  const d = document;
  const $horaDom = d.getElementById(id_reloj);
  const $divHora = d.querySelector(div_reloj);
  let tiempo;
  let fecha;
  const $fechaDom = d.getElementById(id_fecha);
  const $div_fecha = d.querySelector(div_fecha);

  d.addEventListener("click", (e) => {
    if (e.target.id === id_reloj) {
      $horaDom.style.display = "none";

      const $span = d.createElement("span");
      $span.id = "hora_mostrada";
      $span.style.fontSize = "1.5rem";
      $divHora.appendChild($span);

      tiempo = setInterval(() => {
        const now = new Date();

        const clockHour = now.toLocaleTimeString("es-PE", {
          hour12: true, // ponlo en true si quieres 12h con AM/PM
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        });

        $span.textContent = clockHour;
      }, 1000);
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target.id === id_fecha) {
      $fechaDom.style.display = "none";

      const $span_fecha = d.createElement("span");
      $span_fecha.id = "fecha_mostrada";
      $span_fecha.style.fontSize = "1.5rem";
      $span_fecha.style.padding = "0.5rem";
      $div_fecha.appendChild($span_fecha);

      $span_fecha.textContent = new Date().toLocaleDateString();
    }
  });
}
