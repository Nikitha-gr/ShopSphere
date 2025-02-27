export const footer = () => {
    // let footer = document.getElementsByName("footer");
    let card = ` <div class="logo">
      <a href="#"><img id="footer-logo" src="Assets/logo/facebook-logo.png" alt="Facebook Logo"></a>
      <a href="#"><img id="footer-logo" src="Assets/logo/instagram-logo.png" alt="instagram Logo Logo"></a>
    </div>
    <div class="footer-links">
      <div class="col">
        <h3>About ShopSphere</h3>
        <a href="#">About</a>
        <a href="#">ShopSphere ONE</a>
        <a href="#">ShopSphere for Good</a>
        <a href="#">ShopSphere for Work</a>
        <a href="#">Get the ShopSphere Mobile App</a>
        <a href="#">Amazon Prime Benefits</a>
        <a href="#">ShopSphere VIP Benefits</a>
        <a href="#">Coupons & Sales</a>
        <a href="#">Accessibility Statement</a>
      </div>
      <div class="col">
        <h3>Customer Service</h3>
        <a href="#">FAQs</a>
        <a href="#">Contact Info</a>
        <a href="#">Shipping And Returns Policy</a>
        <a href="#">About Proposition 65</a>
      </div>
      <div class="col">
        <h3>Resources</h3>
        <a href="#">Measurement Guide</a>
        <a href="#">Size Conversion Chart</a>
        <a href="#">Associates Program</a>
        <a href="#">Press kit & Brand Inquiries</a>
        <a href="#">Site Map</a>
        <a href="#">Take Survey</a>
      </div>
      <div class="col">
        <h3>Explore ShopSphere</h3>
        <a href="#">Brands</a>
        <a href="#">Clothing</a>
        <a href="#">The Style Room</a>
        <a href="#">Eyewear</a>
        <a href="#">New Arrivals</a>
        <a href="#">Running</a>
        <a href="#">Jackets</a>
        <a href="#">Shoes</a>
        <a href="#">Watches</a>
        <a href="#">ShopSphere Adaptive</a>
        <a href="#">All Departments</a>
      </div>
    </div>

    <div class="copyright">
      <h5>&copy; 2024–2025 - ShopSphere.com HTML CSS JS E-commerce Website</h5>
    </div>`;

    document.getElementById("footer").innerHTML = card
}

footer();