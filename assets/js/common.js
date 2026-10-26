$(function () {
  $("button.abstract, button.award, button.bibtex").on("click", function () {
    const kind = this.classList.contains("abstract") ? "abstract" : this.classList.contains("award") ? "award" : "bibtex";
    const entry = $(this).closest(".row");
    entry.find(".abstract.hidden, .award.hidden, .bibtex.hidden").each(function () {
      $(this).toggleClass("open", this.classList.contains(kind) && !this.classList.contains("open"));
    });
    entry.find("button[aria-controls]").each(function () {
      const panel = document.getElementById(this.getAttribute("aria-controls"));
      this.setAttribute("aria-expanded", panel?.classList.contains("open") ? "true" : "false");
    });
  });
});
