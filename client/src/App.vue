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
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Roboto&display=swap');
html{ 
  font-family: 'Roboto', sans-serif;
  font-family: 'Montserrat', sans-serif;
  scroll-behavior: smooth;
  outline: none;
}
body{
  background: #dddddd;
}
* {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
</style>
