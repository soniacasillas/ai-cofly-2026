function initSpaces() {
  const buttons = [...document.querySelectorAll(".space-item")];
  if (!buttons.length) return;
  const select = (target, focus = false) => {
    buttons.forEach(button => button.classList.toggle("is-active", button === target));
    if (focus) target.focus();
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
document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", initSpaces) : initSpaces();
