const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const redP = document.createElement("p");
redP.textContent = "Hey I'm red!";
redP.setAttribute("style", "color: red;");

const blueH = document.createElement("h3");
blueH.textContent = "I'm a blue h3!";
blueH.setAttribute("style", "color: blue;");

const boxBoi = document.createElement("div");
boxBoi.setAttribute("style","border:black; background-color:pink;");

container.appendChild(content);
container.appendChild(redP);
container.appendChild(blueH);


const h1Boi = document.createElement("h1");
h1Boi.textContent = "I'm in a div";
const pBoi = document.createElement("p");
pBoi.textContent = "ME TOO!";

boxBoi.appendChild(h1Boi);
boxBoi.appendChild(pBoi);
container.appendChild(boxBoi);


const btn = document.querySelector("#btn");
btn.addEventListener("dblclick", () => {
  alert("Herdy Gerdy");
});