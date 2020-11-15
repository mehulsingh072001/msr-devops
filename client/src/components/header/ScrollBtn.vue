<template>
  <div>
    <button @click="scrollToElement"><i class="fas fa-angle-down"></i></button>
  </div>
</template>

<script>
export default {
  name: "ScrollBtn",
  components: {
  },
  unmounted: function() {
    document.removeEventListener('scroll', this.scrollToElement)
  },
  methods: {
    scrollToElement(){
    var elmnt = document.getElementById("nav")
      elmnt.scrollIntoView()
    }
  }

}
</script>
<style scoped>
  button {
    cursor: pointer;
    font-size: 50px;
    top: 91vh;
    position: absolute;
    right: 47.5%;
    background: transparent;
    outline: none;
    color: white;
    border: none;
  }
  @media(max-width: 768px){
    button{
      top: 90vh;
      z-index: 15;
      right: 46%;
    }
  }
  @media(max-width: 414px){
    button{
      right: 45%;
      font-size: 35px;
    }
  }
</style>
