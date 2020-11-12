<template>
  <div class="animated-title">
    <div class="text-top">
      <div>
        <span>Hello World</span>
      </div>
    </div>
    <div class="text-bottom">
      <div>for Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dignissimos ipsa accusamus est nulla reprehenderit libero quaerat. Sint quam debitis pariatur beatae placeat repellendus enim reiciendis perspiciatis, asperiores aspernatur deserunt. the win!</div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "IntroText"
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:700');
@keyframes line {
  100% { width: 100%}
}
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animated-title {
  color: white;
  z-index: 0;
  text-align: center;
  font-family: Roboto, Arial, sans-serif;
  height: 90vmin;
  left: 53.2%;
  overflow: hidden;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 90vmin;
}
.animated-title > div {
  left: 15%;
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  padding: 2vmin 0;
  position: absolute;
}
.animated-title > div div span {
  font-size: 10vmin;
  display: block;
}
.animated-title > div.line{
  width: 1px;
  border-bottom: 3px solid #3475d1;
  animation: line 1s;
  animation-delay: .5s;
  animation-fill-mode: forwards;
  top: 0;
  left: -12%;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-fill-mode: forwards;
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: #767676;
}
.animated-title > div.text-bottom {
  bottom: 0;
  left: -12%;
}
.animated-title > div.text-bottom div {
  left: 15%;
  animation: showBottomText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}
@media(max-width: 768px){
.animated-title > div.text-bottom div {
  left: 15%;
    text-align: center;
  }
  .animated-title {
    left: 55%;
    top: 35%;
  }
  .animated-title > div {
    left: 10%;
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }
  .animated-title > div div span {
    font-size: 12vmin;
    display: block;
  }
}
</style>


