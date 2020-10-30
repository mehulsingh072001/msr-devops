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
export default {
  name: 'Blog',
  components: {
    Navbar,
    Selector,
    PostList
  },
}
</script>

<style scoped>
</style>
