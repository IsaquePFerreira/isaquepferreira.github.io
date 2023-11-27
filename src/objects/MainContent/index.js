import "./style.css";

import MainSection from "../../components/MainSection";
import ProjectCard from "../../components/ProjectCard";
import ProfilePicture from "../../components/ProfilePicture";
import MainParagraph from "../../components/MainParagraph";

import projects from "/projects";

const htmlProjectsList = projects.map((project) =>
    ProjectCard(project.url, project.image, project.altImage, project.title));
const $htmlProjects = htmlProjectsList.join("");

const $htmlAbout = ProfilePicture("/images/profile-rounded.png", "Imagem Isaque P. Ferreira programador") + MainParagraph();

function MainContent() {
    return `
        <div class="main-content">
            ${MainSection("Projetos", $htmlProjects)}
            ${MainSection("Sobre", $htmlAbout)}
        </div>
    `;
}

export default MainContent;
