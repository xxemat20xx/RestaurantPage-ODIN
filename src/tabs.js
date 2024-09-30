
import img from './img/inarawan-logo.png'
const tabManager = () => {
    // test
    const div = document.createElement("div");
    const content = document.querySelector("#content");
    div.classList.add("btn");

    content.innerHTML = `
                        <div class="nav-content">
                            <div class="nav-logo">
                            <img src="${img}" alt="" class="imgs" id="nav-logo_img">
                            </div>
                                
                                <button class="btn" id="btn-Home">Home</button>
                                <button class="btn" id="btn-menu">Menu</button>
                                <button class="btn" id="btn-about">About</button>
                       
                        </div>
    `;
    content.appendChild(div);
    // HOME
    const homeBtn = document.querySelector("#btn-Home");
    homeBtn.addEventListener("click", () => {
        const about = document.querySelector("#about");
        const menulist = document.querySelector("#menulist");
        const homepage = document.querySelector("#homepage");
        const footer = document.querySelector("#footer");
        homepage.style.display = "block";
        menulist.style.display = "block";
        footer.style.display = "block";
        about.style.display = "none";

    });
    // menu
    const btnMenu = document.querySelector("#btn-menu");
    btnMenu.addEventListener("click", () => {
        const about = document.querySelector("#about");
        const menulist = document.querySelector("#menulist");
        const homepage = document.querySelector("#homepage");
        const imgGallery = document.querySelector("#imgGallery-container");
        const footer = document.querySelector("#footer");

        menulist.style.display = "block";
        about.style.display = "none";
        homepage.style.display = "none";
        imgGallery.style.display = "none";
        footer.style.display = "none";
    });
    // about
    const btnAbout = document.querySelector("#btn-about");
    btnAbout.addEventListener("click", () => {
        const about = document.querySelector("#about");
        const menulist = document.querySelector("#menulist");
        const homepage = document.querySelector("#homepage");
        const footer = document.querySelector("#footer");
        const imgGallery = document.querySelector("#imgGallery-container");
        about.style.display = "block";
        menulist.style.display = "none";
        homepage.style.display = "none";
        footer.style.display = "none";
        imgGallery.style.display = "none";
    })

};

export default tabManager;
