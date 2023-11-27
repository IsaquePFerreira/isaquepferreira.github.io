import "./style.css";

import MainSection from "../../components/MainSection";
import ProjectCard from "../../components/ProjectCard";
import ProfilePicture from "../../components/ProfilePicture";

import projects from "/projects";

const htmlProjectsList = projects.map((project) =>
    ProjectCard(project.url, project.image, project.altImage, project.title));
const $htmlProjects = htmlProjectsList.join("");

function MainContainer() {
    return `
        <div class="main-container">
            ${MainSection("Projetos", $htmlProjects)}
            ${MainSection("Sobre", ProfilePicture("/images/profile-rounded.png", "Imagem Isaque P. Ferreira programador"))}
        </div>
    `;
}

export default MainContainer;
