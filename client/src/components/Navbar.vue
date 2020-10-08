<template>
  <div>
    <nav>
      <CallToAction />
       <router-link to="/"><img id="logo" src="../assets/logo.svg" alt="logo"></router-link>
       <ul class="nav-links">
          <li> <router-link to="/"><i class="fa fa-fw fa-home"></i>Home</router-link></li>
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
  }
}

</script>
<style>
  button {
    margin-left: 80%;
    margin-right: 10%;
    margin-top: 20px;
  }
  nav {
    height: 10vh;
    display: inline-block;
    z-index: 2;
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
      font-weight: bold;
      text-decoration: none;
  }
  .nav-links li a.router-link-exact-active {
    color: #3475d1;
    font-weight: bold;
    border-bottom: 1px solid #3475d1;
  }
</style>
