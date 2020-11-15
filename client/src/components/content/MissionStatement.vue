<template>
  <h1>Why us ?</h1>
</template>

<script>
export default {
  name: 'MissionStatement'
}
</script>

<style scoped>
h1{ 
  position: relative;
  text-align: center;
  margin: auto;
  margin-top: 1%;
  font-weight: bold;
  padding: 1rem;
  width: 60%;
  border-bottom: 1px solid #1a1a1a;
  font-size: 40px;
  color: black;
}
@media(max-width: 768px){
  #stat{
    width:40%
  }
}
@media(max-width: 414px){
  #stat{
    width: 100%
  }
}
</style>
