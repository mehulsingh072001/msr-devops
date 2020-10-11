<template>
  <main class="container">
    <section class="card">
      <img src="" alt="prime">
      <div>
        <h2>Key Benifits</h2>
        <p>Consectetur delectus et possimus debitis odit Dignissimos adipisci quis tempore</p>
      </div>
    </section>
    <section class="card">
      <img src="" alt="optimus">
      <div>
        <h2>Key Benifits</h2>
        <p>Consectetur delectus et possimus debitis odit Dignissimos adipisci quis tempore</p>
      </div>
    </section>
    <section class="card">
      <img src="" alt="iron-mnan">
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

<style>
  .container {
    max-width: 1100px;
    overflow: none;
    position: static;
    margin-left: 20%; 
  }
  .card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    background: #dddddd;
    z-index: 4;
    height: 40vh;
    color: black;
    margin-bottom: 2rem;
  }
  .card:nth-child(even) img{
    order: 2;
  }
  
</style>
