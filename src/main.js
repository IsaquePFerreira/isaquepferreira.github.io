import "./styles/settings/fonts.css";
import "./styles/settings/colors.css";
import "./styles/generic/reset.css"; 
import "./styles/elements/base.css";

const $root = document.querySelector("#root");

const tempH1 = document.createElement("h1");

tempH1.textContent = "Trabalho em progresso...";

$root.insertAdjacentElement("beforeend",
    tempH1
);
