<template>
  <main class="container">
    <section class="card">
      <img src="../../assets/compilation.png" alt="prime">
      <div>
        <h2>Flexibility</h2>
        <p>Our team of skilled developers at MSR, can adapt to your needs very smoothly. Whether it
        is a WebApp or a Website, we've got you covered.</p>
      </div>
    </section>
    <section class="card">
      <img src="../../assets/shopify.jpg" alt="prime">
      <div>
        <h2>Inhouse Softwares</h2>
        <p>What distincts us from our competition is that we have our own line of softwares which
        will help our customers, eliminating the middlemen.</p>
      </div>
    </section>
    <section class="card">
      <img src="../../assets/hosting.png" alt="prime">
      <div>
        <h2>Inhouse Hosting </h2>
        <p>With us you don't have to wander around in the forest named "The Internet". We've got
        powerful hosting services for your website too!</p>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Benifits'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Roboto&display=swap');
  .container {
  font-family: 'Roboto', sans-serif;
  font-family: 'Montserrat', sans-serif;
    max-width: 1000px;
    overflow: hidden;
    position: relative;
    margin-left: 25%; 
    margin-top: 3%;
  }
  .card h2 {
    width: 400%;
    margin-top: 20%;
    font-size: 40px;
    margin-bottom: 3%;
  }
  p {
    font-size: 1.15rem;
  }
  .card {
    display: grid;
    border-bottom: 1px solid #1a1a1a;
    overflow:none ;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5%;
    background: #dddddd;
    z-index: 4;
    height: 40vh;
    color: black;
    margin-bottom: 5%;
  }
  .card:last-child{
    border: none;
  }
  .card img {
    height: 350px;
    width: 500px;
  }
  .card:nth-child(even) div{
    margin-left: 13%;
  }
  .card:nth-child(even) img{
    order: 2;
  }
  /* Ipad */
  @media(max-width: 768px){
    .container{
      margin-top: 0%;
      max-width: 85%;
      margin-left:  7%;
    }
    .card{
      height: 100%;
      display: block;
      text-align: center;
      width:100%;
      margin-bottom: 10%;
    }
    .card img {
      height: 350px;
      width: 650px;
    }
    .card h2 {
      width: 100%;
      margin-top: 0%;
      font-size: 40px;
    }
    .card p{
      margin-bottom: 2%;
    }
    .card:nth-child(even) img{
      order: 0;
    }
  }
  @media(max-width: 414px){
    .card img {
      height: 250px;
      width: 400px;
      margin-left: -12%;
    }
    .card h2{
      font-size: 30px;
    }
    .card:nth-child(even) div{
      margin-left: 0%;
    }
  }
  @media(max-width: 375px){
    .card img{
      height: 230px;
      width: 380px;
      margin-left: -14%;
    }
  }
</style>
