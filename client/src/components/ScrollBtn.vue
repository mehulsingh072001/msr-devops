<template>
  <div>
    <button @click="$event('scroll')"><i class="fas fa-angle-down"></i></button>
  </div>
</template>

<script>
export default {
  name: "ScrollBtn",
  methods: {
    scroll(e){
      e.window.scrollBy(0, 100)
    }
  }
}
</script>
<style scoped>
  button {
    font-size: 50px;
    z-index: 4;
    top: 70vh;
    right: 38%;
    background: transparent;
    color: white;
    border: none;
  }
</style>
