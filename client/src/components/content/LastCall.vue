<template>
  <div class="last">
    <div class="text">
      <h1>Last call</h1>
      <p>Lorem earum modi repellendus enim similique. A at expedita ut deleniti veniam inventore. Atque ipsa tempore sapiente consequuntur quis, ea aut Quisquam rerum est esse quam nihil dolore et quos assumenda Quis harum natus deserunt sed commodi? Autem ut eius quos reiciendis reprehenderit? Dolores libero reiciendis non aliquid nihil Sint.</p>
    </div>
    <CallToAction id="action"/>
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
    position: static ;
    color: #dddddd;
    height: 90vh;
    width: 100%;
  }
  .text{
    padding-top: 130px;
    z-index: 4;
    text-align: center;
    position: static;
  }
  h1 {
    position: static;
    font-size: 70px;
    text-align: center;
      z-index: -4;
  }
  p {
    width: 40vw;
    margin-left: 30%;
    margin-top: 2%;
    position: static;
    font-size: 25px;

  }
  #action{
      position: static;
      z-index: 40;
      overflow: hidden;
      margin-left: -35%;
      margin-top: 5%;
  }
</style>
