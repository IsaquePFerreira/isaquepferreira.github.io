import "./style.css";

import MainTitle from "../MainTitle";
import ActionOption from "../ActionOption";
import DropdownMenu from "../DropdownMenu";

function MainHeader() {
	return `
        <header class="main-header">
        ${MainTitle()}
        <nav>
            ${ActionOption("#projects", "Projetos")}
            ${ActionOption("#about", "Sobre")}
            ${ActionOption("#github", "GitHub")}
            ${DropdownMenu()}
        </nav>
        </header>
    `;
}

export default MainHeader;
