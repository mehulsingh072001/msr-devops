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
    z-index: 0;
    top: 91vh;
    position: absolute;
    right: 47.5%;
    background: transparent;
    color: white;
    border: none;
  }
  label{
    position: absolute;
    z-index: 12;
    color: white;
    font-size: 1.2rem;
    top: 96vh;
    right: 44%;
  }
</style>
