import "./style.css";

function ActionOption(url, label) {
    return `
        <a class="action-option" href="${url}">${label}</a>
    `;
}

export default ActionOption;
