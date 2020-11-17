<template>
  <div>
    <div id="footer" class="footer ">
    <SocialIcons/>
    <div class="line"></div>
      <div class="links">
        <router-link to="/"> Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/blog"> Blog</router-link>
      </div>
      <p id="copy">MSR DevOps, Copyright &copy; 2020</p>
    </div>
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
    margin-left: 20%;
    margin-top: -4%;
    position: static;
    display: none;
  }
  .footer {
    background: #1a1a1a;
    border-top: 3px solid #3475d1;
    width: 100%;
    height: 15vh;
    overflow: hidden;
  }
  .links{
    display: flex;
    list-style: none;
    font-size: 1.5rem;
    width: 100%;
    left: 80%;
    position: absolute;
    flex-direction: row;  
    margin-top: -6%;
    border: none;
  }

  .links a{
    color: white;
    text-decoration: none;
    padding: 1rem;
  }
  .links a:hover{
    color: #3475d1;
    border-bottom: 1px solid #3475d1;
  }

  .links a.router-link-exact-active {
    border-bottom: 1px solid #3475d1;
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

  @media(max-width: 1440px){
    .links{
      font-size: 1.5rem;
      left: 75%;
      margin-top: -8%;
    }
  }
  
  @media(max-width: 800px){
    .footer{
      height: 10vh;
    }
    .links{
      font-size: 1.3rem;
      width: 100%;
      left: 62%;
      position: absolute;
      flex-direction: row;  
      margin-top: -15%;
      border: none;
    }
  }

  @media(max-width: 768px){
    .footer{
      height: 10vh;
    }
    .links{
      font-size: 1.3rem;
      width: 100%;
      left: 62%;
      position: absolute;
      flex-direction: row;  
      border: none;
    }
  }

  @media(max-width: 414px){
    .footer{
      height: 25vh;
    }
    .line{
      border: 1px solid #dddddd;
      width: 90%;
      margin-left: 5%;
    }
    .links{
      left: 20%;
      font-size: 1.2rem;
      margin-top: 0%;
    }
  }
  @media(max-width: 375px){
    .links{
      left: 16%;
    }
  }
</style>
