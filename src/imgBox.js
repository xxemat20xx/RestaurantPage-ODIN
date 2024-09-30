import imgGal1 from "./img/img-gal1.jpg"
import imgGal2 from "./img/img-gal2.jpg"
import imgGal3 from "./img/img-gal3.jpg"
import imgGal4 from "./img/img-gal4.jpg"
import imgGal5 from "./img/img-gal5.jpg"
import imgGal6 from "./img/inarawan-pic.jpg"
const imgGalSrc = [imgGal1, imgGal2, imgGal3, imgGal4, imgGal5, imgGal6];
const imgBox = () => {
    const content = document.querySelector("#content");
    const imgGalleryCon = document.createElement("div");

    imgGalleryCon.setAttribute("id", "imgGallery-container");
    imgGalleryCon.innerHTML =
        `
    <!-- -IMAGE GALLERY -->
                    <div class="imgGallery-cards">
                            <div class="imgGal-card1">
                                <img src="${imgGalSrc[0]}" class="imgGallery">
                            </div>
                            <div class="imgGal-card2">
                                <img src="${imgGalSrc[1]}" class="imgGallery">
                            </div>

                             <div class="imgGal-card3">
                                <img src="${imgGalSrc[2]}" class="imgGallery">
                            </div>
                            <div class="imgGal-card4">
                                <img src="${imgGalSrc[4]}" class="imgGallery">
                            </div>
                           <div class="imgGal-card5">
                                <img src="${imgGalSrc[5]}" class="imgGallery">
                            </div>
                         
                    </div>
    `;
    content.append(imgGalleryCon);
};
export default imgBox;