import "./style.css";

import MainSection from "../../components/MainSection";
import ProjectCard from "../../components/ProjectCard";

import projects from "../../projects";

const htmlProjectsList = projects.map((project) =>
    ProjectCard(project.url, project.image, project.altImage, project.title));
const $htmlProjects = htmlProjectsList.join("");

function MainContainer() {
    return `
        <div class="main-container">
            ${MainSection("Projetos", $htmlProjects)}
            ${MainSection("Sobre")}
        </div>
    `;
}

export default MainContainer;
