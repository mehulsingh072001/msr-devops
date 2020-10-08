<template>
  <div>
    <button class="action">Call To Action</button>
  </div>
</template>

<script>
export default {
  name: "CallToAction"
}
</script>

<style>
  .action {
    font-size: 19px;
    padding: 15px 32px;
    overflow: hidden;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 8px;
    border: none;
    background: #3475d1;
    margin-right: 2%;
  }
  @media(max-width: 768px) {
    .action {
      margin-right: 1%;
    }
  }
</style>
