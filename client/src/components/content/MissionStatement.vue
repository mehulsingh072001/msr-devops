<template>
  <h1>Why us ?</h1>
</template>

<script>
export default {
  name: 'MissionStatement'
}
</script>

<style scoped>
#stat {
  position: relative;
  text-align: center;
  width: 20%;
  margin: auto;
  margin-top: 1%;
}
h1{ 
  position: relative;
  text-align: center;
  width: 60%;
  margin: auto;
  margin-top: 1%;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid #1a1a1a;
  font-size: 50px;
  color: black;
}
@media(max-width: 1440px){
  h1{
    width: 20%
  }
}
@media(max-width: 800px){
  h1{
    font-size: 35px;
    width: 50%
  }
}
@media(max-width: 768px){
  #stat{
    width:40%
  }
}
@media(max-width: 414px){
  #stat{
    width:90%
  }
  h1{
    font-size: 35px;
    width: 50%
  }
}
@media(max-width: 375px){
  h1{
    font-size: 30px;
  }
}
</style>
