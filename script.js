const number = document.getElementById("number");
const color = document.getElementById("color");
const select = document.getElementById("fonts");
const textarea = document.getElementById("area");


const savedFontSize = localStorage.getItem("fontSize");
const savedColor = localStorage.getItem("color");
const savedFontFamily = localStorage.getItem("fontFamily");
const savedText = localStorage.getItem("text");


if (savedFontSize) {
    textarea.style.fontSize = savedFontSize;
    number.value = parseInt(savedFontSize, 10);
}
if (savedColor) {
    textarea.style.color = sa   vedColor;
    color.value = savedColor;
}
if (savedFontFamily) {
    select.value = savedFontFamily;
}
if (savedText) {
    textarea.value = savedText;
}


number.addEventListener("input", () => {
    const fontSize = number.value + 'px';
    textarea.style.fontSize = fontSize;
    localStorage.setItem("fontSize", fontSize);
});


color.addEventListener("input", () => {
    const textColor = color.value;
    textarea.style.color = textColor;
    localStorage.setItem("color", textColor);
});

select.addEventListener("change", () => {
    const fontFamily = select.value;
    textarea.style.fontFamily = fontFamily;
    localStorage.setItem("fontFamily", fontFamily);
});

textarea.addEventListener("input", () => {
    localStorage.setItem("text", textarea.value);
});