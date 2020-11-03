<template>
  <div class="hamburger" v-on:click="toggle">
    <div class="ham-line"></div>
    <div class="ham-line"></div>
    <div class="ham-line"></div>
  </div>
  <ul id="hamlinks" :class="{'open': isOpen}">
      <li><router-link to="/"><i class="fa fa-fw fa-home"></i> Home</router-link></li>
      <li><router-link to="/about"><i class="fa fa-fw fa-wrench"></i> About</router-link></li>
      <li><router-link to="/blog"><i class="fas fa-blog"></i> Blog</router-link></li>
   </ul>
</template>

<script>
export default {
  name: 'Ham',
  components: {
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

<style scoped>
  #hamlinks {
    z-index:99;
    display: flex;
    list-style: none;
    font-size: 1.6rem;
    width: 100%;
    height: 100vh;
    justify-content: space-around;
    align-items: center;
    margin-left: auto;
    position: absolute;
    background:rgba(0, 0, 0,0.9);
    flex-direction: column;
    clip-path: circle(100px at 90% -30%);
    -webkit-clip-path: circle(100px at 90% -30%);
    transition: all 0.4s ease-in;
  }

    #hamlinks li a{
      color: white;
      border-bottom: 3px solid #3475d1;
      text-decoration: none;
    }
    #hamlinks.open {
      clip-path: circle(2000px at 90% -10%);
      overflow: hidden;
      padding: 1rem;
      -webkit-clip-path: circle(1000% at 90% -10%);;
    }
    #hamlinks li a:hover {
      border-bottom: 3px solid #3475d1;
      color: #3475d1;
      font-weight: bold;
    transition: all 0.3s ease-in;
    }
    .ham-line{
      height: 5px;
      width: 45px;
      background: white;
      margin: 5px;
    }
    .hamburger{
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      position: absolute;
      overflow: hidden;
      z-index: 100;
      cursor: pointer;
      height: 4vh;
      margin-top: 1.8%;
      margin-left: 95%;
    }
</style>
