export const newsletter = () => {
    let newsletter = document.getElementById("newsletter");
    let card = ` <div class="newstext">
      <h1>Join Our List, Get 10% Off</h1>
      <p>Sign up for Seara emails—new subscribers get 10% off a future order!* Plus, get early access to sales, coupons, and more. (One code per email address.)</p>
      <form class="newsletter-form">
        <input type="email" placeholder="Enter your email address" class="email-input">
        <button class="submit-button">Join The Party</button>
      </form>
    </div> `;
    
    newsletter.innerHTML = card;
}

newsletter();