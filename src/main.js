import "/styles/settings/fonts.css";
import "/styles/settings/colors.css";
import "/styles/generic/reset.css"; 
import "/styles/elements/base.css";

import MainHeader from "/components/MainHeader";
import MainContent from "/objects/MainContent";
import MainFooter from "/components/MainFooter";

const $root = document.querySelector("#root");

$root.insertAdjacentHTML("beforeend",
	`
    ${MainHeader()}
    ${MainContent()}
    ${MainFooter()}
    `
);
