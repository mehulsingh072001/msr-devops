<template>
  <div>
    <Preloader v-if="isLoading"/>
    <h1 v-if="error">There is an error</h1>
    <main v-for="post in allPosts" :key="post.id" class="container">
      <section class="card">
          <img class="thumb" v-bind:src="'http://192.168.43.161/'+post.image"  alt="thumbnail">
            <div class="content">
              <h2>{{post.title}}</h2>
              <p>{{post.description}}</p>
              <router-link :to="{name: 'post_detail' , params:{ title: post.title}}" class="more">Read More</router-link>
            </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'PostDetail',
  methods: {
    ...mapActions(['fetchCats'])
  },
  computed: mapGetters(['allPosts']),
  created(){
    this.fetchPosts()
  }
}
</script>
