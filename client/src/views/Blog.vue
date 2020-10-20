<template>
  <div>
    <Navbar id="nav"/>
    <Selector/>
    <div class="posts">
      <div v-for="post in allPosts" :key="post.id" class="post">
        {{ post.title }}
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/header/Navbar.vue'
import Selector from '../components/header/Selector.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Blog',
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
