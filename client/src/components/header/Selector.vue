<template>
  <div @change="fetchCats($event)" class="snav">
    <label  class="select" for="category"> I want to learn about
      <select  name="category" id="category">
        <option value="everything">everything</option>
        <option value="linux">Linux</option>
        <option value="web-dev">web-dev</option>
        <option value="pc">PC</option>
      </select>
    </label>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Selector',
  methods: {
    ...mapActions(['fetchCats'])
  },
  computed: mapGetters(['allPosts']),
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
option {
  font-size: 1rem;
}

select{       
    border-top: none;
    border-bottom: 4px solid #1a1a1a;
    border-right: none;
    border-left: none;
    width: 240px;
    font-size: 2rem;
    background: transparent;
   -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
@media(max-width: 768px){
  .select{
    margin-left: 14%
  }
}
</style>

