import "./style.css";

import MainTitle from "../MainTitle";

function MainHeader() {
    return `
        <header class="main-header">
        ${MainTitle()}
        </header>
    `;
}

export default MainHeader;
