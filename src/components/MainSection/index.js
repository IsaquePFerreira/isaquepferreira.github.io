import "./style.css";

import MainSubtitle from "../MainSubtitle";

function MainSection(subtitle = "", content = "Aqui vai o conteúdo...") {
    return `
        <section class="main-section">
            ${MainSubtitle(subtitle)}
            ${content}
        </section>
    `;
}

export default MainSection;
