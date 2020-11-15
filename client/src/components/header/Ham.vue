<template>
   <div>
    <div class="hamburger" v-on:click="toggle">
      <div class="ham-line"></div>
      <div class="ham-line"></div>
      <div class="ham-line"></div>
    </div>
    <ul id="hamlinks" :class="{'open': isOpen}">
      <button v-on:click="toggle" class="toggleBtn">&times;</button>
        <li><router-link to="/"><i class="fa fa-fw fa-home"></i> Home</router-link></li>
        <li><router-link to="/about"><i class="fa fa-fw fa-wrench"></i> About</router-link></li>
        <li><router-link to="/blog"><i class="fas fa-blog"></i> Blog</router-link></li>
     </ul>
   </div>
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
    z-index:16;
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

  .toggleBtn{
    color: white;
    position: absolute;
    z-index: 99;
    background-color: rgba(0,0,0,0.8);
    border:none ;
    font-size: 2rem;
    font-weight: bold;
    bottom: 92%;
    left: 93.2%;
    right: 2%;
    transition: 0.5s;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .toggleBtn:hover{
    color: #3475d1;
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
      z-index: 12;
      cursor: pointer;
      height: 4vh;
      margin-top: 1.8%;
      margin-left: 95%;
    }
    @media(max-width: 800px){
      .hamburger{
        margin-left: 0%;
        left: 88%;
        margin-top: 4.5%;
      }
      .ham-line{
        height: 8px;
        width: 55px;
        background: white;
        margin: 5px;
      }
      .toggleBtn{
        left: 86%;
        bottom: 92%;
      }
    }
    @media(max-width: 768px){
      .hamburger{
        margin-left: 0%;
        left: 91%;
        margin-top: 4.5%;
      }
      .toggleBtn{
        left: 86%;
        bottom: 92%;
      }
    }
    @media(max-width: 414px){
      .hamburger{
        left: 83%;
      }
    .ham-line{
      height: 4px;
      width: 40px;
      background: white;
      margin: 5px;
    }
      #hamlinks li{
        margin-right: 10%;
      }
      .toggleBtn{
        left: 80%;
      }
    }
</style>
