import "./style.css";

function DropdownMenu() {
    return `
        <div class="dropdown-menu">
            <a href="#contactics" class="button">Contatos</a>
            <div class="content">
                <a class="link" href="#email">Email</a>
                <a class="link" href="#instagram">Instagram</a>
            </div>
        </div>
    `;
}

export default DropdownMenu;
