<template>
  <div class="loader">
    <img src="@/assets/img/p101.png" alt="laoding-logo" />
    <div class="loading">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "Loading",
};
</script>

<style lang="less" scoped>
html,
body {
  height: 100%;
}

.loader {
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0 auto;
  img {
    width: 8rem;
    height: auto;
  }

  .loading {
    margin-top: 2rem;
    i {
      display: inline-block;
      width: 4px;
      height: 2rem;
      border-radius: 2px;
      margin: 0 2px;
      background-color: #333;
    }
    i:nth-child(1) {
      animation: loading 0.5s ease-in 0.1s infinite;
    }
    i:nth-child(2) {
      animation: loading 0.5s ease-in 0.2s infinite;
    }
    i:nth-child(3) {
      animation: loading 0.5s ease-in 0.3s infinite;
    }
    i:nth-child(4) {
      animation: loading 0.5s ease-in 0.4s infinite;
    }
    i:nth-child(5) {
      animation: loading 0.5s ease-in 0.5s infinite;
    }
  }
  @keyframes loading {
    0% {
      transform: scaleY(1);
    }
    50% {
      transform: scaleY(0.4);
    }
    100% {
      transform: scaleY(1);
    }
  }
}
</style>
