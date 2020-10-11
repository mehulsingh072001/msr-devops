<template>
  <div class="social">
  <p class="message">Contact Us</p>
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
  margin-left: 5%;
  font-size: 2rem;
  z-index: 3;
}

.message{
  margin-top: 2.5rem;
  color: #eee;
  margin-left: 3%;
}
a{
  text-align: left;
  margin-top: 1rem;
  margin-bottom: 3rem;
  margin-left: -40%;
  color: #eee;
}

ul{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-left: -45%;
  list-style-type: none;
  font-size: 2rem;
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

</style>
