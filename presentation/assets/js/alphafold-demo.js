function initFoldDemo() {
  const slider = document.querySelector("#fold-stage");
  const output = document.querySelector("#fold-output");
  const stages = [...document.querySelectorAll(".fold-stage")];
  if (!slider || !output || !stages.length) return;

  const update = () => {
    const current = Number(slider.value);
    stages.forEach(stage => stage.classList.toggle("is-active", Number(stage.dataset.stage) === current));
    output.value = `${current} / 3`;
  };
  slider.addEventListener("input", update);
  slider.addEventListener("keydown", event => event.stopPropagation());
  update();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initFoldDemo) : initFoldDemo();
