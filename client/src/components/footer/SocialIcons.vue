<template>
  <div class=".container grid-2">
  <h3 class="message">Connect with us.</h3>
  <ul>
    <li><a href="https://www.facebook.com/mehulsingh.rathore.355" target="_blank">
        <i class="fab fa-facebook" tabindex="0"></i>
      </a></li>
    <li><a href="https://github.com/mehulsingh072001" target="_blank">
        <i class="fab fa-github" tabindex="0"></i>
      </a></li>
    <li><a href="https://twitter.com/mehul_msr_devs" target="_blank">
        <i class="fab fa-twitter" tabindex="0"></i>
      </a></li>
    <li><a href="https://www.linkedin.com/in/mehul-singh-rathore-473b221b5/" target="_blank">
        <i class="fab fa-linkedin" tabindex="0"></i>
      </a></li>
    <li><a href="https://www.youtube.com/channel/UCgTdlX6JftjCXtWq_LUYqjg" target="_blank">
        <i class="fab fa-youtube" tabindex="0"></i>
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
  position: relative;
  height: 10%;
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
  margin-right: 80.5%;
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
.fa-facebook:hover{
  color: #1877f2;
  transform: scale(1.1);
}
.fa-twitter:hover {
  color: #1da1f2;
  transform: scale(1.1);
}

.fa-youtube:hover{
  color: #df2426;
  transform: scale(1.1);
}
.fa-linkedin:hover{
  color: #2867b2;
  transform: scale(1.1);
}
.fa-github:hover{
  color: #6cc644;
  transform: scale(1.1);
}
@media(max-width: 1440px){
    .message{
      margin-top: 2%;
      color: #eee;
      margin-left: 2%;
    }
    ul{
      margin-left: 1.5%;
      font-size: 2rem;
      overflow: hidden;
    }
}


@media(max-width: 800px){
  ul{
    margin-left: 1%;
    width: 1%;
    display: block;
    width: 35%;
  }

  .message{
    margin-top: 3%;
    margin-bottom: 1%;
    margin-left: 2%;
    font-size:1.9rem ;
    width: 50%;
  }

  ul li {
    display: inline-block;
    padding-right: 1rem;
    padding-left: 0.5rem;
  }

  .fab {
    font-size: 1.8rem;
  }
}

@media(max-width: 768px){
  ul{
    margin-left: 1%;
    width: 1%;
    display: block;
    width: 35%;
  }

  .message{
    margin-top: 2%;
    margin-bottom: 1%;
    margin-left: 2%;
    font-size:1.7rem ;
    width: 50%;
  }

  ul li {
    display: inline-block;
    padding-right: 1rem;
    padding-left: 0.5rem;
  }

  .fab {
    font-size: 1.6rem;
  }
}
@media(max-width: 414px){
  .message{
    width: 100%;
    margin-top: 5%;
    font-size: 1.8rem;
    margin-bottom: 2%;
    margin-left: 20%;
  }
  ul{
    margin-top: 1%;
    justify-content: center;
    margin-left: 22%;
    list-style-type: none;
    width:100%;
    overflow: hidden;
  }
  ul li {
    padding-right: 1rem;
    padding-bottom: 0rem;
  }
  .fab {
    text-align: center ;
  }
}
@media(max-width: 375px){
  .message{
    margin-top: 5%;
    margin-left: 20%;
  }
  ul{
    margin-top: 1%;
    justify-content: center;
    margin-left: 5%;
    list-style-type: none;
    width:100%;
    margin-left: 14%;
    overflow: hidden;
  }
  ul li {
    padding-right: 1rem;
    padding-bottom: 0rem;
  }
  .fab {
    text-align: center ;
    font-size:1.4rem ;
  }
}
</style>
