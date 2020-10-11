<template>
  <div>
    <nav>
      <CallToAction />
       <router-link to="/"><img id="logo" src="../../assets/logo.png" alt="logo"></router-link>
       <div class="hamburger" v-on:click="toggle">
          <div class="ham-line"></div>
          <div class="ham-line"></div>
          <div class="ham-line"></div>
       </div>
      <ul id="hamlinks" :class="{'open': isOpen}">
          <li> <router-link to="/"><i class="fa fa-fw fa-home"></i> Home</router-link></li>
          <li><router-link to="/about"><i class="fa fa-fw fa-wrench"></i> About</router-link></li>
       </ul>
       <ul class="nav-links">
          <li> <router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
       </ul>
    </nav>
  </div>
</template>

<script>
import CallToAction from '../CallToAction'
export default {
  name: 'Navbar',
  components: {
    CallToAction,
  },
  data: () => ({
    isOpen: false
  }),
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>
  .action {
    margin-left: 80%;
    margin-right: 10%;
    margin-top: 25px;
  }
  #hamlinks{
    display: none;
  }
  nav {
    height: 10vh;
    width: 100%;
    display: inline-block;
    z-index: 1;
  }
  #logo {
    display: flex;
    float: left;
    height: 5vh;
    width: 8vw;
    margin-top: 20px;
    margin-left: 10%;
  }
  .nav-links li {
    margin-top: -5%;
    padding-left: 2%;
    margin-top: 37px;
    list-style: none;
    overflow: hidden;
    display: inline-block;
    font-size: 16px;
  }
  .nav-links li a {
      color: white;
      font-size: 20px;
      text-decoration: none;
      overflow: hidden;
  }
  .nav-links li a:hover {
    text-decoration: none;
    border-bottom: 1px solid #3475d1;
  }
  .nav-links li a.router-link-exact-active {
    color: #3475d1;
    font-weight: bold;
    border-bottom: 1px solid #3475d1;
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
  @media(max-width: 662px){
    #logo{
      width: 20vw;
      height: 5vh;
    }
    .nav-links li{
      opacity: 0;
    }
    .ham-line{
      height: 3px;
      width: 40px;
      background: white;
      margin: 5px;
    }
    .hamburger{
      position: absolute;
      overflow: hidden;
      z-index: 100;
      cursor: pointer;
      height: 4vh;
      right: 5%;
      top: 5%;
    }
    #hamlinks {
      z-index:99;
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
    }
</style>
