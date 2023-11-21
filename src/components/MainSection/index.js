import "./style.css";

import MainSubtitle from "../MainSubtitle";

function MainSection(subtitle = "") {
    return `
        <section class="main-section">
            ${MainSubtitle(subtitle)}
        </section>
    `;
}

export default MainSection;
