<template>
  <div>
    <div class="input-fields">
      <input type="text" :class="{'wrong-input': !valid}" id="name" v-model="name"  placeholder="Name*">
      <input type="text" :class="{'wrong-input': !valid}" id="email" v-model="email" placeholder="E-mail*">
      <button v-on:click="submitInfo()">How to build my business presence</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'form',
  data() {
    return {
        name: '',
        email: '',
        animation: '',
        valid: true
    }
  },
  methods: {
    ...mapActions(['fillForm']),
    submitInfo(){
      var valid = true;
      if(this.name===''){
        valid = false
        this.valid = false
      }else{
        this.valid = true
      }
      if(this.email===''){
        valid = false
        this.valid = false
      }else{
        this.valid = true
      }
      if(valid){
      const newInfo = {
        name: this.name,
        email: this.email
      }
      this.fillForm(newInfo)
      }else{
        this.valid = false
      }
    },
  }
}
</script>

<style scoped>
@keyframes showForm {
   0% {opacity: 0;}
   100% {opacity: 1;}
}
.input-fields{
  position: absolute;
  z-index: 12;
  top: 65vh;
  animation: showForm 3s;
  animation-fill-mode: forwards;
  border: none;
  width: 100%;
  height: 100%;
  left: 22%;
}
input{
  margin-left: 1%;
  border-radius: 2rem;
  border: 1px solid white;
  outline: none;
  background:rgba(0, 0, 0,0.3);
  color: white;
  padding: 1rem;
  width:16%;
}

input:focus{
  border: 1px solid #3475d1;
  transition: all 0.2s ease-in;
  outline: none;
}
.wrong-input{
  border: 1px dashed red;
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
  padding: 1.1rem;
}
button:hover{
  background: transparent;
  border: 2px solid #3475d1;
  color: #3475d1;
  transition: all 0.4s ease-in;
}
@media(max-width: 768px){
  .input-fields{
    top: 50vh;
    left: 15%;
  }
  input{
    width:65%;
    margin-top: 2rem;
  }
  button {
    width: 70%;
    cursor: pointer;
    margin-top: 2rem;
  }
}
</style>
