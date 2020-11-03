<template>
  <div class="last">
    <div class="text">
      <h1>Last call</h1>
      <p>Lorem earum modi repellendus enim similique. A at expedita ut deleniti veniam inventore. Atque ipsa tempore sapiente consequuntur quis, ea aut Quisquam rerum est esse quam nihil dolore et quos assumenda Quis harum natus deserunt sed commodi? Autem ut eius quos reiciendis reprehenderit? Dolores libero reiciendis non aliquid nihil Sint.</p>
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
    padding-top: 5%;
    overflow: hidden;
    width: 100%;
    text-align: center;
    position: static;
  }
  h1 {
    font-size: 70px;
    text-align: center;
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
