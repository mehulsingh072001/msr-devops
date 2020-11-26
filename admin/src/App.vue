<template>
  <div id="app">
    <router-view/>
    <Navbar/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components:{
    Navbar
  },
  created: function(){
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(){
        if(err.status === 401 && err.config && !err.config.__isRetryRequest){
          this.$store.dispatch('logout')
        }
        throw err;
      })
    })
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}


</style>
