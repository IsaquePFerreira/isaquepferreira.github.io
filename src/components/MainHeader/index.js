import "./style.css";

import MainTitle from "../MainTitle";
import ActionOption from "../ActionOption";

function MainHeader() {
    return `
        <header class="main-header">
        ${MainTitle()}
        ${ActionOption("#projects", "Projetos")}
        ${ActionOption("#about", "Sobre")}
        ${ActionOption("#github", "GitHub")}
        </header>
    `;
}

export default MainHeader;
