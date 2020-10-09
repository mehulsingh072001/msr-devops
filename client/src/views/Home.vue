<template>
  <div>
    <Navbar/>
    <img src="../assets/handshake.jpg" alt="handshake">
    <div id="overlay"></div>
    <IntroText/>
    <ScrollBtn />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue"
import IntroText from "../components/IntroText.vue"
import ScrollBtn from "../components/ScrollBtn.vue"
export default {
  name: 'Home',
  components: {
    Navbar,
    IntroText,
    ScrollBtn
  },
}
</script>

<style>
body {
  overflow: hidden;
}
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
}
nav li.router-link-exact-active {
 background-color: indianred;
 cursor: pointer;
}

@media(max-width: 1024px){
  #logo {
    margin-top: 30px;
    height: 3vh;
    width: 8vw;
    margin-left: 5%;
  }
    .action {
    margin-left: 77%;
  }
}
@media(max-width: 858px){
  #logo {
    margin-top: 30px;
    height: 3vh;
    width: 8vw;
    margin-left: 5%;
  }
    .action {
    margin-left: 72%;
  }
}
@media(max-width: 662px) {
  .action {
    display: none;
  }
}
</style>
