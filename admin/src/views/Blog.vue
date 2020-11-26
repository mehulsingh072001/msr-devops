<template>
  <div  class="blog">
    <PostForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PostForm from '@/components/PostForm.vue'

export default {
  computed: {
  },
  name: 'Blog',
  components: {
    PostForm
  }
}
</script>
<style scoped>
    .blog{
        margin-left: 50%;
        position: absolute;
    }
</style>
