document.querySelectorAll("button.abstract, button.award, button.bibtex").forEach((button) => {
  button.addEventListener("click", function () {
    const kind = this.classList.contains("abstract") ? "abstract" : this.classList.contains("award") ? "award" : "bibtex";
    const entry = this.closest(".row");
    entry.querySelectorAll(".abstract.hidden, .award.hidden, .bibtex.hidden").forEach((panel) => {
      panel.classList.toggle("open", panel.classList.contains(kind) && !panel.classList.contains("open"));
    });
    entry.querySelectorAll("button[aria-controls]").forEach((control) => {
      const panel = document.getElementById(control.getAttribute("aria-controls"));
      control.setAttribute("aria-expanded", panel?.classList.contains("open") ? "true" : "false");
    });
  });
});
