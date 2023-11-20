import "./style.css";

function ProjectCard(url = "#", img = "", alt = "", title = "") {
    return `
        <figure class="project-card">
            <a href="${url}">
            <img class="image" src="${img}" alt="${alt}">
            <figcaption class="title">${title}</figcaption>
            <\a>
        </figure>
    `;
}

export default ProjectCard;
