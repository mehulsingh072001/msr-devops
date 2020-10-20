<template>
  <div class="snav">
    
    <label class="select" for="category"> I want to learn about
      <select name="category" id="category">
        <option value="#">everything</option>
        <option value="#">Linux</option>
        <option value="#">Javascript</option>
        <option value="#">PC</option>
      </select>
    </label>
  </div>
</template>

<script>

export default {
  name: 'Selector'
}
</script>

<style scoped>
.snav{
  margin-top: 2%;
}
.select {
    overflow: hidden; 
    margin-left: 33%;
    height: 10vh;    
    width: 240px;
    font-size: 2rem;
    margin-top: 2%;
    position: relative;
}

select{       
    border-top: none;
    border-bottom: 4px solid #1a1a1a;
    border-right: none;
    border-left: none;
    font-size: 30px;       
    width: 240px;
    background: transparent;
   -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
.select:after {
    content:"\f0dc";
    font-family: FontAwesome;
    color: #000;
    position: absolute; right: 0; top: 0;
    background: transparent;
    z-index: 1;
    text-align: center;
    width: 10%;
    height: 100%;      
    pointer-events: none;
    box-sizing: border-box;   
}
</style>

