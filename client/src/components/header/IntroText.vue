<template>
  <div class="animated-title">
    <div class="text-top">
      <div>
        <span>Build your web presence</span>
      </div>
    </div>
    <div class="text-bottom">
      <div><p>We recommend you to book your call quickly. We cannot offer this session for free for
        long time. Get in now before we have to start charging again.</p></div>
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
  height: 90vmin;
  left: 55%;
  overflow: hidden;
  position: absolute;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 100%;
}
.animated-title > div {
  left: 20.5%;
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
  font-size: 5rem;
  display: block;
}
.animated-title > div.line{
  border-bottom: 3px solid #3475d1;
  animation: line 1s;
  animation-delay: .5s;
  animation-fill-mode: forwards;
  max-width: 60%;
  top: 0;
  left: 17%;
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
  font-size: 1.5rem;
  left: 12.5%;
  max-width:60%;
}
.animated-title > div.text-bottom div {
  left: 15%;
  animation: showBottomText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}
@media(max-width: 800px){
  .animated-title {
    left: 54%;
  }
  .animated-title > div {
    left: -1%;
  }
  .animated-title > div div span {
    font-size: 3.7rem;
    max-width: 100%
  }
  .animated-title > div.line{
    max-width: 105%;
    top: 0;
    left: -10%;
  }
  .animated-title > div.text-bottom {
    font-size: 1.7rem;
    left: -12%;
    max-width:105%;
  }
}
@media(max-width: 768px){
  .animated-title > div.text-bottom div {
    left: 15%;
  }
  .animated-title {
    left: 56%;
  }
  .animated-title > div {
    left: -1%;
  }
  .animated-title > div div span {
    font-size: 3.5rem;
  }
  .animated-title > div.line{
    max-width: 105%;
    top: 0;
    left: -10%;
  }
  .animated-title > div.text-bottom {
    font-size: 1.3rem;
    left: -12%;
    max-width:100%;
  }
}
@media(max-width: 414px){
  .animated-title > div div span {
    font-size: 1.9rem;
  }
  .animated-title > div {
    left: 0%;
  }
  .animated-title{
    left:53.4%
  }
  .animated-title > div.text-bottom {
    width: 100%;
    font-size: 1rem;
  }
  .animated-title > div.line{
    max-width: 110%;
    top: 0;
    left: -8%;
  }
}
@media(max-width: 375px){
  .animated-title > div div span{
    font-size: 1.7rem;
  }
  .animated-title > div.text-bottom{
    font-size: 0.9rem;
    max-width:200%;
  }
}
</style>


