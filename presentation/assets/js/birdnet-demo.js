function initBirdNet() {
  const figure = document.querySelector("#spectrogram");
  const button = document.querySelector("#birdnet-toggle");
  const label = document.querySelector("#sound-species");
  if (!figure || !button || !label) return;
  button.addEventListener("click", () => {
    const revealed = figure.classList.toggle("is-revealed");
    button.setAttribute("aria-pressed", String(revealed));
    button.textContent = revealed ? "Ocultar patrón acústico" : "Resaltar patrón acústico";
    label.textContent = revealed ? "Patrón candidato: requiere revisión" : "Posibles especies: se necesita verificación";
  });
  button.addEventListener("keydown", event => event.stopPropagation());
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initBirdNet) : initBirdNet();
