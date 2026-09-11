function initHalicin() {
  const slider = document.querySelector("#threshold");
  const output = document.querySelector("#candidate-count");
  const points = [...document.querySelectorAll(".candidate")];
  if (!slider || !output || !points.length) return;

  const update = () => {
    const threshold = Number(slider.value);
    let visible = 0;
    points.forEach(point => {
      const selected = Number(point.dataset.score) >= threshold;
      point.classList.toggle("selected", selected);
      point.classList.toggle("filtered", !selected);
      if (selected) visible += 1;
    });
    output.value = `${visible} ${visible === 1 ? "candidato visible" : "candidatos visibles"}`;
  };
  slider.addEventListener("input", update);
  slider.addEventListener("keydown", event => event.stopPropagation());
  update();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initHalicin) : initHalicin();
