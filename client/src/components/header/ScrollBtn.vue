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
  methods: {
  scrollToElement() {
    scrollTo(document.body, 980)
  }
}

}
</script>
<style scoped>
  button {
    cursor: pointer;
    font-size: 50px;
    z-index: 0;
    top: 70vh;
    position: absolute;
    right: 50%;
    background: transparent;
    color: white;
    border: none;
  }
</style>
