<template>
  <div>
    <div class="name">
      <input type="text" required id="name" v-model="name"  placeholder="Name*">
      <p id="lname"></p>
    </div>
    <div class="email">
      <input type="text" required id="email" v-model="email" placeholder="E-mail*">
      <p id="lmail"></p>
    </div>
      <button v-on:click="submitInfo()">How to build my business presence</button>
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
.name{
  position: absolute;
  z-index: 12;
  top: 65vh;
  animation: showForm 3s;
  animation-fill-mode: forwards;
  border: none;
  width: 100%;
  left: 22%;
}
.email{
  position: absolute;
  z-index: 12;
  top: 65vh;
  animation: showForm 3s;
  animation-fill-mode: forwards;
  border: none;
  width: 100%;
  left: 41%;
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

#lname{
  color: red;
  font-weight: bold;
  margin-top: -1.5%;
  margin-left: 5%;
  font-size: 1.2rem;
}
#lmail{
  color: red;
  font-weight: bold;
  margin-top: -1.5%;
  margin-left: 5%;
  font-size: 1.2rem;
}

input:required:invalid{
  border-color: red;
  outline: none
}
button {
  position: absolute;
  margin-left: 1%;
  font-size: 1rem;
  animation: showForm 3s;
  animation-fill-mode: forwards;
  background: #3475d1;
  left: 60%;
  border-radius: 2rem;
  z-index: 12;
  border: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
  padding: 1.1rem;
  top: 65vh;
}
button:hover{
  background: transparent;
  border: 2px solid #3475d1;
  color: #3475d1;
  transition: all 0.4s ease-in;
}
</style>
