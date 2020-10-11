<template>
  <div>
    <Hamburger v-if="window.width <= 414"/>
    <Navbar v-if="window.width > 414"/>
    <img src="../assets/handshake.jpg" alt="handshake">
    <div id="overlay"></div>
    <IntroText/>
    <ScrollBtn />
  </div>
</template>

<script>
import Hamburger from "../components/Hamburger.vue"
import Navbar from "../components/Navbar.vue"
import IntroText from "../components/IntroText.vue"
import ScrollBtn from "../components/ScrollBtn.vue"
export default {
  name: 'Home',
  data() {
    return{
      window: {
      width: 0,
      height: 0
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.height = window.innerHeight
      this.window.width = window.innerWidth
    }
  },
  components: {
    Navbar,
    IntroText,
    Hamburger,
    ScrollBtn
  },
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
}

img {
  width: 100%;
  height: 99vh;
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
