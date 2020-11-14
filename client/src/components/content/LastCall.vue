<template>
  <div class="last">
    <div class="text">
      <h1>In conclusion</h1>
      <p>We are all in one solution or everything you will ever need to build your business's
     web presence and if are reading this then we think you have read almost everything about us. So before you
      go, get advantage of our limited time period offer and book your free consultancy call to
      sky rocket
      your business.</p>
    <CallToAction id="call"/>
    </div>
  </div>
</template>

<script>
import CallToAction from '../CallToAction.vue'
export default {
  name: "LastCall",
  components: {
    CallToAction
  }
}
</script>

<style scoped>
  .last{
    background: #1a1a1a;
    color: #dddddd;
    height: 400px;
    width: 100%;
  }
  .text{
    overflow: hidden;
    width: 100%;
    text-align: center;
    position: static;
  }
  h1 {
    font-size: 60px;
    text-align: center;
    padding: 1%;
    margin-left: 34%;
    border-bottom: 1px solid #dddddd;
    max-width: 30%;
  }
  p {
    margin-top: 2%;
    position: static;
    font-size: 25px;
    width: 75%;
    margin-left: 13.5%;

  }
  #call{
      position: relative;
      margin-top: 2%;
      margin-right:0%;
      height: 90px;
  }
  .btn{
    height:  199vh;
  }
  @media(max-width: 768px) {
    #call{
        margin-top: 5.5%;
        margin-right:1%;
        height: 90px;
    }
    h1 {
      font-size: 50px;
      margin-left: 20%;
      margin-top: 3%;
      max-width: 60%;
    }
    p {
      margin-top: 2%;
      font-size: 22px;
      width: 96%;
      margin-left: 1.5%;

    }
  }
</style>
