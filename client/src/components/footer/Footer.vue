<template>
  <div class="footer">
    <SocialIcons/>
    <div class="v-line"></div>
    <div class="services">
      <h3>Services</h3>
      <ul class="service-list">
        <li>Shopify Store and Plugin development</li>
        <li>Webapp Development</li>
        <li>Wordpress Development</li>
        <li>Web Design</li>
      </ul>
    </div>
    <div class="v-line2"></div>
    <div class="company">
      <h3>Company</h3>
      <ul class="company-list">
        <li>About Us</li>
        <li>Blog</li>
      </ul>
    </div>
    <p id="copy">MSR DevOps, Copyright &copy; 2020</p>
  </div>
</template>

<script>
import SocialIcons from './SocialIcons.vue'
export default {
  name: 'Footer',
  components: {
    SocialIcons
  },
}
</script>

<style>
  #copy {
    position: relative;
    color: white;
    top: 85%;
    left: 40%;
    font-size: 20px;
    margin-top: 1%;
  }
  .footer {
    height: 340px;
    position: sticky;
    width: 100%;
    background: #1a1a1a;
    border-top: 3px solid #3475d1;
    margin-bottom: -20%;
    align-content: center;
  }
  .v-line {
   border-left: 1px solid #dddddd;
    height: 79%;
    position: absolute;
    left: 15%;
    margin-left: 20%;
    margin-top: 1%;
    top: 0;
  }
  .v-line2 {
   border-left: 1px solid #dddddd;
    height: 79%;
    position: absolute;
    left: 35%;
    margin-left: 30%;
    margin-top: 1%;
    top: 0;
  }
  .services {
    margin-top: 2%;
    color: white;
    text-align: left;
    position: absolute;
    margin-left: 38%;
    font-size: 1.5rem;
  }
  .service-list{
    list-style-type: none;
    padding-top: 5px
  }
  .company {
    margin-top: 2%;
    color: white;
    text-align: left;
    position: absolute;
    margin-left: 68%;
    font-size: 1.5rem;
  }
  .company-list{
    list-style-type: none;
    padding-top: 5px
  }
</style>
