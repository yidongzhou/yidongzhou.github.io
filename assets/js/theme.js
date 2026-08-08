// Small, dependency-free light/dark/system theme switcher.
const determineThemeSetting = () => {
  const stored = localStorage.getItem("theme");
  return ["light", "dark", "system"].includes(stored) ? stored : "system";
};

const determineComputedTheme = () => {
  const setting = determineThemeSetting();
  if (setting !== "system") return setting;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const applyTheme = () => {
  const theme = determineComputedTheme();
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themeSetting = determineThemeSetting();

  const lightCode = document.getElementById("highlight_theme_light");
  const darkCode = document.getElementById("highlight_theme_dark");
  if (lightCode && darkCode) {
    lightCode.media = theme === "dark" ? "none" : "all";
    darkCode.media = theme === "dark" ? "all" : "none";
  }
};

const cycleTheme = () => {
  const current = determineThemeSetting();
  const next = current === "system" ? "light" : current === "light" ? "dark" : "system";
  localStorage.setItem("theme", next);
  applyTheme();
};

const initTheme = () => {
  applyTheme();
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("light-toggle")?.addEventListener("click", cycleTheme);
  });
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", applyTheme);
};
