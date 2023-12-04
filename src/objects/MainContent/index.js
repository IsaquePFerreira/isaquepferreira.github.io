import "./style.css";

import MainSection from "/components/MainSection";
import ProfilePicture from "/components/ProfilePicture";
import MainParagraph from "/components/MainParagraph";

const $htmlAbout = ProfilePicture("/images/profile-rounded.png", "Imagem Isaque P. Ferreira programador") 
    + MainParagraph("Sou um aspirante a programador e busco me tornar um profissional melhor a cada dia. Meu primeiro contato com tecnologia foi com os jogos, e as poucos fui conhecendo mais sobre a área de informática, tive a oportunidade de fazer meu ensino médio junto com um curso técnico em informática, onde dei meus primeiros passos e onde vi que era a área em queria trabalhar.");

function MainContent() {
	return `
        <div class="main-content">
            ${MainSection("Sobre", $htmlAbout)}
        </div>
    `;
}

export default MainContent;
