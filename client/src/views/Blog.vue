<template>
  <div>
    <Navbar id="nav"/>
    <Selector/>
    <PostList/>
  </div>
</template>

<script>
import Navbar from '../components/header/Navbar.vue'
import Selector from '../components/header/Selector.vue'
import PostList from '../components/content/Posts.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Blog',
  components: {
    Navbar,
    Selector,
    PostList
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
