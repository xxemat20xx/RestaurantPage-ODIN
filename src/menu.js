import { pastryList } from "./homepage";
import { coffeList } from "./homepage";
const menu = () => {
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menulist");

    menuContainer.innerHTML = `
                    <!-- -HOMEPAGE MENU -PASTRY -->

                    <div class="home_menu-container">
                    <div class="menu-content">
                            <div class="pastry-header-text"> 
                                    <h1>Best <span>Pastry</span> Catergories</h1> 
                                    <p>Freshly baked pastries at <span>Inarawan Coffee!</span> From buttery croissants and flaky danishes to rich muffins and sweet tarts, each treat is made from scratch with high-quality ingredients.</p>
                            </div>
                            
                            <div class="pastry-container">
                                <div class="pastry_menu">
                                    <img src="${pastryList[0].pastryImg}" alt="..." class="pastryImg">
                                    <h3>${pastryList[0].productName}</h3>
                                    <button class="btn"><span>Order now</span></button>
                                </div>
                                <div class="pastry_menu">
                                    <img src="${pastryList[1].pastryImg}" alt="..." class="pastryImg">
                                    <h3>${pastryList[1].productName}</h3>
                                    <button class="btn"><span>Order now</span></button>
                                </div>
                                <div class="pastry_menu">
                                   <img src="${pastryList[2].pastryImg}" alt="..." class="pastryImg">
                                    <h3>${pastryList[2].productName}</h3>
                                    <button class="btn"><span>Order now</span></button>
                                </div>
                            </div>
                         
                    </div>
        </div>

        <!-- -HOMEPAGE MENU -COFFEE -->
        <div class="menu_coffee-container">    
                    <div class="menu_coffee-text">
                         <h1>Our <span>Coffee</span> Categories</h1>
                         <p>Experience the rich, bold flavors of our delicious coffee at <span>Inarawan Coffee!</span></p>
                    </div>       
                   
                    <div class="card-coffee-menu">
                        <div class="card">
                            <div class="cardimg-box">
                                 <img src="${coffeList[0].coffeImg}">
                            </div>
                            <div class="card-text">
                                  <h3>${coffeList[0].coffeInfo}</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                     <i class="fa-regular fa-star"></i>
                                 <h4>${coffeList[0].coffeeName}</h4>
                                 <a class="btn"><span>Order now</span></a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardimg-box">
                                 <img src="${coffeList[1].coffeImg}">
                            </div>
                            <div class="card-text">
                                  <h3>${coffeList[1].coffeInfo}</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                     <i class="fa-regular fa-star"></i>
                                 <h4>${coffeList[1].coffeeName}</h4>
                                 <a class="btn"><span>Order now</span></a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardimg-box">
                                 <img src="${coffeList[2].coffeImg}">
                            </div>
                            <div class="card-text">
                                  <h3>${coffeList[2].coffeInfo}</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                     <i class="fa-regular fa-star"></i>
                                 <h4>${coffeList[2].coffeeName}</h4>
                                 <a class="btn"><span>Order now</span></a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardimg-box">
                                 <img src="${coffeList[3].coffeImg}">
                            </div>
                            <div class="card-text">
                                  <h3>${coffeList[3].coffeInfo}</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                     <i class="fa-regular fa-star"></i>
                                 <h4>${coffeList[3].coffeeName}</h4>
                                 <a class="btn"><span>Order now</span></a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardimg-box">
                                 <img src="${coffeList[4].coffeImg}">
                            </div>
                            <div class="card-text">
                                  <h3>${coffeList[4].coffeInfo}</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                     <i class="fa-regular fa-star"></i>
                                 <h4>${coffeList[4].coffeeName}</h4>
                                 <a class="btn"><span>Order now</span></a>
                            </div>
                        </div>

                        <div class="card">
                            <div class="cardimg-box">
                                 <img src="${coffeList[5].coffeImg}">
                            </div>
                            <div class="card-text">
                                  <h3>${coffeList[5].coffeInfo}</h3>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                     <i class="fa-regular fa-star"></i>
                                 <h4>${coffeList[5].coffeeName}</h4>
                                 <a class="btn"><span>Order now</span></a>
                            </div>
                        </div>

             </div>
        </div>
    `
    content.append(menuContainer);

};
export default menu;
