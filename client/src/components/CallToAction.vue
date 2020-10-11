<template>
  <div>
    <button id="action" class="action">Call To Action</button>
  </div>
</template>

<script>
export default {
  name: "CallToAction"
}
</script>

<style >
  .action {
    font-size: 19px;
    padding: 15px 32px;
    overflow: hidden;
    position: absolute;
    cursor: pointer;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 8px;
    border: none;
    background: #3475d1;
    z-index: 4;
    width: 10vw;
    height: 6vh;
  }
  @media(max-width: 768px) {
    .action {
      margin-right: 1%;
    }
  }
</style>
