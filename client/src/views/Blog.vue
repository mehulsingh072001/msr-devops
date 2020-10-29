<template>
  <div>
    <Navbar id="nav"/>
    <Selector/>
    <div class="posts">
        <img v-for="post in allPosts" v-bind:src="'http://localhost:5000/'+post.image" :key="post.id" alt="1">
    </div>
  </div>
</template>

<script>
import Navbar from '../components/header/Navbar.vue'
import Selector from '../components/header/Selector.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Blog',
  data() {
    return {
      thumb: ''
    }
  },
  components: {
    Navbar,
    Selector
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  computed: mapGetters(['allPosts']),
  created() {
    this.fetchPosts()
  }
}
</script>

<style scoped>
</style>
