<template>
  <div>
    <div class="header">
      <CallToAction class="action"/>
      <router-link to="/"><img id="llogo" src="../assets/logo.png" alt="logo"></router-link>
      <Ham/>
      <div id="overlay"></div>
      <img src="../assets/handshake.jpg" alt="handshake">
      <IntroText/>
      <ScrollBtn />
    </div>
      <Navbar/>
      <button v-if="isVisible" @click="scrollTop" id="stop"><i class="fas fa-angle-up"></i></button>
    <MissionStatement/>
    <Benifits />
    <LastCall />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/header/Navbar.vue"
import Ham from "../components/header/Ham.vue"
import Footer from "../components/footer/Footer.vue"
import MissionStatement from "../components/content/MissionStatement.vue"
import CallToAction from '../components/CallToAction'
import IntroText from "../components/header/IntroText.vue"
import ScrollBtn from "../components/header/ScrollBtn.vue"
import Benifits from "../components/content/Benifits.vue"
import LastCall from "../components/content/LastCall.vue"
export default {
  name: 'Home',
  components: {
    Navbar,
    Ham,
    CallToAction,
    IntroText,
    ScrollBtn,
    MissionStatement,
    Benifits,
    LastCall,
    Footer,
  },
  data(){
    return {
      isVisible: false
    }
  },
  unmounted: function() {
    document.removeEventListener('scroll', this.scrollTop)
  },
  mounted(){
    window.addEventListener('scroll', this.initTopButton);
    this.initTopButton(); // needed for initial loading on page
  },
  methods: {
    initTopButton(){
      if(window.scrollY > 500){
        this.isVisible = true
      }else {
        this.isVisible = false
      }
    },
    scrollTop(){
      return scrollTo(document.body, 0)
      }
    }
}
</script>

<style>
  #llogo {
    position: absolute;
    height: 5vh;
    width: 8vw;
    z-index: 12;
    margin-left: 4%;
    margin-top: 1.4%;
  }
  @keyframes fadeIn {
     0% {opacity: 0;}
     100% {opacity: 1;}
  } 
  #stop{
    cursor: pointer;
    background:rgba(0, 0, 0,0.7);
    font-size: 1.5rem;
    border: none;
    color: white;
    height: 5vh;
    width: 3vw;
    position: fixed;
    bottom:0 ;
    animation: fadeIn 1s;
    left:97% ;
    transition: all 0.5s ease-in-out;
  }
  #stop:hover{
    background: #3475d1;
  }
  .action{
    position: absolute;
    top: 55%;
    bottom: 10%;
    left: 47%;
    right: 5%;
  }

#overlay { position: absolute;
  display: block;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.9);
}

img {
  width: 100%;
  height: 99.5vh;
}
@media(max-width: 1024px){
}
@media(max-width: 768px){
  img {
    height: 100vh;
  }
  #llogo {
    position: absolute;
    height: 4vh;
    width: 15vw;
    z-index: 12;
    margin-left: 5%;
    margin-top: 4%;
  }
  #overlay{
    height: 100.5vh;
  }
  .action{
    position: absolute;
    top: 2.4%;
    left: 65%;
    right: 10%;
  }
}
@media(max-width: 858px){
}
@media(max-width: 414px){
  }
@media(max-width: 500px){
}
</style>
