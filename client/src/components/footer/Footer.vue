<template>
  <div class="footer">
    <SocialIcons/>
    <div class="v-line"></div>
    <div class="services">
      <h3 class="service-head">Services</h3>
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
    position: absolute;
    padding-bottom: 3%;
    color: white;
    top: 50%;
    width: 30%;
    left: 13%;
    font-size: 18px;
    margin-top: 1%;
  }
  .footer {
    height: 280px;
    width: 100%;
    overflow: hidden;
    position: absolute;
    background: #1a1a1a;
    border-top: 3px solid #3475d1;
    align-content: center;
  }
  .v-line {
   border-left: 1px solid #dddddd;
    height: 79%;
    position: absolute;
    left: 15%;
    margin-left: 25%;
    margin-top: 1%;
    top: 0;
  }
  .v-line2 {
   border-left: 1px solid #dddddd;
    height: 79%;
    position: absolute;
    left: 35%;
    margin-left: 31%;
    margin-top: 1%;
    top: 0;
  }
  .services {
    margin-top: 2%;
    width: 50%;
    color: white;
    text-align: left;
    position: absolute;
    margin-left: 43%;
  }
  .service-head {
    font-size: 2rem;
  }
  .service-list{
    list-style-type: none;
    padding-top: 5px;
    font-size: 1.2rem;
  }
  .service-list li{
    padding: 0.5%;
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
    font-size: 1.2rem;
    padding-top: 5px
  }
  .company-list li{
    padding: 1%
  }

  @media(max-width: 1440px){
    #copy {
      width: 30%;
      left: 6.8%;
      font-size: 18px;
      margin-top: 1%;
    }
    .v-line {
      left: 15%;
      margin-left: 24.5%;
      margin-top: 1%;
      top: 0;
    }
    .v-line2 {
      height: 79%;
      left: 35%;
      margin-left: 37%;
      margin-top: 1%;
    }
    .services {
      text-align: left;
      width: 50%;
      margin-left: 43%;
    }
    .service-head {
      font-size: 2rem;
    }
    .service-list{
      list-style-type: none;
      text-align: left;
      padding-top: 5px;
      font-size: 1.2rem;
    }
    .service-list li{
      padding: 0.5%;
    }
    .company {
      margin-left: 75%;
    }
    .company-list{
      list-style-type: none;
      font-size: 1.2rem;
      padding-top: 5px
    }
  }

  @media(max-width: 1280px){
    #copy {
      width: 30%;
      left: 8.8%; 
      font-size: 18px;
      margin-top: 1%;
    }
    .v-line {
      left: 15%;
      margin-left: 24.5%;
      margin-top: 1%;
      top: 0;
    }
    .v-line2 {
      height: 79%;
      left: 35%;
      margin-left: 37%;
      margin-top: 1%;
    }
    .services {
      text-align: left;
      width: 50%;
      margin-left: 43%;
    }
    .service-head {
      font-size: 2rem;
    }
    .service-list{
      list-style-type: none;
      text-align: left;
      padding-top: 5px;
      font-size: 1.2rem;
    }
    .service-list li{
      padding: 0.5%;
    }
    .company {
      margin-left: 75%;
    }
    .company-list{
      list-style-type: none;
      font-size: 1.2rem;
      padding-top: 5px
    }
  }

  @media(max-width: 768px) {
    #copy{
      top: 65%;
      left: 3%;
      font-size: 18px;
      margin-top: 1%;
      font-size: 15px;
    }
    .v-line {
      left: 14%;
      margin-left: 17%;
      margin-top: 1%;
      top: 0;
      margin-top: 3%;
    }
    .v-line2 {
      left: 33%;
      margin-top: 3%;
      top: 0;
    }
    .services {
      margin-top: 2.7%;
      margin-left: 29.5%;
      text-align: center;
      width: 40.8%;
    }
    .service-list{
      font-size: 1.18rem;
      text-align: center;
    }
    .service-list li {
      padding: 2.5%;
    }
    h3 {
      font-size: 2rem;
    }
    .company {
      text-align: center;
      margin-left: 73%;
      margin-top: 3%
    }
    .company-list {
      font-size: 1.2rem;
    }
  }
</style>
