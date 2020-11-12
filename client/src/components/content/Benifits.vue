<template>
  <main class="container">
    <section class="card">
      <img src="../../assets/shopify.jpg" alt="prime">
      <div>
        <h2>Key Benifits</h2>
        <p>Consectetur delectus et possimus debitis odit Dignissimos adipisci quis tempore</p>
      </div>
    </section>
    <section class="card">
      <img src="../../assets/shopify.jpg" alt="prime">
      <div>
        <h2>Key Benifits</h2>
        <p>Consectetur delectus et possimus debitis odit Dignissimos adipisci quis tempore</p>
      </div>
    </section>
    <section class="card">
      <img src="../../assets/shopify.jpg" alt="prime">
      <div>
        <h2>Key Benifits</h2>
        <p>Consectetur delectus et possimus debitis odit Dignissimos adipisci quis tempore</p>
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
    margin-left: 20%; 
    margin-top: 7%;
  }
  .card h2 {
    margin-top: 20%;
    font-size: 40px;
    margin-bottom: 3%;
  }
  .card {
    display: grid;
    overflow:none ;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5%;
    background: #dddddd;
    z-index: 4;
    height: 40vh;
    color: black;
    margin-bottom: 5%;
  }
  .card img {
    height: 350px;
    width: 500px;
  }
  .card:nth-child(even) img{
    order: 2;
  }
  /* Ipad */
  @media(max-width: 768px){
    .container{
      max-width: 96%;
      margin-left:  2%;
    }
    .card{
      height: 100%;
      margin-bottom: 10%;
    }
    .card img{
      height: 250px;
      width: 400px
    }
  }
</style>
