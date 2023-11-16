import "./src/styles/settings/fonts.css";
import "./src/styles/settings/colors.css";
import "./src/styles/generic/reset.css"; 
import "./src/styles/elements/base.css";

const $root = document.querySelector("#root");

const tempH1 = document.createElement("h1");

tempH1.textContent = "Trabalho em progresso...";

$root.insertAdjacentElement("beforeend",
    tempH1
);
