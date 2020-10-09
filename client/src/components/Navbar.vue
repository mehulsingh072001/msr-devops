<template>
  <div>
    <nav v-if="window.width === 768">
      <CallToAction />
       <router-link to="/"><img id="logo" src="../assets/logo.png" alt="logo"></router-link>
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
  data() {
    return{
      window: {
      width: 0,
      height: 0
      }
    }
  },
  created() {
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
    CallToAction,
  }
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
</style>
