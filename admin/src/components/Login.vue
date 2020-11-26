<template>
 <div v-if="!isLoggedIn">
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
     <label>Email</label>
     <input required v-model="email" type="email" placeholder="Name"/>
     <label>Password</label>
     <input required v-model="password" type="password" placeholder="Password"/>
     <hr/>
     <button type="submit">Login</button>
   </form>
 </div>
</template>

<script>
export default {
  data(){
    return{
      email: "",
      password: ""
    }
  },
  computed: {
    isLoggedIn: function(){ return this.$store.getters.isLoggedIn}
  },
  methods: {
    login: function(){
      let email = this.email
      let password = this.password
      this.$store.dispatch('login', { email, password})
      .then(() => this.$router.push('/home'))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
  .login{
    position: absolute;
    margin-left: 50%;
  }
</style>
