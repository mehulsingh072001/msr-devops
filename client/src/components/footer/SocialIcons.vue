<template>
  <div class="social">
  <h3 class="message">Contact Us</h3>
  <ul>
    <li><a href="https://www.facebook.com/martydevelopment/" target="_blank">
        <i class="fab fa-facebook" tabindex="0"></i>
      </a></li>
    <li><a href="https://codepen.io/Marty-Development" target="_blank">
        <i class="fab fa-codepen" tabindex="0"></i>
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
        <i class="fab fa-pinterest" tabindex="0" target="_blank"></i>
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
.social {
  position: absolute;
  width: 50%;
  margin-top: 1%;
  margin-left: 11%;
  font-size: 2rem;
  z-index: 3;
}
.message{
  margin-top: 2%;
  color: #eee;
  margin-left: 4%;
}
a{
  text-align: left;
  margin-bottom: 3rem;
  color: #eee;
}
ul{
  display: flex;
  margin-top: 1%;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -45%;
  list-style-type: none;
  font-size: 2rem;
  overflow: hidden;
}
ul li {
  padding: 1rem;
}
.fab {
  font-size: 3rem;
}
/* transition for social icon hover animation */
.fa-facebook,
.fa-codepen,
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
.fa-github:hover,
.fa-github:focus {
  color: #000;
  transform: scale(1.1);
}
.fa-codepen:hover,
.fa-codepen:focus {
  color: #000;
  transform: scale(1.1);
}
.fa-pinterest:hover,
.fa-pinterest:focus {
  color: #b3001b;
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
</style>
