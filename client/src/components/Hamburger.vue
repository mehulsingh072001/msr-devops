<template>
  <div>
   <router-link to="/"><img id="ham-logo" src="../assets/logo.png" alt="logo"></router-link>
    <div class="hamburger" v-on:click="toggle">
     <div class="ham-line"></div>
     <div class="ham-line"></div>
     <div class="ham-line"></div>
    </div>
    <ul id="hamlinks" :class="{'open': isOpen}">
        <li> <router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
     </ul>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: false
  }),
  name: "Hamburger",
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
body{
  overflow: hidden;
}
#ham-logo {
  display: flex;
  position: absolute;
  z-index: 5;
  float: left;
  height: 5vh;
  width: 25vw;
  margin-top: 30px;
  overflow: hidden;
  margin-left: 5%;
}
.ham-line{
  height: 3px;
  width: 40px;
  background: white;
  margin: 5px;
}
.hamburger{
  position: fixed;
  overflow: hidden;
  z-index: 19999;
  cursor: pointer;
  height: 4vh;
  right: 5%;
  top: 5%;
}
#hamlinks {
  z-index: 19998;
  display: flex;
  list-style: none;
  width: 100%;
  height: 99vh;
  justify-content: space-around;
  align-items: center;
  margin-left: auto;
  position: absolute;
  background: #5b78c7;
  flex-direction: column;
  clip-path: circle(100px at 90% -30%);
  -webkit-clip-path: circle(100px at 90% -30%);
  transition: all 1.5s ease-in-out;
}
#hamlinks li a{
  color: white;
  text-decoration: none;
}
#hamlinks.open {
  clip-path: circle(1000px at 90% -10%);
  -webkit-clip-path: circle(1000% at 90% -10%);;
}
</style>
