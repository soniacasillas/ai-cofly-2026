function initPathology() {
  const frame = document.querySelector("#pathology-frame");
  const button = document.querySelector("#pathology-toggle");
  if (!frame || !button) return;
  button.addEventListener("click", () => {
    const revealed = frame.classList.toggle("is-revealed");
    button.setAttribute("aria-pressed", String(revealed));
    button.textContent = revealed ? "Ocultar anotación pedagógica" : "Mostrar anotación pedagógica";
  });
  button.addEventListener("keydown", event => event.stopPropagation());
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initPathology) : initPathology();
