import "./styles/settings/fonts.css";
import "./styles/settings/colors.css";
import "./styles/generic/reset.css"; 
import "./styles/elements/base.css";

import MainHeader from "./components/MainHeader";
import MainContainer from "./objects/MainContainer";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend",
    `
    ${MainHeader()}
    ${MainContainer()}
    `
);
