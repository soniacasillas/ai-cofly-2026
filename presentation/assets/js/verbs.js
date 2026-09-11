const VERBS = {
  reconocer: ["RECONOCER", "Encontrar configuraciones visuales que se repiten y asociarlas con tejidos o patologías."],
  predecir: ["PREDECIR", "Estimar una estructura o el posible efecto molecular de un cambio en la secuencia."],
  buscar: ["BUSCAR", "Priorizar unos pocos candidatos prometedores entre colecciones enormes."],
  diseñar: ["DISEÑAR", "Proponer proteínas o moléculas nuevas para una función, antes de validarlas."],
  monitorizar: ["MONITORIZAR", "Convertir señales continuas del ambiente en observaciones que podamos revisar."]
};

function initVerbs() {
  const buttons = [...document.querySelectorAll(".verb-button")];
  const title = document.querySelector("#verb-title");
  const copy = document.querySelector("#verb-copy");
  if (!buttons.length || !title || !copy) return;

  const select = (button, focus = false) => {
    buttons.forEach(item => item.setAttribute("aria-selected", String(item === button)));
    const [label, description] = VERBS[button.dataset.verb];
    title.textContent = label;
    copy.textContent = description;
    if (focus) button.focus();
  };

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => select(button));
    button.addEventListener("keydown", event => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      event.stopPropagation();
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % buttons.length;
      if (event.key === "ArrowLeft") next = (index - 1 + buttons.length) % buttons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = buttons.length - 1;
      select(buttons[next], true);
    });
  });
}

document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initVerbs) : initVerbs();
