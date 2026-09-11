const VARIANTS = [
  { base: "A", expression: 58, splicing: 36, chromatin: 72 },
  { base: "C", expression: 82, splicing: 49, chromatin: 41 },
  { base: "G", expression: 31, splicing: 77, chromatin: 63 }
];

function initAlphaGenome() {
  const slider = document.querySelector("#variant-slider");
  const base = document.querySelector("#variant-base");
  const sequence = document.querySelector("#dna-sequence");
  if (!slider || !base || !sequence) return;

  const update = () => {
    const variant = VARIANTS[Number(slider.value)];
    base.textContent = variant.base;
    sequence.innerHTML = `ACTGACCTGA<span class="base-change">${variant.base}</span>GTCAGTCCGATGCTA`;
    ["expression", "splicing", "chromatin"].forEach(key => {
      document.querySelector(`[data-track="${key}"]`).style.width = `${variant[key]}%`;
      document.querySelector(`[data-value="${key}"]`).textContent = variant[key];
    });
  };
  slider.addEventListener("input", update);
  slider.addEventListener("keydown", event => event.stopPropagation());
  update();
}
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initAlphaGenome) : initAlphaGenome();
