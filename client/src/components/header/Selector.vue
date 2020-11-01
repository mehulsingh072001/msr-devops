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
    margin-left: 36%;
    padding-right: 1px;
    height: 10vh;    
    width: 240px;
    font-size: 2rem;
    margin-top: 2%;
    position: relative;
}
option {
  font-size: 1rem;
}
select {
    font-size: 1.9rem;
    background: transparent;
    color:black;
    border-bottom: 3px solid black;
    border-top: none;
    border-left: none;
    border-right: none;
    outline:none;
    display: inline-block;
    -webkit-appearance:none;
    -moz-appearance:none;
    appearance:none;
    cursor:pointer;
}

/* Targetting Webkit browsers only. FF will show the dropdown arrow with so much padding. */
@media screen and (-webkit-min-device-pixel-ratio:0) {
    select {padding-right:18px}
}

label {position:relative}
label:after {
    content:'';
   font:1.2rem "Consolas", monospace;
    color:black;
    -webkit-transform:rotate(90deg);
    -moz-transform:rotate(90deg);
    -ms-transform:rotate(90deg);
    transform:rotate(90deg);
    right:0.1rem; top:12px;
    position:absolute;
}
label:before {
    content:'';
    right:6px; top:0px;
    width:20px; height:20px;
    background:transparent;
    position:absolute;
    pointer-events:none;
    display:block;
}
@media(max-width: 1440px){
  .select{
    margin-left: 32%;
  }
}
@media(max-width: 1280px){
  .select{
    margin-left: 29%;
  }
  select{
    width: 15%;
  }
}
@media(max-width: 1240px){
  .select{
    margin-left: 28%;
  }
  select{
    width: 15.5%;
  }
}
@media(max-width: 1210px){
  .select{
    margin-left: 28%;
  }
  select{
    width: 16%;
  }
}
@media(max-width: 1160px){
  .select{
    margin-left: 27%;
  }
  select{
    width: 17%;
  }
}
@media(max-width: 1080px){
  .select{
    margin-left: 24%;
  }
  select{
    width: 18%;
  }
}
@media(max-width: 1040px){
  .select{
    margin-left: 22%;
  }
  select{
    width: 18.5%;
  }
}
@media(max-width: 1010px){
  .select{
    margin-left: 20%;
  }
  select{
    width: 19%;
  }
}
@media(max-width: 970px){
  .select{
    margin-left: 21%;
  }
  select{
    width: 20%;
  }
}
@media(max-width: 940px){
  .select{
    margin-left: 21%;
  }
  select{
    width: 20.5%;
  }
}
@media(max-width: 910px){
  .select{
    margin-left: 20%;
  }
  select{
    width: 21%;
  }
}
@media(max-width: 890px){
  .select{
    margin-left: 19%;
  }
  select{
    width: 21.5%;
  }
}
@media(max-width: 870px){
  .select{
    margin-left: 18%;
  }
  select{
    width: 22%;
  }
}
@media(max-width: 840px){
  .select{
    margin-left: 18%;
  }
  select{
    width: 23.5%;
  }
}
@media(max-width: 800px){
  .snav{
    margin-top: 4%;
  }
  .select{
    margin-left: 16%
  }
  select{
    width: 24%;
  }
}
@media(max-width: 770px){
  .select{
    margin-left: 14%
  }
  select{
    width: 24.5%;
  }
}
@media(max-width: 750px){
  .select{
    margin-left: 13%
  }
  select{
    width: 25%;
  }
}
@media(max-width: 740px){
  .select{
    margin-left: 13%
  }
  select{
    width: 25.5%;
  }
}
@media(max-width: 723px){
  .select{
    margin-left: 12%
  }
  select{
    width: 26%;
  }
}
@media(max-width: 710px){
  .select{
    margin-left: 10%
  }
  select{
    width: 26.5%;
  }
}
@media(max-width: 690px){
  .select{
    margin-left: 9.5%
  }
  select{
    width: 27.5%;
  }
}
@media(max-width: 670px){
  .select{
    margin-left: 9%
  }
  select{
    width: 28.5%;
  }
}
@media(max-width: 650px){
  .select{
    margin-left: 8%
  }
  select{
    width: 29.5%;
  }
}
@media(max-width: 620px){
  .select{
    margin-left: 7%
  }
  select{
    width: 31%;
  }
}
@media(max-width: 600px){
  .select{
    margin-left: 5%
  }
  select{
    width: 32%;
  }
}
@media(max-width: 570px){
  .select{
    margin-left: 3%
  }
  select{
    width: 33%;
  }
}
@media(max-width: 560px){
  .select{
    margin-left: 2%
  }
  select{
    width: 34%;
  }
}
@media(max-width: 542px){
  .select{
    margin-left: 1%
  }
  select{
    width: 34%;
  }
}
@media(max-width: 535px){
  .snav{
    margin-right: 8%;
  }
  .select{
    margin-left: 19%
  }
  select{
    width: 40%;
    text-align: center;
    margin-left: 37%;
  }
  label:after {
      right:4.2rem; top:53px;
      position:absolute;
  }
}
@media(max-width: 498px){
  .snav{
    margin-right: 0%;
    margin-left: -4%;
  }
  select{
    width: 38%;
    text-align: center;
    margin-left: 35%;
  }
  label:after {
      right:4rem; top:53px;
      position:absolute;
  }
}
@media(max-width: 414px){
  .snav{
    margin-right: -6%;
    margin-left: 1%;
  }
  .select{
    margin-left: 13%;
    font-size: 1.7rem;
  }
  select{
    text-align: center;
    font-size: 1.7rem;
    margin-left: 30%;
    width: 40%;
  }
  label:after {
      right:3rem; top:43px;
      position:absolute;
  }
}
@media(max-width: 375px){
  .snav{
    margin-right: 0%;
    margin-left: -15%;
    text-align: center;
  }
  .select{
    margin-left: 13%;
    font-size: 1.7rem;
  }
  select{
    font-size: 1.7rem;
    margin-left: 16%;
    width: 40%;
  }
  label:after {
      right:3.7rem; top:43px;
      position:absolute;
  }
}
</style>

