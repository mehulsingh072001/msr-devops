<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted() {
    return scrollTo(document.body, 0)
  }
}
</script>

<style>
html{ 
  scroll-behavior: smooth;
}
body{
  background: #dddddd;
}
* {
  margin: 0;
  padding: 0;
}
</style>
