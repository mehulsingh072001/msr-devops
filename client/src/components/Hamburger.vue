<template>
  <div class="hamburger" >
   <div class="nav-line"></div>
   <div class="nav-line"></div>
   <div class="nav-line"></div>
       <ul class="ham-links">
          <li> <router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
       </ul>
  </div>
</template>

<script>
export default {
  name: "Hamburger",
}
</script>

<style>
  .hamburger {
    position: absolute;
    cursor: pointer;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
  }
  .ham-links li {
    margin-top: -5%;
    padding-left: 2%;
    margin-top: 37px;
    list-style: none;
    display: inline-block;
    font-size: 16px;
  }
  .ham-links li a {
      color: white;
      font-size: 20px;
      text-decoration: none;
  }
  .ham-links li a:hover {
    text-decoration: none;
    border-bottom: 1px solid #3475d1;
  }
  .ham-links li a.router-link-exact-active {
    color: #3475d1;
    font-weight: bold;
    border-bottom: 1px solid #3475d1;
  }
  .nav-line {
    width: 30px;
    height: 3px;
    background: white;
    margin: 5px
  }
  .ham-links li{
    opacity: 1;
  }

  .ham-links {
      position: fixed;
      background: #1a1a1a;
      height: 100vh;
      width: 100%;
      flex-direction: column;
      clip-path: circle(100px at 100% -10%);
      -webkit-clip-path: circle(100px at 90% -10%);
      transition: all 1s ease-out;
      pointer-events: none;
  }
  .ham-links{
      clip-path: circle(1000px at 90% -10%);
      -webkit-clip-path: circle(1000px at 90% -10%);
      pointer-events: all;
  }
  .ham-links li {
      opacity: 1;
      margin-right: 20%; 
  }
  .ham-links li a {
      font-size: 25px;
  }
  .ham-links li:nth-child(1) {
      transition: all 0.5s ease 0.2s;
  }
  .ham-links li:nth-child(2) {
      transition: all 0.5s ease 0.4s;
  }
  .ham-links li:nth-child(3) {
      transition: all 0.5s ease 0.6s;
  }
  .ham-links li:nth-child(4) {
      transition: all 0.5s ease 0.8s;
  }
  li.fade {
      opacity: 1;
  }
</style>
