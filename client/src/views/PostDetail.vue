<template>
  <div>
    <Navbar/>
    <div class="social">
      <a href="https://www.facebook.com/mehulsingh.rathore.355" target="_blank" id="facebook"><i class="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/mehul_msr_devs" target="_blank" id="twitter"><i class="fab fa-twitter" aria-hidden="true"></i></a>
      <a href="https://github.com/mehulsingh072001" target="_blank" id="github"><i class="fab fa-github"></i></a>
      <a href="https://www.linkedin.com/in/mehul-singh-rathore-473b221b5/" target="_blank" id="linkedin"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://www.youtube.com/channel/UCgTdlX6JftjCXtWq_LUYqjg" target="_blank" id="youtube"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="article">
        <h1>{{singlePosts.title}}</h1>
        <img class="thumb" v-bind:src="'http://192.168.43.161/'+singlePosts.image"  alt="thumbnail">
        <p>{{singlePosts.description}}</p>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '../components/header/Navbar.vue'
import Footer from '../components/footer/Footer.vue'
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'PostDetail',
  data(){
    return {
      isVisible: true
    }
  },
  methods: {
    ...mapActions(['fetchPost']),
  },
  components: {
    Navbar,
    Footer
  },
  computed: mapGetters(['singlePosts', 'allPosts']),
  created(){
    const id = this.$route.params.id
    this.fetchPost(id)
  }
}
</script>

<style scoped>
  .article{
    margin-left: 25%;
    margin-top: 3rem;
  }
  .thumb{
    height: 500px;
    width: 700px;
  }
  .social{
    display: flex;
    position: fixed;
    margin-top: 10rem;
    margin-left: 20%;
    flex-direction: column;
    text-align: center;
  }
  #facebook{
    cursor: pointer;
    padding: 0.5rem 1.7rem;
    font-size: 1.2rem;
    border: none;
    background: #1877f2;
    color: white;
    margin-bottom: 5px;
    transition: all 0.5s ease-in-out;
  }
  #facebook:hover{
    background: transparent;
    color: #1877f2;
    border: 2px solid #1877f2
  }

  #twitter{
    cursor: pointer;
    padding: 0.5rem 1.7rem;
    font-size: 1rem;
    border: none;
    background: #1da1f2;
    color: white;
    margin-bottom: 5px;
    transition: all 0.5s ease-in-out;
  }
  #twitter:hover{
    background: transparent;
    color: #1da1f2;
    border: 2px solid #1da1f2
  }

  #github{
    cursor: pointer;
    font-size: 1.4rem;
    padding: 0.5rem 1.7rem;
    border: none;
    margin-bottom: 5px;
    background: black;
    color: white;
    transition: all 0.5s ease-in-out;
  }
  #github:hover{
    background: transparent;
    color: black;
    border: 2px solid black
  }

  #linkedin{
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1.7rem;
    border: none;
    background: #2867b2;
    color: white;
    margin-bottom: 5px;
    animation: fadeIn 1s;
    transition: all 0.5s ease-in-out;
 }
   #linkedin:hover{
    background: transparent;
    color: #2867b2;
    border: 2px solid #2867b2;
  }

  #youtube{
    cursor: pointer;
    font-size: 1.3rem;
    padding: 0.5rem 1.7rem;
    border: none;
    background: #df2426;
    color: white;
    margin-bottom: 5px;
    transition: all 0.5s ease-in-out;
  }
   #youtube:hover{
    background: transparent;
    color: #df2426;
    border: 2px solid #df2426;
  }

  h1 {
    font-size: 3rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
</style>
