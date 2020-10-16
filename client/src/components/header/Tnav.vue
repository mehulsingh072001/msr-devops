<template>
  <div>
    <nav id="tnav">
      <CallToAction class="action"/>
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
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
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
  .btn{
    margin-top: 1%;
  }
  .action {
    margin-left: 85%;
    margin-right: 10%;
  }
  #hamlinks{
    display: none;
  }
  #tnav {
    overflow: hidden;
    font-family: none;
    height: 10vh;
    width: 100%;
    background: transparent;
    z-index: 1;
  }
  #logo {
    display: flex;
    float: left;
    height: 5vh;
    width: 8vw;
    margin-top: 20px;
    margin-left: 5%;
  }
  .nav-links li {
    margin-top: -5%;
    padding-left: 2%;
    margin-top: 37px;
    list-style: none;
    overflow: hidden;
    display: inline-block;
    font-size: 24px;
  }
  .nav-links li a {
      color: white;
      text-decoration: none;
      overflow: hidden;
  }
  .nav-links li a:hover {
    border-bottom: 1px solid #3475d1;
    font-weight: bold;
  }
  .nav-links li a.router-link-exact-active {
    color: #3475d1;
    text-decoration: none;
    font-weight: bolder;
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

  /* ipad */
  @media(max-width: 768px){
    .btn{
      margin-top: 3%
    }
    .action{
      margin-left: 73%;
    }
  #logo {
    height: 2vh;
    width: 1vw;
    margin-top: 20px;
    margin-left: -1%;
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
  @media(max-width: 662px){
    #logo{
      width: 20vw;
      height: 5vh;
    }
    nav{
      position: static;
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
    .nav-links {
      position: absolute;
      display: flex;
      background: #1a1a1a;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      clip-path: circle(100px at 100% -10%);
      -webkit-clip-path: circle(100px at 90% -10%);
      transition: all 1s ease-out;
      pointer-events: none;
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
