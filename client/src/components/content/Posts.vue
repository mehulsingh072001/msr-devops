<template>
  <main v-for="post in allPosts" :key="post.id" class="container">
    <section class="card">
      <img v-bind:src="'http://localhost:5000/'+post.image"  alt="1">
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'PostList',
  components: {
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
