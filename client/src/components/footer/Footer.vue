<template>
  <div id="footer" class="footer ">
    <SocialIcons/>
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

<style scoped>
  #copy {
    color: white;
    font-size: 18px;
  }
  .footer {
    background: #1a1a1a;
    border-top: 3px solid #3475d1;
    width: 100%;
    overflow: hidden;
  }
  .v-line{
    border-left: 1px solid #dddddd;
    margin-left: 30%;
    margin-top: 5%;
    height: 30vh
  }
  .v-line2{
    border-left: 1px solid #dddddd;
    margin-top: 5%;
    height: 30vh;
    margin-left: -40%
  }
  .services {
    width: 80%;
    margin-top: 2%;
    margin-left: 40%;
    color: white;
  }
  h3{
    font-size: 2rem;
  }
  .service-list{
    list-style-type: none;
    font-size: 1.2rem;
  }
  .service-list li{
    padding-top: 0.5rem;
  }
  .company{
    color: white;
    width: 100%;
    margin-right: 200%;
    margin-left: -50%;
  }
  .company-list{
    font-size: 1.2rem;
  }
  .grid-3{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 414px) {
    .grid-3{
      grid-template-columns:   1fr;
    }
    .center{
      text-align: center;
    }
    .v-line{
      border-bottom: 1px solid #dddddd;
      border-left: none;
      width: 80%;
      margin-left: 10%;
    }
    .v-line2{
      border-bottom: 1px solid #dddddd;
      border-left: none;
      width: 80%;
      margin-left: 10%;
    }
    h3{
      font-size: 2rem;
    }
    .services{
      padding-top: 1rem;
      margin-left: 0%;
      padding-bottom: 1rem;
      padding-right: 1rem;
    }
    .service-list{
      list-style-type: none;
      padding-left: 0.5rem;
    }
    .service-list li{
      padding: 0.3rem;
    }
    .company{
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    .company-list{
      list-style-type: none;
    }
    .company-list li{
      padding: 0.3rem;
    }
    #copy{
      padding-bottom: 1rem;
    }
  }
</style>
