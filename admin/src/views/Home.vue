<template>
  <div v-if="isLoggedIn" class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  computed: {
    isLoggedIn: function(){ return this.$store.getters.isLoggedIn}
  },
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
