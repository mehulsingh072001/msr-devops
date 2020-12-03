<template>
  <div>
    <Preloader v-if="isLoading"/>
    <h1 v-if="error">There is an error</h1>
    <main v-for="post in allPosts" :key="post._id" class="container">
      <section class="card">
          <img class="thumb" v-bind:src="'http://192.168.43.161/'+post.image"  alt="thumbnail">
            <div class="content">
              <h2>{{post.title}}</h2>
              <p>{{post.description}}</p>
              <router-link :to="{name: 'post_detail' , params:{ id: post._id}}" class="more">Read More</router-link>
            </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Preloader from '../Preloader.vue'
export default {
  data(){
    return{
      isLoading: false,
      error: false
    }
  },
  name: 'PostList',
  components: {
    Preloader
  },
  methods: {
    ...mapActions(['fetchPosts'])
  },
  computed: mapGetters(['allPosts']),
  created() {
    this.isLoading = true
    this.fetchPosts().then(() => this.isLoading = false).catch(() => this.error = true)
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
  box-shadow: 1px 1px 5px 6px #ccc;
  margin-left: 23%; 
  margin-top: 2%;
  }

  .more{
    margin-top: 20%;
    cursor: pointer;
    color: white;
    background: #3475d1;
    border: none;
    padding: 1rem;
    font-size: 1rem;
    transition: all 0.3s;
  }
  
  .more:hover{
    background: #dddddd;
    color: #3475d1;
    border: 3px solid #3475d1;
  }

  .card h2 {
    padding-top: 10%;
    font-size: 40px;
  }

  .content{
    margin-left: 2rem;
  }
  .card {
    display: grid;
    overflow: hidden;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    background: #dddddd;

    z-index: 4;
    height: 38vh;
    color: black;
    padding: 1rem;
  }
  .card img {
    height: 350px;
    width: 500px;
  }
  .container:nth-child(even) .thumb{
    order: 2;
  }
  @media(max-width: 1440px){
    .container {
      margin-left: 17%; 
      margin-top: 3%;
    }
  }
  @media(max-width: 1280px){
    .container {
      margin-left: 11%; 
      margin-top: 3%;
    }
  }
  @media(max-width: 1250px){
    .container {
      margin-left: 10%; 
      padding-right: 6%; 
      margin-top: 3%;
    }
  }
  @media(max-width: 1200px){
    .container {
      margin-left: 10%; 
      padding-right: 9%; 
      margin-top: 3%;
    }
  }

  @media(max-width: 1176px){
    .card h2 {
      padding-top: 10%;
      font-size: 33px;
    }
    .content{
      margin-left: 1rem;
    }
    .card img {
      height: 300px;
      width: 450px;
    }
  }

  @media(max-width: 980px){
    .container {
      margin-left: 6%; 
      padding-right: 7%; 
      margin-top: 3%;
    }
  }
  @media(max-width: 904px){
    .container {
      margin-left: 5%; 
      padding-right: 8%; 
      margin-top: 3%;
    }
    .card h2 {
      padding-top: 5%;
      font-size: 32px;
    }
    .card{
      margin-bottom: -10%;
      width: 98%;
    }
    .card img {
      height: 250px;
      width: 400px;
    }
  }

  @media(max-width: 839px){
    .container {
      margin-left: 2%; 
      padding-right: 6%; 
      margin-top: 3%;
    }
  }

  @media(max-width: 800px){
    .container {
      margin-left: 2.5%; 
      margin-right: 2%;
      margin-top: 3%;
    }
    .card h2 {
      padding-top: 10%;
    }
    .card{
      margin-bottom: -29%;
    }
    .content{
      margin-left: 2rem;
    }
    .card img {
      height: 250px;
      width: 400px;
    }
  }
  @media(max-width: 768px){
    .container {
      margin-left: 1%; 
      padding-right: 3.5%; 
      margin-top: 3%;
    }
    .card img {
      height: 230px;
      width: 380px;
    }
    .card {
      margin-bottom: -20%;
    }
  }
  @media(max-width: 750px){
    .container {
      margin-left: 0.5%; 
      padding-right: 1%; 
      margin-top: 3%;
    }
    .card h2 {
      padding-top: 5%;
      font-size: 30px;
    }
    .card img {
      height: 210px;
      width: 360px;
    }
    .card {
      margin-bottom: -25%;
    }
    .content{
      margin-left: 0rem;
    }
  }
  @media(max-width:660px){
    .container{
      margin-left: 4%;
      margin-right: 5%;
      margin-top: 5%;
      border-bottom: 1px solid black;
      max-height: 60vh;
    }
    .content {
      z-index: 4;
      text-align: center;
      margin-left: 0;
      width: 100%;
    }
    .card h2 {
      font-size: 1.6rem;
      padding-top: 5%;
    }
    .card img {
      height: 350px;
      width:550px;
    }
    .card p{
      text-align:center ;
    }
    .card {
      height: 80vh;
      display: block;
      margin-bottom: -10%;
      grid-gap: 1rem;
    }
    .container:nth-child(even) .content{
      margin-left: 0rem;
    }
  }
  @media(max-width:620px){
    .container{
      margin-left: 2%;
      margin-right: 1%;
      margin-top: 5%;
      border-bottom: 1px solid black;
      max-height: 60vh;
    }
  }
  @media(max-width:600px){
    .container{
      margin-left: 1%;
      margin-right: 1%;
      margin-top: 5%;
      border-bottom: 1px solid black;
      max-height: 60vh;
    }
    .card img {
      height: 350px;
      width: 550px;
    }
  }
  @media(max-width: 414px){
    .container{
      margin-left: 0%;
      margin-right: 4.5%;
      margin-top: 1%;
    }
    .content {
      z-index: 4;
      text-align: center;
      margin-left: 0;
      width: 100%;
    }
    .card h2 {
      font-size: 1.6rem;
      padding-top: 5%;
    }
    .card img {
      height: 250px;
      width: 400px;
    }
    .card {
      height: 80vh;
      display: block;
      margin-bottom: -70%;
      grid-gap: 1rem;
    }
    .container:nth-child(even) .content{
      margin-left: 0rem;
    }
  }
  @media(max-width: 360px){
    .card{
      margin-bottom: -84%;
    }
  }
</style>
