$(function () {
  $("a.abstract, a.award, a.bibtex").on("click", function () {
    const kind = this.classList.contains("abstract") ? "abstract" : this.classList.contains("award") ? "award" : "bibtex";
    const entry = $(this).closest(".row");
    entry.find(".abstract.hidden, .award.hidden, .bibtex.hidden").each(function () {
      $(this).toggleClass("open", this.classList.contains(kind) && !this.classList.contains("open"));
    });
  });
});
