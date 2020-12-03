<template>
  <div>
    <Preloader v-if="isLoading"/>
    <h1 v-if="error">There is an error</h1>
      <section class="card">
          <img class="thumb" v-bind:src="'http://192.168.43.161/'+singlePosts.image"  alt="thumbnail">
            <div class="content">
              <h2>{{singlePosts.title}}</h2>
              <p>{{singlePosts.description}}</p>
            </div>
      </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'PostDetail',
  methods: {
    ...mapActions(['fetchPost'])
  },
  computed: mapGetters(['singlePosts', 'allPosts']),
  created(){
    const id = this.$route.params.id
    this.fetchPost(id)
  }
}
</script>
