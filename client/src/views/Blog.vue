<template>
  <div>
    <Navbar id="nav"/>
    <Selector/>
  </div>
</template>

<script>
import Navbar from '../components/header/Navbar.vue'
import Selector from '../components/header/Selector.vue'
export default {
  name: 'Blog',
  components: {
    Navbar,
    Selector
  }
}
</script>

<style scoped>
</style>
