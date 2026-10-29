// Preserve the existing collapse animation without loading a UI framework.
(() => {
  const button = document.querySelector(".navbar-toggler");
  const menu = document.getElementById(button?.getAttribute("aria-controls"));
  if (!button || !menu) return;

  let transitioning = false;
  button.addEventListener("click", () => {
    if (transitioning) return;
    transitioning = true;
    const opening = !menu.classList.contains("show");
    button.classList.toggle("collapsed", !opening);
    button.setAttribute("aria-expanded", String(opening));

    menu.style.height = opening ? "0px" : `${menu.getBoundingClientRect().height}px`;
    void menu.offsetHeight;
    menu.classList.remove("collapse", "show");
    menu.classList.add("collapsing");
    menu.style.height = opening ? `${menu.scrollHeight}px` : "0px";

    let timer;
    const finish = () => {
      clearTimeout(timer);
      menu.removeEventListener("transitionend", onTransitionEnd);
      menu.classList.remove("collapsing");
      menu.classList.add("collapse");
      menu.classList.toggle("show", opening);
      menu.style.height = "";
      transitioning = false;
    };
    const onTransitionEnd = (event) => {
      if (event.target === menu) finish();
    };
    menu.addEventListener("transitionend", onTransitionEnd);
    const duration = parseFloat(getComputedStyle(menu).transitionDuration) * 1000;
    timer = setTimeout(finish, duration + 20);
  });
})();
