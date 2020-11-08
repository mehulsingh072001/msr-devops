<template>
  <div>
    <button class="btn">Let's talk</button>
  </div>
</template>

<script>
export default {
  name: "CallToAction"
}
</script>

<style >
  .btn{
    font-size: 22px;
    font-weight: bold;
    padding: 12px 30px;
    overflow: hidden;
    cursor: pointer;
    color: white;
    text-decoration: none;
    text-align: center;
    border-radius: 15px;
    border: none;
    background: #3475d1;
    z-index: 4;
  }
  .btn:hover{
    background: transparent;
    border: 1px solid #3475d1;
    color: #3475d1;
    transition: all 0.4s ease-in;
  }
  @media(max-width: 768px) {
    .action {
      margin-right: 10%;
    }
  }
</style>
