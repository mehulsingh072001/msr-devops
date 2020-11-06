<template>
  <div>
    <input type="text" id="name" v-model="name"  placeholder="Name*">
    <input type="email" id="email" v-model="email" placeholder="E-mail*">
    <button v-on:click="submitInfo()">How to build my business presence</button>
    <p id="demo"></p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'form',
  data() {
    return {
        name: '',
        email: ''
    }
  },
  methods: {
    ...mapActions(['fillForm']),
    submitInfo(){
      var name = document.getElementById("name")
      if(name.value === ""){
        name.style.border = "1px solid red"
      }
      var email = document.getElementById("email")
      if(email.value === ""){
        email.style.border = "1px solid red"
      }
      const newInfo = {
        name: this.name,
        email: this.email
      }
      this.fillForm(newInfo)
    },
  }
}
</script>

<style scoped>
@keyframes showForm {
   0% {opacity: 0;}
   100% {opacity: 1;}
}
div{
  position: absolute;
  z-index: 12;
  top: 65vh;
  animation: showForm 3s;
  animation-fill-mode: forwards;
  border: none;
  width: 100%;
  left: 20%;
}
input{
  margin-left: 1%;
  border-radius: 2rem;
  border: 1px solid #3475d1;
  background:rgba(0, 0, 0,0.3);
  color: white;
  padding: 1rem;
  width:16%;
}
p {
  padding: 2rem;
  color: white;
}
input:required {
  border: none;
  outline: none;
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
