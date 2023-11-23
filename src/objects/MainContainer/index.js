import MainSection from "../../components/MainSection";
import ProjectCard from "../../components/ProjectCard";

import projects from "../../projects";

const htmlProjectsList = projects.map((project) =>
    ProjectCard(project.url, project.image, project.altImage, project.title));
const $htmlProjects = htmlProjectsList.join("");

function BodyContent() {
    return `
        ${MainSection("Projetos", $htmlProjects)}
        ${MainSection("Sobre")}
    `;
}

export default BodyContent;
