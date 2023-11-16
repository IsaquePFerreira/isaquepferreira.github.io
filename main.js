import "./src/styles/generic/reset.css"; 

const $root = document.querySelector("#root");

const tempH1 = document.createElement("h1");

tempH1.textContent = "Trabalho em progresso...";

$root.insertAdjacentElement("beforeend",
    tempH1
);
