import "./style.css";

function MediaButton (link = "", img = "", alt = "") {
	return `
        <a class="media-button" href="${link}" target="_blank">
            <img src="${img}" alt="${alt}">
        </a>
    `;
}

export default MediaButton;
