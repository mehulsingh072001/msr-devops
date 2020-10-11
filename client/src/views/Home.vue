<template>
  <div>
    <div class="header">
      <Navbar/>
      <div id="overlay"></div>
      <img src="../assets/handshake.jpg" alt="handshake">
      <IntroText/>
      <ScrollBtn />
    </div>
    <MissionStatement/>
    <Benifits />
    <LastCall />
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/header/Navbar.vue"
import Footer from "../components/footer/Footer.vue"
import MissionStatement from "../components/content/MissionStatement.vue"
import IntroText from "../components/header/IntroText.vue"
import ScrollBtn from "../components/header/ScrollBtn.vue"
import Benifits from "../components/content/Benifits.vue"
import LastCall from "../components/content/LastCall.vue"
export default {
  name: 'Home',
  components: {
    Navbar,
    IntroText,
    ScrollBtn,
    MissionStatement,
    Benifits,
    LastCall,
    Footer
  },
}
</script>

<style>
body{
  overflow-x: hidden
}
nav {
  position: absolute;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
}

button {
  position: fixed;
  z-index: 1;
}


#overlay {
  position: absolute;
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
  height: 100vh;
}
@media(max-width: 1024px){
  #logo {
    margin-top: 30px;
    height: 3vh;
    width: 8vw;
    margin-left: 5%;
  }
}
@media(max-width: 858px){
  #logo {
    margin-top: 30px;
    height: 3vh;
    width: 8vw;
    margin-left: 5%;
  }
}
@media(max-width: 414px){
  #logo{
    width: 20vw;
    height: 5vh;
  }
}
@media(max-width: 500px){
  #logo{
    width: 20vw;
    height: 5vh;
  }

}
</style>
