<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view ></router-view>
    </transition>
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
  overflow-x: hidden;
  scroll-behavior: smooth;
  outline: none;
}
body{
  overflow-x: hidden;
  background: #dddddd;
}
* {
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}
  @keyframes animateOpen{
    from{left: -300px; opacity: 0;}
    to{left: 0; opacity: 1;}
  } 
  @keyframes animateClose{
    from{left: 0; opacity: 1;}
    to{left: -300px; opacity: 0;}
  } 
 .fade-enter-active, .fade-leave-active {
    animation: animateOpen 0.5s;
  }
  .fade-enter, .fade-leave-to {
    animation: animateClose 0.8s;
  }

</style>
