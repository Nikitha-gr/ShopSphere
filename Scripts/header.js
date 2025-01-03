export const header = () => {
    let headerHTML = `
     <header class="header">
        <div class="top-bar">
            <p>Update your closet with deals up to 70% off. <a href="#sale"><b>Shop Winter Clearance</b></a></p>
        </div>

        <div class="main-header">
            <div id="search-left">
                <div class="logo">
                    <a href="index.html">
                        <img src="./Assets/logo/company_logo.png" alt="Seara Logo">
                    </a>
                </div>
                <div class="search-bar">
                    <input type="text" placeholder="Search for clothes, shoes, etc.">
                    <button>Search</button>
                </div>
            </div>
            <div class="header-icons">
                <a href="login.html"><i class="fas fa-user"></i></a>
                <a href="cart.html"><i class="fas fa-shopping-bag"></i></a>
            </div>
        </div>

        <div id="navbar">
            <nav class="nav-links">
                <ul>
                    <li><button class="menu-button" data-target="new-panel">New</button></li>
                    <li><button class="menu-button" data-target="women-panel">Women</button></li>
                    <li><button class="menu-button" data-target="men-panel">Men</button></li>
                    <li><button class="menu-button" data-target="kids-panel">Kids</button></li>
                    <li><button class="menu-button" data-target="collections-panel">Collections</button></li>
                    <li><button class="menu-button" data-target="brands-panel">Brands</button></li>
                    <li><button class="menu-button" data-target="sale-panel" style="color: red;">Sale</button></li>
                    <li><button class="menu-button" data-target="activities-panel">Activities</button></li>
                </ul>
            </nav>
            <div class="help">
                <a href="#help">Help & Support</a>
            </div>
        </div>
    </header>

    <!-- Panels for Shutter Menu -->
    <div class="panels">
        <!-- New Panel -->
        <div class="panel new-panel" id="new-panel">
            <nav class="panel-menu">
                <div class="menu-list">
                        <li>
                            <ul>
                            <h3>New by Category</h3>
                                <li>Shoes</li>
                                <li>Clothing</li>
                                <li>Bags</li>
                                <li>Accessories</li>
                                <li>Shop All New</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>The Style Room</h3>
                                <li>Hunter</li>
                                <li>Footwear Edit</li>
                                <li>Pretty Extravaganza</li>
                                <li>Steve Madden</li>
                                <li>Converse</li>
                                <li>Winter Shopping Guide</li>
                                <li>MICHAEL Michael Kors</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                             <h3>New Brands</h3>
                                <li>Allbirds</li>
                                <li>Free Fly</li>
                                <li>Birdies</li>
                                <li>Converse</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>New & Now</h3>
                                <li>New Brooks Glycerin Max</li>
                                <li>Cozy Crocs</li>
                                <li>NYE Stylist Picks</li>
                                <li>Winter Running Shoes</li>
                                <li>Our Casual Boots Guide</li>
                            </ul>
                        </li>
                </div>
                <div class="menu-img">
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/New-img1.png" alt="Shop Clogs">
                        <button class="shop-btn">Shop Clogs</button>
                    </div>
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/New-img2.png" alt="Shop Coats & Outerwear">
                        <button class="shop-btn">Shop Coats & Outerwear</button>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Women Panel -->
        <div class="panel women-panel" id="women-panel">
            <nav class="panel-menu">
                <div class="menu-list">
                        <li>
                            <ul>
                            <h3>Shoes</h3>
                                <li>All Women's Shoes</li>
                                <li>Sneaker & Athletic</li>
                                <li>Boots & Booties</li>
                                <li>Flats</li>
                                <li>Heels</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Clothing</h3>
                                <li>All Women's Clothing</li>
                                <li>Dresses</li>
                                <li>Shirts & Tops</li>
                                <li>Jeans & Denim</li>
                                <li>Jumpsuits & Rompers</li>
                                <li>Shorts</li>
                                <li>Skirts</li>
                                <li>Coats & Outerwear</li>
                                <li>Work & Duty Apprel</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Accessories & More</h3>
                                <li>All Women's Accessories</li>
                                <li>Handbags</li>
                                <li>Backpacks</li>
                                <li>Wallets</li>
                                <li>Sunglasses</li>
                                <li>Hats</li>
                                <li>Jewelry</li>
                                <li>Belts</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Trending Brands</h3>
                                <li>Sam Edelman</li>
                                <li>Birkenstock</li>
                                <li>Dolce Vita</li>
                                <li>Madewell</li>
                                <li>Hoka</li>
                                <li>kate spade new york</li>
                                <li>UGG</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Shop By</h3>
                                <li>All Womens</li>
                                <li>Bestsellers</li>
                                <li>New Arrivals</li>
                                <li>Fall Favorites</li>
                                <li>NYE Stylist Picks</li>
                                <li>5-Start-Rated Styles</li>
                                <li>Sale</li>
                                <li><b>Gift Cards</b></li>
                            </ul>
                        </li>
                </div>
                <div class="menu-img">
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/Womens-img1.png" alt="Shop Women's Boots">
                        <button class="shop-btn">Shop Women's Boots</button>
                    </div>
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/Womens-img2.png" alt="Shop Women's Flats">
                        <button class="shop-btn">Shop Women's Flats</button>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Mens Panel -->
        <div class="panel men-panel" id="men-panel">
            <nav class="panel-menu">
                <div class="menu-list">
                        <li>
                            <ul>
                            <h3>Shoes</h3>
                                <li>All Men's Shoes</li>
                                <li>Sneaker & Athletic</li>
                                <li>Boots</li>
                                <li>Loafers</li>
                                <li>Oxfords</li>
                                <li>Sandals</li>
                                <li>Work & Duty Boots</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Clothing</h3>
                                <li>All Men's Clothing</li>
                                <li>Shirts & Tops</li>
                                <li>Pants</li>
                                <li>Coats & Outerwear</li>
                                <li>Jeans</li>
                                <li>Hoodies & Sweatshirts</li>
                                <li>Shorts</li>
                                <li>Activewear</li>
                                <li>Work & Duty Apprel</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Accessories & More</h3>
                                <li>All Men's Accessories</li>
                                <li>Hats</li>
                                <li>Bags</li>
                                <li>Belts</li>
                                <li>Watches</li>
                                <li>Sunglasses & Eyewear</li>
                                <li>Wallets</li>
                                <li>Gloves</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Trending Brands</h3>
                                <li>Naot</li>
                                <li>ASICS</li>
                                <li>Hoka</li>
                                <li>Levi's Mens</li>
                                <li>Brooks</li>
                                <li>New Balance</li>                        
                                <li>Kamik</li>
                                <li>On</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Shop By</h3>
                                <li>All Mens</li>
                                <li>Bestsellers</li>
                                <li>New Arrivals</li>
                                <li>5-Start-Rated Styles</li>
                                <li>Sale</li>
                                <li><b>Gift Cards</b></li>
                            </ul>
                        </li>
                </div>
                <div class="menu-img">
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/mens-img1.png" alt="Shop Men's Boots">
                        <button class="shop-btn">Shop Men's Boots</button>
                    </div>
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/mens-img2.png" alt="Shop Men's Oxfords">
                        <button class="shop-btn">Shop Men's Oxfords</button>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Kids Panel -->
        <div class="panel kids-panel" id="kids-panel">
            <nav class="panel-menu">
                <div class="menu-list">
                        <li>
                            <ul>
                            <h3>Boys</h3>
                                <li>All Boys</li>
                                <li>Sneaker</li>
                                <li>Boots</li>
                                <li>Coats & Jackets</li>
                                <li>Shirts & Tops</li>
                                <li>Pants</li>
                                <li>Jeans</li>
                                <li>Sandals</li>
                                <li>Shorts</li>
                                <li>Adaptive</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Girls</h3>
                                <li>All Girls</li>
                                <li>Sneaker</li>
                                <li>Boots</li>
                                <li>Coats & Jackets</li>
                                <li>Shirts & Tops</li>
                                <li>Pants</li>
                                <li>Jeans</li>
                                <li>Sandals</li>
                                <li>Dresses</li>
                                <li>Adaptive</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Accessories & More</h3>
                                <li>All Kid's Accessories</li>
                                <li>Backpacks</li>
                                <li>Hats</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Shop By Size</h3>
                                <li>Big Kid(7-12 yrs.)</li>
                                <li>Little Kid(4-7 yrs.)</li>
                                <li>Toddler (9 mos.-4 yrs.)</li>
                                <li>Infant(0-9 mos.)</li>
                                <li>Shoe Size Conversion Chart</li>
                                <li>At Home Shoe Sizer</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>New & Treanding</h3>
                                <li>All New Arrivals</li>
                                <li>Kids' Athletic Shoes</li>
                                <li>Juniors & Teen</li>
                                <li>Easy On Shoes</li>
                                <li>Sports Cleats</li>
                                <li>Charecter Favorites</li>
                                <li>Kids'Sale</li>
                            <h3>Treanding Brands</h3>
                                <li>Crocs</li>
                                <li>New Balance</li>
                                <li>SKECHERS</li>
                                <li>adidas</li>
                            </ul>
                        </li>
                </div>
                <div class="menu-img">
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/kids-img1.png" alt="Shop Brikenstock Kids">
                        <button class="shop-btn">Shop Brikenstock Kids</button>
                    </div>
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/kids-img2.png" alt="Shop Heelys">
                        <button class="shop-btn">Shop Heelys</button>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Collections Panel -->
        <div class="panel collections-panel" id="collections-panel">
            <nav class="panel-menu">
                    <div class="menu-list">
                        <li>
                            <ul>
                            <h3>Featured Shops</h3>
                                <li>Adaptive</li>
                                <li>Conscious Clothing & Shoes</li>
                                <li>The Outdoor Shop</li>
                                <li>The Running Shop</li>
                                <li>The Wedding Shop</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>The Style Room</h3>
                                <li>Hunter</li>
                                <li>Footwear Edit</li>
                                <li>Pretty Extravanganza</li>
                                <li>Steve Madden</li>
                                <li>Converse</li>
                                <li>Winter Shopping Guide</li>
                                <li>MICHAEL Michael Kors</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Treanding Brands</h3>
                                <li>Kamil Footwear</li>
                                <li>VIONIC</li>
                                <li>Steve Madden</li>
                                <li>SOREL</li>
                                <li>Chaco</li>
                                <li>Madewell</li>
                                <li>Crocs</li>
                                <li>The North Face</li>
                                <li>Brikenstock</li>
                                <li>UGG</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Get Inspired</h3>
                            <li>Winter Running Shoes</li>
                            <li>NYE Stylist Picks</li>
                            <li>How-to Articles</li>
                            <h3>Seara for Good</h3>
                            <h3>Seara at Work</h3>
                            <li>Learn more</li>
                            <li>Amazon Employees</li>
                            <li>ZAW Frequently Asked Questions</li>
                            <li>Work & Duty Shop</li>
                            <h3>Gift Cards</h3>
                            </ul>
                        </li>
                </div>
                <div class="menu-img">
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/Collection-img1.png" alt="Shop Running Shoes">
                        <button class="shop-btn">Shop Running Shoes</button>
                    </div>
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/Collections-img2.png" alt="Shop Gift Cards">
                        <button class="shop-btn">Shop Gift Cards</button>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Brands Panel -->
        <div class="panel brands-panel" id="brands-panel">
            <nav class="panel-menu">
                <div class="brands-panel">
                    <div class="brand-index">
                        <h3>Brand Index</h3>
                        <div class="index-letters">
                            <span>#</span>
                            <span>A</span>
                            <span>B</span>
                            <span>C</span>
                            <span>D</span>
                            <span>E</span>
                            <span>F</span>
                            <span>G</span>
                            <span>H</span>
                            <span>I</span>
                            <span>J</span>
                            <span>K</span>
                            <span>L</span>
                            <span>M</span>
                            <span>N</span>
                            <span>O</span>
                            <span>P</span>
                            <span>Q</span>
                            <span>R</span>
                            <span>S</span>
                            <span>T</span>
                            <span>U</span>
                            <span>V</span>
                            <span>W</span>
                            <span>X</span>
                            <span>Y</span>
                            <span>Z</span>
                        </div>
                    </div>
                
                    <div class="featured-brands">
                        <h3>Featured Brands</h3>
                        <div class="brand-logos">
                            <img src="./Assets/Panel_Images/ugg-logo.png" alt="UGG">
                            <img src="./Assets/Panel_Images/crocs-logo.png" alt="Crocs">
                            <img src="./Assets/Panel_Images/hoka-logo.png" alt="HOKA">
                            <img src="./Assets/Panel_Images/on-logo.png" alt="On">
                            <img src="./Assets/Panel_Images/brooks-logo.png" alt="Brooks">
                            <img src="./Assets/Panel_Images/dr.martens-logo.png" alt="Dr. Martens">
                            <img src="./Assets/Panel_Images/heyDude-logo.png" alt="Hey Dude">
                            <img src="./Assets/Panel_Images/asics-logo.png" alt="ASICS">
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Sale Panel -->
        <div class="panel sale-panel" id="sale-panel">
            <nav class="panel-menu">
                <div class="menu-list">
                        <li>
                            <ul>
                            <h3>Women's Sale</h3>
                            <li>All Women's Sale</li>
                            <li>Sneakers & Athletic</li>
                            <li>Boots</li>
                            <li>Sweaters</li>
                            <li>Jeans</li>
                            <li>Blouses</li>
                            <li>Coats & Outerwear</li>
                            <li>Bags</li>
                            <li>Heels</li>
                            <li>Shoes $50 & Under</li>
                            <li>Apparel $100 & Under</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <h3>Men's Sale</h3>
                                <li>All Men's Sale</li>
                                <li>Sneakers & Athletic</li>
                                <li>Boots</li>
                                <li>Hoodies & Sweatshirts</li>
                                <li>Loafers</li>
                                <li>Jeans</li>
                                <li>Coats & Outerwear</li>
                                <li>Slippers</li>
                                <li>Shoes $50 & Under</li>
                                <li>Apparel $100 & Under</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                                <h3>Kids' Sale</h3>
                                <li>All Kids'Sale</li>
                                <li>Sneakers & Athletic</li>
                                <li>Boots</li>
                                <li>Clogs</li>
                                <li>Coats & Outerwear</li>
                                <li>Kids's Sets</li>
                                <li>Pants</li>
                                <li>Slippers</li>
                                <li>Shoes $50 & Under</li>
                                <li>Apparel $100 & Under</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Brands on Sale</h3>
                            <li>HOKA</li>
                            <li>SOREL</li>
                            <li>Native Shoes</li>
                            <li>LEVI'S</li>
                            <li>Brooks</li>
                            <li>Hey Dude</li>
                            <li>ASICS</li>
                            </ul>
                        </li>
                        <li>
                            <ul>
                            <h3>Going, Going, Going</h3>
                            <li>All Final Sale</li>
                            <li>Women's Final Sale</li>
                            <li>Men's Final Sale</li>
                            <li>Final Sale $50 & Under</li>
                            <li>Unique Finds</li>
                            <li>Just-In:New Markdowns</li>
                            </ul>
                        </li>
                </div>
                <div class="menu-img">
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/Sale-img1.png" alt="Mens Boots On Sale">
                        <button class="shop-btn">Shop Men's Boots On Sale</button>
                    </div>
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/Sale-img2.png" alt="Womens Boots On Sale">
                        <button class="shop-btn">Shop Women's Boots On Sale</button>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Activities Panel -->
        <div class="panel activities-panel" id="activities-panel">
            <nav class="panel-menu">
                <div class="menu-list">
                    <li>
                        <ul>
                            <h3>Women</h3>
                            <li>Running</li>
                            <li>Training & Gym</li>
                            <li>Tennis & Pickleball</li>
                            <li>Hiking</li>
                            <li>Golf</li>
                            <li>Walking</li>
                            <li>All Sports Cleats</li>
                            <li>Yoga</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <h3>Men</h3>
                            <li>Running</li>
                            <li>Training & Gym</li>
                            <li>Tennis & Pickleball</li>
                            <li>Hiking</li>
                            <li>Golf</li>
                            <li>Walking</li>
                            <li>All Sports Cleats</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <h3>Kids</h3>
                            <li>Running</li>
                            <li>Gym Class</li>
                            <li>All Sports Cleats</li>
                            <li>Swimming</li>
                            <li>Active Clothing</li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <h3>Trending Brands</h3>
                            <li>On</li>
                            <li>HOKA</li>
                            <li>New Balance</li>
                            <li>Brooks</li>
                            <li>ASICS</li>
                        </ul>
                    </li>
                </div>
                <div class="menu-img">
                    <div class="img-container">
                        <img src="./Assets/Panel_Images/Activites-img.png" alt="The Running Shoe">
                        <button class="shop-btn">The Running Shop</button>
                    </div>
                </div>
                </nav>
        </div>
    </div>`;

    // Insert the header HTML at the beginning of the body
    document.body.insertAdjacentHTML("afterbegin", headerHTML);

    let activePanel = null;
    let activeButton = null;
    let menuButtons = document.querySelectorAll('.menu-button');

    menuButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent the click event from bubbling up to the document

            const target = e.target.getAttribute('data-target');
            const panel = document.getElementById(target);

            // Close the currently active panel if it's different from the clicked one
            if (activePanel && activePanel !== panel) {
                activePanel.classList.remove("active");
                activePanel.style.maxHeight = 0;
                activeButton.style.backgroundColor = null;
                activeButton.style.color = null;
            }

            // Toggle the clicked panel
            panel.classList.toggle("active");

            // Apply styling to active button
            if (panel.classList.contains("active")) {
                button.style.backgroundColor = "black";
                button.style.color = "white";
                button.style.borderRadius = "50px";
                panel.style.maxHeight = panel.scrollHeight + "px";
                activePanel = panel;
                activeButton = button;
            } else {
                button.style.backgroundColor = null;
                button.style.color = null;
                panel.style.maxHeight = 0;
                activePanel = null;
                activeButton = null;
            }
        });
    });

};

header();