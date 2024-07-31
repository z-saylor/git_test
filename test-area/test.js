const blurText = document.querySelector(".content");

blurText.textContent = ""

let newText = "Blurry text but it's clear in the middle of it.";
let newTextLength = newText.length;

for (let i=0; i<newTextLength; i++) {
    let newSpan = document.createElement("span");
    newSpan.innerText = newText[i];
    newSpan.setAttribute("style", `filter: blur(${Math.abs(8*(i/newTextLength)-4)}px)`)
    blurText.appendChild(newSpan);
}