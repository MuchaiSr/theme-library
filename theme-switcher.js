const themeSelect = document.querySelector("#theme-select");
const themeLink = document.querySelector("#theme-link");

themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    themeLink.href = `./styles/themes/${selectedTheme}.css`;
    localStorage.setItem("selectedTheme", selectedTheme);
});

const savedTheme = localStorage.getItem("selectedTheme");
if (savedTheme) {
    themeLink.href = `./styles/themes/${savedTheme}.css`;
    themeSelect.value = savedTheme; 
}