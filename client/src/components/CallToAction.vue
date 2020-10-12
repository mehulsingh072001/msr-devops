<template>
  <div>
    <button class="btn">Call To Action</button>
  </div>
</template>

<script>
export default {
  name: "CallToAction"
}
</script>

<style >
  .btn{
    font-size: 19px;
    font-weight: normal;
    font-family: none;
    padding: 15px 32px;
    padding-top: 17px;
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
  }
  @media(max-width: 768px) {
    .action {
      margin-right: 10%;
    }
  }
</style>
