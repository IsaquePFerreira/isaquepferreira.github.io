import "./style.css";

import MainTitle from "../MainTitle";
import ActionOption from "../ActionOption";
import MediaButton from "/components/MediaButton";

function MainHeader() {
	return `
        <header class="main-header">
        ${MainTitle()}
        <nav>
            ${ActionOption("#projects", "Projetos")}
            ${ActionOption("#skills", "Skills")}
            ${ActionOption("#about", "Sobre")}
            ${MediaButton("https://github.com/IsaquePFerreira", "/images/github.svg", "Veja meu GitHub com meus projetos")}
            ${MediaButton("mailto:pferreiraisaque4@gmail.com", "/images/mail.svg", "Mande um email")}
            ${MediaButton("https://instagram.com/isaquepferreira/", "/images/instagram.svg", "Me segue no Instagram")}
        </nav>
        </header>
    `;
}

export default MainHeader;
