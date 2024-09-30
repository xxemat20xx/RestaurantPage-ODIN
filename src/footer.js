import logo from "./img/inarawan-logo.png"
const footer = () => {

    const footer = document.createElement("div");
    footer.setAttribute("id", "footer");
    footer.innerHTML = `
    <div class="footer-content">
            <div class="footer-firstRow">
                <img src="${logo}" alt="...">
                <p>Lorem</p>
                <span>© Inarawan Coffee</span>
            </div>
            <div class="footer-secondRow">
                <a href="#">Menu</a>
                <a href="#">Contact</a>
                <a href="#">Blog</a>
                <a href="#">Events</a>
            </div>
            <div class="footer-thirdRow">
                <h3><span>Branches</span></h3>
                <p>Marikina</p>
                <p>Infanta Highway</p>
                <p>Antipolo City</p>
            </div>

             <div class="footer-fourtRow">
                <h3><span>Opening Hours</span></h3>
                <p>Monday - Friday: 10AM - 10PM</p>
                <p>Saturday - Sunday: 8AM - 10PM</p>
            </div>
        </div>
`;
    document.body.append(footer);

}
export default footer;