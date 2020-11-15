<template>
  <div id="action">
    <button v-on:click="PopOpen" @keydown.esc="isOpen = false" class="btn">Let's talk</button>
      <transition name="fade" v-on:enter="enter">
        <div id="modal"  v-if="isOpen">
          <button v-on:click="PopClose" class="closeBtn">&times;</button>
          <div class="modal-content">
             <h1 class="heading">Book Your Appointment !</h1>
          </div>
        </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "CallToAction",
  data: () => ({
    isOpen: false
  }),
  mounted(){
  },
  methods: {
    PopOpen() {
      this.isOpen = true
    },
    PopClose() {
      this.isOpen = false
    },
    return(){
    var modal = this.isOpen
    window.onclick = function(event){
      if(event.target == modal){
        modal = false
      }
    }
    }
  }
}
</script>

<style scoped>
  @keyframes animateOpen{
    from{top: -300px; opacity: 0;}
    to{top: 0; opacity: 1;}
  } 
  @keyframes animateClose{
    from{top: 0; opacity: 1;}
    to{top: -300px; opacity: 0;}
  } 
@keyframes showButton {
   0% {opacity: 0;}
   100% {opacity: 1;}
}
  #action{
    z-index: 16;
    animation: showButton 3s;
    animation-fill-mode: forwards;
  }
  .btn{
    font-size: 22px;
    font-weight: bold;
    padding: 12px 30px;
    overflow: hidden;
    cursor: pointer;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 15px;
    border: none;
    background: #3475d1;
  }

  .btn:hover{
    background: transparent;
    border: 1px solid #3475d1;
    color: #3475d1;
    transition: all 0.2s ease-in;
  }

  .closeBtn{
    z-index: 300;
    background-color: rgba(0,0,0,0.8);
    color: white;
    margin-left: 95%;
    margin-top: 0.8%;
    border: none;
    font-size: 2.3rem;
    font-weight: bold;
    cursor: pointer;
    padding: 0.5rem 1rem;
    transition: all 0.5s;
  }
  .closeBtn:hover{
    color: #3475d1;
  }

  #modal{
    z-index: 20;
    position: fixed;
    left: 0;
    transition: all 0.5s;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background:rgba(0, 0, 0,0.9);
  }

  .overlay {
    width: 100vw;
    height: 100vh;
  }
  p {
    color: black;
  }
  /* Modal Content/Box */
  .modal-content {
    background-color: #dddddd;
    text-align: center;
    height: 80vh;
    margin: auto; 
    border-radius: 1rem;
    border: 1px solid #888;
    width: 80%; 
  }

  .heading{
    color: black;
    border-bottom: 3px solid #3475d1;
    margin-left: 35%;
    margin-top: 0.5%;
    width: 30%;
    padding: 0.5rem;
  }
  .fade-enter-active, .fade-leave-active {
    animation: animateOpen 0.5s;
  }
  .fade-enter, .fade-leave-to {
    animation: animateClose 0.8s;
  }

  @media(max-width: 768px) {
    .btn{
      font-size: 22px;
      font-weight: bold;
      padding: 12px 30px;
      overflow: hidden;
      cursor: pointer;
      color: white;
      text-decoration: none;
      text-align: center;
      border-radius: 15px;
      border: none;
      background: #3475d1;
    }
  }
  @media(max-width: 414px){
    .btn{
      font-size: 18px;
      padding: 8px 27px;
    }
  }
  @media(max-width: 375px){
    .btn{
      font-size: 15px;
      padding: 10px 28px;
    }
  }
</style>
