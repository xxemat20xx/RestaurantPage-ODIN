
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// pastries
import fScroll from "./img/fscroll-img.jpg";
import pastryOne from "./img/pastry1.png";
import pastryTwo from "./img/pastry2.png";
import pastryThree from "./img/pastry3.png";
// coffee
import coffee1 from "./img/1.png"
import coffee2 from "./img/2.png"
import coffee3 from "./img/3.png"
import coffee4 from "./img/4.png"
import coffee5 from "./img/5.png"
import coffee6 from "./img/6.png"
import menu from "./menu";
export const pastryList = [
    {
        "pastryImg": pastryOne,
        "productName": "Pastry One"

    },
    {
        "pastryImg": pastryTwo,
        "productName": "Pastry Two"

    },
    {
        "pastryImg": pastryThree,
        "productName": "Pastry Two"

    }
];
export const coffeList = [
    {
        "coffeImg": coffee1,
        "coffeInfo": "Enjoy a balanced cup with a hint of sweetness and a velvety finish.",
        "coffeeName": "Sample Product",
    },
    {
        "coffeImg": coffee2,
        "coffeInfo": "Enjoy a balanced cup with a hint of sweetness and a velvety finish.",
        "coffeeName": "Sample Product",

    },
    {
        "coffeImg": coffee3,
        "coffeInfo": "Enjoy a balanced cup with a hint of sweetness and a velvety finish.",
        "coffeeName": "Sample Product",
    },
    {
        "coffeImg": coffee4,
        "coffeInfo": "Enjoy a balanced cup with a hint of sweetness and a velvety finish.",
        "coffeeName": "Sample Product",
    },
    {
        "coffeImg": coffee5,
        "coffeInfo": "Enjoy a balanced cup with a hint of sweetness and a velvety finish.",
        "coffeeName": "Sample Product",
    },
    {
        "coffeImg": coffee6,
        "coffeInfo": "Enjoy a balanced cup with a hint of sweetness and a velvety finish.",
        "coffeeName": "Sample Product",
    },

]
// import
const homepage = () => {

    const content = document.querySelector("#content");
    const div = document.createElement("div");
    div.setAttribute("id", "homepage");

    div.innerHTML = `
                    <div class="homepage-content">
                           <div class="home-content">
                                <div class="home-text">
                                        <h1>Inarawan Coffee</h1>
                                        <p>Founded in 2020, Inarawan Coffee emerged from a passion for exceptional coffee and a commitment to community. Our journey began in a small, cozy café where we sourced beans from local farms, ensuring that each cup is not only delicious but also ethically produced.</p>         
                                <button class="btn" id="btnOrder" >Order now</button>          
                            </div>
                            
                            
                            </div>

                            <div class="home-socmed">
                            <p>@InarawanCoffee</p>
                            <a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a>
                            <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                            <a href="#"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                            </div>
                    </div>
                    <!-- FIRST SCROLL HOMEPAGE -->
                    
                    <div class="homepage-first-scroll">
                            <div class="fscroll-img_container">
                                    <img src="${fScroll}" alt="Homepage-img" id="fscroll-img">
                                        <div class="fscroll-text">
                                                     <div class="fscroll-text_content">
                                                      <h3>Grind with perfection, Brewed with precision.</h3>
                                                      <p>Our skilled baristas take pride in the brewing process, using expert techniques to highlight the unique flavors and aromas of our coffee. </p>
                                                     </div>

                                                      <div class="fscroll-text_content">
                                                      <h3>Freshly Bake</h3>
                                                      <p>Our pastries are made from scratch using high-quality ingredients, sourced locally whenever possible. Each item is carefully prepared by our talented bakers who pour their passion into every batch.</p>
                                                     </div>

                                                      <div class="fscroll-text_content">
                                                      <h3>Cozy Comfort</h3>
                                                      <p>Step into our space and feel instantly at home. With warm lighting, comfortable seating, and thoughtfully curated decor, our café provides the perfect backdrop for a quiet moment or a lively gathering with friends.</p>
                                                     </div>
                                        </div>
                            </div>
                            
                    </div>
                   
    `;
    content.append(div);

};
// order now
document.addEventListener("click", e => {
    if (e.target.id === "btnOrder") {
        const homepage = document.querySelector("#homepage");
        const imgGallery = document.querySelector("#imgGallery-container");
        homepage.style.display = "none";
        imgGallery.style.display = "none";
    }
});
export default homepage
