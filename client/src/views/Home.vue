<template>
  <div>
    <Navbar />
    <img src="../assets/handshake.jpg" alt="handshake">
    <div id="overlay"></div>
    <IntroText/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import IntroText from "../components/IntroText.vue"
export default {
  name: 'Home',
  components: {
    Navbar,
    IntroText
  }
}
</script>

<style>
nav {
  position: fixed;
  display: block;
  z-index: 3;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
}

button {
  position: fixed;
  z-index: 3;
}


#overlay {
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.9);
  z-index: 2;
}

img {
  width: 100%;
  height: 99vh;
  overflow-y: clip;
}
   nav li.router-link-exact-active {
     background-color: indianred;
     cursor: pointer;
   }
</style>
