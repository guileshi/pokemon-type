<template>
  <section class="main-section">
    <div class="background-color-blur-red"></div>
    <div class="background-color-blur-white"></div>

    <main-section-main-modal />
  </section>
</template>

<style lang="scss" scoped>
.main-section {
  position: relative;

  height: 100vh;
  background-color: $black;

  .background-color-blur-red {
    position: absolute;
    top: -150px;
    right: -50px;

    background: $base;
    opacity: 0.3;
    filter: blur(100px);

    width: 900px;
    height: 520px;
  }

  .background-color-blur-white {
    position: absolute;
    bottom: -280px;
    left: -140px;

    background: #ebebeb;
    opacity: 0.15;
    filter: blur(100px);

    width: 700px;
    height: 590px;
  }
}
</style>