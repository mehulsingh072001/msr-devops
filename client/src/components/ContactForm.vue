<template>
    <div class="container">
      <input type="text" id="name" v-model="name" placeholder="Name">
      <input type="email" id="email" v-model="email" placeholder="E-mail">
      <textarea placeholder="Your message" id="message" v-model="message"></textarea>
      <button v-on:click="submitInfo()">Submit</button> 
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ContactForm',
  data(){
    return{
      name: '',
      email:'',
      phone: '',
      message: '',
      slot_date: '',
      slot_time: ''
    }
  },
  components: {
  },
  methods: {
    ...mapActions(['fillForm']),
    submitInfo(){
      const newInfo = {
        name: this.name,
        email: this.email,
        message: this.message,
    //    phone: this.phone,
    //    slot_date: this.slot_date,
    //    slot_time: this.slot_time
      }
      this.fillForm(newInfo)
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 25%;
}
input{
  margin-top: 2%;
  border-radius: 1rem;
  padding: 1rem;
}
#message{
  margin-top: 2%;
  padding: 1rem;
  height: 20vh;
  border-radius: 1rem;
}

button{
  border: none;
  margin-top: 2%;
  padding: 1rem;
  background: #3475d1;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 1rem;
}
@media(max-width: 768px){
  .container{
    display: flex;
    margin-top: 5%;
    flex-direction: column;
    width: 80%;
    margin-left: 10%;
  }
}
</style>
