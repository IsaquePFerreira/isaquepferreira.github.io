import "./style.css";

import MainSubtitle from "../MainSubtitle";
import WrapperItems from "../WrapperItems";

function MainSection(subtitle = "", content = "Aqui vai o conteúdo...") {
    return `
        <section class="main-section">
            ${MainSubtitle(subtitle)}
            ${WrapperItems(content)}
        </section>
    `;
}

export default MainSection;
