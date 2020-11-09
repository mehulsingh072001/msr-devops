<template>
  <div>
    <button v-on:click="PopOpen" class="btn">Let's talk</button>
      <transition name="fade" v-on:enter="enter">
        <div  id="modal" v-if="isOpen">
          <div class="modal-content">
          <button v-on:click="PopClose" class="closeBtn">&times;</button>
            <p>Some text in the modal</p>
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
  methods: {
    PopOpen() {
      this.isOpen = true
    },
    PopClose() {
      this.isOpen = false
    }
  }
}
</script>

<style >
  @keyframes animateOpen{
    from{top: -300px; opacity: 0;}
    to{top: 0; opacity: 1;}
  } 
  @keyframes animateClose{
    from{top: 0; opacity: 1;}
    to{top: -300px; opacity: 0;}
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
    z-index: 4;
  }

  .btn:hover{
    background: transparent;
    border: 1px solid #3475d1;
    color: #3475d1;
    transition: all 0.4s ease-in;
  }

  .closeBtn{
    z-index: 12;
  }

  #modal{
    position: fixed;
    z-index:12 ;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
  }

  p {
    color: black;
  }
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
  @media(max-width: 768px) {
    .action {
      margin-right: 10%;
    }
  }
</style>
