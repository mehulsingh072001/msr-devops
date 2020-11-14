<template>
  <div class=".container grid-2">
  <h3 class="message">Connect with us.</h3>
  <ul>
    <li><a href="https://www.facebook.com/martydevelopment/" target="_blank">
        <i class="fab fa-facebook" tabindex="0"></i>
      </a></li>
    <li><a href="https://codepen.io/Marty-Development" target="_blank">
        <i class="fab fa-twitter" tabindex="0"></i>
      </a></li>
    <li><a href="https://www.instagram.com/marty.development/" target="_blank">
        <i class="fab fa-instagram" tabindex="0"></i>
      </a></li>
    <li><a href="https://github.com/mehulsingh072001" target="_blank">
        <i class="fab fa-github" tabindex="0"></i>
      </a></li>
    <li><a href="#">
        <i class="fab fa-youtube" tabindex="0" target="_blank"></i>
      </a></li>
    <li><a href="#">
        <i class="fab fa-reddit" tabindex="0" target="_blank"></i>
      </a></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'SocialIcons'
}
</script>

<style scoped>
.container {
  position: absolute;
  height: 100%;
  font-size: 2rem;
}
.message{
  margin-top: 1%;
  margin-left: 3%;
  font-size: 1.8rem;
  color: #eee;
}
a{
  text-align: left;
  margin-bottom: 3rem;
  color: #eee;
}
ul{
  display: flex;
  margin-top: 1%;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin-right: 78%;
  overflow: hidden;
}
ul li {
  padding-right: 1rem;
  padding-bottom: 2rem;
}
.fab {
  font-size: 2.2rem;
}
/* transition for social icon hover animation */
.fa-facebook,
.fa-reddit,
.fa-youtube,
.fa-instagram,
.fa-github,
.fa-pinterest {
  transition: 0.4s;
  cursor: pointer;
}
/* social media icons hover color */
.fa-facebook:hover,
.fa-facebook:focus {
  color: #1877f2;
  transform: scale(1.1);
}
.fa-twitter:hover,
.fa-twitter:focus {
  color: #1da1f2;
  transform: scale(1.1);
}
.fa-reddit:hover,
.fa-reddit:focus{
  color: #ff4500;
  transform: scale(1.1);
}

.fa-youtube:hover,
.fa-youtube:focus {
  color: #df2426;
  transform: scale(1.1);
}
.fa-instagram:hover,
.fa-instagram:focus {
  color: #bd22a2;
  transform: scale(1.1);
}
.fa-github:hover,
.fa-github:focus {
  color: #000;
  transform: scale(1.1);
}
@media(max-width: 1440px){
    .social {
      margin-left: 0%;
    }
    .message{
      margin-top: 2%;
      color: #eee;
      margin-left: 13%;
    }
    ul{
      margin-left: -13%;
      font-size: 2rem;
      overflow: hidden;
    }
}

@media(max-width: 1280px){
  .social {
    margin-left: 0%;
  }
  .message{
    margin-top: 2%;
    color: #eee;
    margin-left: 7.8%;
  }
  ul{
    margin-left: -15%;
    font-size: 2rem;
    overflow: hidden;
  }
}
@media(max-width: 800px) {
  .social {
    margin-left: 1%;
    max-width: 30%;
    font-size: 1.6rem;
  }
  ul{
    margin-left: 1%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1%;
  }
  .message{
    margin-top: 7%;
    margin-left: 6%;
  }
  .fab {
    font-size: 1.7rem;
  }
}


@media(max-width: 768px){
  .social {
    margin-left: 1%;
    max-width: 30%;
    font-size: 1.6rem;
  }
  ul{
    margin-left: 1%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1%;
  }
  .message{
    margin-top: 7%;
    margin-left: 6%;
  }
  .fab {
    font-size: 1.7rem;
  }
}
@media(max-width: 414px){
  ul{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: -0%;
  }
  ul li {
    padding: 0.4rem;
  }
  .fab {
    font-size: 2rem;
  }
  .message{
    margin-top: 1%;
    font-size: 2rem;
    margin-right: 5%;
    text-align: center;
  }
}
</style>
