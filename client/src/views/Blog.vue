<template>
  <div>
    <Navbar id="nav"/>
    <div class="content">
    <Selector/>
      <PostList/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '../components/header/Navbar.vue'
import Selector from '../components/header/Selector.vue'
import PostList from '../components/content/Posts.vue'
import Footer from "../components/footer/Footer.vue"
export default {
  name: 'Blog',
  components: {
    Navbar,
    Selector,
    PostList,
    Footer
  },
}
</script>

<style scoped>
</style>
