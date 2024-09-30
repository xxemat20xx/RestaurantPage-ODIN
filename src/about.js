
const about = () => {
    const content = document.querySelector("#content");
    const about = document.createElement("div");
    about.setAttribute("id", "about");

    about.innerHTML = `
                    <div>
                        <h1><span>About Us</span></h1>
                        <p>Welcome to <span>Inarawan Coffee Shops!</span> Established in 2020, we set out to create a warm and inviting space where coffee lovers can gather, unwind, and enjoy a great cup of coffee. Our mission is to serve high-quality, locally sourced brews while fostering a sense of community. Whether you're looking for a quiet corner to work, a cozy spot to catch up with friends, or just a delicious cup of joe, Inarawan is here to make your experience special. Join us and discover your new favorite place!</p>

                        <br>
                        <p>At <span>Inarawan Coffee Shops</span>, we are more than just a coffee shop; we are a community hub where passion meets flavor. Our team is dedicated to crafting exceptional coffee using locally sourced ingredients and sustainable practices. We strive to create a welcoming environment for everyone, whether you’re a coffee connoisseur or just stopping by for a quick bite. With a focus on quality, connection, and comfort, we aim to be your go-to destination for relaxation, inspiration, and good company.</p>

                        <h3><span>What We Offer?</span></h3>
                        <p>At Inarawan Coffee Shop, we take pride in offering a diverse menu to satisfy every palate. Our highlights include:</p>
                        <ul>
                            <li>
                            <strong>Specialty Coffee:</strong> Enjoy a range of expertly brewed coffees, from rich espressos to smooth cold brews, all made with ethically sourced beans.
                            </li>

                            <li>
                            <strong>Delicious Pastries:</strong> Treat yourself to a selection of freshly baked pastries and desserts that perfectly complement your drink.
                            </li>

                            <li>
                            <strong>Light Bites:</strong> Choose from a variety of sandwiches, salads, and snacks, crafted with fresh, local ingredients.
                            </li>

                            <li>
                            <strong>Community Events:</strong> Join us for regular events, including open mic nights, art showcases, and workshops, designed to bring people together.
                            </li>

                            <li>
                            <strong>Cozy Atmosphere:</strong> Experience a warm and inviting space, ideal for relaxing, working, or catching up with friends.
                            </li>
                            
                        </ul>
                    </div>
    
    `;
    content.appendChild(about);
};
export default about;