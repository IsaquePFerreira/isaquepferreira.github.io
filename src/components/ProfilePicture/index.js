import "./style.css";

function ProfilePicture(img = "", altImg = "") {
	return `
        <img class="profile-picture" src="${img}" alt="${altImg}">
    `;
}

export default ProfilePicture;
