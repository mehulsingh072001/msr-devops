<template>
    <div class="nav">
      <ul>
        <li ><router-link class="home" to="/home"><i class="fas fa-home"></i> Home</router-link></li>
        <li ><router-link class="customers" to="/customers"><i class="fas fa-user-friends"></i> Customers</router-link></li>
        <li ><router-link class="analytics" to="/analytics"><i class="fas fa-chart-line"></i> Analytics</router-link></li>
        <li ><router-link class="blog" to="/blog"><i class="fas fa-blog"></i> Blog</router-link></li>
        <li ><a class="logout" v-if="isLoggedIn" @click="logout"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
      </ul>
    </div>
</template>

<script>
export default {
  computed: {
    isLoggedIn: function(){ return this.$store.getters.isLoggedIn}
  },
  methods:{
    logout: function(){
      this.$store.dispatch('logout')
      .then(() => {
        this.$router.push('/')
      })
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
.nav .home:hover{
  padding-left: 3.2rem;
  color: white;
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
</style>
