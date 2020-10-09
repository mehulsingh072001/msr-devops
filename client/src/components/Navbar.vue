<template>
  <div>
    <nav>
      <CallToAction />
       <router-link to="/"><img id="logo" src="../assets/logo.png" alt="logo"></router-link>
       <div class="hamburger" @click="open">
         <div class="nav-line"></div>
         <div class="nav-line"></div>
         <div class="nav-line"></div>
       </div>
       <ul class="nav-links">
          <li> <router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
       </ul>
    </nav>
  </div>
</template>

<script>
import CallToAction from './CallToAction'
export default {
  name: 'Navbar',
  components: {
    CallToAction
  },
}

</script>
<style>
  button {
    margin-left: 80%;
    margin-right: 10%;
    margin-top: 25px;
  }
  nav {
    height: 10vh;
    width: 100%;
    display: inline-block;
    z-index: 2;
    overflow-x: hidden;
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
    display: inline-block;
    font-size: 16px;
  }
  .nav-links li a {
      color: white;
      font-size: 20px;
      text-decoration: none;
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
  @media(max-width: 768px){
    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
    }
    .nav-line {
      width: 30px;
      z-index: 54;
      height: 3px;
      background: white;
      margin: 5px
    }
    .nav-links li{
      opacity: 1;
    }

    .nav-links {
        position: absolute;
        background: #1a1a1a;
        height: 100vh;
        width: 100%;
        flex-direction: column;
        clip-path: circle(100px at 100% -10%);
        -webkit-clip-path: circle(100px at 90% -10%);
        transition: all 1s ease-out;
        pointer-events: none;
    }
    .nav-links.open{
        clip-path: circle(1000px at 90% -10%);
        -webkit-clip-path: circle(1000px at 90% -10%);
        pointer-events: all;
    }
    .nav-links li {
        opacity: 1;
        margin-right: 20%; 
    }
    .nav-links li a {
        font-size: 25px;
    }
    .nav-links li:nth-child(1) {
        transition: all 0.5s ease 0.2s;
    }
    .nav-links li:nth-child(2) {
        transition: all 0.5s ease 0.4s;
    }
    .nav-links li:nth-child(3) {
        transition: all 0.5s ease 0.6s;
    }
    .nav-links li:nth-child(4) {
        transition: all 0.5s ease 0.8s;
    }
    li.fade {
        opacity: 1;
    }
}
</style>
