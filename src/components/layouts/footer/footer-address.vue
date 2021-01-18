<template>
  <div class="footer-address">
    <p class="footer-info">FashionSoul.com A/S<br>Legal Address (Not for returns):<br>Laplandsgade 4A<br>2300 Copenhagen S Denmark</p>
    <p class="footer-info">Org.nr. DK25286510</p>
    <p class="footer-info">FOLLOW FASHIONSOUL <br> ON SOCIAL MEDIA:</p>
    <div class="social-media">
      <a
        href="https://www.facebook.com/"
        class="footer-icon-link"><img
        src="../../../assets/images/facebook_footer_icon.svg"
        alt="facebook-icon"
      >
      </a>
      <a
        href="https://www.instagram.com/"
        class="footer-icon-link"><img
        src="../../../assets/images/instagram_footer_icon.svg"
        alt="instagram-icon"
      >
      </a>
      <a
        href="https://twitter.com/"
        class="footer-icon-link"><img
        src="../../../assets/images/twitter_footer_icon.svg"
        alt="twitter-icon"
      >
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "footer-address"
  }
</script>

<style>
  .footer-address {
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
</style>