<template>
  <form action="">
    <input type="text" placeholder="Name*">
    <input type="email" placeholder="E-mail*">
    <button>Show me steps to build my online presence</button>
  </form>
</template>

<script>
export default {
  name: 'form'
}
</script>

<style scoped>
@keyframes showForm {
   0% {opacity: 0;}
   100% {opacity: 1;}
}
form{
  position: absolute;
  z-index: 12;
  top: 65vh;
  animation: showForm 3s;
  animation-fill-mode: forwards;
  width: 100%;
  left: 20%;
}
input{
  margin-left: 1%;
  border-radius: 2rem;
  background:rgba(0, 0, 0,0.3);
  color: white;
  padding: 1rem;
  appearance: none;
  width:16%
}
input:focus{
  border-color: #3475d1;
  border-radius: 2rem;
  transition: all 0.5s;
}
button {
  margin-left: 1%;
  font-size: 1rem;
  background: #3475d1;
  border-radius: 2rem;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 1rem;
}
button:hover{
  background: transparent;
  border: 2px solid #3475d1;
  color: #3475d1;
  transition: all 0.4s ease-in;
}
</style>
