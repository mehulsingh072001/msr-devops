<template>
  <div class="last">
    <div class="text">
      <h1>Why us ?</h1>
      <p></p>
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
    height: 600px;
    width: 100%;
  }
  .text{
    overflow: hidden;
    width: 100%;
    text-align: center;
    position: static;
  }
  h1 {
    font-size: 70px;
    text-align: center;
    padding: 1%;
    margin-left: 40%;
    border-bottom: 1px dashed #dddddd;
    max-width: 20%;
  }
  p {
    margin-top: 2%;
    position: static;
    font-size: 25px;
    width: 70%;
    margin-left: 15%;

  }
  #call{
      position: relative;
      margin-top: 2%;
      margin-right:10%;
      height: 90px;
  }
  .btn{
    height:  199vh;
  }
  @media(max-width: 768px) {
    #call{
        margin-top: 4%;
        margin-right:20%;
        height: 90px;
    }
  }
</style>
