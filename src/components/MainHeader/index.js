import "./style.css";

import MainTitle from "../MainTitle";
import ActionOption from "../ActionOption";

function MainHeader() {
    return `
        <header class="main-header">
        ${MainTitle()}
        <nav>
            ${ActionOption("#projects", "Projetos")}
            ${ActionOption("#about", "Sobre")}
            ${ActionOption("#github", "GitHub")}
        </nav>
        </header>
    `;
}

export default MainHeader;
