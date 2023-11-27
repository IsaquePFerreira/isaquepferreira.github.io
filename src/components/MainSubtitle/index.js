import "./style.css";

function MainSubtitle(text = "Subtitle") {
	return `
        <h2 class="main-subtitle">${text}</h2>
    `;
}

export default MainSubtitle;
