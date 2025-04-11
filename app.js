import { cambiandoColor } from "./dom/colorTitulo.js";
import { carruseImagenes } from "./dom/carruselImagenes.js";
import { relojDIgital } from "./dom/relojDigital.js";
import { leyendaImagen } from "./dom/leyendaImagenes.js";
import { rotacionIcono } from "./dom/icono.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  cambiandoColor(".titulo_principal");
  carruseImagenes(".imagen", ".container_carrusel");
  relojDIgital("hora", ".cabezera_hora", "fecha", ".cabezera_fecha");
  leyendaImagen(".container_carrusel", ".imagen");
  rotacionIcono(".iconoRed");
});
