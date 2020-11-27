<template>
  <div>
  <div class="nav" :class="{'close': !isOpen}">
    <span v-on:click="toggle" v-if="isOpen"><img id="logo"  src="../assets/logo.png" alt="logo"></span>
    <span v-on:click="toggle" v-if="!isOpen"><img id="ilogo"  src="../assets/bg_logo.png" alt="logo"></span>
     <!--<div class="hamburger" v-on:click="toggle">
        <div class="ham-line"></div>
        <div class="ham-line"></div>
        <div class="ham-line"></div>
     </div>-->
     <ul class="icons" v-if="!isOpen">
        <li ><router-link class="i" to="/home"><i class="fas fa-home"></i></router-link></li>
        <li ><router-link class="i" to="/customers"><i class="fas fa-user-friends"></i></router-link></li>
        <li ><router-link class="i" to="/analytics"><i class="fas fa-chart-line"></i></router-link></li>
        <li ><router-link class="i" to="/blog"><i class="fas fa-blog"></i></router-link></li>
        <li ><a class="i" v-if="isLoggedIn" @click="logout"><i class="fas fa-sign-out-alt"></i></a></li>
      </ul>
     <ul class="full" v-if="isOpen">
        <li ><router-link class="home" to="/home"><i class="fas fa-home"></i> Home</router-link></li>
        <li ><router-link class="customers" to="/customers"><i class="fas fa-user-friends"></i> Customers</router-link></li>
        <li ><router-link class="analytics" to="/analytics"><i class="fas fa-chart-line"></i> Analytics</router-link></li>
        <li ><router-link class="blog" to="/blog"><i class="fas fa-blog"></i> Blog</router-link></li>
        <li ><a class="logout" v-if="isLoggedIn" @click="logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpen: true
  }),
  mounted() {
  },
  computed: {
    isLoggedIn: function(){ return this.$store.getters.isLoggedIn}
  },

  methods:{
    logout: function(){
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/')
      })
    },
    toggle() {
      this.isOpen = !this.isOpen
    }
  },
  name: 'Navbar'
}
</script>

<style scoped>
.nav {
  background: #1a1a1a;
  position: absolute;
  width: 12%;
  text-align: center;
  height: 100vh;
}

.i {
  font-size: 1.4rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.i a:hover{
  color: white;
}
.close{
  width: 80px
}
#ilogo {
  display: flex;
  float: left;
  height: 4vh;
  width: 3vw;
  margin-top: 40px;
  margin-bottom: 45px;
  margin-left: 15%;
}
#logo {
  display: flex;
  float: left;
  height: 4vh;
  width: 6vw;
  margin-top: 40px;
  margin-bottom: 50px;
  margin-left: 28%;
}
.nav ul li{
  list-style: none;
  margin-top: 40%;
}
.nav a {
  cursor: pointer;
  padding-bottom: 1rem;
  padding-top: 1.2rem ;
  text-decoration: none;
  font-weight: bold;
  color: white;
  transition: all 0.5s ;
  font-size: 1.2rem;
}
.nav .home{
  padding-left: 3.2rem;
  padding-right: 3.2rem;
}
.nav .analytics{
  padding-left: 2.3rem;
  padding-right: 2.3rem;
}
.nav .customers{
  padding-left: 1.7rem;
  padding-right: 1.6rem;
}

.nav .blog{
  padding-left: 3.8rem;
  padding-right: 3.8rem;
}

.nav .logout{
  padding-left: 3rem;
  padding-right: 3rem;
}

.nav a:hover{
  background: #3475d1;
  border-radius: 1rem;
}

.nav a.router-link-exact-active {
  color: #3475d1;
  border-bottom: 2px solid #3475d1;
}
@media(max-width: 768px){
  #ilogo {
    height: 4vh;
    width: 7vw;
    margin-top: 40px;
    margin-bottom: 45px;
    margin-left: 15%;
  }
}
@media(max-width: 414px){
}
</style>
