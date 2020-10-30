<template>
  <main v-for="post in allPosts" :key="post.id" class="container">
    <section class="card">
      <img v-bind:src="'http://localhost:5000/'+post.image"  alt="thumbnail">
      <div>
        <h2>{{post.title}}</h2>
        <p>{{post.description}}</p>
      </div>
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
  .container {
  font-family: 'Roboto', sans-serif;
  font-family: 'Montserrat', sans-serif;
  max-width: 1000px;
  overflow: hidden;
  position: relative;
  margin-left: 25%; 
  margin-top: 7%;
  }
  .card h2 {
    padding-top: 10%;
    font-size: 40px;
    margin-bottom: 3%;
  }
  .card {
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5%;
    background: #dddddd;
    z-index: 4;
    height: 40vh;
    color: black;
    margin-bottom: 5%;
  }
  .card img {
    height: 350px;
    width: 500px;
  }
  .card:nth-child(even) img{
    order: 2;
  }
  @media(max-width: 768px){
    .container{
      margin-left: 7%
    }
    .card img{
      height: 250px;
      width: 400px;
    }
    .card {
      margin-bottom: -20%
    }
  }
</style>
