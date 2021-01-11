<template>
  <div class="shop-footer">
    <div class="footer-content">
      <div class="footer-info-wrapper">
        <p class="footer-info">FashionSoul.com A/S<br>Legal Address (Not for returns):<br>Laplandsgade 4A<br>2300 Copenhagen S Denmark</p>
        <p class="footer-info">Org.nr. DK25286510</p>
        <p class="footer-info">FOLLOW FASHIONSOUL <br> ON SOCIAL MEDIA:</p>
        <div class="social-media">
          <a href="https://www.facebook.com/" class="footer-icon-link"><img src="../../assets/images/facebook_footer_icon.svg" alt="facebook-icon"></a>
          <a href="https://www.instagram.com/" class="footer-icon-link"><img src="../../assets/images/instagram_footer_icon.svg" alt="instagram-icon"></a>
          <a href="https://twitter.com/" class="footer-icon-link"><img src="../../assets/images/twitter_footer_icon.svg" alt="twitter-icon"></a>
        </div>
      </div>
      <ul class="client-info">
        <h2 class="footer-heading">FASHIONSOUL</h2>
        <ul class="footer-menu">
          <li class="footer-menu-item">
            <a href="" class="footer-menu-link">About us</a>
          </li>
          <li class="footer-menu-item">
            <a href="" class="footer-menu-link">Privacy</a>
          </li>
          <li class="footer-menu-item">
            <a href="" class="footer-menu-link">Gift certificates</a>
          </li>
          <li class="footer-menu-item">
            <a href="" class="footer-menu-link">Help</a>
          </li>
          <li class="footer-menu-item">
            <a href="" class="footer-menu-link">Returns</a>
          </li>

        </ul>
      </ul>
      <div class="customer-care-info">
        <h2 class="footer-heading">CUSTOMER SERVICE</h2>
          <p class="footer-info">Customer Service opening hours:<br>Mon-Thur. 09:00 – 15:00<br>Friday 09:00 – 14:00</p>
          <p class="footer-info">For Polish customers only:<br>tel. +48 (22) 116 83 03<br>obslugaklienta@stylepit.pl</p>
          <p class="footer-info">For all other countries:<br>tel. (+44) 2034550429<br>customerservice@stylepit.com</p>
      </div>
    </div>
    <div class="payment-methods">
      <h2 class="footer-heading">PAYMENT METHODS</h2>
      <img src="../../assets/images/payment-methods.png" width="200" alt="bank-logos">
    </div>
    <p class="copyright-text">COPYRIGHT BY FASHIONSOUL © 2000-2021</p>
  </div>
</template>

<script>
  export default {
    name: "shop-footer"
  }
</script>

<style>
  .shop-footer {
    background-color: #f8f4f4;
    padding-bottom: 5px;
  }
  .footer-content {
    display: flex;
    justify-content: space-around;
  }
  .footer-info-wrapper {
    max-width: 200px;
    width: 100%;
    text-align: left;
  }
  .footer-info {
    font-family: "Kaushan Script", sans-serif;
    font-size: 11px;
    text-align: left;
  }
  .footer-icon-link {
    margin-right: 20px;
  }
  .footer-icon-link:last-of-type {
    margin-right: 0;
  }
  .client-info {
    padding-left: 0;
    margin: 0;
  }
  .footer-heading {
    margin: 11px 0 10px;
    font-size: 12px;
  }
  .footer-menu {
    list-style: none;
    padding-left: 0;
    text-align: left;
  }
  .footer-menu-link {
    text-decoration: none;
    color: #2c3e50;
    font-family: "Kaushan Script", sans-serif;
    font-size: 11px;
  }
  .copyright-text {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    font-size: 9px;
    border-top: 1px solid #cabfbf;
    padding-top: 20px;
    margin: 0;
  }
</style>